<template>
    <div style="color:#090A0F;" class="profile">

    <div class="headprofile">UserProfile</div>

    <div style="text-align:center;" class="conte">

        <b-row>

            <b-col  sm="6" style="" ><img style="vertical-align: middle; border-style: none; border-radius: 100px; height: 200px; width: 200px;" width="100" height="100" src="https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg" alt=""></b-col>
            <b-col class="profcontentdata" sm="6" style="text-align: left; margin: auto;">

                <b-row s>
                    <b-col  cols="1">  <BIconPersonFill /> </b-col>
                    <b-col   cols="10" > username: {{datauser.username}} </b-col>

                    </b-row>

    <hr style="width:100%;">
                     <b-row>

                    <b-col  cols="1"><BIconTriangleFill /></b-col>
                    <b-col  cols="10">email : {{datauser.email}} </b-col>

                    </b-row>
<hr style="width:100%;">


                     <b-row>
                    <b-col  cols="1"><BIconShieldLockFill /></b-col>
                    <b-col  cols="10">iduser :  {{datauser.iduser}}  </b-col>

                    </b-row>

<hr style="width:100%;">
                    <b-row>
                    <b-col  cols="1"><BIconCalendarFill /></b-col>
                    <b-col  cols="10">date : {{datauser.date}} </b-col>

                    </b-row>







            </b-col>



            </b-row>




    </div>









    </div>
</template>
<script>
import { BIconPersonFill , BIconShieldLockFill,BIconTriangleFill,BIconCalendarFill } from 'bootstrap-vue'

export default {
    name:"profile",

// data(){
//   return{
//     datauser:""
//   }

// },
    components: {

    BIconPersonFill,BIconShieldLockFill,BIconTriangleFill,BIconCalendarFill

  },
asyncData(context,callback) {
     if (process.server){}else{

console.log(context)

            callback(null,{
               datauser:{
                 username:JSON.parse(localStorage.getItem("_datauser")).username,
                email:JSON.parse(localStorage.getItem("_datauser")).email,
             iduser:JSON.parse(localStorage.getItem("_datauser")).iduser,
              date:JSON.parse(localStorage.getItem("_datauser")).date
               }
})




    }

},
  created() {


  },


  head() {

return{
title:this.datauser.username,



     style: [
      { type: 'text/css', inner: '.my-classz > ul { left:-110px !important;  height: 340px !important;overflow-y: scroll !important; }', undo: true },
      // ...
    ],

  //omited

  //omited

  meta: [
      { name: 'application-name', content: 'سيرتك في بيتك ومجانا' },
      { name: 'keywords', content: 'نماذج سيرة ذاتية ,  المقابلات الشخصية , سيرة ذاتية عربي , سيرة ذاتية انجليزي' },
      { name: 'description', content: 'الملف الشخصي', id: 'desc' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content: 'الملف الشخصي' },
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
      { property: 'og:title', content: 'الملف الشخصي' },
      // with shorthand
      { property: 'og:title', content: 'الملف الشخصي' },
      { property: 'og:description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      { property: 'og:url', content: 'http://siratk.me' },
      {property: 'og:image', content: 'https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-cv-icon-by-vexels.png' },
      { property: 'og:type', content: 'website' },
      // ...
    ],
}

   },

}

</script>

<style  scoped>
.profile{
    color: red;
    width: 80%;
    margin: 80px auto;
    text-align: -webkit-center;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.headprofile{
    padding: 20px;
    border-color: #ddd;
    background-color: #F5F5F5;
}
.conte{
    text-align: center;
    width: 100%;
    position: relative;
    margin: 0 auto;
    padding: 30px;
}
</style>
