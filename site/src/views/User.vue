<template>
  <div class="user">
    <h2>Mes commandes</h2>
    <div v-for="order in orders" :key="order.id" class="order">
      <img :src="'http://localhost:1337' + order.event.poster.url" alt="">
      <div class="orderContent">
        <h2>Billet: {{order.event.name}} Commande n° {{order.id}}</h2>
        <p>{{order.event.place}}<span>{{order.event.date}}</span></p>
        <div class="number">X {{order.number}}</div>
      </div>
    </div>
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
      orders: []
    }
  },
  mounted(){
    (!this.user)? this.$router.push({ name: "Connect"}):null;
    this.load_events()
    this.user.user.orders.forEach(order => {
      this.events.forEach(event => {
        if(event.id == order.event){
          this.orders.push({
            number: order.number,
            event: event,
            id: order.id
          })
        }
      })
    });
    console.log(this.orders)
  },
  computed:{
    ...Vuex.mapGetters(['user', 'events'])
  },
  methods:{
    ...Vuex.mapActions([
      'load_events'
    ])
  }
}
</script>

<style lang="scss">
.user {
  text-align: center;
  .order{
    display: flex;
    justify-content: space-between;
    width: 80%;
    margin: auto;
    img{
      width: 100px;
      margin: 20px 50px;
    }
    .orderContent{
      flex-grow:1;
      position: relative;
      h2, p {
        text-align: left;
        align-self: flex-end;
      }
      .number {
        position: absolute;
        top: 1.8em;
        right: 0;
      }
      p {
        position: absolute;
        bottom: 30px;
        width: 100%;
        span {
        float: right;
      }
      }
    }
  }
}
</style>
