<template  dir="rtl" lang="ar"  >
<div>
    <div v-if="shows"  id="reviewsi" style="width: 98%; margin: auto; display: -webkit-inline-box; position: absolute;">

                <div  class="backgroundre"></div>
            <div class="mt-6">
            <b-card-group   deck class="mb-6">

              <b-card   border-variant="dark" header="معلومات" align="center">

              <div @click="sumbmita" style="position: absolute; top: 10px; right: 25px; font-weight: bold;cursor: pointer;">X</div>
                    <div  >
                    <h6 style="direction: rtl;" for="text">  لحفظ بصيغة  PDF  او للطباعه إضغط على التالي :    </h6>
                    <ul >
                      <li style="direction: rtl;"><h5> جهاز ويندوز :  Ctrl + p </h5></li>
                     <li style="direction: rtl;"> <h5> جهاز ماك : Command + P</h5></li>
                      <li> <h5>جهاز الايفون : اضغط على مشاركه في المتصفح ثم انشاء ملف بي دي اف</h5>
                      <h6 style="color:red;">يفضل ان تستخدم جهاز لابتوب  وليس من الهاتف</h6> </li>
                    </ul>
                    <br>
                    <br>
                        <h6>** الان ... انتقل الى السيره الذاتية وأبدا بعمل التعليمات السابقه **</h6>
                            <hr>
                    <b-button @click="sumbmita"  style="width: auto;" variant="warning">اننتقال</b-button>
        </div>
        <div v-if="!shows">
                <h1>
                    شكرا لك على التقيم
                </h1>
            </div>
              </b-card>
            </b-card-group>
          </div>
    </div>

                   <div   dir="ltr" style="text-align:center;" v-if="!show"> <h3 v-text="loading"></h3>  </div>

    <div class="body" dir="rtl">



        <link rel="stylesheet" href="../css2/main.css">
    <!--<link rel="stylesheet" href="css/bootstrap.min.css">-->
    <link rel="stylesheet" href="../assets/css2/all.min.css">
    <link rel="stylesheet" href="../assets/css2/fonts.css">

    <!--<script src="js/jquery.min.js"></script>
    <script src="js/popper.min.js"></script>-->


    <!-- ---------------------------------------- -->

<div  v-if="show" class="container">


    <!-------------------------------------------------------------------------------->
      <div class="row d-flex">
        <div class="left-side d-flex justify-content-center align-items-center">
          <div class="profile rounded-circle"  style="background-image: url(https://x1.xingassets.com/assets/frontend_minified/img/users/nobody_m.original.jpg);">
          </div>
        </div>
        <div class="right-side d-flex justify-content-right align-items-center">
            <ul style="list-style: none;">

                <li><h2  class="mr-60" v-text="homedate.fullname"></h2></li>
                <li><p class="mr-60" style="font-size:16px;" v-text="homedate.tellyour"></p></li>

            </ul>





          <br>
        </div>

      </div>
      <hr class="separator">

      <!-------------------------------------------------------------------------------->

      <div class="row-2 mt-20 d-flex">
        <div class="left-side d-flex justify-content-right">
          <div class="skills">
              <h2 class="mr-40 font-size-24">المهارات</h2>
              <div class="skills-content">
                <ul class="list-style-none mr-40 mt-10">
                  <li v-for="(valuea,index) in value" :key="index" class="font-size-16">{{ valuea }}</li>

                </ul>
              </div>
          </div>
        </div>
        <div class="right-side">
            <h2 class="mr-60 font-size-24">المؤهل العلمي</h2>

            <div v-for="(testa ,index) in test" :key="index" class="right-side-content d-flex mt-10">
              <div class="icon">
                <i class="fa fa-graduation-cap mt-10 mr-20"></i>
              </div>
              <div class="contentz">

                <ul class="list-style-none mr-20 mt-10">
                  <li class="font-size-16" v-text="testa.outmejor"></li>
                  <li class="font-size-16"> <span v-text="testa.degrre" > </span>  <span v-text="testa.mejor"> </span> -  <span  v-text="testa.aljha"></span></li>
                </ul>
              </div>
            </div>




        </div>
      </div>

      <hr class="separator">
      <!-------------------------------------------------------------------------------->

      <div class="row-2 mt-20 d-flex">
          <div class="left-side d-flex justify-content-right">
            <div class="skills">
                <h2 class="mr-40 font-size-24">البيانات الشخصية</h2>
                <div class="skills-content">
                  <ul class="list-style-none mr-20 mt-10">
                    <li class="font-size-16">
                        <i class="fa fa-map-pin mt-10 mr-20"></i>
                     &nbsp; <span v-text="homedate.born"></span>  </li>
                    <li class="font-size-16">
                        <i class="fa fa-phone mt-10 mr-20"></i>
                        &nbsp; <span v-text="homedate.phone"></span> </li>
                    <li class="font-size-16">
                        <i class="fa fa-envelope mt-10 mr-20"></i>
                      &nbsp; <span v-text="homedate.email"></span></li>
                    <li class="font-size-16">
                        <i class="fa fa-calendar mt-10 mr-20"></i>
                      &nbsp;  <span v-text="homedate.dateago"></span></li>
                  </ul>
                </div>
            </div>
          </div>
          <div class="right-side">
            <h2 class="mr-60 font-size-24">الخبرات العملية</h2>



            <div v-for="(kep ,index) in keps" :key="index" class="right-side-content d-flex mt-10">
              <div class="icon">
                <i class="fa fa-graduation-cap mt-10 mr-20"></i>
              </div>
              <div class="contentz">
                <ul class="list-style-none mr-20 mt-10">
                  <li class="font-size-16"><span v-text="kep.startdate"></span>  -  <span  v-text="kep.enddate"></span> </li>
                  <li class="font-size-16"><span  v-text="kep.workasmha"></span> -   <span  v-text="kep.aljha"> </span></li>
                  <li class="font-size-16"  v-text="kep.backstate"></li>
                </ul>
              </div>
            </div>






        </div>
      </div>
      <hr class="separator">
    <!-------------------------------------------------------------------------------->
    <div class="row-2 mt-20 d-flex">
    <div class="left-side d-flex justify-content-right">
      <div class="skills">
          <h2 class="mr-40 font-size-24">اللغات </h2>
          <div class="skills-content">
            <ul class="list-style-none mr-40 mt-10">
              <li>
                <label for="file">اللغة العربية</label><br>
                <progress id="file" max="100" value="50"> 70% </progress>
              </li>
              <li >
                <label for="file">اللغة الانجليزية</label><br>
                <progress id="file" max="100" value="80"> 80% </progress>
              </li>
            </ul>
          </div>
      </div>
    </div>

      <div class="right-side">
        <h2 class="mr-60 font-size-24">الإنجازات</h2>

        <div class="right-side-content d-flex mt-10">
          <div class="icon">
            <i class="fa fa-lightbulb mt-10 mr-20"></i>
          </div>
          <div class="contentz">
            <ul class="list-style-none mr-20 mt-10">
              <li v-for="(enjaz,index) in enjazs" :key="index" class="font-size-16">
                  <span v-text="enjaz.workasmha"></span> -  <span v-text="enjaz.startdate"></span>
                  <p style="font-size:15px;" v-text="enjaz.backstate"></p>


              </li>

            </ul>
          </div>
        </div>
    </div>
  </div>
  <hr class="separator">
  <!-------------------------------------------------------------------------------->
  <div class="row-2 mt-20 d-flex">
      <div class="left-side d-flex justify-content-right">
        <div class="skills">
            <h2 class="mr-40 font-size-24">الهوايات </h2>
            <div class="skills-content">
              <ul class="list-style-none mr-40 mt-10">
                <li class="font-size-16">القراءة</li>
                <li class="font-size-16">المشي والجري</li>
                <li class="font-size-16">السفر</li>
                <li class="font-size-16">التصوير</li>
              </ul>
            </div>
        </div>
      </div>
    <div class="right-side">
      <h2 class="mr-60 font-size-24">الدورات التدريبية</h2>

      <div class="right-side-content d-flex mt-10">
        <div class="icon">
          <i class="fa fa-life-ring mt-10 mr-20"></i>
        </div>
        <div class="contentz">
          <ul class="list-style-none mr-20 mt-10">
              <li v-for="(course,index) in courses" :key="index" class="font-size-16">
                  <span v-text="course.namecourse"></span> -  <span v-text="course.startdate"></span>
                  <p style="font-size:15px;" v-text="course.aljha"></p>


              </li>
          </ul>
        </div>
      </div>
  </div>
</div>
<!-------------------------------------------------------------------------------->
    </div>


    </div>
    </div>
</template>
<script>
import Qs  from  "qs/dist/qs.js";
import axios from "axios";
export default {
  middleware:'loignmiddware',
  head: {
style: [
      { type: 'text/css', innerHTML:' #nav{display:none !important; } #navb{display:none !important;} @media print{ .btn-info{ display:none;}}'},
      // ...

],
    link: [
      { rel: 'stylesheet', src: '/css2/main.css' },
      { rel: 'stylesheet', src: '/css2/all.min.css' },
      { rel: 'stylesheet', src: '/css2/fonts.css' },
    ],
    script:[

      {type: 'text/javascript',src:'/js/all.min.js'},

    ]
   },
    name:"thame_2",
    data(){

        return{

            shows:true,
           test:[],
           keps:[],
           courses:[],
           value:null,
           enjazs:[],
           homedate:{},
           show:false,
           loading:null,
           title:"Thame_one",
           nof:"استمتع بوقتك"


        }


    },



    created(){

     this.loading = "LODING . . .";
      const thisa =this

  if (process.server){

      }else{
if(localStorage.getItem("_datauser" )== null){
      this.$router.push("/data/login")
      }
     this.loading = "LODING . . .";
      const thisa =this
      axios.post('/api/datacv/datacv_me_select.php', Qs.stringify({token:JSON.parse(localStorage.getItem("_datauser")).token,iduser:JSON.parse(localStorage.getItem("_datauser")).iduser}))
    .then(res => {
      if(res.data ===" Erroor-405"){localStorage.removeItem("_datauser")
      window.location.href = 'http://localhost:8080/data/login';
      }
        this.test =JSON.parse(res.data.test)
        this.keps =JSON.parse(res.data.keps)
        this.courses =JSON.parse(res.data.courses)
        this.value =JSON.parse(res.data.value)
        this.enjazs =JSON.parse(res.data.enjazs)
        this.homedate =JSON.parse(res.data.homedate)
      this.homedate.tellyour=this.homedate.tellyour.split("[nl]").join("\n");

     setTimeout(function(){

       thisa.show = true
     },5000)

    })
    .catch(err => {
      console.error(err)
     this.loading="حصل خطأ  يرجى تعبئة بياناتك";
    })
      }



   },
   methods:{
      sumbmita(){
    this.shows = false
  },
   }
}

</script>
<style  scoped>
@media only screen and (max-width:900px){
.body{
    width:320mm !important;
}
}
   @media print{



        .container{
            direction: rtl; text-align: right; width: 100%;  margin: auto;position: absolute;top:0; z-index: 9999;
        }

        @page{
            margin: 0;
        }

        .container{
        width:100%;
        height:100%;

        }
    }
</style>
