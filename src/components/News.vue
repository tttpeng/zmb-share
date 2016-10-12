<template>
  <div class="main">
    <div class="headline">
      <h1 class="headline-title onlyheading">{{news.Title}}</h1>
    </div>    
    <div class="detail-content">

      <div class="meta">
        <span class="author"> {{news.Writer}}，</span><span class="bio">{{news.Time}}</span>
      </div>

      <p v-html='newsContent' class="detail">          
      </p>
    </div>      
  </template>

  <script>
    export default {
      data () {
        return {
          msg: 'Hello Vue!',
          news: {}
        }
      },

      created () {
        this.fetchNews(this.$route.params.id)
      },

      computed: {
        newsContent: function () {
          var reg = /style\s*?=\s*?(['"])[\s\S]*?\1/g
          var first = this.news.Content.replace(reg, '')
          var two = first.replace(/<img /g, '<img style = "width:100%"}')
          console.log(two)
          return two
        }
      },

      methods: {
        fetchNews (id) {
          this.$http.get('http://101.201.48.88:6060/new/' + id)
          .then(response => {
            this.news = response.data
          })
          .catch(console.log)
        }
      }
    }
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped>
    h1 {
      color: #42b983;
    }

    .main {
        background-color: #fff;
    }

    .detail {
      color: #444;
      font-size: 17px;
      font-family: Hiragino Sans GB,Helvetica,Arial,STHeiti,WenQuanYi Micro Hei,sans-serif;
      margin-left: auto;
      margin-right: auto;
      width: 100%;
    }

    .headline {
      border-bottom: 4px solid #f6f6f6;
    }

    .headline-title.onlyheading {
      margin: 20px 0;
    }

    .headline-title {
      margin: 20px 0 10px;
      font-size: 21px;
      line-height: 1.2em;
      padding: 0 20px;
    }

    .detail-content {
      padding: 20px;
    }

    .meta {
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      font-size: 17px;
      color: #b8b8b8;
    }

    .meta .author {
      color: #444;
    }
  </style>

