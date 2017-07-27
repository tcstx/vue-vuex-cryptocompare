import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex);

const COIN_MARKET_CAP_URL = "https://api.coinmarketcap.com/v1/ticker/?limit=10";
const CRYPTO_COMPARE_URL = "https://www.cryptocompare.com";

export const store = new Vuex.Store({
  state: {
    _coins: {}
  },
  getters: {
    getCoins: function(state) {
      return state._coins
    }
  },
  mutations: {
    setCoins: function(state, data) {
      state._coins = data;
    }
  },
  actions: {
    getCoinData: function (context) {
      axios.get(CRYPTO_COMPARE_URL + "/api/data/coinlist")
        .then(function(response){
          let coinData = response.data.Data; // Remove.
          axios.get(COIN_MARKET_CAP_URL)
            .then((resp) => {
              resp.data.forEach(function(entry){
                let symbol = entry.symbol;
                symbol = (symbol === "MIOTA" ? "IOT" : symbol);
                symbol = (symbol === "VERI" ? "VRM" : symbol);
                entry.ImageUrl = CRYPTO_COMPARE_URL + coinData[symbol].ImageUrl;
              });
              console.log("Refreshed!");
              context.commit('setCoins', resp.data)
            })
            .catch((err) => {
              console.log(err);
            })
        })
        .catch(function(err) {
          console.log(err)
        })
    }
  }
});
