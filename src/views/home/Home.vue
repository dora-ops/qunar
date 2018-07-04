<template>
	<div class="home">
		<header-searchbar :city="city"/>
		<banner :list="bannerList"/>
		<icons-menu :list="iconsMenuList"/>
		<adv :list="advList"/>
		<hot :list="hotList"/>
		<like :list="likeList"/>
		<weekend :list="weekendList"/>
	</div>
</template>

<script>
import HeaderSearchbar from '../../components/HeaderSearchbar'
import Banner from '../../components/Banner'
import IconsMenu from '../../components/IconsMenu'
import Adv from '../../components/Adv'
import Hot from '../../components/Hot'
import Like from '../../components/Like'
import Weekend from '../../components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
	name: 'Home',
	components: {
		HeaderSearchbar,
		Banner,
		IconsMenu,
		Adv,
		Hot,
		Like,
		Weekend
	},
	data() {
		return {
			lastCity: '',
			bannerList: [],
			iconsMenuList: [],
			advList: [],
			hotList: [],
			likeList: [],
			weekendList: []
		}
	},
	computed: {
		...mapState(['city'])
	},
	mounted() {
		this.getHomeInfo()
		this.lastCity = this.city
	},
	activated() {
		if (this.lastCity !== this.city) {
			this.lastCity = this.city
			this.getHomeInfo()
		}
	},
	methods: {
		getHomeInfo() {
			axios.get('/api/mock/data.json?city=' + this.city).then(this.getSuccess)
		},
		getSuccess(res) {
			res = res.data
			console.log(res)
			if (res.msg && res.data) {
				let data = res.data
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
