import { createRouter, createWebHistory } from 'vue-router'

import todoapp from './components/todoapp.vue'
import testVueRouter from './components/testVueRouter.vue'

const routes = [
    {
        path: '/',
        component: todoapp
    },
    {
        path: '/test',
        component: testVueRouter
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
