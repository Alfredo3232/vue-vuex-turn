import { createStore } from "vuex";

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

let store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    },
    state() {
        return {
            isLoggedIn: false
        };
    },
    mutations: {
        login(state) {
            state.isLoggedIn = true;
        },
        logout(state) {
            state.isLoggedIn = false;
        }
    },
    actions: {
        login(context) {
            context.commit('login');
        },
        logout(context) {
            context.commit('login');
        }
    },
    getters: {
        isAuthenticated(state) {
            return state.isLoggedIn;
        }
    }
});

export default store;