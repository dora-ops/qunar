<template>
	<div class="weekend">
		<div class="weekend-title">周末去哪儿</div>
		<ul class="weekend-content">
			<li class="item" v-for="(item, index) of list" :key="index">
				<div class="link">
					<img :src="item.imgsrc" :alt="item.title"/>
					<div class="title">{{item.title}}</div>
					<div class="subtitle">{{item.subTitle}}</div>
				</div>
			</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Weekend',
	props: {
		list: Array
	}
}
</script>

<style lang="stylus" scoped>
	.weekend
		.weekend-title
			height 106px
			font-size 36px
			padding 0 15px
			line-height 106px
			background-color #fff
		.weekend-content
			.item
				margin-bottom 15px
				padding-bottom 15px
				background-color #fff
				img
					width 100%
				.title
					padding 20px
					font-size 34px
				.subtitle
					color #616161
					padding 4px 20px
</style>
