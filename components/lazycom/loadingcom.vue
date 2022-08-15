<template >
    <div >
        <div id="lodinglaz">
            
        <img  :src="loadingcom" >
    </div></div>
</template>
<script>
export default {
    name:"lodings",
    data(){

        return{
            loadingcom:require("@/assets/imger/loadingom.gif")
        }
    }
}
</script>
<style >
#lodinglaz{
width:40px  !important; margin:auto;height: 40px !important;  background: white; z-index: 99999;  opacity: 0.9; position: absolute !important; text-align: center !important;
}
#lodinglaz > img {
    width: 40px; height: 40px; /* display: inline; */ /* margin: 0px; */ position: absolute; top: 0; bottom: 0; margin: auto; left: 0; right: 0;

}
</style>