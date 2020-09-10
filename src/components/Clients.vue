<template>
    <div class='clients'>
         <section id="clients" class="wow fadeInUp">
    <div class="container">

      <header class="section-header">
        <h3>Our Clients</h3>
      </header>

      <div class="carousel clients-carousel" data-flickity='{ "groupCells": 6, "autoPlay": true, "prevNextButtons": false, "pageDots": true, "wrapAround": true }'>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-1.png" alt="">
        </div>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-2.png" alt="">
        </div>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-3.png" alt="">
        </div>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-4.png" alt="">
        </div>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-5.png" alt="">
        </div>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-6.png" alt="">
        </div>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-7.png" alt="">
        </div>
        <div class="carousel-cell">
          <img src="assets/img/clients/client-8.png" alt="">
        </div>
      </div>
      
      
      <!--div class="owl-carousel clients-carousel"-->
      <!---div class="owl-carousel owl-theme clients-carousel">
        <img src="assets/img/clients/client-1.png" alt="">
        <img src="assets/img/clients/client-2.png" alt="">
        <img src="assets/img/clients/client-3.png" alt="">
        <img src="assets/img/clients/client-4.png" alt="">
        <img src="assets/img/clients/client-5.png" alt="">
        <img src="assets/img/clients/client-6.png" alt="">
        <img src="assets/img/clients/client-7.png" alt="">
        <img src="assets/img/clients/client-8.png" alt="">
      </div-->

    </div>
  </section><!-- #clients -->
    </div>
</template>

<script>


export default {
  
    name: 'Clients',

    

}
</script>

<style scoped>
/* .carousel {
  background: #EEE;
} */

.carousel-cell {
  width: 20%;
  height: 100px;
  margin-right: 10px;
  /* background: #8C8; */
  border-radius: 5px;
  counter-increment: carousel-cell;
}

/* .carousel-cell.is-selected {
  background: #ED2;
} */

/* cell number */
.carousel-cell:before {
  display: block;
  text-align: center;
  /* content: counter(carousel-cell); */
  line-height: 200px;
  font-size: 80px;
  color: white;
}

.clients .flickity-page-dots .dot {

      background: rgb(24, 210, 110) !important;

}
</style>