<template>
  <div class="hello">
    <div v-for="product in products">
      <h1>{{msg}}----{{ product.name }}</h1>    
    </div>  
  </div>
</template>

<script>
  export default {
    data () {
      return {
        msg: this.$route.params.id,
        products: null
      }
    },

    created () {
      this.fetchNews(1)
    },

    methods: {
      fetchNews (id) {
        console.log('!!!--!!!')
        this.$http.get('http://101.201.48.88:6060/new/4')
        .then(response => {
          console.log('success!')
          this.news = response.data.result
          console.log(this.news)
          let list = []
          for (let item of this.news) {
            list.push({
              name: item.name
            })
            console.log(item.name)
          }
          this.products = list
          console.log(this.products)
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
</style>
