<template>
	<div class="star">
		<img src="../assets/images/star-full.png"/>
		<img src="../assets/images/star-full.png"/>
		<img src="../assets/images/star-full.png"/>
		<img src="../assets/images/star-full.png"/>
		<img src="../assets/images/star-full.png"/>
	</div>
</template>

<script>
export default {
	name: 'Star',
	props: {
		number: Number
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
