import Home from './views/Home.vue'
import NotFound from './views/NotFound.vue'

/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/explore/:uuid',
    component: () => import('./views/Explore.vue'),
  },
  {
    path: '/story/:uuid',
    component: () => import('./views/Story.vue'),
  },
  // {
  //   path: '/about',
  //   meta: { title: 'About' },
  //   component: About,
  //   // example of route level code-splitting
  //   // this generates a separate chunk (About.[hash].js) for this route
  //   // which is lazy-loaded when the route is visited.
  //   // component: () => import('./views/About.vue')
  // },
  { path: '/:path(.*)', component: NotFound },
]
