import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		city: '深圳'
	},
	mutations: {
		updateCity(state, city) {
			console.log(city)
			state.city = city
		}
	}
})