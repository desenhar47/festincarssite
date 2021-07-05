<template>
  <div class="navbar">
    <div class="phone">
      <i class="fas fa-bars" @click="menu()"></i>
      <nav v-if="menuState" class="mobile">
        <div @click="menu()">
          <router-link :to="{ name: 'Home'}">Accueil</router-link>
        </div>
        <div @click="menu()">
          <router-link :to="{ name: 'About'}">Fest'in Cars</router-link>
        </div>
        <div @click="menu()">
          <router-link :to="{ name: 'Shop'}">Billetterie</router-link>
        </div>
        <div @click="menu()">
          <router-link :to="{ name: 'Gallery'}">Galerie</router-link>
        </div>
        <div @click="menu()">
          <router-link :to="{ name: 'Contact'}">Contact</router-link>
        </div>
        <i class="fas fa-times close" @click="menu()"></i>
      </nav>
    </div>
    <router-link :to="{ name: 'Home'}">
      <img src="../assets/logo.png" alt="logo festincar">
    </router-link>
    <nav>
      <router-link :to="{ name: 'Home'}">Accueil</router-link>
      <router-link :to="{ name: 'About'}">Fest'in Cars</router-link>
      <router-link :to="{ name: 'Shop'}">Billetterie</router-link>
      <router-link :to="{ name: 'Gallery'}">Galerie</router-link>
      <router-link :to="{ name: 'Contact'}">Contact</router-link>
    </nav>
    <div>
      <router-link :to="{ name: 'Basket'}"><i class="fas fa-shopping-cart" id="un"></i></router-link>
      <router-link :to="{ name: 'User'}"><i class="fas fa-user"></i></router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Navbar',
  data(){
    return {
      menuState: false
    }
  },
  methods:{
    menu(){
      if(this.menuState){
        this.menuState = false;
      }
      else{
        this.menuState = true;
      }
    }
  }
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content:space-between;
  align-items: center;
  img {
    height: 76px;
  }
  i{
    font-size: 25px;
    padding: 0 0.3em;
    color: black;
    &:hover{
      cursor: pointer;
    }
  }
  nav {
    a {
      padding: 0 10px;
      margin: 0 20px;
      font-weight: 400;
      font-size: 25px;
      color: #2c3e50;
      text-decoration: none;

      &.router-link-exact-active {
        border-bottom: 7px solid #FFA051;
      }
    }
    &.mobile{
      display: none;
    }
  }
  .phone {
      i{
        display: none;
      }
    }
  @media screen and (max-width: 1100px) {
    nav{
      &.mobile{
        display: flex;
        flex-direction: column;
        height: 100%;
        width: 100%;
        position: fixed;
        z-index: 1;
        top: 0;
        background-color: rgba(0, 48, 21, 0.9);
        padding-top: 80px;
        div{
          padding: 10px 0;
          width: min-content;
        }
        a{
          color: white;
          white-space: nowrap;
        }
        i.close{
          color: white;
          position: absolute;
          top: 1em;
          right: 1em;
        }
      }
      &:not(.mobile){
        display: none;
      }
    }
    .phone {
      i{
        display: block;
      }
    }
  }
}
</style>
