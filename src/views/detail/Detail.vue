<template>
	<div class="detail">
		<headfigure :figureName="figureName" :figureImgCover="figureImgCover" />
	</div>
</template>

<script>
import Headfigure from './components/Headfigure'
import axios from 'axios'
export default {
	name: 'Detail',
	components: {
		Headfigure
	},
	data() {
		return {
			figureName: '',
			figureImgCover: ''
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
				this.figureName = data.figure.name
				this.figureImgCover = data.figure.imgCover
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	
</style>
