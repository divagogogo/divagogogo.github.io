import Vue from 'vue'
import Router from 'vue-router'
import index from '../views/index.vue'
import photoList from '../views/photoList.vue'
import info from '../views/info.vue'
import photoIndex from '../views/photoIndex.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'index',
      component: index,
      meta: {
        keepAlive: true
      }
    }, 
    {
      path: '/photolist/:name',
      name: 'photo',
      component: photoList
    }, 
    {
      path: '/info',
      name: 'info',
      component: info
    },
    {
      path: '/photoindex/:name/:position/:n',
      name: 'photoindex',
      component: photoIndex
    }
  ]
})
