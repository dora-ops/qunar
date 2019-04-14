<template>
    <div>

        <div class="context">
            <div class="myClass" v-for="item in classList" @click="chooseThis(item.id)">
                <p id='className'>名称:{{item.like_name}}</p>
                <!-- <img src="../../../static/img/icon/time.png" style="float:left;width:16px;height:16px"> -->
                <p id='time'>用户{{item.cus_id}} - 景点{{item.like_id}}</p>
                <p id='teacher'>总价：{{item.num}}</p>
            </div>
        </div>
        <bottom v-bind:switchValue="switchValue"></bottom>
    </div>
</template>

<script>
import bottom from "@/components/bottom";
import { v_order } from "@/sqlMap.js";
// import * as moment from 'moment'

export default {
  name: "studyCourse",
  components: { bottom },
  data() {
    return {
      title: "我的课程",
      switchValue: 4,
      classList: [],
      ifBuy: ""
    };
  },
  methods: {
    chooseThis(id) {
      //班级id
      this.$router.push("addPost/" + id);
    },
    getCourse(item) {
      var user = JSON.parse(this.$storage.get("userInfo"));
      var sql = v_order.find.replace("?", user.id);

      this.$http.post("action", { sql: sql }).then(res => {
        this.classList = res.data;
      });
    },
  },
  created() {
    this.getCourse();
  }
};
</script>
<style lang='scss' scoped>
.context {
  margin-top: 20%;
}
.center {
  margin-top: 30%;
  text-align: center;
}
.center h1 {
  color: rgba(192, 181, 181, 0.5);
}
.center p {
  color: #1296db;
}
.myClass {
  background-color: white;
  margin-top: 10px;
  padding: 2% 5%;
  border-top: #bfbfbf 1px solid;
  border-bottom: #bfbfbf 1px solid;
}
#courseName {
  font-size: 26px;
  margin: 0;
  color: rgb(156, 189, 226);
  text-align: center;
}
#className {
  font-size: 20px;
  margin: 15px 0 0 0;
}
img {
  width: 16px;
  height: 16px;
  margin: 8px 5px 0px 0px;
}
#time {
  font-size: 16px;
  margin: 0;
  color: #bfbfbf;
  margin: 5px;
}
#teacher {
  margin: 10px 0px 10px 0px;
}
</style>