import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state:{
    products: [
      {name:"马什么梅",price:200},
      {name:"什么冬梅",price:140},
      {name:"马冬什么",price:100},
      {name:"马冬梅",price:60}
    ]
  },
  getters:{
    saleProducts: (state) => {
      var saleProducts = state.products.map(product => {
        return {
          name: '**'+ product.name + '**',
          price: product.price / 2
        }
      });
      return saleProducts;
    }
  },
  mutations:{
    reducePrice: (state,payload) => {
      state.products.forEach(product => {
        product.price -= payload;
      })
    }
  },
  actions:{
    reducePrice:(context,payload) => {
      setTimeout(function() {
        context.commit("reducePrice",payload);
      },2000);
    }
  }
})