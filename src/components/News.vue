<template>
  <div class="main">
    <div class="news-content">
      <div class="headline">
        <h1 class="headline-title">哪些电影有浓厚的建筑人文意味？</h1>
      </div>    </div>    
      <div class="detail-content">
        <div class="meta">
          <span class="author"> 作者：{{news.Writer}}，</span><span class="bio">{{time}}</span>
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
          },
          time: function () {
            var date = new Date(parseInt(this.news.Time))
            console.log(this.news.Time)
            console.log(date)
            return date.getFullYear() + '-' + date.getMonth() + '-' + date.getDate()
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

      .news-title {
        /*border-bottom: 4px solid #f6f6f6;*/
        font-size: 3rem;
        color: #42b983;
        /*position: absolute;*/
        bottom: 4rem;
        /*width: 75rem;*/
        left: 2.5rem;
      }

      .news-content {
        margin-left: auto;
        margin-right: auto;
        /*box-shadow: 0 0 .625rem .08rem rgba(0,0,0,.05);*/
      }

      .detail {
        margin: 10px 0 20px;
        color: #444;
        font-size: 1.6rem;
        line-height: 2;
        font-family: Hiragino Sans GB,Helvetica,Arial,STHeiti,WenQuanYi Micro Hei,sans-serif;
        margin-left: auto;
        margin-right: auto;
        width: 100%;
      }

      .headline {
        border-bottom: 4px solid #f6f6f6;
        padding: 20px;        
        margin-top: 10px;
      }
      .headline-title {
        font-size: 2.3rem;
        line-height: 1.2em;
        color: #222;
      }

      .detail-content {
        padding: 20px;
      }

      .meta {
        white-space: nowrap;
        text-overflow: ellipsis;
        overflow: hidden;
        font-size: 16px;
        color: #b8b8b8; 
      }

      .meta .author {
        color: #444;
      }
    </style>

