// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import User from './components/User'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

Vue.use(VueResource)
Vue.use(VueRouter)
Vue.http.options.xhr = {withCredentials: true}
// const User = {
//   template: `<div>User {{ $route.params.id }}</div>`
// }

const router = new VueRouter({
  routes: [
    { path: '/user/:id', component: User }
  ]
})

router.mode = 'history'

/* eslint-disable no-new */
new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
