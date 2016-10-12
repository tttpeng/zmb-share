<template>
  <div id="app">    
    <div class="cov-nav" />
    <router-view></router-view>
  </div>
</template>

<script>
  import Hello from './components/Hello'

  export default {
    components: {
      Hello
    }
  }
</script>

<style>
  html {
    /*height: 100%;*/
  }

  body {
    /*display: flex;*/
    /*justify-content: center;*/
    /*height: 100%;*/
  }

  #app {
    /*color: #2c3e50;*/
    /*margin-top: 0px;*/
    /*max-width: 800px;*/
    /*font-family: Source Sans Pro, Helvetica, sans-serif;*/
  }

  #app a {
    /*color: #42b983;*/
    /*text-decoration: none;*/
  }

  .logo {
    width: 100px;
    height: 100px
  }

  .cov-nav {
    /*position: fixed;*/
    height: 64px;
    /*width: 100%;*/
    background-color: #42b983;
    /*top: 0;*/
    /*left: 0;*/
    /*z-index: 2;*/
    /*font-size: 1.5rem;*/
    /*color: #fff;*/
  }
</style>
