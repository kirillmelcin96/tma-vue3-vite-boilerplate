import { createRouter, createWebHistory } from 'vue-router';
import PageIndex from './views/PageIndex.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'index',
            component: PageIndex,
        },
    ],
});

export default router;
