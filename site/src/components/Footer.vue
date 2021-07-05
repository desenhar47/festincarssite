<template>
  <div class="FooterComponent">
    <i class="fab fa-facebook-square"></i>
    <i class="fab fa-instagram"></i>
    <p>Fest’in Cars © 2021 - <router-link :to="{ name: 'LegalNotice'}">Mentions légales</router-link> - <router-link :to="{ name: 'Cgv'}">CGV</router-link></p>
  </div>
</template>

<script>
export default {
  name: 'FooterComponent',
}
</script>

<style scoped lang="scss">
.FooterComponent{
  display: flex;
  flex-wrap: wrap;
  background-color: #FFA051;
  padding: 50px;
  i{
    margin: 0 10px;
    font-size: 46px;
    color: white;
  }
  p{
    width: 100%;
    text-align: center;
  }
}
</style>
