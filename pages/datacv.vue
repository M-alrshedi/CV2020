<template>
    <div id="x"  class="cv ">


<ul class="nav " id="myTab navb" role="">
  <li @click="selected = 1" :class="{highlight:selected == 1}" class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">البيانات الشخصية</a>
  </li>
  <li @click="selected = 2" :class="{highlight:selected == 2}"   class="nav-item " role="presentation">
    <a class="nav-link " id="home-tab" data-toggle="tab" href="#" role="tab"  aria-selected="true">المؤهل العلمي</a>
  </li>



  <li @click="selected = 3" :class="{highlight:selected == 3}" class="nav-item" role="presentation">
    <a class="nav-link " id="profile-tab" data-toggle="tab" href="#" role="tab" >الخبرات</a>
  </li>

  <li @click="selected = 4" :class="{highlight:selected == 4}"  class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#" role="tab" a aria-selected="false">الدورات التدريبية</a>
  </li>

   <li @click="selected = 5" :class="{highlight:selected == 5}"  class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">المهارات</a>
  </li>

   <li @click="selected = 6" :class="{highlight:selected == 6}"  class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">الانجازات والمشاريع</a>
  </li>

   <li @click="selected = 7" :class="{highlight:selected == 7}"  class="nav-item" role="presentation">
    <a class="nav-link" id="contact-tab" data-toggle="tab" href="#" role="tab"  aria-selected="false">المراجع</a>
  </li>



</ul>



<div class="contentcv">

 <b-overlay :show="showe" no-wrap>

  </b-overlay>

<div  @click="toggleDataCV = 1" :class="{toggleDataCV:selected == 1}" class="mou">
  <div class="alert alert-success">
  <strong>صفحة البيانات الشخصية</strong>
  </div>
  <b-form >
      <label class="sr-only"      >الاسم كاملاَ</label>
      <b-input v-model="homedate.fullname"
        id=""
        class="mb-2 mr-sm-2 mb-sm-0"
        placeholder="الاسم الثلاثي"
      ></b-input>
  <br><hr>

      <label class="sr-only"      >مسمى الوظيفي , او يمكنك وضع طالب او خريج</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="homedate.worked"  placeholder="مسمى الوظيفة"></b-input>
      </b-input-group>

  <br><hr>
        <label class="sr-only"      >تكلم عن نفسك بختصار </label>

  <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-textarea v-model="homedate.tellyour"  placeholder="نبذة بسيطة"></b-textarea>
      </b-input-group>

  <br><hr>
        <label class="sr-only"      >الجنس</label>

      <b-radio v-model="homedate.sexy" name="some-radios" value="ذكر">ذكر</b-radio>
      <br>
        <b-radio v-model="homedate.sexy" name="some-radios" value="انثى">  انثى</b-radio>

        <br><hr>
              <label class="sr-only"      >الحاله الاجتماعية</label>

      <b-radio v-model="homedate.state" name="some-radioss" value="اعزب">اعزب</b-radio>
      <br>
        <b-radio v-model="homedate.state" name="some-radioss" value="متزوج">  متزوج</b-radio>

  <br> <hr>

  <label class="sr-only"      >رقم الجوال</label>
      <b-input-group   class="mb-2 mr-sm-2 mb-sm-0">
        <b-input type="number" v-model="homedate.phone"  placeholder="رقم الجوال"></b-input>
      </b-input-group>

      <br> <hr>

  <label class="sr-only"      >البريد الإلكتروني</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input max="10" v-model="homedate.email" type="email"  placeholder="البريد الإلكتروني"></b-input>
      </b-input-group>

  <br> <hr>

  <label class="sr-only"      >الدوله</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="homedate.country"  placeholder="الدولة"></b-input>
      </b-input-group>
  <br> <hr>

  <label class="sr-only"      >الجنسية</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="homedate.born"  placeholder="الجنسية"></b-input>
      </b-input-group>

      <br><hr>
            <label class="sr-only"      >تاريخ الولادة</label>

        <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="homedate.dateago" type="date"    placeholder="تاريخ ميلادك"></b-input>

      </b-input-group>
  <br><hr>

      <!-- BUTTON LOADED SAVE DTAT -->
          <div>


        <b-overlay
          :show="busy"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
          @hidden="onHidden"
        >
          <b-button
            ref="button"
            :disabled="busy"
            variant="primary"
            @click="onClick();  savedatame();"
          >
            حفظ والتالي
          </b-button>
        </b-overlay>
      </div>

    </b-form>










</div>







<div  @click="toggleDataCV = 2" :class="{toggleDataCV:selected == 2}" class="mou">




    <div class="stylemoa" v-for="(texta , index ) in test" :key="index">

      #{{index+1 }}
    <br>
      <label class="sr-only"      >الجهة التعليمية</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="texta.aljha"  placeholder="الجهة التعلمية" :value="texta.aljha"></b-input>
      </b-input-group>
      <br><hr>
      <label class="sr-only"      >الدرجة العلمية</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input  placeholder="الدرجة العلمية" v-model="texta.degrre" :value="texta.degrre"></b-input>
      </b-input-group>
      <br><hr>
      <label class="sr-only"      >التخصص</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input  placeholder="التخصص" v-model="texta.mejor" :value="texta.mejor"></b-input>
      </b-input-group>
      <br><hr>
            <label class="sr-only"      >تاريخ الحصول على المؤهل العلمي</label>

      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input type="date"  Vue.js Date Format   placeholder="التاريخ" v-model="texta.outmejor" :value="texta.outmejor"></b-input>

      </b-input-group>


  <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_up(index)"><BIconArrowUp></BIconArrowUp></label>

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_down(index)"><BIconArrowDown></BIconArrowDown></label>

    <label class="downup"  style="cursor: pointer; color:red; border:1px solid red ;width: 18px; height: 18px; line-height: 15px;" @click="de(index)">X</label>


      </b-input-group>

    </div>
  <br>
    <BIconPlusCircle class="h2 mb-2" variant="success" @click="fuck" ></BIconPlusCircle>

          <hr>    <br>

      <!-- BUTTON LOADED SAVE DTAT -->
          <div>


        <b-overlay
          :show="busy"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
          @hidden="onHidden"
        >
          <b-button
            ref="button"
            :disabled="busy"
            variant="primary"
            @click="onClick();  savedatame();"
          >
            حفظ والتالي
          </b-button>
        </b-overlay>
      </div>


</div>





<div  @click="toggleDataCV = 3" :class="{toggleDataCV:selected == 3}" class="mou">



  <div class="stylemoa" v-for="(kep , index ) in keps" :key="index">
    #{{index+1 }}
      <br>
          <label class="sr-only" for="inline-form-input-username">الجهة التعليمية</label>
          <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-input v-model="kep.aljha" id="inline-form-input-username" placeholder="الجهة التعلمية" :value="kep.aljha"></b-input>
          </b-input-group>
          <br><hr>
          <label class="sr-only" for="inline-form-input-username">المسمى الوظيفي</label>
          <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-input id="inline-form-input-username" placeholder="المسمى الوظيفي" v-model="kep.workasmha" :value="kep.workasmha"></b-input>
          </b-input-group>
          <br><hr>
                      <label class="sr-only" for="inline-form-input-username">تاريخ الاتحاق</label>

          <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-input type="date"  Vue.js Date Format  id="inline-form-input-username" placeholder="تاريخ الاتحاق" v-model="kep.startdate" :value="kep.startdate"></b-input>

          </b-input-group>
          <br><hr>
                            <label class="sr-only" for="inline-form-input-username">تاريخ المغادرة</label>

          <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-input type="date"  Vue.js Date Format  id="inline-form-input-username" placeholder="تاريخ المغادرة" v-model="kep.enddate" :value="kep.enddate"></b-input>

          </b-input-group>
          <br><hr>
                      <label class="sr-only" for="inline-form-input-username">نبذه عن الخبرة العلمية</label>

      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
            <b-textarea id="inline-form-input-username"  v-model="kep.backstate" placeholder="اشرح عن الخبرة هنا ضروري"></b-textarea>
          </b-input-group>

      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">

          <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_up_Keprats(index)"><BIconArrowUp></BIconArrowUp></label>

          <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_down_Keprats(index)"><BIconArrowDown></BIconArrowDown></label>

        <label class="downup"  style="cursor: pointer; color:red; border:1px solid red ;width: 18px; height: 18px; line-height: 15px;" @click="de_Keprats(index)">X</label>


          </b-input-group>

    </div>
    <br>
    <BIconPlusCircle class="h2 mb-2" variant="success" @click="fuck2" ></BIconPlusCircle>

          <hr>    <br>

      <!-- BUTTON LOADED SAVE DTAT -->
          <div>


        <b-overlay
          :show="busy"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
          @hidden="onHidden"
        >
          <b-button
            ref="button"
            :disabled="busy"
            variant="primary"
            @click="onClick();  savedatame();"
          >
            حفظ والتالي
          </b-button>
        </b-overlay>
      </div>

</div>




<div  @click="toggleDataCV = 4" :class="{toggleDataCV:selected == 4}" class="mou">



    <div class="stylemoa" v-for="(course , index ) in courses" :key="index">

      #{{index+1 }}
  <br>
      <label class="sr-only"      >اسم الدورة</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="course.namecourse"  placeholder="اسم الدورة" :value="course.namecourse"></b-input>
      </b-input-group>
      <br><hr>
      <label class="sr-only"      >المكان اللي اخذت منه الدورة</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input  placeholder="المكان اللي اخذت منه الدورة" v-model="course.aljha" :value="course.aljha"></b-input>
      </b-input-group>
      <br><hr>
            <label class="sr-only"      >تاريخ الاتحاق</label>

      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input type="date"  Vue.js Date Format     placeholder="تاريخ الاتحاق" v-model="course.startdate" :value="course.startdate"></b-input>

      </b-input-group>


  <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_up_courses(index)"><BIconArrowUp></BIconArrowUp></label>

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_down_courses(index)"><BIconArrowDown></BIconArrowDown></label>

    <label class="downup"  style="cursor: pointer; color:red; border:1px solid red ;width: 18px; height: 18px; line-height: 15px;" @click="de_courses(index)">X</label>


      </b-input-group>

    </div>


  <br>
    <BIconPlusCircle class="h2 mb-2" variant="success" @click="fuck3" ></BIconPlusCircle>
 <hr>    <br>

      <!-- BUTTON LOADED SAVE DTAT -->
          <div>


        <b-overlay
          :show="busy"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
          @hidden="onHidden"
        >
          <b-button
            ref="button"
            :disabled="busy"
            variant="primary"
            @click="onClick();  savedatame();"
          >
            حفظ والتالي
          </b-button>
        </b-overlay>
      </div>
      </div>






<div style="direction: ltr; text-align:center;"  @click="toggleDataCV = 5" :class="{toggleDataCV:selected == 5}" class="mou">
  <b-form-tags v-model="value" no-outer-focus class="mb-2">
        <template v-slot="{ tags, inputAttrs, inputHandlers, addTag, removeTag }">
          <b-input-group aria-controls="my-custom-tags-list">
            <input
              v-bind="inputAttrs"
              v-on="inputHandlers"
              placeholder="أدخل المهارات لا تفلها كثير حاول تقلل تقريبا الى 5"
              class="form-control" style="text-align: center;">
            <b-input-group-append>
              <b-button @click="addTag()" variant="primary">اضافة</b-button>
            </b-input-group-append>
          </b-input-group>
          <ul
            id="my-custom-tags-list"
            class="list-unstyled d-inline-flex flex-wrap mb-0"
            aria-live="polite"
            aria-atomic="false"
            aria-relevant="additions removals"
          >
            <!-- Always use the tag value as the :key, not the index! -->
            <!-- Otherwise screen readers will not read the tag
                additions and removals correctly -->
            <b-card
              v-for="tag in tags"
              :key="tag"
              :id="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
              tag="li"
              class="mt-1 mr-1"
              body-class="py-1 pr-2 text-nowrap"
            >
              <strong>{{ tag }}</strong>
              <b-button
                @click="removeTag(tag)"
                variant="link"
                size="sm"
                :aria-controls="`my-custom-tags-tag_${tag.replace(/\s/g, '_')}_`"
              >حذف</b-button>
            </b-card>
          </ul>
        </template>
      </b-form-tags>
  <hr>    <br>
          <b-button @click="savedatame" variant="primary">حفظ والتالي</b-button>
</div>







<div  @click="toggleDataCV = 6" :class="{toggleDataCV:selected ==6}" class="mou">


    <div style="display:block;" class="stylemoa" v-for="(enjaz , index ) in enjazs" :key="index">

      #{{index+1 }}
  <br>
      <label class="sr-only"      >اسم المشروع او الانجاز </label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="enjaz.workasmha"  placeholder="اسم المشروع او الانجاز " :value="enjaz.workasmha"></b-input>
      </b-input-group>
      <br><hr>
      <label class="sr-only"      >رابط المشروع او الانجاز ان وج</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input  placeholder="رابط المشروع او الانجاز ان وجد" v-model="enjaz.link" :value="enjaz.link"></b-input>
      </b-input-group>
      <br><hr>
            <label class="sr-only"      >تاريخه </label>

      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input type="date"  Vue.js Date Format   placeholder="تاريخه" v-model="enjaz.startdate" :value="enjaz.startdate"></b-input>

      </b-input-group>

      <br><hr>
                  <label class="sr-only"      >نبذه عنه </label>

  <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-textarea   v-model="enjaz.backstate" placeholder="اشرح عن المشروع او الانجاز "></b-textarea>
      </b-input-group>

  <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_up_enjazs(index)"><BIconArrowUp></BIconArrowUp></label>

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_down_enjazs(index)"><BIconArrowDown></BIconArrowDown></label>

    <label class="downup"  style="cursor: pointer; color:red; border:1px solid red ;width: 18px; height: 18px; line-height: 15px;" @click="de_enjazs(index)">X</label>


      </b-input-group>

    </div>


  <br>
    <BIconPlusCircle class="h2 mb-2" variant="success" @click="fuck4" ></BIconPlusCircle>
 <hr>    <br>
          <b-button @click="savedatame" variant="primary">حفظ والتالي</b-button>





</div>








<div  @click="toggleDataCV = 7" :class="{toggleDataCV:selected == 7}" class="mou">

  <div style="display:block;" class="stylemoa" v-for="(backend , index ) in backends" :key="index">

      #{{index+1 }}
  <br>
      <label class="sr-only"      >اسم الشخص </label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input v-model="backend.hisname"  placeholder="اسم الشخص " :value="backend.hisname"></b-input>
      </b-input-group>
      <br><hr>
      <label class="sr-only"      >رقم جواله</label>
      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input  placeholder="رقم جواله" v-model="backend.hisphone" :value="backend.hisphone"></b-input>
      </b-input-group>
      <br><hr>
                        <label class="sr-only"      >البريد الالكتروني </label>

      <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-input type="date"  Vue.js Date Format   placeholder="البريد الالكتروني" v-model="backend.hisemail" :value="backend.hisemail"></b-input>

      </b-input-group>

      <br><hr>
                              <label class="sr-only"      >ما علاقته بذلك </label>

  <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">
        <b-textarea   v-model="backend.backstate" placeholder="ما علاقته بذلك"></b-textarea>
      </b-input-group>

  <b-input-group  class="mb-2 mr-sm-2 mb-sm-0">

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_up_backends(index)"><BIconArrowUp></BIconArrowUp></label>

      <label class="downup" style="cursor: pointer; border:1px solid #6C757D; " variant="dark" @click="swp_down_backends(index)"><BIconArrowDown></BIconArrowDown></label>

    <label class="downup"  style="cursor: pointer; color:red; border:1px solid red ;width: 18px; height: 18px; line-height: 15px;" @click="de_backends(index)">X</label>


      </b-input-group>

    </div>


  <br>
    <BIconPlusCircle class="h2 mb-2" variant="success" @click="fuck5" ></BIconPlusCircle>
 <hr>    <br>

      <!-- BUTTON LOADED SAVE DTAT -->
          <div>


        <b-overlay
          :show="busy"
          rounded
          opacity="0.6"
          spinner-small
          spinner-variant="primary"
          class="d-inline-block"
          @hidden="onHidden"
        >
          <b-button
            ref="button"
            :disabled="busy"
            variant="primary"
            @click="onClick();  savedatame();"
          >
            حفظ والتالي
          </b-button>
        </b-overlay>
      </div>


</div>





</div>
        </div>
</template>

<script>
import Qs  from  "qs/dist/qs.js";

import axios from "axios";
import {  BIconArrowUp, BIconArrowDown,BIconPlusCircle } from 'bootstrap-vue';

export default {
    name:"datacv",
    components:{BIconArrowUp,BIconArrowDown,BIconPlusCircle},

data(){
  return{
  selected:1,toggleDataCV:7,
  showe:true,
  value:null,
  busy: false,
  timeout: null,
  homedate:{
    fullname:"",
    worked:"",
    tellyour:"",
    sexy:"",
    state:"",
    phone:"",
    email:"",
    country:"",
    born:"",
    dateago:""
  },

  test:[],

  Keprats:[],

  courses:[],

  enjazs:[],

  backends:[],

  keps:[],
  fucking:String

  }
},
head: {

     style: [
      { type: 'text/css', inner: '.my-classz > ul { left:-110px !important;  height: 340px !important;overflow-y: scroll !important; }', undo: true },
      // ...
    ]
   },
 beforeDestroy() {
      this.clearTimeout()
    },
methods:{
 clearTimeout() {

        if (this.timeout) {
          clearTimeout(this.timeout)
          this.timeout = null
        }
      },
      setTimeout(callback) {
        this.clearTimeout()
        this.timeout = setTimeout(() => {
          this.clearTimeout()
          callback()
        }, 5000)
      },
      onHidden() {
        // Return focus to the button once hidden
        this.$refs.button.focus()
      },
      onClick() {
        this.busy = true
        // Simulate an async request

      },

    savedatame(){
      this.homedate.tellyour=this.homedate.tellyour.replace(/\n/g," [nl] ")
      axios.post('/api/datacv/datacv_me_insert.php', Qs.stringify({datacvme :JSON.stringify(this.homedate),test:JSON.stringify(this.test),keps:JSON.stringify(this.keps),courses:JSON.stringify(this.courses),enjazs:JSON.stringify(this.enjazs),backends:JSON.stringify(this.backends),value:JSON.stringify(this.value),token:JSON.parse(localStorage.getItem("_datauser")).token,iduser:JSON.parse(localStorage.getItem("_datauser")).iduser}))
      .then(res => {
        console.log(res.data.msg)
        this.selected = this.selected +1
        document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
        this.homedate.tellyour=this.homedate.tellyour.split("[nl]").join("\n");

      if(res.data ===" Erroor-405"){localStorage.removeItem("_datauser")
      window.location.href = 'http://localhost:8080/data/login';
      }
          this.busy = false;
      })
      .catch(err => {
        console.error(err);
        this.busy = false;
        alert(err.data);

      })

    },
      fuck(){
        this.test.push({
          aljha:this.test.aljha,
          degrre:this.test.degrre,
          mejor:this.test.mejor,
          outmejor:this.test.outmejor

        })

        //localStorage.setItem("datasc",JSON.stringify(this.test));
      },



       fuck2(){
        this.keps.push({
          aljha:this.keps.aljha,
          workasmha:this.keps.workasmha,
          startdate:this.keps.startdate,
          enddate:this.keps.enddate,
          backstate:this.keps.backstate

        })

        //localStorage.setItem("datasc",JSON.stringify(this.test));
      },
      fuck3(){
        this.courses.push({
          aljha:this.courses.aljha,
          workasmha:this.courses.namecours,
          startdate:this.courses.startdate


        })

        //localStorage.setItem("datasc",JSON.stringify(this.test));
      },


      fuck4(){
        this.enjazs.push({
          links:this.enjazs.link,
          workasmha:this.enjazs.workasmha,
          startdate:this.enjazs.startdate,
          backstate:this.enjazs.backstate



        })


        //localStorage.setItem("datasc",JSON.stringify(this.test));
      },
      fuck5(){
        this.backends.push({
          hiname:this.backends.hisname,
          hisphone:this.backends.hisphone,
          hisemail:this.backends.hisemail,
          backstate:this.backends.backstate



        })


        //localStorage.setItem("datasc",JSON.stringify(this.test));
      },
      de(index){
        this.test.splice(index,1);
      },


      swp_up( index) {
        if (index - 1 >= index) {
            var k = index - 1 - index + 1;
            while (k--) {
                this.test.push(undefined);
            }
        }
        this.test.splice(index - 1, 0, this.test.splice(index, 1)[0]);
        return index; // for testing

      },

        swp_down( index) {
        if (index + 1 >= index) {
            var k = index + 1 - index - 1;
            while (k--) {
                this.test.push(undefined);
            }
        }
        this.test.splice(index + 1, 0, this.test.splice(index, 1)[0]);
        return index; // for testing

      },

      swp_down_Keprats( index) {
        if (index + 1 >= index) {
            var k = index + 1 - index - 1;
            while (k--) {
                this.keps.push(undefined);
            }
        }
        this.keps.splice(index + 1, 0, this.keps.splice(index, 1)[0]);
        return index; // for testing

      },
      swp_up_Keprats( index) {
        if (index - 1 >= index) {
            var k = index - 1 - index + 1;
            while (k--) {
                this.keps.push(undefined);
            }
        }
        this.keps.splice(index - 1, 0, this.keps.splice(index, 1)[0]);
        return index; // for testing

      },
      de_Keprats(index){
        this.keps.splice(index,1);
      },
    de_courses(index){
        this.courses.splice(index,1);
      },
      swp_up_courses( index) {
        if (index - 1 >= index) {
            var k = index - 1 - index + 1;
            while (k--) {
                this.courses.push(undefined);
            }
        }
        this.courses.splice(index - 1, 0, this.courses.splice(index, 1)[0]);
        return index; // for testing

      },

      swp_down_courses( index) {
        if (index + 1 >= index) {
            var k = index + 1 - index - 1;
            while (k--) {
                this.courses.push(undefined);
            }
        }
        this.courses.splice(index + 1, 0, this.courses.splice(index, 1)[0]);
        return index; // for testing

      },


      de_enjazs(index){
        this.enjazs.splice(index,1);
      },
      swp_up_enjazs( index) {
        if (index - 1 >= index) {
            var k = index - 1 - index + 1;
            while (k--) {
                this.enjazs.push(undefined);
            }
        }
        this.enjazs.splice(index - 1, 0, this.enjazs.splice(index, 1)[0]);
        return index; // for testing

      },

      swp_down_enjazs( index) {
        if (index + 1 >= index) {
            var k = index + 1 - index - 1;
            while (k--) {
                this.enjazs.push(undefined);
            }
        }
        this.enjazs.splice(index + 1, 0, this.enjazs.splice(index, 1)[0]);
        return index; // for testing

      },


        de_backends(index){
        this.backends.splice(index,1);
      },
      swp_up_backends( index) {
        if (index - 1 >= index) {
            var k = index - 1 - index + 1;
            while (k--) {
                this.backends.push(undefined);
            }
        }
        this.backends.splice(index - 1, 0, this.backends.splice(index, 1)[0]);
        return index; // for testing

      },

      swp_down_backends( index) {
        if (index + 1 >= index) {
            var k = index + 1 - index - 1;
            while (k--) {
                this.backends.push(undefined);
            }
        }
        this.backends.splice(index + 1, 0, this.backends.splice(index, 1)[0]);
        return index; // for testing

      },

},


 mounted () {
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
    //this.$Progress.finish()
  },
  created () {
    //  [App.vue specific] When App.vue is first loaded start the progress bar


    if(localStorage.getItem("_datauser" )== null){
      window.location.href = '/data/login';
      }
         if(this.$route.query.SUPSHOWS_THA1100){

             alert("راح امشي معك خطوة بخطوة :   ممتاز جدا أدخل جميع بياناتك الان ")


    }
    axios.post('/api/datacv/datacv_me_select.php', Qs.stringify({token:JSON.parse(localStorage.getItem("_datauser")).token,iduser:JSON.parse(localStorage.getItem("_datauser")).iduser}))
    .then(res => {
            this.$nuxt.$loading.start()

      if(res.data ===" Erroor-405"){

        localStorage.removeItem("_datauser")
       window.location.href = '/data/login';
      }
      this.test =JSON.parse(res.data.test)
      this.courses =JSON.parse(res.data.courses)
      this.backends =JSON.parse(res.data.backends)
      this.enjazs =JSON.parse(res.data.enjazs)
      this.homedate =JSON.parse(res.data.homedate)
      this.homedate.tellyour=this.homedate.tellyour.split("[nl]").join("\n");
      this.value =JSON.parse(res.data.value)
      this.keps =JSON.parse(res.data.keps)
this.showe = false;//لودكن شغال

      this.$nuxt.$loading.finish()


    })
    .catch(err => {
      console.error(err);
      this.showe = false;//لودكن شغال
      this.$nuxt.$loading.finish()



    })

  },





}



</script>

<style  scoped>
.cv{
    /*height: 500px;*/
    direction: rtl;
      font-family: "Cairo", sans-serif;


}
@media  screen and (max-width: 788px) {
  .nav{

    padding: 5px;
    /* position: absolute; */
    overflow: scroll;
    -webkit-overflow: scroll;
    overflow-y: hidden;
        flex-wrap: inherit;
        min-height:90px;
    text-align: center;
    white-space:nowrap;
overflow: scroll;
-webkit-overflow-scrolling: touch;
  }

}
.sr-only{
  position: static;
  height: auto;
  width: auto;
  color: #DDAF67;
  margin: 0px;
  padding: 3px;
}
.stylemoa{
      box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    width: 100%;
    padding: 15px;
    margin-bottom: 50px;
}
.contentcv{
      width: 90%;
    margin: 25px auto;
    padding: 9px;
    direction: rtl;
    text-align: center;
   /* overflow-y: scroll; */
    /*height: calc(100vh - 200px);*/
}
.downup{
  cursor: pointer;

    height: 18px;
    line-height: 5px;
    margin: 5px;

}
/* width */
::-webkit-scrollbar {
  width: 10px;
}
::scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}
 ::scrollbar-track {
  background: #f1f1f1;
}
/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}
::scrollbar-thumb {
  background: #888;
}
/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}/* width */
::-webkit-scrollbar {
  width: 10px;
}

/* Track */
::-webkit-scrollbar-track {
  background: #f1f1f1;
}

/* Handle */
::-webkit-scrollbar-thumb {
  background: #888;
}

/* Handle on hover */
::-webkit-scrollbar-thumb:hover {
  background: #555;
}
.mou{
    display: none;;
}
.nav{
    height: 60px;
}
.nav-item

{
   margin: auto auto -1px auto;
   color:#1b1b2f;

}
.nav-item a

{
   color:#1b1b2f;
   font-size: 15px;
   font-weight: bold;

}

.highlight{

 border-bottom:3px solid red;
}
.toggleDataCV{
    display: block;
}




</style>
