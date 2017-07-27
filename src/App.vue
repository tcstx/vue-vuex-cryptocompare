<template>
  <div id="app" class="container">
    <h1>Crypto Compare</h1>
    <div class="row">
      <div class="jumbotron col-xs-offset-2 col-xs-8">
        <p>
          This website indexes the top 10 cryptocurrencies by market cap (how
          much the sum of all coins is collectively worth), and gives you an easy
          way to compare cryptocurrency performance and rank over the last week.
        </p>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
