<template>
  <div>
      <div class="user">
      <ul class="item-list">
        <li>  
          <router-link to='/order'>
            <p>我的订单</p>
          </router-link>
        </li>
        <!-- <li>
          <p @click='discountClick'>优惠券</p>
        </li>
        <li>
          <p @click='alert'>个人信息</p>
        </li>
        <li>
          <p @click='shoucan'>收藏</p>
        </li>
        <li>
          <p @click='pinglun'>评论管理</p>
        </li>
         <li>
          <p @click='userManage'>用户管理</p>
        </li>
        <li>
          <p @click='workMange'>作品管理</p>
        </li>
        <li>
          <p @click='alert'>帮助中心</p>
        </li> -->
        <li>
          <p @click='alert'>退出</p>
        </li>
      </ul>
  </div>
  <bottom v-bind:switchValue="switchValue"></bottom>
  </div>
</template>

<script>
import bottom from '../../components/bottom'
export default {
  data () {
    return {
    //   loginShow:true,
      discount:false,
      switchValue:4
    }
  },
  	components: {
	
        bottom
	},
  methods:{
    discountClick(){
      this.discount = true;
    },
    alert(){
       this.$storage.clear()
       this.$router.push('login')
    }
  },
  created(){
  	this.$parent.loaderShow = false;
  },
//   watch:{
//     $route(to,from){
//       var _self = this;
//       setTimeout(function(){
//         _self.$parent.loaderShow = false;
//       },200)
//     }
//   },

}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" rel="stylesheet/stylus" scoped>
	.user{
		position:fixed;
		left:0;
		top:0;
		bottom:0;
		background-color:#f1f1f1;
		width:100%;
  }
	.item-list
		background-color:#fff;
		li
			padding-left:3.5rem;
			&:nth-of-type(1)
				background:url('img/lottery.png') no-repeat 1rem center;
				background-size:1.5rem auto;
			&:nth-of-type(2)
				background:url('img/lottery.png') no-repeat 1rem center;
				background-size:1.5rem auto;
			&:nth-of-type(3)
				background:url('img/help.png') no-repeat 1rem center;
				background-size:1.5rem auto;
			&:nth-of-type(4)
				background:url('img/opinion.png') no-repeat 1rem center;
				background-size:1.5rem auto;
			p
				font-size:0.9rem;
				color:#444;
				padding:1rem 0;
				border-bottom:1px solid #f1f1f1;
				background:url('img/right.png') no-repeat 96% center;
				background-size:0.8rem auto;

</style>
