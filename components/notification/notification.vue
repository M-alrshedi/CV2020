<template>
    <div style="display: inline-block; position: absolute; left: 30%;">
           <b-dropdown no-caret   toggle-class="my-classz" menu-class="my-classz"  class="my-classz"  dropdown-toggle="red"  style="margin-top: -6px; "  variant="white"  >
    <template v-slot:button-content style=" width:300px;" >
      <span  @click="readed" style="color: #deba92;font-weight: bold; font-size: 16px;" > <span  v-if="notificationsdhow" style="position: absolute; left: 0; top: 0; height: 10px; max-width: 10px !important; display: grid;"  >  <b-badge v-text="numnof" href="#" variant="warning">2</b-badge>
</span> <i class="fa fa-bell" aria-hidden="true"></i>
 </span>

    </template>

    <b-overlay top variant="light" opacity="0.5" :show="show" spinner-variant="primary" spinner-type="grow" spinner-small rounded="lg" style="max-width: 320px;" >
     <b-dropdown-item v-for="(nof , index) in nofs" :key="index" class="itemnfoBIG">
       <div  class="itemnfo">

         <h6 v-text="nof.title">  LOADING</h6>
         <hr>
         <pre v-text="nof.content">  LOADING</pre>
         <div style="width: 100%; height: 100%;" v-html="nof.emad" ></div>

       </div>

     </b-dropdown-item>
      </b-overlay>
  </b-dropdown>


    </div>
</template>

<script>
import axios from 'axios';
import Qs  from  "qs/dist/qs.js";
export default {
    name:"notification",
    data(){
        return{
            show:true,

             notificationsdhow:false,


             nofs:[],
            numnof:"",
            shownof:true

        }
    },
head: {
    // To use "this" in the component, it is necessary to return the object through a function
    title: function () {
      return {
        inner:this.numnof
      }
    },
     style: [
      { type: 'text/css', innerHTML: '.my-classz > ul { left:-110px !important;  height: 340px !important;overflow-y: scroll !important; }', undo: true },
      // ...
    ]
   },
   created(){

if (process.server){}else{
 try {
       var selsf = this
            axios.post('/api/notification/notification.php',Qs.stringify({iduserseach:JSON.parse(localStorage.getItem("_datauser")).iduser}))
            .then(res => {
                this.numnof =""
                this.nofs = res.data.datamsgnof

                 if(res.data.msgsystem == "runnof"){
                //alert("new");
                this.numnof = res.data.numbermsgsystem
                  this.notificationsdhow = true
                setTimeout(function(){
                    this.show = false
                },2000)
            }
                setTimeout(function(){
                    selsf.show = false
                },2000)

            })
            .catch(err => {
                console.error(err);
            })
 }
            catch(err) {
              console.log("error");
}

            setInterval(function (){
              try {

        axios.post('/api/notification/notification.php',Qs.stringify({iduserseach:JSON.parse(localStorage.getItem("_datauser")).iduser}))
            .then(res => {
            console.log(res.data)
            selsf.nofs = res.data.datamsgnof
            if(res.data.msgsystem == "runnof"){
                //alert("new");
                selsf.numnof = res.data.numbermsgsystem
                  selsf.notificationsdhow = true
                setTimeout(function(){
                    selsf.show = false
                },2000)
            }
            })
            .catch(err => {
            console.error(err);
            })
 }
            catch(err) {
              console.log("error");
}
            },50000)


}

   },
    mounted(){


    },

    methods:{

                readed(){
                  try {
                   this.show=true
                  var selsf = this
            axios.post('/api/notification/notification.php',Qs.stringify({iduserseach:JSON.parse(localStorage.getItem("_datauser")).iduser}))
            .then(res => {
                this.numnof =""
                this.nofs = res.data.datamsgnof

                 if(res.data.msgsystem == "runnof"){

                this.numnof = res.data.numbermsgsystem
                  this.notificationsdhow = true
                setTimeout(function(){
                    this.show = false
                },2000)
            }
                setTimeout(function(){
                    selsf.show = false
                },2000)

            })
            .catch(err => {
                console.error(err);
            })

               }

                  catch(err) {
              console.log("error");
}

try {
            axios.post('/api/notification/readnotification.php',Qs.stringify({iduserseach:JSON.parse(localStorage.getItem("_datauser")).iduser}))
            .then(res => {
                console.log(res.data)
                 this.numnof = ""
                  this.notificationsdhow = false
            })
            .catch(err => {
                console.error(err);
            })

                  }

                  catch(err) {
              console.log("error");
}




    },



      }

    }


</script>
<style scope>
     .my-class  {
    height: 500px !important;
    width:100%;
overflow-y: scroll !important;  }
.itemnfoBIG{
  max-width: 300px; min-width: 300px;
}
.itemnfo{
  border: 1px solid black; padding: 5px; text-align: center;
}
</style>
