<template>
  <div>
    <Banner :name="'Galerie'"/>
    <div v-if="events" class="gallery">
      <article v-for="event in events" :key="event.date">
        <div class="title">
          <h2>{{event.name}}</h2>
        </div>
        <div v-for="image in event.images" :key="image.id">
          <img :src="'http://localhost:1337'+ image.url" @click="test(event.id,image.id)">
        </div>
      </article>
      <div class="modal" v-if="modal.focus">
        <i class="fas fa-times close" @click="modal.focus = null"></i>
        <div class="focus">
          <img :src="'http://localhost:1337' + modal.focus" alt="">
        </div>
        <div class="miniature">
          <img v-for="image in modal.images" :key="image.id" :src="'http://localhost:1337'+ image.url" @click="modal.focus = image.url">
        </div>
      </div>
    </div>
  </div>
</template>

<script>
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
      modal: {
        focus: null,
        images: []
      }
    }
  },
  mounted(){
    this.load_events()
  },
  computed:{
    ...Vuex.mapGetters(['events'])
  },
  methods:{
    ...Vuex.mapActions([
      'load_events'
    ]),
    test(eventID,imageID){
      this.events.forEach(event => {
        if(event.id == eventID){
          this.modal.images = event.images
          event.images.forEach(image =>{
            if(imageID == image.id){
              this.modal.focus = image.url
              console.log(this.modal)
            }
          })
        }
      });
    }
  }
}
</script>

<style lang="scss">
.gallery {
  article {
    display: flex;
    width: 100%;
    overflow: auto;
    .title {
      display: flex;
      justify-content: center;
      align-items: center;
    }
    img,.title{
      min-width: 200px;
      height: 200px;
    }
  }
  .modal{
    position: fixed;
    top: 0;
    background-color: rgba(0, 48, 21, 0.85);
    width: 100%;
    height: 100%;
    .focus{
      text-align: center;
      img {
        max-height: 90vh;
        max-width: 100%;
      }
    }
    .miniature {
      height: 10vh;
      position: absolute;
      width: 100%;
      bottom: 0;
      display: flex;
      overflow: auto;
      img {
        width: 10vh;
        height: 10vh;
      }
    }
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
  }
}
</style>