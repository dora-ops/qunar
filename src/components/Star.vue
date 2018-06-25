<template>
	<div class="star">
		<div v-for="item of starArray">
			<img src="../assets/images/star-full.png" v-if="item"/>
			<img src="../assets/images/star-empty.png" v-if="!item"/>
		</div>
	</div>
</template>

<script>
export default {
	name: 'Star',
	props: {
		number: Number
	},
	data() {
		return {
			stars: []
		}
	},
	computed: {
		starArray() {
			for (let i = 0; i < 5; i++) {
				if (i < this.number) {
					this.stars.push(1)
				} else {
					this.stars.push(0)
				}
			}
			return this.stars
		}
	}
}
</script>

<style lang="stylus" scoped>
	.star
		display flex
		align-items center
		img
			width 26px
			margin-right 2px
</style>
