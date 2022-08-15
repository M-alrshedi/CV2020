export const state = () => ({
  for_login: false
})


export const mutations = {
  for_login(state ,element){
    state.for_login=element;

  }
}

export const getters = {
  dataes(state){
    return state.for_login;
  }
}
