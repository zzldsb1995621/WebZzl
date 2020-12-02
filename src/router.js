import Vue from 'vue'
import Router from 'vue-router'
import movie from './views/Movie.vue'
import city from './views/City.vue'
import nowPlaying from './views/NowPlaying.vue'
import comingSoon from './views/ComingSoon.vue'
import search from './views/Search.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path:'/',
      redirect:movie
    },
    {
      path:'/movie',
      name:movie,
      component:movie,
      children:[
        {
          path:'/movie/city',
          name:city,
          component:city
        },
        {
          path:'/movie/nowPlaying',
          name:nowPlaying,
          component:nowPlaying
        },
        {
          path:'/movie/comingSoon',
          name:comingSoon,
          component:comingSoon
        },
        {
          path:'/movie/search',
          name:search,
          component:search
        },
        {
          path:'',
          redirect:'/movie/NowPlaying'
        }
        
      ]
    },
    {
     path:'/cinema',
     component:()=>import('./views/Cinema.vue')
    },
    {
      path:'/mine',
      component:()=>import('./views/Mine.vue')
    },
    {
      path:'/login',
      component:()=>import('./views/Login.vue')
    }
  ]
})
