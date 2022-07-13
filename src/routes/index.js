import { createRouter, createWebHashHistory } from 'vue-router';
import HomePage from './HomePage'
import GroupPage from './GroupPage'
import PartyPage from './PartyPage'
import NotFound from './NotFound'

export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      component: HomePage
    },
    {
      path: '/group/:id',
      component: GroupPage
    },
    {
      path: '/party',
      component: PartyPage
    },
    {
      path: '/:notFound(.*)',
      component: NotFound
    }
  ]
})