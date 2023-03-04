// Fichier du store

import { createStore } from 'vuex'

export default createStore({
  state: {
  /*  users: [
      {
        id: 0,
        firstName: 'Lounis',
        lastName: 'Daguelou'
      },
      {
        id: 1,
        firstName: 'Lina',
        lastName: 'Bouallouche'
      },
    ]*/
    notifDisplay: false,
    errorMessage:''
  },
  getters: {
  
    getNotif: (state) => {
      return state.notifDisplay
    },
    getNotifMessage: (state) => {
      return state.errorMessage
    },
    
    /*  getLounis(state) {
      return state.users[0].firstName
    },

    getLina: (state) => (id) => {
      return state.users[id].firstName + ' ' + state.users[id].lastName
    }
    */
    
  },

  mutations: {
    closeNotif(state, payload) {
      state.notifDisplay = payload.display
      state.errorMessage = payload.message
    },

  /*  changeLounis (state, payload) {
      return state.users[0].firstName = payload.firstName
    },
    changeLina (state, payload) {
      return state.users[1].lastName = payload.lastName
    }
    */
  

  },

  actions: {
  /*  changeLina(context, payload) {
      context.state.users[0].firstName = 'Loulou'
      context.commit('changeLina', payload)
    }
    */
  },

  modules: {
  }
})
