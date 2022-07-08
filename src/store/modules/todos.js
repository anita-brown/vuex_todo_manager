import axios from 'axios';

const state = {
  todos: [],
};

const getters = {
  allTodos: state => state.todos
};
console.log("%%%", getters);

const actions = {
    async fetchToDo() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/todos')
        console.log("data",response.data)
    }
};

const mutations = {};

export default {
  state,
  getters,
  actions,
  mutations,
};
