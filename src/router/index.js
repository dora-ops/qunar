import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
import Detail from '@/views/detail/Detail'
// import Detail from '@/views/detail/code'
import User from '@/views/user/User'
// import User1 from '@/views/user'
import Login from '@/views/user/login'
import Register from '@/views/user/register'
Vue.use(Router)

export default new Router({
	routes: [{
		path: '/',
		name: 'Home',
		component: Home
	}, {
		path: '/city',
		name: 'City',
		component: City
	}, {
		path: '/detail/:id',
		name: 'Detail',
		component: Detail
    },
    {
		path: '/personalCenter',
		name: 'personalCenter',
		component: User
    },
    {
		path: '/login',
		name: 'login',
		component: Login
    },
    {
		path: '/register',
		name: 'register',
		component: Register
	},
    ],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
