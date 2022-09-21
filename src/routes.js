import {createRouter, createWebHashHistory} from "vue-router";
import HomePage from './pages/home';
import AboutPage from './pages/about';
import NotFound from './pages/page404';

const routerHistory = createWebHashHistory();

const routers = createRouter({
	history: routerHistory,
	routes: [
		{
			path: '/',
			name: 'home',
			component: HomePage,
		},
		{
			path: '/about',
			name: 'about',
			component: AboutPage,
		},
		{
			path: '/:CatchAll(.*)',
			name: '404',
			component: NotFound,
		},
	]
})

export default routers;