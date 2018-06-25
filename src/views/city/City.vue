<template>
	<div class="city">
		<city-header title="城市选择"/>
		<city-content :hotCities="hotCities" :cities="cities"/>
	</div>
</template>

<script>
import CityHeader from './CityHeader'
import CityContent from './CityContent'
import axios from 'axios'

export default {
	name: 'City',
	components: {
		CityHeader,
		CityContent
	},
	data() {
		return {
			hotCities: [],
			cities: {}
		}
	},
	mounted() {
		this.getCityInfo()
	},
	methods: {
		getCityInfo() {
			axios.get('/api/mock/city.json').then(this.getSuccess)
		},
		getSuccess(res) {
			res = res.data
			console.log(res)
			if (res.msg && res.data) {
				let data = res.data
				this.hotCities = data.hotCities
				this.cities = data.cities
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.city
		background-color #f5f5f5
</style>
