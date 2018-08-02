import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import swal from 'sweetalert2'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    questions: []
  },
  mutations: {
    emptyCommit () {

    },
    changeQuestions (state, payload) {
      return state.questions = payload
    }
  },
  actions: {
    getQuestions ({ commit }) {
      let url = 'http://localhost:3000/question/findall'

      console.log('masuk');
      

      axios({
        url: url,
        method: 'get'
      })
      .then(function (response) {
        // console.log(response.data)
        commit('changeQuestions', response.data)

      })
      .catch(function (err) {
        console.log(err)
      })
    },
    upvoteQuestion ({commit}, payload) {
      console.log('masuk upvote')
      let url = 'http://localhost:3000/question/upvote'
  
      axios({
        url: url,
        method: 'post',
        data: {
          questionId: payload.questionId,
          voterId: payload.voterId
        }
      })
      .then(function (response) {
        console.log(response.data)
        // commit('changeQuestions', response.data)
  
      })
      .catch(function (err) {
        console.log(err)
      })
  
      commit('emptyCommit')
    },
    registerUserAccount ({ commit }, payload) {
      
      console.log('masuk register')
      let url = 'http://localhost:3000/users/register'
  
      axios({
        url: url,
        method: 'post',
        data: {
          name: payload.name,
          email: payload.email,
          password: payload.password
        }
      })
      .then(function (response) {
        console.log(response)
        swal('Yeah', 'Complete register a user', 'success')
      })
      .catch(function (err) {
        console.log(err)
      })

      commit('emptyCommit')
    },
    loginUserAccount ({ commit }, payload) {
      let url = 'http://localhost:3000/users/login'
  
      axios({
        url: url,
        method: 'post',
        data: {
          email: payload.email,
          password: payload.password
        }
      })
      .then(function (response) {
        console.log(response)
        localStorage.setItem('token', response.data.token)
        swal('Yeah', 'Login Success', 'success')
      })
      .catch(function () {
        swal('Oops', 'Login Failed', 'error')
      })

      commit('emptyCommit')
    }
  }
})
