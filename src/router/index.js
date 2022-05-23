// skl-blog/src/router/index.js
import { createRouter, createWebHistory } from 'vue-router';
import Home from '../components/Home.vue';
import System from '../components/System.vue';
import Management from '../components/Manage.vue';
import Agricultural from '../components/son/agricultural.vue';
import Merdical from '../components/son/merdical.vue';
import Commerce from '../components/son/Commerce.vue';
import Industrial from '../components/son/industrial.vue';
const routes = [{
        path: '/manage',
        name: 'Manage',
        component: Management,
    },
    {
        path: '/',
        name: 'System',
        component: System,
    },
    {
        path: '/home',
        name: 'home',
        component: Home,
        children: [{
                path: 'agricultural',
                name: 'Agricultural',
                component: Agricultural,
            },
            {
                path: 'merdical',
                name: 'Merdical',
                component: Merdical,
            },
            {
                path: 'commerce',
                name: 'Commerce',
                component: Commerce,
            },
            {
                path: 'industrial',
                name: 'Industrial',
                component: Industrial,
            }
        ]
    },
];

const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;