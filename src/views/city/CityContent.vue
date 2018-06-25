<template>
	<div class="city-content">
		<div class="tabs">
			<ul>
				<li v-for="(item, index) of tabsList" :key="index" :class="{active: index == active}" @click="handleClick(index)">{{item.location}}</li>
			</ul>
		</div>
		<div class="container" ref="wrapper">
			<div class="domestic" :class="{active: !active}">
				<div class="item hot">
					<div class="header">热门城市</div>
					<ul class="content">
						<li v-for="(item, index) of hotCities" :key="item.id" @click="cityUpdate(item.name)">{{item.name}}</li>
					</ul>
				</div>
				<div class="item">
					<div class="header">字母排序</div>
					<alphabet :cities="cities" @update="alphabetUpdate"/>
				</div>
				<div class="item list" v-for="(item, key) of cities" :key="key" ref="key">
					<div class="header">{{key}}</div>
					<ul class="content">
						<li v-for="innerItem of item" :key="innerItem.id" @click="cityUpdate(innerItem.name)">{{innerItem.name}}</li>
					</ul>
				</div>
			</div>
			<div class="oversea" :class="{active: active}">
				<div class="sorry">
					<div class="iconfont">&#xe848;</div>
					<div class="tip">对不起，暂无海外数据</div>
				</div>
			</div>
		</div>
	</div>
</template>

<script>
import BScroll from 'better-scroll'
import Alphabet from './Alphabet'
export default {
	name: 'CityContent',
	data() {
		return {
			active: 0,
			tabsList: [{
				"id": 1,
				"location": "境内"
			}, {
				"id": 2,
				"location": "境外·港澳台"
			}]
		}
	},
	props: {
		hotCities: Array,
		cities: Object
	},
	components: {
		Alphabet
	},
	mounted() {
		this.scroll = new BScroll(this.$refs.wrapper)
	},
	methods: {
		handleClick(index) {
			this.active = index
		},
		alphabetUpdate(index) {
			let element = this.$refs.key[index]
			this.scroll.scrollToElement(element)
		},
		cityUpdate(city) {
			this.$store.commit('updateCity', city)
			this.$router.push('/')
		}
	}
}
</script>

<style lang="stylus" scoped>
	.city-content
		.tabs
			height 80px
			background-color #00bcd4
			ul
				color #fff
				height 56px
				margin 0 15%
				border-radius 2px
				border 2px solid #fff
				display flex
				li
					width 50%
					display flex
					align-items center
					justify-content center
					&.active
						color #00bcd4
						background-color #fff
		.container
			overflow hidden
			position absolute
			top 180px
			right 0
			bottom 0
			left 0
			background-color #f5f5f5
			.domestic, .oversea
				display none
				.item
					position relative
					&:before
						content ''
						position absolute
						right 0
						bottom 0
						z-index 2
						width 100%
						height 2px
						background-color #fff
					.header
						height 80px
						padding 0 20px
						line-height 80px
					.content
						position relative
						background-color #fff
						display flex
						flex-wrap wrap
						&:before
							content ''
							position absolute
							top 0
							left 33.33%
							width 33.33%
							height 100%
							border-left 1px solid #ddd
							border-right 1px solid #ddd
						li
							z-index 1
							width 33.33%
							height 100px
							font-size 32px
							line-height 100px
							text-align center
							border-bottom 1px solid #ddd
				.list
					.content
						&:before
							left 25%
							width 25%
						&:after
							content ''
							position absolute
							right 25%
							width 25%
							height 100%
							border-right 1px solid #ddd
						li
							width 25%
			.active
				display block
			.oversea
				.sorry
					color #00afc7
					padding 25%
					text-align center
					.iconfont
						color #00afc7
						font-size 200px
						margin-bottom 10%
</style>
