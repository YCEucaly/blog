<template>
  <div class="bg">
    <div class="content">
      <el-image
        :key="detail.cover"
        :src="detail.cover?detail.cover:defaultCover"
        class="cover_img"
        fit="cover"
      ></el-image>
      <h3>{{detail.article_title}}</h3>
      <div class="article_info">
        <span>作者：{{detail.user_nickname}}</span>
        <span>发布日期：{{detail.date}}</span>
      </div>
      <div class="article_content" v-html="detail.article_content"></div>
    </div>
    <div v-if="loadingStatus">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import global from "../utils/global";
import loading from "../components/Loading";
export default {
  components: { loading },
  data() {
    return {
      detail: {},
      defaultCover: global.defaultCover,
      loadingStatus: false,
    };
  },
  created() {
    if (this.$route.query.id > 0) {
      this.getDetail(this.$route.query.id);
    }
  },
  methods: {
    getDetail(id) {
      const _this = this;
      _this.loadingStatus = true;
      this.$axios
        .get(global.httpUrl + "/blog/getArticleDetail", {
          params: {
            id: id,
          },
        })
        .then(function (response) {
          console.log(response);
          _this.detail = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
          _this.loadingStatus = false;
        });
    },
  },
};
</script>

<style scoped>
.bg {
  margin: 0;
  padding: 0;
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
}
.content {
  margin: 0 auto;
  max-width: 800px;
  background: #fff;
}
.article_info {
  font-size: 12px;
  color: darkgray;
}
.article_info > span:first-child {
  margin-right: 15px;
}
.article_content {
  text-align: left;
  text-indent: 28px;
  width: 90%;
  overflow-x: hidden;
  padding: 15px 5%;
}
.article_content >>> img {
  max-width: 90%;
  text-indent: 0;
}
</style>