<template>
  <div>
    <table class="table table-hover">
      <thead>
      <tr>
        <td>Rank</td>
        <td>Name</td>
        <td>Symbol</td>
        <td>Price (USD)</td>
        <td>1H</td>
        <td>1D</td>
        <td>1W</td>
        <td>Market Cap (USD)</td>
      </tr>
      </thead>
      <tbody>
      <tr v-for="coin in coins">
        <td>{{ coin.rank }}</td>
        <td><img v-bind:src="coin.ImageUrl"> {{ coin.name }}</td>
        <td>{{ coin.symbol }}</td>
        <td>{{ coin.price_usd | currency }}</td>
        <td v-bind:style="getColor(coin.percent_change_1h)">
          <span v-if="coin.percent_change_1h > 0">+</span>{{ coin.percent_change_1h }}%
        </td>
        <td v-bind:style="getColor(coin.percent_change_24h)">
          <span v-if="coin.percent_change_24h > 0">+</span>{{ coin.percent_change_24h }}%
        </td>
        <td v-bind:style="getColor(coin.percent_change_7d)">
          <span v-if="coin.percent_change_7d > 0">+</span>{{ coin.percent_change_7d }}%
        </td>
        <td>{{ coin.market_cap_usd | currency }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'CrytoTable',
    computed: {
      coins: function () {
        return this.$store.getters.getCoins;
      }
    },
    methods: {
      getColor: function (num) {
        return num > 0 ? "color:green;" : "color:red;"
      },
    },
    created: function () {
      this.$store.dispatch('getCoinData');
      setInterval(function() {
        this.$store.dispatch('getCoinData');
      }.bind(this), 60000);
    }
  }
</script>

<style scoped>

</style>
