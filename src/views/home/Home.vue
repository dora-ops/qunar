<template>
	<div class="home">
		<searchbar :city="city"/>
		<banner :list="bannerList"/>
		<icons-menu :list="iconsMenuList"/>
		<adv :list="advList"/>
		<hot :list="hotList"/>
		<like :list="likeList"/>
		<weekend :list="weekendList"/>
        <bottom v-bind:switchValue="switchValue"></bottom>
	</div>
</template>

<script>
import Searchbar from '../../components/Searchbar'
import Banner from '../../components/Banner'
import IconsMenu from '../../components/IconsMenu'
import Adv from '../../components/Adv'
import Hot from '../../components/Hot'
import Like from '../../components/Like'
import bottom from '../../components/bottom'
import Weekend from '../../components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
import { customers,likelist } from "@/sqlMap.js"
export default {
	name: 'Home',
	components: {
		Searchbar,
		Banner,
		IconsMenu,
		Adv,
		Hot,
		Like,
        Weekend,
        bottom
	},
	data() {
		return {
			lastCity: '',
			bannerList: [],
			iconsMenuList: [],
			advList: [],
			hotList: [],
			likeList: [],
            weekendList: [],
            switchValue: 1,
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
            axios.post('action',{sql:likelist.getAll}).then(res=>{
                this.likeList=res.data
            })
			// axios.get('/api/mock/data.json?city=' + this.city).then(this.getSuccess)
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
