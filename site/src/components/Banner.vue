<template>
  <div class="banner">
    <img src="../assets/baniere_a_propos.png" alt="">
    <h1>{{name}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    name: {
      type: String,
      default: 'primary'
    }
  },
  name: 'Banner',
}
</script>

<style scoped lang="scss">
.banner{
  position: relative;
  img{ 
    width: 100%;
    min-height: 200px;
    object-fit: cover;
  }
  h1{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: #FFA051;
    font-size: 64px;
    white-space: nowrap;
  }
}
</style>
