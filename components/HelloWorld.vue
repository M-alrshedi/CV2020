<template>
  <div class="hello">

<div class="content">
  <!-- <marquee behavior="" direction="">
        <ul>

        <li style="display: inline-block; ">5$</li> -
       <li style="display: inline-block;color:#00bcd4;">
         <ul><li style="display: inline-block;font-weight: bolder; ">SAAD</li>
           <li style="display: inline-block; "> :  أخر دعم</li>

         </ul>

       </li>
       <li style="color:red;display: inline-block;margin:0 10px;">  || </li>
       <li style="color:red;display: inline-block;">   </li>
       <li style="display: inline-block;">500$</li> -
       <li  style="display: inline-block;color:#00bcd4;">
         <ul><li style="display: inline-block;font-weight: bolder; ">يبليب</li>
           <li style="display: inline-block; "> :  اعلى دعم</li>

         </ul>

       </li>


     </ul>

      </marquee> -->
  <br>
  <div class="pagecontent">


  <br>
  <h2>ابدأ الان وصمم سيرتك</h2>
<br> <br>
<button @click="Getstarted" class="startman"><h5 style=" color:white;    line-height: 35px;">بدا من هنا</h5></button>

<br> <br><br> <br>

<img src="https://hef.gov.sa/wp-content/uploads/2018/11/vision-2030-logo-png-2.png" width="120" height="120" alt="">

</div>
<div class="page2content">
  <div class="sliderviews">

   <div style="width: 100%; margin:auto;"    v-for="(review,index) in reviews" :key="index" class="rev" :style="review.showviews"  >

    <div  style="padding: 25px;" class="imgreviews"><img style="border-radius: 50px;" src="https://albaqmigroup.com/wp-content/uploads/2016/11/default-man.jpg" width="90" height="90" alt=""></div> <p></p>
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


  </div>
</template>

<script>


export default {
props:["reviews"],
  name: "HelloWorld",

  data(){
    return{
      loaded:false,
      paidFor:false,
      switchs:0,
      
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

  Getstarted(){

    this.$router.push({path:"data/Login",query:{SUPSHOWS_THA1100:"GetStarted"}})

  }

  },
  mounted () {

  setInterval(this.testy , 20000)


  },

  }






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style >
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
