import { createStore } from "vuex";

import productsModule from './modules/products.js';
import cartModule from './modules/cart.js';

let store = createStore({
    modules: {
        prods: productsModule,
        cart: cartModule
    }
});

export default store;