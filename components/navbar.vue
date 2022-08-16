<template>
  <nav id="nav">
    <ul id="navs">
      <li><a href="#">افضل التصاميم لدينا ❤</a></li>
      <li><a href="#">بشكل مجاني لك ❤</a></li>
      <li class="right"><a href="#"> لعربية | English</a></li>
    </ul>
            <h1 style="display:none;">{{this.$store.state.for_login + "//" + this.$store.getters.dataes.element}}</h1>

    <ul id="navb">
      <li style="position: absolute;
    right: 51%;"  class=" ">


    <!---- <Notification /> -->

      </li>
      <li>
        <a href="">
          <nuxt-link to="/pagethames"> ثيمات السيرة الذاتية</nuxt-link>
        </a>
      </li>
      <li>
        <a href="">
          <nuxt-link exact to="/"> الرئسية</nuxt-link>
        </a>
      </li>


      <li v-if="active_1" class="left lineleft">
        <a href="">

          <nuxt-link exact to="/data/login">تسجيل الدخول | للتسجيل</nuxt-link>
        </a>
      </li>



        <li v-if="active_2" class="left lineleft">




            <b-dropdown  dropdown-toggle="red"  style="margin-top: -6px; "  variant="white"  >
    <template v-slot:button-content>
      <span  style="color: #deba92;font-weight: bold; font-size: 16px;" > ..  {{usernamed}} .. مرحبا بك  </span>
    </template>
      <nuxt-link tag="b-dropdown-item" style="color:#212529; text-align:center; " exact :to="`/profiles/${usernamed}`">><label style="color:#212529;  font-weight: bold;">الملف الشخصي</label></nuxt-link>
  <nuxt-link tag="b-dropdown-item" style="color:#212529; text-align:center; " exact to="/datacv"><label style="color:#212529;  font-weight: bold;">بيانات سيرتك</label></nuxt-link>
    <b-dropdown-item   style="text-align:center; "  @click="logout" href="/"> <label style="color:#212529; text-align:center;   font-weight: bold;">تسجيل الخروج</label> </b-dropdown-item>
  </b-dropdown>





      </li>

    </ul>
  </nav>
</template>

<script>
  //import  loadingcom from "@/components/lazycom/loadingcom.vue"
//  import  errorcom  from "@/components/lazycom/errorcom.vue"
//const Notification = () => ({
//    component: import(/* webpackChunkName: "notification" */ "@/components/notification/notification.vue"),
 //   loading : loadingcom,
 //   error : errorcom,
    timeout:90000
//  });

export default {
  name: "namvebar",
  components:{
   // Notification
  },
  data(){return{
active_1:true,
active_2:false,
usernamed:'',







  }},

  head: {

     style: [
      { type: 'text/css', innerHTML: '.my-classz > ul { left:-110px !important;  height: 340px !important;overflow-y: scroll !important; }', undo: true },
      // ...
    ],
    meta: [
           { name: 'google-site-verification', content: 'xwAmzlqPiamAvvhDnyE8wJ9GYDNt16tz4Eg2s'}
        ],
   },

  mounted(){



      if(localStorage.getItem("_datauser") !== null){
         this.usernamed =  JSON.parse(localStorage.getItem("_datauser")).username;;

      this.active_1 =  false;
      this.active_2 =  true;



      }else{


      this.active_1 =   true;
      this.active_2 = !true;
      this.$store.commit("for_login",{element:false});

      }

  },
   updated(){

    if (this.$store.getters.dataes.element === true){
      this.active_1 = ! true;
      this.active_2 =  true;
      this.usernamed=JSON.parse(localStorage.getItem("_datauser")).username;
    }

  },

  methods:{

    logout(){
       this.active_1 =   true;
      this.active_2 = !true;
      localStorage.removeItem("_datauser");
      /// this.$store.commit("for_login",{element:false});
      // this.$router.push({ name: "Home" }); // -> /user

    }
  }
};

</script>
<style scoped>
* {
  margin: 0;
  padding: 0;
}

.dropdown-toggle {
  color: red;
}
#nav {
  font-family: "Cairo", sans-serif;
  font-size: 16px;
  -webkit-width: 100vw;

  -moz-width: 100vw;
  -ms-width: 100vw;
  -o-width: 100vw;
  width: 100%;
  overflow: visible;
  height: 90px;
  display: block;
  background: radial-gradient(ellipse at bottom, #1b2735 0%, #090a0f 30%);
  color: #deba92;
  font-weight: bold;
}
#nav > #navb > li {
  display: inline-block;

  height: 20px;
  margin: 20px;
}
#navs {
  height: 30px;
  font-size: 14px;
  margin: 0px 0px 0px 8%;
  width: 90%;
}
#nav > #navs > li {
  display: inline-block;
  height: 10px;
  margin: 5px;
}
#nav > #navb {
  width: 90%;
  height: 60px;
  text-align: right;
}
.right {
  float: right;
}

.lineleft {
  height: 20px;
  margin: 20px;
  text-align: center;
}
.left {
  float: left;
}
a {
  font-weight: bold;
  color: #deba92;
  text-decoration: none;
}
.nuxt-link-exact-active {
  color: #e4e4e4;
}
</style>
