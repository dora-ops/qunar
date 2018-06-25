<template>
	<div class="alphabet">
		<ul>
			<li v-for="(item, key, index) of cities" :key="key" @click="alphabetClick(index)">{{key}}</li>
		</ul>
	</div>
</template>

<script>
export default {
	name: 'Alphabet',
	props: {
		cities: Object
	},
	methods: {
		alphabetClick(index) {
			this.$emit('update', index)
		}
	}
}
</script>

<style lang="stylus" scoped>
	.alphabet
		background-color #fff
		ul
			display flex
			flex-wrap wrap
			li
				width 16.6%
				height 102px
				font-size 32px
				line-height 102px
				text-align center
</style>
