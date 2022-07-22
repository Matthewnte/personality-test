import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    personalityType: '',
    questions: [],
  },
  mutations: {
    setPersonality(state, personalityType) {
      state.personalityType = personalityType;
    },
    setQuestions(state, questions) {
      state.questions = questions;
    },
  },
  actions: {},
  modules: {},
});
