<template>
	<div class="home">
		<header-searchbar :city="city"/>
	</div>
</template>

<script>
import HeaderSearchbar from '../../components/HeaderSearchbar'
import axios from 'axios'
export default {
	name: 'Home',
	components: {
		HeaderSearchbar
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
