import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/home/Home'
import City from '@/views/city/City'
import Detail from '@/views/detail/Detail'
// import Detail from '@/views/detail/code'
import User from '@/views/user/User'
// import User1 from '@/views/user'
import Login from '@/views/user/login'
import addPost from '@/views/comment/addPost'

import forum from '@/views/forum/forum'
import addforum from '@/views/forum/addPost'
import View from '@/views/home/View'
import order from '@/views/user/myCourse'
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
		path: '/order',
		name: 'order',
		component: order
    },
    {
		path: '/login',
		name: 'login',
		component: Login
    },
    {
		path: '/addPost/:id',
		name: 'addPost',
		component: addPost
    },
    {
		path: '/register',
		name: 'register',
		component: Register
    },
    {
		path: '/forum',
		name: 'forum',
		component: forum
    },
    {
		path: '/view/:id',
		name: 'view',
		component: View
    },
    {
		path: '/addforum',
		name: 'addforum',
		component: addforum
	},
    ],
	scrollBehavior (to, from, savedPosition) {
		return { x: 0, y: 0 }
	}
})
