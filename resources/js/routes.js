import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
  		{
  			path: '/home',
  			name:'home',
  			component: require('./views/Home').default
  		},
  		{
  			path: '/about',
  			name:'about',
  			component: require('./views/About').default
  		}
  		// {
  		// 	path: '*',
  		// 	component: require('./views/404').default
  		// }	
  ]
  // mode: 'history' 
})