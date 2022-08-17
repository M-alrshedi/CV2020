export default ({store,app ,redirect }) =>{
    const cookieRes = app.$cookies.get('_datauser')
    if(cookieRes){
        

        
        store.dispatch("statelogin/actinsertdata",cookieRes).then(() =>{
            
            })
    }else{
        store.dispatch("statelogin/actinsertdata",false).then(() =>{
           return redirect("/data/login")
            })
        
    }
   


    
 
}