<template>
	<div class="detail">
		<HeaderDefault :title="title" :style="opacityStyle" />
		<headfigure :figureName="figureName" :figureImgCover="figureImgCover" />
		<baseinfo />
	</div>
</template>

<script>
import HeaderDefault from '@/components/HeaderDefault'
import Headfigure from './components/Headfigure'
import Baseinfo from './components/Baseinfo'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {
		HeaderDefault,
		Headfigure,
		Baseinfo
	},
	data() {
		return {
			title: '',
			figureName: '',
			figureImgCover: '',
			headerDefaultVisible: false,
			opacityStyle: {
				opacity: 0
			}
		}
	},
	mounted() {
		this.getDetailInfo()
	},
	methods: {
		getDetailInfo() {
			axios.get('/api/mock/detail.json', {
				params: {
					id: this.$route.params.id
				}
			}).then(this.getSuccess)
		},
		getSuccess(res) {
			res = res.data
			console.log(res)
			if (res.msg && res.data) {
				let data = res.data
				this.title = data.figure.title
				this.figureName = data.figure.name
				this.figureImgCover = data.figure.imgCover
			}
		},
		scrollHandle() {
			var scrollTop = document.documentElement.scrollTop
			console.log(scrollTop)
			if (scrollTop > 10) {
				let opacity = scrollTop / 100
				opacity = opacity > 1 ? 1 : opacity
				this.opacityStyle = { opacity }
				this.headerDefaultVisible = true
			} else {
				this.headerDefaultVisible = false
				if (scrollTop == 0) {
					this.opacityStyle = { opacity: 0 }
				}
			}
		}
	},
	activated() {
		window.addEventListener('scroll', this.scrollHandle)
	}
}
</script>

<style lang="stylus" scoped>
	.header-default
		position fixed
		top 0
		right 0
		width 100%
		z-index 2
		box-sizing border-box
</style>
