<template>
  <div class="about">
    <Banner :name="'Fest\'in Cars'"/>
    <div class="container">
       <h3>Que la fête commence !</h3>
       <div class="apropos">
         <img src="../assets/exemplegallery.png" alt="">
          <p> 
            Vous avez sûrement entendu parler d’un concept issu des années 1990. « Le cinéma en plein air ». Qu’en est-t-il en 2021 ?
            Cela fait maintenant des mois et des mois qu’un virus frappe la population conduisant ainsi à l’interdiction de rassemblements, la fermeture des salles de concert, de théâtre et de spectacle.
            Tout ça est désormais fini ? Et bien non ! Fest’in cars vous ouvre la voie d’une nouvelle aire.
            Venez participer, en toute sécurité à de merveilleux concerts depuis votre voiture et ainsi profiter des joies de la musique en famille ou entre amis.
          </p>
       </div>
       <div>
         1 place de concert acheté = 1 arbre planté !
       </div>
       <div>
        <img src="../assets/exemplegallery.png" alt="">
       </div>
       <div class="apropos">
          <p>
            Tout comme nous, vous êtes passionnés de musique et de développement durable ? Vous souhaitez assister un concert écologique en live en pleine pandémie ? 
            Fest’in cars est pour ! En 3 clics, réservez vos places, vivez une expérience unique à bord de votre voiture et participez à la reforestation de la planète !
          </p>
          <img src="../assets/exemplegallery.png" alt="">
       </div>
        <div>
          <p>
            Depuis maintenant 2 ans, Fest’in cars s’efforce d’offrir aux amoureux de la planète des concerts 100% écologiques : 
            Notre concept :  concert énergie verte peu énergivore, 1 place achetée = 1 arbre planté, Emballages recyclés
            Ensemble passons à l’action !
          </p>
       </div>
      </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Banner from '@/components/Banner.vue'

export default {
  components: {
    Banner
  }
}
</script>

<style scoped lang="scss">
.container {
  margin:5%;
.apropos {
  display: flex;
  align-items: center;
}
}
</style>