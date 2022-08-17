<template>
    <div style="color:#090A0F;" class="profile">

    <div class="headprofile">UserProfile </div>

    <div style="text-align:center;" class="conte">

        <b-row>

            <b-col  sm="6" style="" ><img style="vertical-align: middle; border-style: none; border-radius: 100px; height: 200px; width: 200px;" width="100" height="100" src="~/assets/imger/person.jpg" alt=""></b-col>
            <b-col class="profcontentdata" sm="6" style="text-align: left; margin: auto;">

                <b-row>
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
                    <b-col  cols="1"> <BIconShieldLockFill ></BIconShieldLockFill> </b-col>
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
import { BIconShieldLockFill ,BIconTriangleFill,BIconPersonFill,BIconCalendarFill  } from 'bootstrap-vue'
export default {
    name:"profile",
    components:{
 BIconShieldLockFill ,BIconTriangleFill,BIconPersonFill,BIconCalendarFill
    },

data(){
   return{
       par:this.$route.params.profile,
     datauser:{
                 username:this.$route.params.profile,
                email:"-",
             iduser:"-",
              date:"-"
               }
   }

 },


  created() {
    const cookieRes = this.$cookies.get('_datauser')
       if (cookieRes) {
      try {
    this.datauser.username= this.$store.getters['statelogin/getstateuser'].username
    this.datauser.email=this.$store.getters['statelogin/getstateuser'].email
    this.datauser.iduser=this.$store.getters['statelogin/getstateuser'].iduser
    this.datauser.date=this.$store.getters['statelogin/getstateuser'].date

      } catch(e) {
        console.log(e)
      }
    }else{
    
    }
    
  },


  head() {

return{
title:this.$route.params.profile,




  //omited

  //omited

  meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'application-name', content:this.$route.params.profile + '- الملف الشخصي' },
      { name: 'keywords', content: 'نماذج سيرة ذاتية ,  المقابلات الشخصية , سيرة ذاتية عربي , سيرة ذاتية انجليزي' },
      {  hid:'profilespage',  name: 'description', content: this.$route.params.profile+ '- الملف الشخصي' }, // id to replace intead of create element
      // ...
      // Twitter
      { name: 'twitter:title', content:this.$route.params.profile + '- الملف الشخصي' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@suplex_math' },
      { name: 'twitter:description', content: 'موقع سيرتك' },
      { name: 'twitter:image', content: '~/assets/imger/person.jpg' },
      // with shorthand
      { n: 'twitter:description', c: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه'},
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: 'السيره الذاتية - جاهزة لك' },
      { itemprop: 'description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      // ...
      // Facebook / Open Graph
      { property: 'fb:app_id', content:  this.$route.params.profile+ 'الملف الشخصي' },
      { property: 'og:title', content:this.$route.params.profile + '- الملف الشخصي' },
      // with shorthand
      { property: 'og:title', content:this.$route.params.profile + '- الملف الشخصي' },
      { property: 'og:description', content:  this.$route.params.profile + '- الملف الشخصي' },
      { property: 'og:url', content: 'http://siratk.me' },
      {property: 'og:image', content: '~/assets/imger/person.jpg' },
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
