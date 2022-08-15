<template>
  <div class="cont">

    <b-form
      style="  width: 95%;
    margin: 75px auto; text-align:center; "
      @submit="onSubmit"
    >
              <b-overlay :show="showe" no-wrap>

  </b-overlay>

      <h2>صفحة التسجيل</h2>
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-2"
            label="  اسم المستخدم : "
            label-for="input-2"
          >
            <input
              id="usernamess"
              v-model="form.username"
              placeholder="username"
              class="form-control usernamess "

            >
          </b-form-group>
        </b-col>

        <b-col>
          <b-form-group
            id="input-group-2"
            label=" البريد الإلكتروني :"
            label-for="input-2"
          >
            <input
              id="emails"
              v-model="form.email"
              type="email"
              placeholder="Enter email"
              class="form-control email"
            >
          </b-form-group>
        </b-col>
      </b-row>





      <hr />
      <b-row>
        <b-col>
          <b-form-group
            id="input-group-2"
            label=" كلمة المرور :"
            label-for="input-2"
          >
            <input
              id="passwords"
              type="password"
              v-model="form.password"
              placeholder="Enter password"
              class="form-control "
            >
          </b-form-group>
        </b-col>
        <b-col>
          <b-form-group
            id="input-group-2"
            label=" أعد كلمة المرور :"
            label-for="input-2"
          >
            <input
              id="repasswords"
              type="password"
              v-model="form.repassword"
              placeholder="Enter repassword"
              class="form-control "
            >
          </b-form-group>
        </b-col>
      </b-row>







      <b-row>
        <b-col style="text-align:center; margin-top:15px;" cols="12">
          <b-button type="submit" :disabled="showe" variant="primary" >تسيجل</b-button> |
          <b-button type="button" @click="GotTologin" variant="danger">عودة</b-button>

        </b-col>
      </b-row>




    </b-form>


  </div>
</template>
<script>
import Qs  from  "qs/dist/qs.js";

import axios from "axios";



export default {
  name: "singuph",



  data() {
    return {
       showe: false, // اللود
      form: {
        email: "",
        username: "",
        password: "",
        repassword: "",
        test:''
      },
      show: true,
    };
  },




  methods: {
    onSubmit(evt) {
      evt.preventDefault();
      //alert(JSON.stringify(this.form));
      const thisa = this
      this.showe = true;//لودكن شغال
      // ارسال المعلومات المستخدم
var filter_email =  /\S+@\S+\.\S+/;
var filter_username =  /^[a-zA-Z0-9]+$/;



if((filter_email.test(this.form.email)) && (filter_username.test(this.form.username)) && (this.form.password !="" ) && (this.form.repassword !="" ) && (this.form.password == this.form.repassword) ){

axios.post('/api/login-logout/login_logout.php', Qs.stringify({rusername:this.form.username,remail:this.form.email,rpassword:this.form.password,repassword:this.form.repassword}))
      .then(res => {


        // اخبار المستخدم اتسجل ولا لا




        // لو تسجل تحوله الى صفحة تسجيل الدخول
        if(res.data.msg == ' ❤ تم تسجيل بنجاح ❤'){
           this.$bvToast.toast(res.data.msg , {
          title: 'system',
          variant: res.data.msg_error,
          solid: true
          })
          setTimeout(function(){

            if(thisa.$route.query.SUPSHOWS_THA1100 == "GetStarted"){

      thisa.$router.push({path:"login" ,params: { id: "login" }, query:{SUPSHOWS_THA1100:"GetStarted"}})

    }
    else{
 // داله العودة للصفحة التجسل زر
        thisa.$router.push({ path:"login"}); // -> /user
  }









          },5000)
        }


    // لو مسيجل مسبقا
    else{

      thisa.showe = false;
       this.$bvToast.toast(res.data.msg , {
          title: 'system',
          variant: res.data.msg_error,
          solid: true
        })
        document.getElementById("passwords").style.border = "1px solid red";
        document.getElementById("repasswords").style.border = "1px solid red";
        document.getElementById("usernamess").style.border = "1px solid red";
        document.getElementById("emails").style.border = "1px solid red";
    }

      })

        // لو حصل مشكلة في السيرفر او انقطع اللنت على المستخدم
      .catch(err => {
        console.error(err);
        this.showe = false;
        this.$bvToast.toast("اعد المحاولة وتأكد بالاتصال بالانترنت" , {
          title: 'system',
          variant:"danger",
          solid: true
        })
      })


}
else if(!filter_username.test(this.form.username)) {
      document.getElementById("usernamess").style.border = "1px solid red";     thisa.showe = false;
this.$bvToast.toast("تاكد من اسم المستخدم " , {
          title: 'system',
          variant:"danger",
          solid: true
        })
}
else if (!filter_email.test(this.form.email)){
    document.getElementById("emails").style.border = "1px solid red";     thisa.showe = false;
  document.getElementById("usernamess").style.border = "1px solid green";
this.$bvToast.toast("اكتب البريد الالكتروني بشكل صحيح" , {
          title: 'system',
          variant:"danger",
          solid: true
        })
}
else if(this.form.password != this.form.repassword || this.form.password =="" || this.form.repassword ==""){
    document.getElementById("passwords").style.border = "1px solid red";
    document.getElementById("usernamess").style.border = "1px solid green";
    document.getElementById("repasswords").style.border = "1px solid red";
    document.getElementById("emails").style.border = "1px solid green";     thisa.showe = false;
this.$bvToast.toast("يبدوا ان كلمة المرور فارغه او غير متطابقه" , {
          title: 'system',
          variant:"danger",
          solid: true
        })
}

















    },







    GotTologin: function() {

      if(this.$route.query.SUPSHOWS_THA1100 == "GetStarted"){

      this.$router.push({path:"login" ,params: { id: "login" }, query:{SUPSHOWS_THA1100:"GetStarted"}})

    }
    else{
 // داله العودة للصفحة التجسل زر
this.$router.push({ path:"login", params: { id: "login" } }); // -> /user
  }





},


  },






};
</script>
<style scoped>
.cont {
  width: 50%;
  margin: auto;
  height: 390px;
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
@media only screen and (max-width:900px) {
  .cont{
        width: 98% !important;
  }
}
</style>
