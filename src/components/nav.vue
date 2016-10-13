<template>
  <div class="nav">
    <div id="nav-title">肿么办</div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: 'Hello Vue!'
      }
    }
  }
</script>

<style scoped>


 .nav {
  height: 5rem;
  background-color: #42b983;
  top: 0;
  left: 0;
  z-index: 2;
  /*border-bottom: 1px rgb(230, 230, 230) solid;*/
  color: #fff;
  line-height: 5rem;
  box-shadow: 0rem 0rem 0rem 1rem rgba(0,0,0,.05);


}

#nav-title {
  font-size: 2rem;
  text-align: center;
  display: block;
  margin: auto;
  width: 202px;
  height: 100%;
}



</style>
