<template>
	<div class="icons-menu">
		<swiper :options="swiperOption">
			<swiper-slide v-for="(page, index) of pages" :key="index">
				<div class="item" v-for="item of page" :key="item.id">
					<img :src="item.imgsrc" :alt="item.name" />
					<span>{{item.name}}</span>
				</div>
			</swiper-slide>
			<div class="swiper-pagination"  slot="pagination"></div>
		</swiper>
	</div>
</template>

<script>
export default {
	name: 'iconsMenuList',
	props: {
		list: Array
	},
	data() {
		return {
			swiperOption: {
				pagination: {
					el: '.swiper-pagination'
				}
			}
		}
	},
	computed: {
		pages() {
			const pages = []
			this.list.forEach((item, index) => {
				const page = Math.floor(index / 8)
				if (!pages[page]) {
					pages[page] = []
				}
				pages[page].push(item)
			})
			return pages
		}
	}
}
</script>

<style lang="stylus" scoped>
	.icons-menu >>> .swiper-container
		overflow initial
	.icons-menu >>> .swiper-pagination
		bottom: -32px
	.icons-menu >>> .swiper-pagination-bullet
		width 14px
		height 14px
		margin 0 8px
		border-radius 14px
	.icons-menu >>> .swiper-pagination-bullet-active
		background-color rgba(0,175,190,.8)
	.icons-menu
		padding-bottom 48px
		background-color #fff
		.swiper-slide
			display flex
			flex-wrap wrap
			.item
				color #333
				width 25%
				padding-top 20px
				display flex
				flex-direction column
				align-items: center
				img
					width 128px
					height 128px
				span
					font-size 32px
					margin-top 10px
</style>
