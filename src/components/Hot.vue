<template>
	<div class="hot">
		<div class="hot-header">
			<div class="hot-header-title">
				<img src="../assets/images/hot.png" alt="本周热门榜单">
				<span>本周热门榜单</span>
			</div>
			<div class="hot-all">
				全部榜单
				<i class="iconfont">&#xe601;</i>
			</div>
		</div>
		<div class="hot-content">
			<div class="item" v-for="(item, index) of list" :key="index">
				<div class="image">
					<img :src="item.imgsrc" :alt="item.name"/>
					<div class="top" :class="{top1: item.top1,top2: item.top2,top3: item.top3}"></div>
				</div>
				<div class="infor">
					<div class="name">{{item.name.substring(0, 6) + '...'}}</div>
					<div class="price">
						<span>&yen;{{item.price}}</span>
						起
					</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Hot',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/qunar.styl'
	.hot
		margin-bottom 24px
		background-color #fff
		.hot-header
			height 106px
			padding 0 15px
			display flex
			align-items center
			justify-content space-between
			.hot-header-title
				display flex
				align-items center
				img
					width 30px
					margin-right 10px
				span
					font-size 36px
		.hot-content
			margin 0 15px
			overflow-x scroll
			padding-bottom 24px
			box-sizing border-box
			display flex
			.item
				margin-right 15px
				text-align center
				&:last-child
					margin-right 0
				.image
					position relative
					img
						width 218px
						height 218px
					.top
						position absolute
						top 0
						left 0
						width 108px
						height 52px
						background-size cover
						img
							width 100%
							height 100%
					.top1
						background-image url('../assets/images/top1.png')
					.top2
						background-image url('../assets/images/top2.png')
					.top3
						background-image url('../assets/images/top3.png')
				.infor
					margin-top 18px
					.price
						margin-top 10px
						span
							color $orange
							font-size 32px
</style>