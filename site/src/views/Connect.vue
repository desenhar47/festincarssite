<template>
  <div class="connect">
    <form @submit.prevent="connexion()">
      <h2>Connexion</h2>
      <label for="email">
        <input type="email" name="email" placeholder=" " v-model="connectEmail">
        <span>E-Mail</span>
      </label>
      <label for="password">
        <input type="password" name="password" placeholder=" " v-model="connectPassword">
        <span>Mot de passe</span>
      </label>
      <input type="submit" value="Connexion">
    </form>
    <form @submit.prevent="registered()">
      <h2>Inscription</h2>
      <label for="email">
        <input type="email" name="email" placeholder=" " v-model="registerEmail">
        <span>E-Mail</span>
      </label>
      <label for="password">
        <input type="password" name="password" placeholder=" " v-model="registerPassword">
        <span>Mot de passe</span>
      </label>
      <label for="confirmPassword">
        <input type="password" name="confirmPassword" placeholder=" " v-model="registerPasswordConfirm">
        <span>Confirmer le mot de passe</span>
      </label>
      <input type="submit" value="Inscription">
    </form>
  </div>
</template>

<script>
import store from '@/store/'
import Vuex from 'vuex'
global.v = Vuex

export default {
  store: store,
  data(){
    return {
      connectEmail: null,
      connectPassword: null,
      registerEmail: null,
      registerPassword: null,
      registerPasswordConfirm: null,
    }
  },
  computed:{
    ...Vuex.mapGetters(['user']),
  },
  methods:{
    ...Vuex.mapActions([
      'connect',
      'register'
    ]),
    connexion(){
      if(this.connectEmail !== null && this.connectPassword !== null && this.connectEmail !== "" && this.connectPassword !== ""){
        this.connect({
          mail: this.connectEmail,
          password: this.connectPassword
        })
      }
    },
    registered(){
      if(this.registerEmail !== null && this.registerPassword !== null && this.registerPasswordConfirm !== null){
        if(this.registerPassword == this.registerPasswordConfirm){
          let infos = {
            email: this.registerEmail,
            password: this.registerPassword,
            username: Math.random().toString(36).substr(2)+ Math.random().toString(36).substr(2)+ Math.random().toString(36).substr(2) + Math.random().toString(36).substr(2)
          }
          this.register(infos)
        }
      }
    }
  }
}
</script>

<style lang="scss">
.connect{
  margin: 40px 0;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 900px) {
      flex-wrap: wrap;
    }
  form {
    width: 500px;
    margin: 0 20px;
    h2{
      text-align: center;
    }
    label {
      position: relative;
      input {
        width: 100%;
        margin: 10px 0;
        line-height: 2.5em;
        padding: 0;
        border: none;
        background: none;
        outline: none;
        resize: none;
        border-bottom: 2px solid black;
        &:focus {
          & + span {
            transform: translate(0, -110%) scale(1);
          }
        }
        &:not(:placeholder-shown) {
          & + span {
            transform: translate(0, -110%) scale(1);
          }
        }
      }
      span {
        transition: transform 120ms ease-in;
        transform-origin: 0 0;
        position: absolute;
        left: 0;
        top: 0;
        line-height: 1.2;
      }
    }
  }
}
</style>
