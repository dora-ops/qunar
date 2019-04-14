<template>
    <div id='addPost'>

        <div>
            <input class="title" type="text" v-model='post.avatar' placeholder="请输入用户头像URL">
        </div>
        <div>
            <input class="title" type="text" v-model='post.rate' placeholder="请输入评分">
        </div>
        <div id='content'>
            <el-input type="textarea" :autosize="{ minRows: 5, maxRows: 15}" placeholder="请输入内容" class="content" v-model="post.comment">
            </el-input>
        </div>
        <!-- <div>
      <el-upload
        action="https://jsonplaceholder.typicode.com/posts/"
        list-type="picture-card"
        :on-preview="handlePictureCardPreview"
        :on-remove="handleRemove">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt="">
      </el-dialog>
    </div> -->
        <el-button type="primary" style="width:100%;" @click="submit" round>提交</el-button>
    </div>
</template>

<script>
import { v_order } from "@/sqlMap.js";
export default {
  name: "addPost",
  data() {
    return {
      title: "编辑",
      back: 1,
      post: {
        name: "",
        avatar: "",
        like_id: "",
        cus_id: "",
        rate: "",
        comment: ""
      },
      dialogVisible: false
    };
  },

  methods: {
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePictureCardPreview(file) {
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    submit() {
      var post = this.post;
      // debugger
      post.order_id = this.$route.params.id;
      //  post.like_id = this.$route.params.id;
      var userInfo = JSON.parse(this.$storage.get("userInfo"));
      post.cus_id = userInfo.id;
      post.name = userInfo.name;
      var sql = v_order.getOne.replace("?", post.order_id);
      this.$http.post("action", { sql: sql }).then(res => {
        post.like_id = res.data[0].like_id;
        debugger
        var param = { table: "commentlist", data: post };
        this.$http.post("insert", param).then(res => {
          this.$router.push("/detail/" + post.like_id);
        });
      });
    }
  }
};
</script>
<style lang='scss' scoped>
#addPost {
  background: white;
}
.title {
  padding-top: 19%;
  background: white;
  height: 40px;
  width: 95%;
  padding-left: 17px;
  font-size: 18px;
  border: none;
  color: #606266;
}
#content {
  border-top: 1px solid rgb(231, 228, 228);
  font-size: 18px;
}
#bottom {
  margin-top: 5%;
  background: white;
  text-align: center;
  border-top: 1px solid rgb(231, 228, 228);
  border-bottom: 1px solid rgb(231, 228, 228);
}
</style>
<style>
.el-textarea__inner {
  border-radius: 0;
  border: none;
  font-size: 18px;
  color: black;
}
textarea {
  border: none;
  font-size: 18px;
  color: black;
}
</style>