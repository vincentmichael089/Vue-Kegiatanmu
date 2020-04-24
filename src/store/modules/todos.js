//import axios from 'axios'

import Axios from "axios"

const  state = {
    todos : []
}

const getters = {
    allTodos: (state)=> state.todos
}

const actions = {
    async fetchTodos({commit}){
        const response = await Axios.get("https://jsonplaceholder.typicode.com/todos")
        console.log(response.data)

        commit('setTodos', response)
    },

    async addTodo({commit}, title){
        const response = await Axios.post("https://jsonplaceholder.typicode.com/todos/",
        {title, completed : false}, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json'
            }
        })

        commit('newTodo', response)
    },

    async deleteTodo({commit}, id){
        await Axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            headers: {
                'Access-Control-Allow-Origin': 'http://localhost:8080',
                'Access-Control-Allow-Credentials': 'true',
                'Content-Type': 'application/json'
            }
        })

        commit('removeTodo', id)
    },

    async filterTodos({commit}, limit){
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/todos?_limit=${limit}`)
        console.log(limit)
        commit('setTodos', response)
    },

    async updateTodo({commit}, todo){
        const response = await Axios.put(`https://jsonplaceholder.typicode.com/todos/${todo.id}`, todo)

        commit('updateTodo', response)
        console.log(response.data)
    }
}

const mutations = {// mutate on commits
    setTodos : (state, response) => (state.todos = response.data), //response is response.data in actions commit
    newTodo: (state, todo) => state.todos.unshift(todo.data),
    removeTodo : (state, id) => state.todos = state.todos.filter(todo => todo.id !== id),
    updateTodo : (state, response) => {
        const index = state.todos.findIndex(todo => todo.id === response.data.id)
        if(index !== -1){
            state.todos.splice(index, 1, response.data)
        }
    }

}

export default {
    state: state,
    getters: getters,
    actions: actions,
    mutations: mutations
}