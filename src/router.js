import { createRouter, createWebHistory } from 'vue-router'
import todoapp from './components/todoapp.vue'
import InputSearch from './components/InputSearch.vue'

const routes = [
    {
        path: '/',
        component: todoapp
    },
    {
        path: '/ip',
        component: InputSearch
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
