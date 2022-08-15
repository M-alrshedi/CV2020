<template>
  <div>
  <div class="homep">
   <div class="night">
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>
  <div class="shooting_star"></div>

  </div>
    <HelloWorld  />

    </div>
    <show_rate :reviews="tes" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/pagehome/HelloWorld.vue";
import show_rate from "@/components/pagehome/show_rate.vue";

export default {

  async asyncData({ $axios }) {
  const ip = await $axios.$get('https://mfa10.com/api/testref/mody.php')
 return{
   tes:ip.datareivew
 }

},

data() {
  return {

  }
},

   head: {

    title: ' السيره الذاتية',
    separator: '-',
    complement: 'جاهزة لك',

  //omited

  meta: [
           { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content: 'سيرتك في بيتك ومجانا' },
      { name: 'keywords', content: 'السيرة الذاتية ,  cv  , سي في , سيرة ذاتية ,سيرة ذاتية جاهزة ,ABS9797' },
      { name: 'description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه', id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: 'سيرتك في بيتك ومجانا' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@suplex_math' },
      { name: 'twitter:description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      { name: 'twitter:image', content: 'https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-cv-icon-by-vexels.png' },
      // with shorthand
      { n: 'twitter:description', c: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه'},
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: 'السيره الذاتية - جاهزة لك' },
      { itemprop: 'description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      // ...
      // Facebook / Open Graph
      { property: 'fb:app_id', content: '123456789' },
      { property: 'og:title', content: 'SIRATKME' },
      // with shorthand
      { property: 'og:title', content: 'السيره الذاتية - جاهزة لك' },
      { property: 'og:description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      { property: 'og:url', content: 'http://siratk.me' },
      {property: 'og:image', content: 'https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-cv-icon-by-vexels.png' },
      { property: 'og:type', content: 'website' },
      // ...
    ],

    script:[

      {type: 'text/javascript',src:'/js/all.min.js'},

    ]
   },
  name: "Home",
  components: {
    HelloWorld,
    show_rate
  },

};
</script>
<style scope>
#nav {
  position: relative;
  color: transparent;
}
template {
  overflow: scroll;
}
.homep {
  background: radial-gradient(ellipse at bottom, #0f3460 0%, #090a0f 90%);
  height: calc(100vh - 90px);

  display: -webkit-box;
  display: flex;
  font-family: "Anton", sans-serif;
  -webkit-box-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
}

</style>
