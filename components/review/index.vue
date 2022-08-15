<template>
<div >
    <div  id="reviewsi" style="width: 98%; margin: auto;">
        
        <div  class="backgroundre"></div>
     <div class="mt-6">
    <b-card-group   deck class="mb-6">
  
      <b-card   border-variant="dark" header="قـيم تجربتك" align="center">

       <div @click="closedreview" style="position: absolute; top: 10px; right: 25px; font-weight: bold;cursor: pointer;">X</div>
            <div v-if="show" >
            <h6 for="text"> ادخل تعليق ( ليس اجباري ) </h6>
            <textarea dir="rtl" v-model="comment" style="width:80%;" name="" id="" cols="4" rows="4" ></textarea>
            <br>
            <br>
                <b-form-rating variant="warning"  v-model="value" color="indigo" class="mb-2"></b-form-rating>
                     <hr>
             <b-button @click="sumbmit"  style="width: 120px;" variant="warning">تقيم</b-button>
</div>
 <div v-if="!show">
        <h1>
            شكرا لك  على التقيم
        </h1>
    </div>
      </b-card>
    </b-card-group>
  </div>
    </div>

   
    
    </div>
</template>

<script>
import axios from "axios";
import Qs  from  "qs/dist/qs.js";
export default {
    name:"review",
   

    data(){
        return{

            value:0,
            showreview:false,
            comment:"",
            show:true

            

        }
    },
    methods:{
        closedreview(){
            this.$emit('updeatereivw',false);
            

        },

        sumbmit(){
            
            if(this.value !== 0 && localStorage.getItem("_datauser") != null){
               
                axios.post('/api/reviews/review.php', Qs.stringify({comment_review:this.comment,star_review:this.value,token:JSON.parse(localStorage.getItem("_datauser")).token,iduser:JSON.parse(localStorage.getItem("_datauser")).iduser,username:JSON.parse(localStorage.getItem("_datauser")).username}))
                .then(res => {
                    console.log(res.data)
                    this.show = false
                })
                .catch(err => {
                    console.error(err); 
                })
                

            }

        }

    }
}
</script>
<style >
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
</style>