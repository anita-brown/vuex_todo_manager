// import axios from 'axios';

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos
};
console.log("%%%", getters);

const actions = {
    async fetchToDo({commit}) {

    }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
