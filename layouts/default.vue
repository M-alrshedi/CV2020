<template>
  <div id="app">

    <namvebar />
    <div class="both"></div>
   
      <nuxt />
  
<div class="both"></div>
<br>
      <bottom_footer />




    <!-- <review v-if="tes"  v-on:updeatereivw="updeatereivw($event)" />
      <input type="hidden" v-model="tes">

      <button v-if="!tes" class="btn btn-info"  style="z-index: 1; position: fixed; left: 0px; top: 50%; margin: auto; width: 100px; " @click="runriev">قيم تجربتك  </button> -->

  </div>
</template>

<script>
//import  review  from "@/components/review/review.vue"

import namvebar from "@/components/navbar.vue";
import bottom_footer from "@/components/bottom_footer";
export default {
  scrollToTop: true,
  name: "app",
  components: {
    namvebar,
    bottom_footer
   // review
  },
  data(){
    return{

      tes:false,
      loaded: false,
    }
  },
  
mounted(){
 
},







};
</script>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition-property: opacity;
  transition-timing-function: ease-in-out;
  transition-duration: 250ms;
}

.page-enter,
.page-leave-to {
  opacity: 0;
}
.intro-enter-active, .intro-leave-active {
  transition-duration: 1600ms;
}
.intro-enter-active::before, .intro-leave-active::before, .intro-enter-active::after, .intro-leave-active::after {
  content: "";
  position: fixed;
  top: 0;
  left: 0;
  z-index: 2;
  display: block;
  width: 100%;
  height: 50%;
  transition-property: opacity, transform;
  transition-timing-function: ease-in-out;
}
.intro-enter-active::before, .intro-leave-active::before {
  background-color: #2e2e2e;
}
.intro-enter-active::after, .intro-leave-active::after {
  top: 50%;
  background-color: #2e2e2e;
}
.intro-leave::before, .intro-leave::after {
  transform: scaleX(0);
}
.intro-leave-active::before {
  transition-duration: 800ms;
}
.intro-leave-active::after {
  transition-duration: -8200ms;
  transition-delay: 9000ms;
}
.intro-leave-to::before, .intro-leave-to::after {
  transform: scale(1);
  transform-origin: left;
}
.intro-enter::before, .intro-enter::after {
  transform: scaleX(1);
}
.intro-enter-active::before {
  transition-duration: 800ms;
}
.intro-enter-active::after {
  transition-duration: -8200ms;
  transition-delay: 9000ms;
}
.intro-enter-to::before, .intro-enter-to::after {
  transform: scaleX(0);
  transform-origin: right;
}

.list-enter,
.list-leave-to {
  visibility: hidden;
  height: 0;
  margin: 0;
  padding: 0;
  opacity: 0;
}

.list-enter-active,
.list-leave-active {
  transition: all 0.4s;
}
#app {

  color: #2c3e50;
}

.slide-fade-enter-active {
  transition: all .1s ease;
}
.slide-fade-leave-active {
  transition: all 0.2s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: 0.2s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0.2;
  transition: all 0.1s ease;
}
.both {
  clear: both;
}
</style>
