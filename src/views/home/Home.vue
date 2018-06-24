<template>
	<div class="home">
		<heador :city="city"/>
		<banner :list="bannerList"/>
		<icons-menu :list="iconsMenuList"/>
		<adv :list="advList"/>
		<hot :list="hotList"/>
		<like :list="likeList"/>
		<weekend :list="weekendList"/>
	</div>
</template>

<script>
import Heador from '../../components/Header'
import Banner from '../../components/Banner'
import IconsMenu from '../../components/IconsMenu'
import Adv from '../../components/Adv'
import Hot from '../../components/Hot'
import Like from '../../components/Like'
import Weekend from '../../components/Weekend'
import axios from 'axios'
export default {
	name: 'Home',
	components: {
		Heador,
		Banner,
		IconsMenu,
		Adv,
		Hot,
		Like,
		Weekend
	},
	data() {
		return {
			city: '',
			bannerList: [],
			iconsMenuList: [],
			advList: [],
			hotList: [],
			likeList: [],
			weekendList: []
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
				this.iconsMenuList = data.iconsMenuList
				this.advList = data.advList
				this.hotList = data.hotList
				this.likeList = data.likeList
				this.weekendList = data.weekendList
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.home
		background-color #f5f5f5
</style>
