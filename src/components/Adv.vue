<template>
	<div class="adv">
		<ul>
			<li v-for="(item, index) of list" :key="index">
				<img :src="item.url">
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Adv',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	.adv
		margin 24px 0
		background-color #fff
		ul
			display flex
			position relative
			&:before
				content ''
				position absolute
				top 0
				left 0
				width 100%
				height 2px
				background-color #e0e0e0
				transform scaleY(.5)
			&:after
				content ''
				position absolute
				left 0
				bottom 0
				width 100%
				height 2px
				background-color #e0e0e0
				transform scaleY(.5)
			li
				width 50%
				position relative
				&:first-child
					&:before
						content ''
						position absolute
						top 0
						right 0
						width 2px
						height 100%
						background-color #e0e0e0
						transform scaleX(.5)
				img
					width 100%
</style>
