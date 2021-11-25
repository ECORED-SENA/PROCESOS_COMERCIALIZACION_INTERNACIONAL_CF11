<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.text-white.fas.fa-info
      h1 Introducción   

    p Bienvenidos al contenido “Planeación y presentación de la propuesta comercial”, durante su lectura se ofrecen diversas temáticas con aspectos básicos y fundamentales que se deben tener en cuenta al momento de la comercialización y caracterización de los clientes. Ahora, se conocerá un poco más de este componente formativo por medio del siguiente video:

    p.mb-5 Pasemos a conocer un poco más de este componente formativo por medio del siguiente video:

    
    figure.mb-5
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/3d3j1W_2IcE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
      figcaption Video: Leyenda del video  

 
    

</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
