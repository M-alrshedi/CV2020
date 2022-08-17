<template>
  <div class="cont">
    <b-form
      style="  width: 95%;
    margin: 75px auto; text-align:center; "
      @submit="onSubmit"
    >

      <b-overlay :show="showe" no-wrap>

  </b-overlay>
      <h2>صفحة تسجيل الدخول</h2>



      <b-row>
        <b-col sm="6">
          <b-form-group
            id="input-group-2"
            label="  اسم المستخدم : "
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.username"
              placeholder="username"
            ></b-form-input>
          </b-form-group>
        </b-col>

        <b-col  sm="6">
          <b-form-group
            id="input-group-2"
            label=" كلمة المرور :"
            label-for="input-2"
          >
            <b-form-input
              id="input-2"
              v-model="form.password"
              type="password"
              placeholder="Enter password"
            ></b-form-input>
          </b-form-group>
        </b-col>
      </b-row>






      <hr />

      <b-row>
        <b-col   class="btnmob"  style="text-align:center; text-align:left; margin-top:15px;" cols="6">
          <b-button type="submit" variant="primary">تسجيل الدخول</b-button>


        </b-col>
          <b-col class="btnmob"  style="text-align:center; text-align:right; margin-top:15px;" cols="6">

          <b-button type="button" @click="GotTosingup" variant="danger"
            >للتسجيل</b-button
          >
        </b-col>
      </b-row>




    </b-form>


  </div>
</template>
<script>
import axios from "axios";
import Qs  from  "qs/dist/qs.js";
export default {
  name: "loginh",
    props: ["id"],


  data() {
    return {
      showe:false,
      form: {
        username: "",
        password: "",
      },
      show: true,
    };
  },

mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
     if(localStorage.getItem("_datauser") != null){

            this.$router.push({name:"Datacv" , query:{SUPSHOWS_THA1100:"GetStarted_1"}})


    }
     if (this.$route.query.SUPSHOWS_THA1100){
      alert("سجل دخول واذا ماعندك حساب سوي تسجيل")    }
  },





  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form));
      this.showe = true;//لودكن شغال
  const thisa =this;
      axios.post("/api/login-logout/loginuser.php",Qs.stringify({login_user: this.form.username ,login_pass:this.form.password}))
      .then(res => {

        if (res.data.msg == "❤ تم تسجيل دخولك بنجاح ❤"){
thisa.$store.commit("for_login",{element:true});

       localStorage.setItem ("_datauser", JSON.stringify(res.data.users_data));
        this.$cookies.set('_datauser',  JSON.stringify(res.data.users_data), {
    path: '/',
    maxAge: 60*30
  })
      this.$bvToast.toast(res.data.msg , {
          title: 'system',
          variant: res.data.msg_error,
          solid: true
        })

setTimeout(function(){
          if(thisa.$route.query.SUPSHOWS_THA1100){

      thisa.$router.push({name:"Datacv" , query:{SUPSHOWS_THA1100:"GetStarted_1"}})

    }else{
      thisa.$router.push("/");
    }


},4000)

        }else{
          localStorage.removeItem("_datauser");
          this.$bvToast.toast(res.data.msg , {
          title: 'system',
          variant: res.data.msg_error,
          solid: true
        })
              this.showe = false;//لودكن شغال


        }

      })
      .catch(err => {
        console.error(err);
      })
    },


    GotTosingup: function() {
        if(this.$route.query.SUPSHOWS_THA1100 == "GetStarted"){

      this.$router.push({path:"singup" ,params: { id: "singup" }, query:{SUPSHOWS_THA1100:"GetStarted"}})

    }
    else{
  this.$router.push({ path: "singup" }); // -> /user

  }

    },

  },


};

</script>
<style scoped>
.cont {
  width: 50%;
  margin: auto;
  height: 420px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  border-radius: 20px;
  background: white;
  color: black;
  direction: rtl;
}
@media only screen and (max-width: 600px) {
  .cont {
    text-align: center;
  width: 98%;
  margin: auto;
  height: 420px;
  display: block;
  position: absolute;
  top: 0;
  right: 0;
  left: 0;
  bottom: 0;
  z-index: 999;
  border-radius: 20px;
  background: white;
  color: black;
  direction: rtl;
}
.btnmob{
  text-align: center;
}
}
</style>
