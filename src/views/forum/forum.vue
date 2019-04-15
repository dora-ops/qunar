<template>
    <div>
        <div>
            <top v-bind:title="title"></top>
        </div>
        <img id='add' @click="addPost" src="@/../static/img/icon/add.png" />
        <!-- <div class="context">
            <div class='allPost' v-for="item in allPost" v-bind:key="item.id">
                <h2 id='title'>{{item.title}}</h2>
                <p id='abstract'>{{item.content}}</p>
                <p id='author'>作者:{{item.uid}}</p>
            </div>
        </div> -->
        <div class="like">
		
		<div class="like-content">
			<div class="item"  v-for="item in allPost" v-bind:key="item.id" >
                <div class="image" style="margin-top:35px">
					<img src="/api/images/hot6.jpg"/>
				</div>
				<div class="infor" style="margin-top:35px">
					<ul>
						<li class="name">标题：{{item.title}}</li>
						<li class="score-comment">
							
							<div class="comment"></div>
						</li>
						<li class="price-location">
							<div class="price">
								<span><i>&yen;</i>用户：{{item.uid}}</span>
							</div>
							
						</li>
						<li class="desc" v-if="item.content">评论内容：{{item.content}}</li>
					</ul>
				</div>
			</div>
			
		</div>
	</div>
        <div>
            <Bottom v-bind:switchValue="switchValue"></Bottom>
        </div>
    </div>
</template>

<script>
import top from "@/components/top";
import Bottom from "@/components/bottom";

export default {
  name: "forum",
  data() {
    return {
      title: "留言板",
      switchValue: 3,
      allPost: []
    };
  },

  components: { top, Bottom },

  computed: {},

  created() {
    this.getPost();
  },

  methods: {
    addPost() {
      this.$router.push({ name: "addforum" });
    },
    getPost() {
      var sql = "select * from posts";
      this.$http.post("action", { sql: sql }).then(res => {
        this.allPost = res.data.reverse();
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#add {
  position: fixed;
  z-index: 1000;
  width: 28px;
  left: 83%;
  top: 3%;
}
.context {
  margin-top: 65px;
  margin-bottom: 20%;
  background: rgb(247, 247, 247);
}
.allPost {
  background-color: white;
  padding: 5px;
  margin-top: 10px;
}
#title {
  margin: 68px 0 5px 10px;
}
#author {
  color: #c0bdbda9;
  font-size: 16px;
  font-weight: bold;
  margin: 10px 20px 0 12px;
}
#abstract {
  margin: 10px 0px 0px 0px;
  color: #bfbfbf;
  width: 90%;
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
  text-indent: 2em;
}
</style>

<style lang="stylus" scoped>
	@import '../../assets/styles/qunar.styl'
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