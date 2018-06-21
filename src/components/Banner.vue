<template>
	<div class="banner">
		<swiper :options="swiperOption">
			<swiper-slide v-for="item of list" :key="item.id">
				<img :src="item.url" />
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'Banner',
	props: {
		list: Array
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				},
				autoplay: true,
				loop: true
			}
		}
	}
}
</script>

<style lang="stylus" scoped>
	.banner >>> .swiper-pagination-bullet
		width 12px
		height 12px
		margin 0 8px
		background: #fff
		border-radius 12px
	.banner >>> .swiper-pagination-bullet-active
		background #fff
	.banner
		height 200px
	.swiper-slide
		img
			width 100%
</style>