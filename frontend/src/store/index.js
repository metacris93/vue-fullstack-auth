import axios from 'axios';
import Vue from 'vue';
import Vuex from 'vuex';
import { 
    getMessages,
    getMessage,
    createNewMessage
} from "../../api/message";
import { 
    login,
    register
} from "../../api/user";
Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        messages: []
    },
    mutations: {
        updateMessages(state, messages) {
            state.messages = messages;
        },
        newMessage(state, message) {
            state.messages.push(message);
        }
    },
    actions: {
        async getMessages({commit}) {
            const messages = await getMessages();
            commit('updateMessages', messages);
        },
        async newMessage({commit}, message) {
            const res = await createNewMessage({message});
            commit('newMessage', res.message);
        },
        async getMessage({commit}, id) {
            return await getMessage(id);
        },
        async register({commit}, data) {
            const user = await register(data);
            localStorage.setItem('token', user.id);
            axios.defaults.headers.common['Authorization'] = user.id;
        }
    }
});
