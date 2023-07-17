import { createStore } from 'vuex'

export default createStore({
  state: {
			products:[],
      indToShow:localStorage.indx,
      indToEdit:localStorage.y,
      favProds:[],
      category:'',
      isCat:1,
      serProd:''
  },
  getters: {
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
