<template>
  <div class="logins">
    <div></div>
{{id}}
<!-- احضار صفحات التسجيل وتسجيل ادلخول-->
    <loginh v-if="activelog" />
    <singuph v-if="activesing" />


<!--  ثيم الصحفة-->

  </div>
</template>

<script>
import loginh from "@/components/login_singup/loginh.vue";  // استعدعاء صفحة تسجيل الدخول
import singuph from "@/components/login_singup/singuph.vue";  // استعدغاء صفقحة تسيجل

export default {
  head:{


    title: 'تسجيل الدخول',

  //omited

  meta: [
      { name: 'application-name', content: 'سيرتك في بيتك ومجانا' },
      { name: 'keywords', content: 'سيرة ذاتية , سيرة ذاتية حلوه , سيرة ذاتية عادية , سيرة ذاتية كلاسيكية ' },
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
      { property: 'og:title', content: 'السيره الذاتية - جاهزة لك' },
      // with shorthand
      { property: 'og:title', content: 'السيره الذاتية - جاهزة لك' },
      { property: 'og:description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      { property: 'og:url', content: 'http://siratk.me' },
      {property: 'og:image', content: 'https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-cv-icon-by-vexels.png' },
      { property: 'og:type', content: 'website' },
      // ...
    ],
  },
  name: "logins",
  props: ["id"],  // اخضار البراميتر للتحديث

  components: {
    loginh,
    singuph
  },



  data() {


    return {
      activelog: true,//للاخفاء والاظهار الصفحات
      activesing: false, //للاخفاء والاظهار الصفحات
    };
  },

// في حال تغير البرامتر تتغير المحتوى
  mounted() {
    if (this.id == "singup") {
      this.activesing = true;
      this.activelog = false;
    } else if (this.id == "login") {
      this.activesing = false;
      this.activelog = true;
    }
  },






};


</script>
<style scoped>
.logins {
  height: calc(100vh - 90px);
  width: 100%;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 100%);
  overflow: hidden;
}
</style>
