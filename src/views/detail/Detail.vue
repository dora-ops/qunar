<template>
    <div class="detail">
        <HeaderDefault :title="title" :style="opacityStyle" />
        <headfigure :figureName="figureName" :figureImgCover="figureImgCover" />
        <!-- <baseinfo /> -->
        <!-- 上部分信息 -->
        <div class="imooc-container">
            <!-- 标题 -->
            <div class="title bold">{{ classData.location }}</div>
            <!-- 副标题 -->
            <div class="content mb-10">{{ classData.content }}</div>
            <!-- 价格 -->
            <div class="imooc-flex imooc-flex-between">
                <div class="money">
                    <div class="rel-money bold">&#165;{{ classData.price + '.00' }}</div>
                    <div class="old-money fz-small cr-basic">&#165;{{ classData.price + 50 + '.00' }}</div>
                </div>

            </div>
            <!-- 套餐介绍 -->
            <ul class="intro">
                <li class="intro-item imooc-flex">
                    <div class="title bold">促销</div>
                    <div class="content">已支持支付宝花呗付款</div>
                </li>
                <li class="intro-item imooc-flex">
                    <div class="title bold">收藏</div>
                    <div class="content">人数&#8901;{{ classData.star }}&#8901;</div>
                </li>
                <li class="intro-item imooc-flex">
                    <div class="title bold">评论数</div>
                    <div class="content">人次&#165;{{ classData.comment }}</div>
                </li>
                <li class="intro-item imooc-flex">
                    <div class="title bold">服务</div>
                    <div class="content">{{ classData.anytime }}</div>
                </li>
            </ul>
        </div>
        <!-- 评分 -->
        <div class="rate imooc-container">
            <p>评价</p>
            <!-- 评分 -->
            <div class="rate-container imooc-flex" style="padding-top: 0.5rem;">
                <div class="item">1</div>
                <div class="item">
                    <p class="bold" style="font-size:15px">地方美观</p>
                    2
                </div>
                <div class="item">
                    <p class="bold" style="font-size:15px">服务到位</p>
                    3
                </div>
                <div class="item">
                    <p class="bold" style="font-size:15px">价格</p>
                    4
                </div>
            </div>
            <!-- 评论 -->
            <ul class="comment-list">
                <li class="comment-item" v-for="comment in commentlist" :key="comment.id">
                    <div class="info imooc-flex imooc-flex-between">
                        <div class="left imooc-flex">
                            <div class="avatar mr-10">
                                <img :src="comment.avatar" class="avatar">
                            </div>
                            <div class="name bold">{{ comment.name }}</div>
                        </div>
                        <div class="right">
                            <div class="rate cr-basic">{{ comment.rate.toFixed(2) }}分</div>
                        </div>
                    </div>
                    <div class="comment" style="font-size:8px">{{ comment.comment }}</div>
                </li>
            </ul>
        </div>

        <!-- 底部 -->

        <div class="footer imooc-flex">
            <div class="chat imooc-flex imooc-flex-center">
                <div style="content">
                    <div class="icon"></div>
                    <p class="fz-small">咨询</p>
                </div>
            </div>
            <div class="buttons imooc-flex">
                <div class="btn add-btn" @click="addToCar($event)">加入购物车</div>
                <div class="btn buy-btn" @click="toPayPage">立即购买</div>
            </div>
        </div>
    </div>

</template>

<script>
import HeaderDefault from "@/components/HeaderDefault";
import Headfigure from "./components/Headfigure";
import Baseinfo from "./components/Baseinfo";
import axios from "axios";
import { customers, likelist, commentlist } from "@/sqlMap.js";
export default {
  name: "Detail",
  components: {
    HeaderDefault,
    Headfigure,
    Baseinfo
  },
  data() {
    return {
      title: "",
      figureName: "",
      figureImgCover: "",
      headerDefaultVisible: false,
      opacityStyle: {
        opacity: 0
      },
      commentlist: [],

      classData: {},
      //   intro: {},
      showAll: false
    };
  },
  created() {
    this.getDetailInfo();
  },
  methods: {
    getDetailInfo() {
      var id = this.$route.params.id;
      // debugger
      var sql = likelist.getOne.replace("?", id);
      axios.post("action", { sql: sql }).then(this.getSuccess);
      sql = commentlist.find.replace("?", id);
      axios.post("action", { sql: sql }).then(res => {
        this.commentlist = res.data;
        console.log(this.commentlist);
      });
      //   axios
      //     .get("/api/mock/detail.json", {
      //       params: {
      //         id: this.$route.params.id
      //       }
      //     })
      //     .then(this.getSuccess);
    },
    getSuccess(res) {
      let data = res.data[0];
      this.title = data.title;
      this.figureName = data.name;
      this.figureImgCover = data.imgCover;
      this.classData = data;
    },
    scrollHandle() {
      //   var scrollTop = document.documentElement.scrollTop;
      var scrollTop =
        document.documentElement.scrollTop ||
        document.body.scrollTop ||
        window.pageYOffset;
      //   debugger
      console.log(scrollTop);
      if (scrollTop > 10) {
        let opacity = scrollTop / 10;
        opacity = opacity > 1 ? 1 : opacity;
        this.opacityStyle = { opacity };
        this.headerDefaultVisible = true;
      } else {
        this.headerDefaultVisible = false;
        if (scrollTop == 0) {
          this.opacityStyle = { opacity: 0 };
        }
      }
    },
    toPayPage() {
      alert(
        `购买景点门票《${this.classData.title}》,一共支付${
          this.classData.price
        }元`
      );
      var userInfo =JSON.parse(this.$storage.get("userInfo"))

      axios
        .post("insert", {
          table: "v_order",
          data: {
            cus_id: userInfo.id,
            like_id: this.classData.id,
            like_name: this.classData.title,
            num: this.classData.price
          }
        })
        .then(res => {
          this.$router.push({ name: "personalCenter" });
        });
    },
    addToCar(e) {
      if (this.$storage.get("userInfo")) {
        let data = this.classData;
        let id = this.$route.params.id;

        // 本课程的数据
        let shop = {
          id: id,
          icon: data.icon,
          title: data.title,
          intro: data.content,
          money: data.money
        };

        // 购物车的数据
        let shopCartInfo = this.$storage.get("shopCartInfo");
        shopCartInfo = shopCartInfo ? JSON.parse(shopCartInfo) : new Array();

        // 将课程数据添加到购物车
        shopCartInfo.push(shop);
        this.$storage.set("shopCartInfo", shopCartInfo);
        this.$store.commit("set_shopCartInfo", shopCartInfo);

        // 小球丢进购物车动画
        // this.doAnimation(e);
      } else {
        this.$router.push({ name: "login" });
      }
    }
  },
  activated() {
    window.addEventListener("scroll", this.scrollHandle);
    // window.scrollTo(0, 0);
  }
};
</script>

<style lang="stylus" scoped>
.header-default {
    position: fixed;
    top: 0;
    right: 0;
    width: 100%;
    z-index: 2;
    box-sizing: border-box;
}
</style>

<style lang="scss" scoped>
@import "@/assets/styles/main.scss";
@import "@/assets/styles/theme.scss";
.title {
  font-size: 0.5rem;
  margin-bottom: 0.2rem;
}
.rel-money {
  color: $main;
  font-size: 0.5rem;
}
.old-money {
  text-decoration: line-through;
}
.play-btn {
  font-size: 0.6rem;
}

.intro {
  //   margin-top: 1rem;
  //   padding: 0 1rem;
  background-color: #f4f5f7;
  border-radius: 0.1rem;
  font-size: 0.3rem;
  .intro-item {
    // padding: 1rem 0;
    height: 1rem;
    line-height: 2;
    border-bottom: 0.1rem solid #d9dde1;
    &:last-child {
      border-bottom: none;
    }
  }
  .title {
    font-size: 0.5rem;
    margin-right: 0.2rem;
  }
}

.item {
  flex: 1;
  text-align: center;
  &:first-child {
    font-size: 50px;
    color: $main;
  }
}
.comment-item {
  //   padding: 1rem;
  border-radius: 0.2rem;
  background-color: #f4f5f7;
  margin-top: 0.5rem;
  .info {
    line-height: 1.5rem;
    margin-bottom: 0.5rem;
  }
}
// 购物车脚
.footer {
  //   padding: 0.5rem 1.5rem;
  .chat {
    flex-basis: 1rem;
    text-align: center;
  }
  .buttons {
    flex: 1;
    border-radius: 3rem;
    overflow: hidden;
    .btn {
      flex: 1;
      text-align: center;
      padding: 0.5rem;
      background-color: $main;
      color: #fff;
    }
    .add-btn {
      background-color: rgba($main, 0.7);
    }
  }
  .fz-small {
    font-size: 0.2rem;
  }
}
</style>



