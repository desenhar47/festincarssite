import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios"
import router from '@/router';

Vue.use(Vuex)
const state = {
  user: null,
  events: [],
  resumeEvents: [],
  basket: []
}
const mutations = {
  LOAD_EVENTS: (state, infos) => {
    state.events = infos
    let test = []
    for (let i = 0; i < 4; i++) {
      test.push(infos[i])
    }
    state.resumeEvents = test
  },
  CONNECTED: (state, infos) => {
    state.user = infos
    router.push({ name: "Shop"})
  },
  ADD_BASKET: (state, infos) => {
    state.basket.push(infos)
    router.push({ name: "Basket"})
  },
  PAID: (state) => {
    state.basket = []
    router.push({ name: "User"})
  },
}
const getters = {
  events: (state) => state.events,
  resumeEvents: (state) => state.resumeEvents,
  user: (state) => state.user,
  basket: (state) => state.basket
}
const actions = {
  load_events: (store) => {
    axios.get("http://localhost:1337/events?_sort=date:ASC")
    .then(reponse => {
      store.commit('LOAD_EVENTS', reponse.data)
    })
    .catch(err =>{
      console.log(err)
    })
  },
  connect: (store, infos) => {
    console.log(infos)
    axios.post('http://localhost:1337/auth/local', {
      identifier: infos.mail,
      password: infos.password,
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data);
      console.log('User token', response.data.jwt);
      store.commit('CONNECTED', response.data)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
  },
  addBasket: (store, infos) => {
    store.commit('ADD_BASKET', infos)
  },
  register: (store, infos) => {
    axios.post('http://localhost:1337/auth/local/register', {
      username: infos.username,
      email: infos.email,
      password: infos.password,
    })
    .then(response => {
      // Handle success.
      console.log('Well done!');
      console.log('User profile', response.data.user);
      console.log('User token', response.data.jwt);
      store.commit('CONNECTED', response.data)
    })
    .catch(error => {
      // Handle error.
      console.log('An error occurred:', error.response);
    });
  },
  paid: (store, infos) => {
    infos.forEach(element => {
      axios.post('http://localhost:1337/orders', {
      number: element.number,
      event: element.eventID,
      user: element.userID
      })
      .then(response => {
        // Handle success.
        store.commit('PAID')
      })
      .catch(error => {
        // Handle error.
        console.log('An error occurred:', error.response);
      });
    });
  },
}

export default new Vuex.Store({
  state: state,
  mutations: mutations,
  getters: getters,
  actions: actions
})
