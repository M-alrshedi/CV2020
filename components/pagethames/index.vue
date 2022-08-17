<template>
 <div :style="da" class="body">

   <h2  @click="test2"  v-if="showerview" style="color: red; z-index: 99999; position: absolute; right: 0px; margin: auto; top: 0; margin: 25px; background: white; border-radius: 100px; width: 40px; text-align: center;">X</h2>
    <div v-if="show"  class="con">
        <div itemtype="https://schema.org/Product"  itemscope style="margin: 0 auto;    width: 94%; text-align: center;;" class="row">
<meta itemprop="mpn" content="925872" />
      <meta itemprop="name" content="صفحة الثيمات ياحبي" />
      <div itemprop="review" itemtype="https://schema.org/Review" itemscope>
        <div itemprop="author" itemtype="https://schema.org/Person" itemscope>
          <meta itemprop="name" content="محمد الرشيدي" />
        </div>
        <div itemprop="reviewRating" itemtype="https://schema.org/Rating" itemscope>
          <meta itemprop="ratingValue" content="4" />
          <meta itemprop="bestRating" content="5" />
        </div>
      </div>
      <link itemprop="image" href="https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-cv-icon-by-vexels.png" />
            <div  v-for="(te,index) in imgObj" :key="index"  class=" boxpage col-md-4"><div :key="index"   @click='test3(gotothame  = te.name),clickedlod'>

 

     <!-- with customer error and loading -->
     <img v-lazy="te"/>
     <div v-lazy:background-image="te"></div>






            التصميم {{index +1  }}


            </div>
            <hr>
            <div class="row">
              <div style="display: flex; margin: 5px auto;">
                  <div class="sm-6"><button  type="button" class="btn btn-success" style="margin:3px 0; "  :key="index" @click='test3(gotothame  = te.name)'> <p style="margin-top: 0; margin-bottom: 0;" v-text="te.state == '1' ? 'اختيار'  : 'قريبا' "></p> </button></div>


                  <div class="sm-6"  ><button  type="button" class="btn btn-light" style="margin:3px 0;"  :key="index" @click='test(imgera  = te.src)'>عرض التصميم</button></div>

            </div>
            </div>

    </div>



  </div>
    </div>
    <transition  name="list">
    <nuxt-child style="margin: 0; text-align: center;transition: opacity  5s all ease-in-out;" :imagethame="imgerview" v-if="showerview"></nuxt-child>
    </transition>
    <div style="text-align:center;" v-if="!show"> LODING . . . </div>
 </div>
</template>

<script>

export default {
    name:"PageThames",
        // parent
        scrollToTop: true,
  head:{
      title: 'أجمل الثيمات',
    separator: '-',
    complement: 'جاهزة لك',

  //omited

  meta: [
       { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'google-site-verification', content: 'xwAmzlqPiamAvvhDnyE8wJ9GYDNt16tz4Eg2s'},
      { name: 'application-name', content: 'أجمل ثيمات سيرة ذاتية' },
      { name: 'keywords', content: 'السيرة الذاتية ,  cv  , سي في , سيرة ذاتية ,سيرة ذاتية جاهزة ,ABS9797' },
      { hid:'thamespage',  name: 'description', content: 'نماذج تصاميم السيرة الذاتية بين يديك' }, // id to replace intead of create elementeate element
      // ...
      // Twitter
      { name: 'twitter:title', content: 'أجمل ثيمات سيرة ذاتية' },
      { name: 'twitter:card', content: 'summary_large_image' },
      { name: 'twitter:site', content: '@suplex_math' },
      { name: 'twitter:description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      { name: 'twitter:image', content: 'https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-cv-icon-by-vexels.png' },
      // with shorthand
      { n: 'twitter:description', c: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه'},
      // ...
      // Google+ / Schema.org
      { itemprop: 'name', content: 'السيره الذاتية - جاهزة لك' },
      { itemprop: 'description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      // ...
      // Facebook / Open Graph
      { property: 'fb:app_id', content: '123456789' },
      { property: 'og:title', content: 'أجمل ثيمات سيرة ذاتية' },
      // with shorthand
      { property: 'og:title', content: 'أجمل ثيمات سيرة ذاتية' },
      { property: 'og:description', content: 'موقع سيرتك يجهز لك سيرتك الذاتية بكل اناقه' },
      { property: 'og:url', content: 'http://siratk.me/pagethames' },
      {property: 'og:image', content: 'https://images.vexels.com/media/users/3/140030/isolated/preview/521136d25b37386f49728b93d2e4e6fa-cv-icon-by-vexels.png' },
      { property: 'og:type', content: 'website' },
      // ...
    ],
    // style:[
    //   { type: 'text/css', innerHTML: 'body { background-color: #f8dc88;} .my-classz > ul { left:-110px !important;  height: 340px !important;overflow-y: scroll !important; }', undo: true },
    //   // ...
    // ],
  },
    data(){

    return{
        nof:null,
        title:"Thames",
        imgUrl: require('./imagethame/1.png') ,// String
        imgerview:"",
        showerview:false,
        da:'background-color: #f8dc88;',
        show:true,
        srcs:"sss",
        imgObj: [

          {
        src:require('./imagethame/1.png'),
        name:"thame_1",
        error: require('./imagethame/404.jpg'),
        //loading: require('./imagethame/loading.gif')
        loading:"https://abs.twimg.com/a/1496350504/img/t1/Spinner-Dots-30fps-200px.gif",
        state:"1"
      },

       {
        src:require('./imagethame/2.jpg'),
        name:"",
        error: require('./imagethame/404.jpg'),
        //loading: require('./imagethame/loading.gif')
        loading:"https://abs.twimg.com/a/1496350504/img/t1/Spinner-Dots-30fps-200px.gif",
        state:"0"

      },





      ]
    }

},


methods:{
clickedlod(){
    this.show = false;
    this.da = "background-color: WHITE;";
},
test(imgera){
  this.showerview = true
  this.show = false
  this.imgerview=imgera


},
test2(){
  this.showerview = false
    this.show = true
    this.da='background-color: #f8dc88;'

},
test3(gotothame){

  this.$router.push("/pagethames/"+gotothame)
}


}

}
</script>
<style scope>
*{
    margin: 0;
    padding: 0;
}
.body{
width: 100%;;

    height: auto;

}

.boxpage{
    text-align: center;
    padding: 3px;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2);
    width: 40%;
    margin: 5px auto;
    position: relative;
}
.boxpage:hover{

  box-shadow: 0 8px 16px 0 rgba(0,0,0,0.2);

}
.boxpage img{
    width: 100%;    padding: 10px;height: 400px;


}

@media only screen and (max-width:1000px) {



.boxpage img{
    max-width: 100%; min-width: 100%;    padding: 10px;max-height: 300px ;min-height: 300px ;


}
}
</style>

