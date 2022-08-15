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

</div>


  </div>
</template>

<script>


export default {

  name: "HelloWorld",

  data(){
    return{
      loaded:false,
      paidFor:false,
      switchs:0,
      
    }
  },

  methods:{

   

  Getstarted(){

    this.$router.push({path:"data/Login",query:{SUPSHOWS_THA1100:"GetStarted"}})

  }

  },
  

  }






</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped >
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
