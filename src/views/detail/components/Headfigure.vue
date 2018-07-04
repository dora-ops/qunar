<template>
	<div class="headfigure">
		<div class="figure">
			<div class="header">
				<router-link to="/" class="header-left">
					<i class="iconfont">&#xe600;</i>
				</router-link>
			</div>
			<img :src="figureImgCover" class="cover" />
			<div class="figure-info">
				<div class="number"><i class="iconfont">&#xe70f;</i>16</div>
				<div class="name">{{this.figureName}}</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Headfigure',
	props: {
		figureName: String,
		figureImgCover: String
	}
}
</script>

<style lang="stylus" scoped>
	.headfigure
		.figure
			position relative
			&:after
				content ''
				position absolute
				right 0
				bottom 0
				width 100%
				height 60px
				background-image: linear-gradient(to bottom,rgba(0,0,0,0),rgba(0,0,0,.8))
			.header
				position absolute
				top 20px
				left 20px
				.header-left
					display block
					width 72px
					height 72px
					line-height 72px
					text-align center
					border-radius 72px
					background-color rgba(0,0,0,.5)
					.iconfont
						color #fff
						font-size 44px
						margin-left 14px
			.cover
				width 100%
			.figure-info
				position absolute
				right 0
				bottom 24px
				z-index 1
				width 100%
				color #fff
				padding 0 20px
				box-sizing border-box
				.number
					width 120px
					height 40px
					padding 4px 0
					border-radius 40px
					margin-bottom 24px
					background-color rgba(0,0,0,.5)
					display flex
					align-items center
					justify-content center
					.iconfont
						font-size 34px
						margin-right 8px
				.name
					font-size 36px
</style>
