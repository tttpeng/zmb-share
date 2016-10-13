<template>
  <div v-if="downBarShow" class="downBar" >
    <div class="icon">
      <img style="width: 100%;margin-top: 0; border-radius: 5px" src="http://o1wh05aeh.qnssl.com/image/view/app_icons/c6ae05f6c31f5f06fdc7e9e3f61830f0/120" alt="" >
    </div>
    <div class="appTitle" >肿么办</div>
    <div  v-on:click="closeDownloadBar" class="closeButton">
      <img src="http://i1.piimg.com/4851/c01782ce05014782.png" alt="" style="height:100%;margin-top: 0;">
    </div>
    <div v-on:click="downloadApp" class="downButton">
      <img src="http://i1.piimg.com/4851/58bbe97f7d3b661e.png" alt="" style="width: 100%;margin-top:0">
    </div>
  </div></template>
  <script>
    export default {
      data () {
        return {
          downBarShow: true
        }
      },

      methods: {
        downloadApp: function (event) {
          window.location.href = 'http://www.pgyer.com/zhongmebanx'
        },
        closeDownloadBar: function (event) {
          if (this.downBarShow) {
            this.downBarShow = false
          }
        }
      }
    }
  </script>

  <style scoped>

    .downBar {
      width: 100%;
      height: 5rem;
      background: rgba(0,0,0,0.7);
      overflow: hidden;
      position: fixed;
      left: 0;
      bottom: 0;    
    }    

    .icon {
      float: left;
      margin-left: 20px;
      margin-right:7px;
      width:3rem;
      height: 3rem;
      margin-top: 1rem;
    }
    .appTitle {
      font-size: 12px;
      color: #fff;
      height: 100%;
      line-height: 5rem;
    }

    .downButton {
      float: right;
      margin-top: -4rem;
      width:6rem;
      height: 100%;
      margin-right: 5rem;

    }

    .closeButton {
      margin-top: -3rem;
      height: 1rem;
      margin-right:1.5rem;
      /*margin-top: -2rem;*/
      float: right;
    }
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
