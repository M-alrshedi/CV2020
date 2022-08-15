<template>
    <div class="bodyviewingers"  style="position: absolute; background:black; height: 100vh; top: 0; width: 100vw;">
        <h2 style="color:white" @click="closeit" >   </h2><br>
         
        <img :src="imagethame" :style="styleformme" class="viewingers" >
        

      
        
    </div>
</template>


<script>
export default {
    name:"viewimger",

props:['imagethame','showerview'],
    data(){
        return{
            
            show:"true",
            styleformme:"height:90%; width:30%; margin: auto; position: relative;  "

    }
 },
 methods:{
     closeit(){
         this.show = false
         
const self =this
         setTimeout(function(){
             self.showerview = false
         },500)
     }
 }
}
</script>
<style  scoped>
@media only screen and (max-width:800px){
.viewingers{
    width: 90% !important;
}


}
.bodyviewingers{
    transition: opacity  5s all ease-in-out;
} 
</style>