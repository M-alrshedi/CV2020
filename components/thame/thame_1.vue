<template>
   <div class="body">
     <div id="revcv" >
       <review v-if="refU" v-on:updeatereivw="udateref($event)" />
        <span  @click="closeitthame"  style="position: fixed; right: 0; padding: 30px; font-size: 1.8rem;"> X </span>
       <span   class="downloadthame">
         <br>
           <b-spinner v-if="showdowmlod" style="width: 3rem; height: 3rem;" label="Large Spinner" type="grow"></b-spinner>

        <span @click="generatePDF()" v-if="!showdowmlod" ><BIconDownload /></span>


         </span>

     </div>

           <!--ستايل قديييم <div v-if="shows"  id="reviewsi" style="width: 98%; margin: auto; display: -webkit-inline-box; position: absolute;  ">

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
    </div> -->
         <div  style="text-align:center;" v-if="!show"> <h3 v-text="loading"></h3>  </div>

<div   ref="pdf"  v-if="show"  style="overflow-y:scroll; position: fixed; overflow-x:scroll;direction: rtl; text-align: right;padding: 0px 120px 0px 70px; margin-left: 75px; " class="contzainer  display-flex">
       <link rel="stylesheet" href="../css/main.css">
    <link rel="stylesheet" href="../css/normalize.css">
    <link rel="stylesheet" href="../css/all.min.css">

    <div style="     width:30%;" class="right-section">

        <div class="name-section display-flex">
          <h3 v-text="homedate.fullname"></h3>
        </div>


        <div class="commu-data-title display-flex mr-20">

          <div class="icon ml-10">
            <i class="fa fa-quote-right main-color-two" style="font-size: 28px;color:white;"></i>
          </div>
          <div class="title">
            <h3>المعلومات الشخصية</h3>
          </div>

        </div>
        <hr class="right-hr mt-5 mb-10">

        <div class="  display-flex position-relative mr-20">
          <div style="text-rendering: optimizeLegibility;" class="icon ml-10">
            <i style="text-rendering: optimizeLegibility;" class="fa fa-id-card main-color-two"></i>
          </div>
          <div class="data main-color-two">
            <h5 v-text="homedate.worked" ></h5>
          </div>
        </div>
 <hr class="right-hr mt-10 mb-10">
        <div class="  display-flex position-relative mr-20">
          <div class="icon ml-10">
            <i class="fa  fa-calendar main-color-two" style="color:white;"></i>
          </div>
          <div class="data main-color-two">
            <h5 v-text="homedate.dateago"></h5>
          </div>
        </div>
        <hr class="right-hr mt-10 mb-10">
        <div class="  display-flex position-relative mr-20">
          <div class="icon ml-10">
            <i class="fa fa-phone main-color-two"></i>
          </div>
          <div class="data main-color-two">
            <h5 v-text="homedate.phone">0599999999</h5>
          </div>
        </div>
        <hr class="right-hr mt-10 mb-10">
        <div class="  display-flex position-relative mr-20">
          <div class="icon ml-10">
            <i class="fa fa-envelope main-color-two"></i>
          </div>
          <div style="height:auto;" class="data main-color-two">
            <p v-text="homedate.email"></p>
          </div>
        </div>
        <hr class="right-hr mt-10 mb-10">
        <div class="  display-flex position-relative mr-20">
          <div class="icon ml-10">
            <i class="fa fa-map-marker main-color-two"></i>
          </div>
          <div class="data main-color-two">
            <h4 v-text="homedate.country">الباحة - بني ظبيان</h4>
          </div>
        </div>

        <!--
          <hr class="right-hr mt-5 mb-10" style="margin-top:70px">
        <div class="commu-data-title display-flex mr-20">

          <div class="icon">
            <i class="fa fa-dot-circle main-color-two" style="font-size: 28px;"></i>
          </div>
          <div class="title">
            <h3>الهدف الوظيفي</h3>
          </div>
        </div>
 <div class="data main-color-two mr-20" style="line-height: 1.5;">
          <p style="margin-top:0">
            الحصول على وظيفة تناسب مؤهلي <br> والعمل على تعزيز خبراتي <br> وتطوير مهاراتي العلمية والعملية <br> والرقي بالمنظمة من خلال العمل فيها
          </p>
        </div>
        -->



        <!-- <div class="commu-data-title display-flex mr-20">
          <hr class="right-hr mt-5 mb-10">
          <div class="icon">
            <i class="fa fa-asterisk main-color-two" style="font-size: 28px;"></i>
          </div>
          <div class="title">
            <h3>العضويات والإنجازات</h3>
          </div>
        </div>
        <div class="right-data main-color-two mr-20" style="line-height: 1.5;">
          <ul class="mr-20">
            <li>عضوية الملك عبد العزيز للحوار الوطني</li>
            <li>المستشار المعتمد للتدريب على برامج الحوار الأسري</li>
            <li>عضوية الهيئة السعودية للمحاسبين القانونيين - تسجيل مؤقت</li>
          </ul>
        </div>
        -->

        <hr class="right-hr mt-5 mb-10">
        <div class="commu-data-title display-flex mr-20">

          <div class="icon">
            <i class="fa fa-wrench main-color-two" style="font-size: 28px;"></i>
          </div>
          <div class="title">
            <h3>المهارات</h3>
          </div>
        </div>
        <div class="right-data main-color-two mr-20" style="line-height: 1.5;">
          <ul class="mr-20">
            <li v-for="(valuea , index ) in value" :key="index" class="mb-3">{{valuea}}</li>

          </ul>
        </div>
    </div>
    <!------------------------------------------------------------------>
    <div class="left-section">
      <div :style="tapar"></div>
      <div v-if="test[0] ? true:false" class="edu-section" >
        <div id="fatar"  class="title display-flex">
          <div class="icon">
            <i  class="fa fa-graduation-cap"
                style="color:#f0f5ef;
                       position: absolute;
                       top:50%;
                       left:50%;
                       transform: translate(-50%,-50%);"></i>
          </div>
          <div>
            <h2>المؤهلات العلمية</h2>
          </div>
        </div>
        <hr>
        <br>

        <!--STARTGEEEETT -->
        <!--STARTGEEEETT -->
        <div v-for="(atest,index) in test" :key="index" class="data dataa  display-flex">
          <div class="right-data">
            <p>.</p>
            <p v-text="atest.outmejor"></p>
          </div>
          <div class="vertical-separator"></div>
          <div class="left-data">
            <p v-text="atest.aljha"></p>
             <p v-text="atest.degrre"></p>
             <p  v-text="atest.mejor"> </p>


          </div>

        </div>

<!--ENDGEEEETT -->
<!--ENDGEEEETT -->

      </div>
             <br> <br v-if="bre" /><br v-if="bre" /><br v-if="bre" />

      <div v-if="keps[0] ? true:false" class="edu-section mt-30 " >
        <div class="title display-flex">
          <div class="icon">
            <i  class="fa fa-suitcase"
                style="color:#f0f5ef;
                        position: absolute;
                        top:50%;
                        left:50%;
                        transform: translate(-50%,-50%);"></i>
          </div>
          <div>
            <h2>التدريب والخبرات العملية</h2>
          </div>
        </div>
        <hr>


        <!--STARTGEEEETT -->
        <!--STARTGEEEETT -->
        <div class="data">
          <ul v-for="(kep,index) in keps" :key="index" id="keps">
              #{{index+1}}
              <li>الجهة: <span v-text="kep.aljha"> </span></li>
              <li>المسمى الوظيفي :  <span v-text="kep.workasmha">s </span></li>
              <li><span v-text="kep.startdate"></span>  ~~ <span v-text="kep.enddate" ></span></li>

          <div  style="color:#70757a;font-size: 12px;" class="dis"><p v-text="kep.backstate" ></p></div>
          <hr style="height: 1px; background-color: #D3D3D3;">
          </ul>

        </div>


        <!--ENDGEEEETT -->
        <!--ENDGEEEETT -->
      </div>
             <br v-if="bre" /><br v-if="bre" /><br v-if="bre" /><br v-if="bre" />


      <div v-if="courses[0] ? true:false" class="edu-section mt-30">
        <div class="title display-flex">
          <div class="icon">
            <i  class="fa fa-cubes"
                style="color:#f0f5ef;
                        position: absolute;
                        top:50%;
                        left:50%;
                        transform: translate(-50%,-50%);"></i>
          </div>
          <div>
            <h2>الدورات التدريبية وورش العمل</h2>
          </div>
        </div>
        <hr>
        <div class="data display-flex" style="justify-content: flex-start">

          <div class="right main-color-one">
            <ul class="mr-15">
              <li  v-for="(course , index ) in courses" :key="index" class="mb-3">{{course.startdate}}</li>

            </ul>
          </div>
          <div style="height:auto;" class="vertical-separator main-color-one vertical-separator-h" >

          </div>
          <div class="center">
            <ul class="mr-15" style="list-style: none;">
              <li  v-for="(course , index ) in courses" :key="index" class="mb-3">{{course.namecourse}}</li>

            </ul>
          </div>
          <div class="left main-color-one">
            <ul class="mr-15" style="list-style: none;">
              <li  v-for="(course , index ) in courses" :key="index" class="mb-3">{{course.aljha}}</li>

            </ul>
          </div>

        </div>
      </div>

<br>                           <br v-if="bre" /><br v-if="bre" /><br v-if="bre" /><br v-if="bre" />


   <div v-if="enjazs[0] ? true:false"  class="edu-section mt-30">
       <div >
        <div class="title display-flex">
          <div class="icon">
            <i  class="fa fa-suitcase"
                style="color:#f0f5ef;
                        position: absolute;
                        top:50%;
                        left:50%;
                        transform: translate(-50%,-50%);"></i>
          </div>
          <div>
            <h2>الانجازات والمشاريع</h2>
          </div>
        </div>
        <hr >


        <!--STARTGEEEETT -->
        <!--STARTGEEEETT -->
        <div class="data">
          <ul v-for="(enjaz,index) in enjazs" :key="index" id="keps">
              #{{index+1}}
              <li> <span v-text="enjaz.workasmha"> </span></li>
              <li v-if="enjaz.link ? true : false">الرابط :  <span v-text="enjaz.link"></span></li>
              <li><span v-text="enjaz.startdate"></span> </li>

          <div  style="color:#70757a;font-size: 12px;" class="dis"><p v-text="enjaz.backstate" ></p></div>
          <hr style="height: 1px; background-color: #D3D3D3;">
          </ul>

        </div>
        <!--- تجربه الشعارات
<button @click="clicktest">cccc</button>  -->

        <!--ENDGEEEETT -->
        <!--ENDGEEEETT -->
      </div>
</div>
    </div>

  </div>

   </div>

</template>





<!---------------- S C R I P T -------------->



<script>
import Qs  from  "qs/dist/qs.js";
import axios from "axios";
import { BIconDownload  } from 'bootstrap-vue'
import review from "@/components/review";

export default {
    name:"thame_1",
    components:{
      BIconDownload,
      review
    },
middleware:'loignmiddware',
head(){
  return{
      style: [
      { type: 'text/css', innerHTML:' body{ height: 100vh; overflow: hidden;}, #nav{display:none !important; }  '},
      // ...

],

    link: [
      { rel: 'stylesheet', src: '/css/main.css' },
      { rel: 'stylesheet', src: '/css/all.min.css' },
      { rel: 'stylesheet', src: '/css/fonts.css' },
      { rel: 'stylesheet', src: '/css/normalize.css' },
      { rel: 'stylesheet', src: '@/assets/bodythame.css' },
    ],
    script:[

      {type: 'text/javascript',src:'/js/all.min.js'},

    ]
  }
   },
   data(){
       return{
         refU:false,
         showdowmlod:true,
         progressa:0,
         loadpgaethame:false,
bre:false,
tapar:"",
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

methods:{
  udateref(m){

  this.refU = m

  },
  closeitthame(){
    this.$router.push({path:"/"})

},
generatePDF() {
    const thisa= this
    this.showdowmlod = true
            var e = this.$refs.pdf;

  console.log(this.$refs.pdf)
        if (process.browser) {
          const jsPDF = require('jspdf')
          const html2canvas = require("html2canvas")
          var e_width = e.offsetWidth;
          var e_height = e.offsetHeight;
          var e_x_offset = window.scrollX + e.getBoundingClientRect().left;
          var e_y_offset = window.scrollY + e.getBoundingClientRect().top;
            var heightLeft =e_height


            var position = 0;
          html2canvas(e, {
            scale: 0.78444444,
             width: e_width,
            height: e_height,
            x: e_x_offset,
            y: e_y_offset,


          }).then(function (canvas) {
            var doc = new jsPDF('p', 'pt', 'A4');
               let imgHeight = ((canvas.height * e_width) / 2454)*1.24;
                var heightLeft =imgHeight
            const img = canvas.toDataURL("image/png",0.9);
            console.log( doc. internal.pageSize.height)


 while (heightLeft >= 0) {
          position = heightLeft - imgHeight;

          doc.addImage(img, "PNG", 0, position, 0, 0);
          heightLeft -= doc.internal.pageSize.height;
          doc.addPage();
        }




            doc.save("sampale.pdf" ,{returnPromise:true}).then(function(){
                thisa.showdowmlod = false
                thisa.refU = true
            });



          })
        }
      },
  sumbmita(){
    this.shows = false
  },
  clicktest(){

    var self = this

    window.setTimeout(function () {
      self.nof ++
      self.$emit('updateHead')
    }, 3000)
  }
},
   created(){
var self = this
     this.progressa=0
     if (process.server){}else{
if(localStorage.getItem("_datauser" )== null){
      this.$router.push("/data/login")
      }
     this.loading = "LODING . . .";
      const thisa =this
      axios.post('/api/datacv/datacv_me_select.php', Qs.stringify({token:JSON.parse(localStorage.getItem("_datauser")).token,iduser:JSON.parse(localStorage.getItem("_datauser")).iduser}),{
          onUploadProgress (progressEvent) {
        var da = parseInt( Math.round( ( progressEvent.loaded / progressEvent.total ) * 100 ))

       document.getElementById("loadbar").value =  dprogressEvent.total
  }
      })
    .then(res => {
      if(res.data ===" Erroor-405"){localStorage.removeItem("_datauser")
      window.location.href = 'https://mfa10.com/data/login';
      }

        this.test =JSON.parse(res.data.test)
        this.keps =JSON.parse(res.data.keps)
        this.courses =JSON.parse(res.data.courses)
        this.value =JSON.parse(res.data.value)
        this.enjazs =JSON.parse(res.data.enjazs)
        this.homedate =JSON.parse(res.data.homedate)
      this.homedate.tellyour=this.homedate.tellyour.split("[nl]").join("\n");
const arrLength_1 = this.test.length;
const arrLength_2 = this.courses.length;
const arrLength_3 = this.enjazs.length;
const arrLength_4 = this.keps.length;
const arrLength = arrLength_1 + arrLength_2 + arrLength_3 + arrLength_4  ;

if(arrLength <8){
  this.bre=true
  this.tapar = "height:170px;"
}
     setTimeout(function(){

       thisa.show = true
       thisa.showdowmlod = false



     },5000)

    })
    .catch(err => {
      console.error(err)
     this.loading="حصل خطأ  يرجى تعبئة بياناتك";
    })

     }

   },





}
</script>



<!---------------- S T Y L Y -------------->
<style  scoped>

p,li{
        font-size: 1.2rem !important; font-weight: 700;
      }
      #revcv{
        height:100vh;
        width:vw;background:white;
        position: fixed;
        z-index: 999999;
        width: 100%;
            top: 0;
      }


      .downloadthame {
        font-size: 5rem;
    width: 100%;

    margin-left: auto;
    margin-right: auto;
    margin-top: 8rem;
    display: block;

    text-align: center;
      }
      .downloadthame> svg:visited {
        color: darkgreen;
      }
 #reviewsi{

        width: 90%;
    margin: auto;
    position: fixed;
    left: 0;
    right: 0;
    top: 50px;

    bottom: 0;

    display: block;
    position: fixed;
    z-index: 999999;
    }

    .backgroundre{
            width: 100vw;
    height: 100vh;
    position: fixed;
    top: 1px;
    background: #000;
    bottom: 0;
    right: 0;
    left: 0;
    margin: auto;
    opacity: 0.8;
    }
    .contzainer{

            direction: rtl; text-align: right; width:320mm; height:  2600px  ; margin: auto;position: absolute;top:0; left: 0; right: 0;z-index: 9999;
        }
        .left-section{
            width:70%; /*height:  100vh auto; */

        }
        .right-section{
            width:10%; /*height:  100vh auto; */
        }

        #keps li{
            display: inline-block;
            list-style-type: none;
            margin:20px;

        }
        #keps{
            text-decoration: none;
        }
        .dataa{
            margin: 8px 0;
        }


    @media print{
        *{

            text-shadow: none !important;
            box-shadow: none !important;
            margin: 0;
            padding: 0;
        }
        body{
            height: 100vh;
        }

        .contzainer{
            direction: rtl; text-align: right; width: 100%;  margin: auto;position: absolute;top:0;
        }
        .left-section{
            width: 70%;    min-height: 1700px;

        }
        .right-section{
              width: 30%;  min-height: 1700px;
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
