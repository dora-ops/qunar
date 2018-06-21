<template>
	<div class="home">
		<heador :city="city"/>
		<banner :list="bannerList"/>
	</div>
</template>

<script>
import Heador from '../../components/Header'
import Banner from '../../components/Banner'
import axios from 'axios'
export default {
	name: 'Home',
	components: {
		Heador,
		Banner
	},
	data() {
		return {
			city: '',
			bannerList: []
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
				this.bannerList = data.bannerList
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
