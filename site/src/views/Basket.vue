<template>
  <div class="basket">
    <div v-for="preorder in basket" :key="preorder.id" class="order">
      <img :src="'http://localhost:1337' + preorder.event.poster.url" alt="">
      <h2>{{preorder.event.name}}€</h2>
      <div class="price">{{preorder.event.price}}€</div>
      <div class="quantity"> X {{preorder.number}}</div>
    </div>
     <p>Total :{{total}}€</p>
     <button @click="paidAll()">Payer</button>
  </div>
</template>

<script>
// @ is an alias to /src
import store from '@/store/'
import Vuex from 'vuex'
global.v = Vuex

export default {
  store: store,
  data(){
    return {
      total: null
    }
  },
  mounted(){
    (!this.user)? this.$router.push({ name: "Connect"}):null;
    this.load_events()
    this.basket.forEach(element => {
      this.total += element.event.price * element.number
    });
  },
  computed:{
    ...Vuex.mapGetters(['user', 'events', 'basket'])
  },
  methods:{
    ...Vuex.mapActions([
      'load_events',
      'paid'
    ]),
    paidAll(){
      let infos = []
      this.basket.forEach(element => {
        infos.push({
          number: element.number,
          eventID: element.event.id,
          userID: this.user.user.id
        })
      });
      this.paid(infos)
    }
  }
}
</script>

<style lang="scss">
.basket {
  max-width: 800px;
  margin: auto;
  .order {
    display: flex;
    position: relative;
    img{
      width: 100px;
      margin: 2em 0;
    }
    h2{
      margin: 2em;
    }
    .quantity{
      position: absolute;
      top: 3em;
      right: 3em;
    }
    .price {
      position: absolute;
      bottom: 3em;
      right: 3em;
    }
  }
}
</style>
