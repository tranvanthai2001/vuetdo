import { createRouter, createWebHistory } from 'vue-router'
import TodoApp from './components/TodoApp.vue'
import AddTask from './components/AddTask.vue'

const routes = [
    {
        path: '/',
        component: TodoApp
    },
    {
        path: '/ip',
        component: AddTask
    },
]

const router = createRouter({
    history: createWebHistory(),
    routes: routes
})

export default router
