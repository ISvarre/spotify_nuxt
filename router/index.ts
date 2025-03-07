import { createRouter, createWebHistory } from 'vue-router'
import Home from '~/pages/index.vue'
import ArtistId from '~/pages/artist-[id].vue'

const routes = [
    { path: '/', component: Home },
    { path: '/artist/:id', component: ArtistId }
]

const router = createRouter({
    history: createWebHistory(),
    routes
})

export default router