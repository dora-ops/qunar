<template>
	<div class="like">
		<div class="like-header">
			<div class="like-header-title">
				<img src="../assets/images/like.png" alt="本周热门榜单">
				<span>猜你喜欢</span>
			</div>
		</div>
		<div class="like-content">
			<router-link class="item" v-for="(item, index) of list" :key="index" :to="'/detail/' + item.id">
				<div class="image">
					<img :src="item.imgsrc" :alt="item.name"/>
					<div class="condition anytime" v-if="item.anytime">随买随用</div>
					<div class="condition today" v-else-if="item.today">可订今日</div>
					<div class="condition tomorrow" v-else="item.tomorrow">可订明日</div>
				</div>
				<div class="infor">
					<ul>
						<li class="name">{{item.name}}</li>
						<li class="score-comment">
							<star :number="item.star"/>
							<div class="comment">{{item.comment}}条评论</div>
						</li>
						<li class="price-location">
							<div class="price">
								<span><i>&yen;</i>{{item.price}}</span>起
							</div>
							<div class="location">{{item.location}}</div>
						</li>
						<li class="desc" v-if="item.desc">{{item.desc}}</li>
					</ul>
				</div>
			</router-link>
			<div class="all">查看所有产品</div>
		</div>
	</div>
</template>

<script>
import Star from './Star'
export default {
	name: 'Like',
	props: {
		list: Array
	},
	components: {
		Star
	}
}
</script>

<style lang="stylus" scoped>
	@import '../assets/styles/qunar.styl'
	.like
		margin-bottom 24px
		background-color #fff
		.like-header
			height 106px
			padding 0 15px
			display flex
			align-items center
			justify-content space-between
			.like-header-title
				display flex
				align-items center
				img
					width 30px
					margin-right 10px
				span
					font-size 36px
		.like-content
			margin 0 15px
			.item
				position relative
				padding 20px 0
				display flex
				&:before
					content ''
					position absolute
					right 0
					bottom 0
					width 100%
					height 2px
					background-color #e0e0e0
					transform scaleY(.5)
				.image
					position relative
					margin-right 15px
					img
						width 218px
						height 218px
					.condition
						position absolute
						top 0
						left 0
						color #fff
						width 118px
						height 44px
						font-size 24px
						line-height 40px
						text-align center
						background-size cover
					.anytime, .today
						background-image url('../assets/images/anytime.png')
					.tomorrow
						background-image url('../assets/images/tomorrow.png')
				.infor
					flex 1
					.name
						color #333
						font-size 36px
					.score-comment
						color #616161
						margin 20px 0
						display flex
						align-items center
						.comment
							margin-left 32px
					.price-location
						color #616161
						display flex
						align-items center
						justify-content space-between
						span
							color $tomato
							font-size 36px
							i
								font-size 28px
					.desc
						display inline-block
						color #f55
						padding 10px
						line-height 150%
						background-color #fff9f9
						transform translateY(15px)
		.all
			color #00afc7
			font-size 36px
			padding 32px 0
			text-align center
</style>
