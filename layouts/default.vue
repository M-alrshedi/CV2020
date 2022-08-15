<template>
  <div id="app">

    <namvebar />
    <div class="both"></div>
    <transition name="slide-fade" mode="out-in"> <!-- انتبه ل mod with width auto  -->
      <nuxt />
    </transition>
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







};
</script>

<style scoped>
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
  transition: all 1s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  transition-delay: 0.2s;
}
.slide-fade-enter, .slide-fade-leave-to
/* .slide-fade-leave-active below version 2.1.8 */ {
  opacity: 0;
  transition: all 0.1s ease;
}
.both {
  clear: both;
}
</style>
