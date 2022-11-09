import { createWebHistory, createRouter } from 'vue-router';

const routes = [
	{
		path: '/',
		name: 'loginComponent',
        component: () =>
            import ( /* webpackChunkName: "loginComponent" */ '../components/HelloWorld.vue'),
	},
];

const router = createRouter({
	history: createWebHistory(),
	routes, //same --- > routes:routes
})
export default router