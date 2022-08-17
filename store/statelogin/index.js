
export const state = () => ({
 user:{
  username:"",
      token:"",
      iduser:"",
      email:"",
      date:""
 }
})

export const getters = {
  getstateuser(state) {
   let obj = {
    username: state.user.username,
    token: state.user.token,
    iduser: state.user.iduser,
    email: state.user.email,
    date: state.user.date,
    }
    return obj
  }
}

export const mutations = {
  insertdata(state,playlod) {
    if(playlod){
      state.user.username = playlod.username
      state.user.token = playlod.token
      state.user.iduser = playlod.iduser
      state.user.email = playlod.email
      state.user.date = playlod.date

    }
  }
}

export const actions = {
   actinsertdata({commit},playlod) {
     try {
       if(playlod != false){
        commit('insertdata', playlod)
       }else{
        localStorage.removeItem("_datauser");
        commit('insertdata', "")
       }
     
     } catch (error) {
       console.log(error)
     }
 
  }
}