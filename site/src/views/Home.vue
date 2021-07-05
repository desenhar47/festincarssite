<template>
  <div class="home">
    <div class="slider">
      <img class="mySlides" src="../assets/slider1.png" alt="">
      <img class="mySlides" src="../assets/slider1.png" alt="">
      <button>Offres à la une</button>
    </div>
    <div class="shopSection">
      <h2>Billetterie</h2>

      <div v-for="event in resumeEvents" :key="event.date">
        <figure>
          <img :src="'http://localhost:1337' + event.poster.url">
          <figcaption>
            <h3>{{event.name}}</h3>
            <span>{{event.date}}</span>
            <p>{{event.desc}}</p>
          </figcaption>
        </figure>
      </div>
    </div>
    <router-link :to="{ name: 'Shop'}"><button>Découvrir</button></router-link>
    <div class="engagement">
      <img src="../assets/baniere_engagements.png">
      <router-link :to="{ name: 'About'}"><button>Nos engagements écologiques</button></router-link>
    </div>
    <div class="resumGallery">
      <div class="section">
        <img src="../assets/exemplegallery.png">
      </div>
      <div class="section">
        <div class="section2">
          <div>
            <img src="../assets/exemplegallery.png">
          </div>
          <div>
            <img src="../assets/exemplegallery.png">
          </div>
        </div>
        <div class="section2">
          <img src="../assets/exemplegallery.png">
        </div>
      </div>
      <div class="section">
        <img src="../assets/exemplegallery.png">
      </div>
      <div class="section">
        <div class="section2">
          <img src="../assets/exemplegallery.png">
        </div>
        <div class="section2">
          <img src="../assets/exemplegallery.png">
        </div>
      </div>
    </div>
    <div class="resumContact">
      <img src="../assets/baniere_contact.png" alt="">
      <router-link :to="{ name: 'Contact'}"><button>Nous contacter</button></router-link>
    </div>
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
      myIndex: null
    }
  },
  mounted(){
    this.carousel()
    this.load_events()
  },
  computed:{
    ...Vuex.mapGetters(['events','resumeEvents']),
  },
  methods: {
    ...Vuex.mapActions([
      'load_events'
    ]),
    carousel() {
      var i;
      var x = document.getElementsByClassName('mySlides');
      for (i = 0; i < x.length; i++) {
        x[i].style.display = 'none';  
      }
      this.myIndex++;
      if (this.myIndex > x.length) {this.myIndex = 1}    
      x[this.myIndex-1].style.display = 'block';  
      setTimeout(this.carousel, 2000);
    }
  }
}
</script>

<style lang="scss">
.home{
  text-align: center;
}
.engagement,.resumContact{
    margin: 5em 0;
}
button {
  border-radius: 9px;
  border-color: #FFA051;
  text-transform: uppercase;
  font-family: 'Oswald', sans-serif;
  font-size: 36px;
  color: #FFA051;
  padding: 10px 20px;
  background-color: white;
  @media screen and (max-width: 1100px) {
    font-size: 20px;
  }
}
.slider,.engagement,.resumContact {
  text-align: center;
  position: relative;
  button {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgba(255, 255, 255, 0.4);
  }
}
.engagement {
  button{
    max-width: 80%;
  }
  img{
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }
}
.slider {
  img{
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }
  button {
    top: 75%;
}
}
.mySlides {display:none;}

.shopSection {
  display: flex;
  justify-content: space-evenly;
  flex-wrap: wrap;
  h2{
    width: 100%;
    font-size: 48px;
  }
  figure{
    width: 240px;
    img{
      width: 100%;
    }
    figcaption{
      display: flex;
      align-items: center;
      justify-content: space-between;
      flex-wrap: wrap;
      text-align: left;
    }
  } 
}
.resumGallery{
  display: flex;
  justify-content: center;
  img{
    width: 100%;
    height: 100%;
    object-fit:cover;
  }
  div{
    margin: 10px;
  }
  .section {
    height: 395px;
  }
  .section2{
    height: 50%;
  }
  .section:nth-child(1){
    margin-top: 20px;
    width: 325px;
  }
  .section:nth-child(2){
    margin-top: 0px;
    width: 485px;
    .section2{
      display: flex;
    }
  }
  .section:nth-child(3){
    margin-top: 20px;
    width: 302px;
  }
  .section:nth-child(4){
    padding-bottom: 10px;
    overflow: hidden;
    width: 256px;
  }
  @media screen and (max-width: 1100px) {
    display: block;
   div{
     width: inherit !important;
     height: inherit !important;
     display: block !important;
     margin: 25px 0 !important;
     padding: 0 !important;
   }
   img {
     width: 280px;
     height: 280px;
     object-fit: cover;
   }
  }
}
.resumContact{
  img{
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }
}
</style>
