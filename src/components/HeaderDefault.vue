<template>
	<div class="header-default">
		<router-link to="/" class="left">
			<div class="iconfont">&#xe600;</div>
		</router-link>
		<div class="center">{{title}}</div>
		<div class="right"></div>
	</div>
</template>

<script>
export default {
	name: 'HeaderDefault',
	props: {
		title: String
	}
}
</script>

<style lang="stylus" scoped>
	.header-default
		color #fff
		height 100px
		padding 0 15px
		background-color #00bcd4
		display flex
		align-items center
		.left, .right
			
			width 100px
			text-align center
			.iconfont
				color #fff
				font-size 48px
		.center
			font-size 36px
			text-align center
			flex 1
</style>
