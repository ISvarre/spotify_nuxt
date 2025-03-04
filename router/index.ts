import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/index.vue'
import Artist from '~/pages/[id].vue'

const routes = [
    { path: '/', component: Home },
    { path: '/artist/:id', component: Artist }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router