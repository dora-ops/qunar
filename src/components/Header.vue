<template>
	<div class="header">
		<router-link to="/" class="header-left">
			<i class="iconfont">&#xe600;</i>
		</router-link>
		<div class="header-center">
			<div class="header-search">
				<i class="iconfont">&#xe86e;</i>
				<span>输入城市/景点/游玩主题</span>
			</div>
		</div>
		<div class="header-right">
			<router-link to="/city" class="city">{{this.$store.state.city}}<i class="iconfont">&#xe602;</i></router-link>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Header'
}
</script>

<style lang="stylus" scoped>
	.header
		color #fff
		height 100px
		padding 0 15px
		background-color #00bcd4
		display flex
		align-items center
		.header-left
			color #fff
			width 100px
			height 100%
			text-align center
			display flex
			align-items center
			justify-content center
			.iconfont
				font-size 48px
		.header-right
			min-width 100px
			height 100%
			display flex
			padding-left 24px
			.city
				color #fff
				font-size 32px
				display flex
				align-items center
				justify-content center
				.iconfont
					font-size 32px
					margin-left 8px
		.header-center
			flex 1
			.header-search
				color #e4e7ea
				height 72px
				padding 0 14px
				border-radius 6px
				background-color #fff
				display flex
				align-items center
				.iconfont
					font-size 48px
					margin-right 6px
				span
					font-size 32px
					white-space nowrap
</style>