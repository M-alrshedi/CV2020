<template >
  <div>
    <div class="page2content">
  <div class="sliderviews">
<div v-if="!loaddatas" style="width: 100%; margin:auto;"      >

    <div  style="padding: 25px;text-align: center; margin: auto; width: 90px; height: 90px;" class="imgreviews"><b-skeleton  width="90" height="90" type="avatar"></b-skeleton></div> <p></p>
    <br>
    <div style="width: 180px;margin: auto;" class="commentreviews"><b-skeleton></b-skeleton></p> </div>
    <div style="margin:auto; text-align:center;" class="byreviewscomment">

<ul>
       <li  style="display: inline-block; font-weight: lighter;font-size: 0.7rem;width: 100px;margin: auto;"><b-skeleton></b-skeleton> </li>

        <li style="display: inline-block; margin:0 2px;font-weight: lighter;font-size: 0.7rem;">  : بواسطة</li>



     </ul>


    </div>


        <div  style="background-color: transparent;  margin:auto;"><b-skeleton></b-skeleton></div>

        </div>
<!-- ****************************************************** -->
   <div  v-if="loaddatas" style="width: 100%; margin:auto;"    v-for="(review,index) in reviews" :key="index" class="rev" :style="review.showviews"  >

    <div  style="padding: 25px;" class="imgreviews"><img style="border-radius: 50px;" src="~/assets/imger/person.jpg" width="90" height="90" alt=""></div> <p></p>
    <div class="commentreviews"><p style="font-size:20px;" v-text="review.commentreviews"></p> </div>
    <div style="margin:auto; text-align:center;" class="byreviewscomment">

<ul>
       <li  v-text="review.byreviewscomment" style="display: inline-block; font-weight: lighter;font-size: 0.7rem;"><p style="font-size:13px;" v-text="review.commentreviews"></p>  </li>

        <li style="display: inline-block; margin:0 2px;font-weight: lighter;font-size: 0.7rem;">  : بواسطة</li>
        
        

     </ul>


    </div>
        <b-form-rating readonly inline  no-border size="col" style="background-color: transparent;  margin:auto;" v-model="review.startreview" color="gold" class=""></b-form-rating>


        </div>



   </div>

 <input type="hidden" v-model="switchs">

  <div style="" class="donet">



<p style="color:red;"> الموقع مجاني ولكن اذا تبي تدفع ادفع  </p>
<button @click="$router.push('/pay')"  class="startman"><h5 style="    line-height: 35px;">ادعمنا</h5></button>

 </div>

  </div>
  </div>

</template>

<script>
import axios from "axios";
  import { BSkeleton } from 'bootstrap-vue'

export default {
//props:["reviews"],
  name: "show_rate",
  components:{
 
   BSkeleton
  },
  data(){
    return{
      loaded:false,
      paidFor:false,
      switchs:0,
      loaddatas:false,
      reviews:[]
      
    }
  },

  methods:{

    testy(){


  if(this.switchs == 0){

  this.reviews[this.switchs].showviews = "display:none"
  this.reviews[1 + this.switchs].showviews = "display:block"

    this.switchs =  this.switchs  +1
    }

else if(this.switchs == 1){

  this.reviews[this.switchs].showviews = "display:none"
  this.reviews[1 + this.switchs].showviews = "display:block"

    this.switchs =  1 + this.switchs
    }

    else if(this.switchs == 2){

  this.reviews[this.switchs].showviews = "display:none"
  this.reviews[2 - this.switchs].showviews = "display:block"

    this.switchs =  2 - this.switchs
    }





 
  },

  

  },
 mounted  () {

 
  
  axios.get("/api/testref/mody.php")
  .then(res => {
    console.log(res.data)
    this.reviews = res.data.datareivew
    
    setInterval(this.testy , 20000)
      this.loaddatas = true
    //  [App.vue specific] When App.vue is finish loading finish the progress bar
  })
  .catch(err => {
    console.error(err);
    this.loaddatas = false
    //  [App.vue specific] When App.vue is finish loading finish the progress bar


  })

  },

  }






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
.b-skeleton-avatar {
    width: 6rem !important;
    height: 6rem !important;
    border-radius: 50%;
}
.hello{
  width:100%;
}
.sliderviews{
  width: 40%; margin:auto;

  height:270px;
  overflow:hidden;
  margin:auto;

}
.donet{
  text-align: center; width: 25%; margin: auto;  background-color: white; border-radius: 25px; padding: 5px 10px;  height: auto; line-height: 40px; z-index: 9999;
}
.donet ul li{
display:inline-block;
margin:0 3px;
}


.content{
  width: 100%;
  margin: 0;
  color: white;
  text-align: center;;
  position: absolute;
  right:0;
  left:0;
 top:90px;

  
}
.pagecontent{
  height: calc(100vh - 90px);
}
.page2content{
  color:black;
  height: 500px;;
  text-align: center;
}
.startman{

  
  margin-top: 23px;
  background-color: transparent;
  color: blac;
  border :1px solid #DEB792;
  width:120px;
  font-size: 14px;

   transition: all .3s   ;
     border-radius: 10px;
     cursor: pointer;

   height: 40px;;

}
.startman:hover{

  background-color: #DEB792;
  color: #090a0f;
  border :1px solid white;
}
.startman:focus{

  background-color: #DEB792;
  color: #090a0f;
  border :1px solid white;
}
</style>
