<template>
  <div class="container">    
    <zmbNav class="cov-nav" />
    <div class="content">
      <router-view></router-view>
    <!-- </div> -->
  </div>
</template>

<script>
  import zmbNav from './components/nav'
  export default {
    components: {
      zmbNav
    }
  }
</script>

<style>
  html {
    font-size: 62.5%;
    font-family: Hiragino Sans GB,Helvetica,Arial,STHeiti,WenQuanYi Micro Hei,sans-serif;
  }
  * {
    padding: 0;
    margin: 0;
  }
  .content {
    max-width: 80rem;
    margin-left: auto;
    margin-right: auto;
    background-color: white;
    margin-left: auto;
    margin-right: auto;
    box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.05);

  }
  .container {
    margin-left: auto;
    margin-right: auto;
  }

  .logo {
    width: 100px;
    height: 100px
  }

  * {
   padding: 0;
   margin: 0;
 }

 .cov-nav {
}
</style>
