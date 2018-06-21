<template>
	<div class="home">
		<heador :city="city"/>
	</div>
</template>

<script>
import Heador from '../../components/Header'
import axios from 'axios'
export default {
	name: 'Home',
	components: {
		Heador
	},
	data() {
		return {
			city: ''
		}
	},
	mounted() {
		this.getHomeInfo()
	},
	methods: {
		getHomeInfo() {
			axios.get('/api/mock/data.json').then(this.getSuccess)
		},
		getSuccess(res) {
			res = res.data
			console.log(res);
			if (res.msg && res.data) {
				let data = res.data
				this.city = data.city
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
