<template>
  <div class="home" >
    
  <!---Header--->
  <Header />
<!---banner---->
  <Banner />


<main id="main">

  <!--==========================
    Featured Services Section
  ============================-->
  <Featured />

  <!--==========================
    About Us Section
  ============================-->
  <About/>

  <!--==========================
    Services Section
  ============================-->
  <Service />

  <!--==========================
    Call To Action Section
  ============================-->
  <Callaction />

  <!--==========================
    Skills Section
  ============================-->
 <Skills />

  <!--==========================
    Facts Section
  ============================-->
  <Facts />

  <!--==========================
    Portfolio Section
  ============================-->
 <Portfolio />

  <!--==========================
    Clients Section
  ============================-->
 <Clients />

  <!--==========================
    Testimonials Section
  ============================-->
  <Testimonials />

  <!--==========================
    Team Section
  ============================-->
  <Team />

  <!--==========================
    Contact Section
  ============================-->
  <Contact />

</main>

<!--==========================
  Footer
============================-->
<Footers /> 

<Backtotop />


<!--div id="preloader"></div-->
  </div>
</template>

<script>
import Header from '../components/includes/Header';
import Banner from './Banner';
import Featured from './Featured';
import About from './About';
import Service from './Service';
import Callaction from './Callaction';
import Skills from './Skills';
import Facts from './Facts';
import Portfolio from './Portfolio';
import Clients from './Clients';
import Testimonials from './Testimonials';
import Team from './Team';
import Contact from './Contact';
import Footers from '../components/includes/Footers';
import Backtotop from '../components/includes/Backtotop';

export default {
  name: 'Home',
  components: {
    Header,
    Banner,
    Featured,
    About,
    Service,
    Callaction,
    Skills,
    Facts,
    Portfolio,
    Clients,
    Testimonials,
    Team,
    Contact,
    Footers,
    Backtotop,
  },
}


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
