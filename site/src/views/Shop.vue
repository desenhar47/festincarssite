<template>
  <div>
    <Banner :name="'Billetterie'"/>
    <div v-if="events" class="shop">
      <article v-for="event in events" :key="event.date">
        <h2>{{event.name}}</h2>
        <img :src="'http://localhost:1337' + event.poster.url" alt="">
        <p>{{event.place}}<span>{{event.date}}</span></p>
        <div>
          <button @click="modal = event">Voir</button>
        </div>
      </article>
      <div class="modal" v-if="modal">
        <div>
          <img :src="'http://localhost:1337' + modal.poster.url" alt="">
        </div>
        <div class="modalContent">
          <h2>{{modal.name}}</h2>
          <p>Date: {{modal.date}}</p>
          <p>Artistes:</p>
          <p v-for=" artist in modal.artists" :key="artist.id">{{artist.name}}</p>
          <p>Lieu: {{modal.place}}</p>
          <p>{{modal.price}}€</p>
          <div v-if="user">
            <input type="number" v-model="quantity">
            <button @click="add()">Ajouter au panier</button>
          </div>
        </div>
        <i class="fas fa-times close" @click="modal = null"></i>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/'
import Vuex from 'vuex'
global.v = Vuex
import Banner from '@/components/Banner.vue'

export default {
  store: store,
  components: {
    Banner
  },
  data(){
    return {
      modal: null,
      quantity: 1
    }
  },
  mounted(){
    this.load_events()
  },
  computed:{
    ...Vuex.mapGetters(['events', 'user'])
  },
  methods:{
    ...Vuex.mapActions([
      'load_events',
      'addBasket'
    ]),
    add(){
      this.addBasket({
        event:this.modal,
        number:this.quantity
        })
    }
  }
}
</script>

<style lang="scss">
.shop {
  display: flex;
  flex-wrap: wrap;
  justify-content:space-evenly;
  article{
    width: 250px;
    h2 {
      text-align: center;
    }
    img{
      width: 100%;
    }
    p{
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
    }
  }
  .modal{
    background-color: rgba(0, 48, 21, 0.92);
    width: 100%;
    height: 100%;
    position: fixed;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    i.close{
      color: white;
      position: absolute;
      top: 1em;
      right: 1em;
      font-size: 25px;
      z-index: 100;
      &:hover{
        cursor: pointer;
      }
    }
    img{
      width: 200px;
      height: auto;
    }
    .modalContent, img{
      margin: 0 50px;
    }
    input {
      background: none;
      border: none;
      outline: none;
      resize: none;
      color: white;
      font-size: 1.5em;
    }
    button{
      background-color: rgba(0, 48, 21, 0);
    }
  }
}
</style>
