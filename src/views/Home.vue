<template>
  <div>
    <el-carousel v-if="recommendList.length>0" indicator-position="outside" height="330px">
      <el-carousel-item v-for="item in recommendList" :key="item.article_id">
        <div @click="goToDetail(item.article_id)">
          <el-image
            :key="item.cover"
            :src="item.cover?item.cover:defaultCover"
            class="cover_img"
            fit="cover"
          ></el-image>
          <div class="recommend_title">{{item.article_title}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="list">
      <el-container v-for="item in articleList" :key="item.article_id" class="list_item_containe">
        <el-aside width="100px" style="background-color: rgb(238, 241, 246)">
          <el-image
            @click="goToDetail(item.article_id)"
            :key="item.cover"
            :src="item.cover?item.cover:defaultCover"
            class="item_img"
            fit="fill"
          ></el-image>
        </el-aside>
        <el-main class="item_main">
          <div @click="goToDetail(item.article_id)">
            <span class="item_title">{{item.article_title}}</span>
            <span class="item_info">发布日期：{{item.date}}</span>
            <span class="item_info">作者：{{item.user_nickname}}</span>
          </div>
          <div class="item_tags">
            <span v-for="tag in item.tags" :key="tag">{{tag}}</span>
          </div>
        </el-main>
      </el-container>
      <el-divider></el-divider>
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="getArticleListParams.pageNo"
        :page-sizes="[10, 20, 30, 50]"
        :page-size="getArticleListParams.pageSize"
        small
        layout="total, sizes, prev, pager, next, jumper"
        :total="total"
      ></el-pagination>
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
  name: "home", // 首页
  components: { loading },
  data() {
    return {
      recommendList: [],
      getArticleListParams: {
        pageNo: 1,
        keyword: "",
        pageSize: 20,
      },
      articleList: [],
      defaultCover: global.defaultCover,
      loadingStatus: false,
      total: 0,
    };
  },
  created() {
    console.log("home");
    this.getRecommendList();
    this.getArticleList();
  },
  methods: {
    getArticleList() {
      const _this = this;
      _this.loadingStatus = true;
      this.$axios
        .get("/api/blog/getArticles", {
          params: this.getArticleListParams,
        })
        .then(function (response) {
          console.log(response);
          if (response.data && response.data.list) {
            _this.articleList = response.data.list;
            _this.total = response.data.total;
          }
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
          _this.loadingStatus = false;
        });
    },
    getRecommendList() {
      const _this = this;
      _this.loadingStatus = true;
      this.$axios
        .get("/api/blog/getRecommendArticleList")
        .then(function (response) {
          console.log(response);
          _this.recommendList = response.data;
        })
        .catch(function (error) {
          console.log(error);
        })
        .then(function () {
          // always executed
          _this.loadingStatus = false;
        });
    },
    goToDetail(id) {
      console.log(id);
      if (id > 0) {
        this.$router.push({ path: "/detail", query: { id: id } });
      }
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.getArticleListParams.pageSize = val;
      this.getArticleList();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.getArticleListParams.pageNo = val;
      this.getArticleList();
    },
  },
};
</script>

<style scoped>
.cover_img {
  height: 300px;
  cursor: pointer;
}
.recommend_title {
  position: relative;
  width: 100%;
  height: 30px;
}
.list {
  margin: 20px auto;
  max-width: 800px;
  padding: 0 20px;
}
.list_item_containe {
  height: 100px;
  border: 1px solid #eee;
  margin-bottom: 15px;
  cursor: pointer;
}
.item_img {
  height: 100px;
}
.item_main {
  text-align: left;
}
.item_title,
.item_tags {
  display: inline-block;
}
.item_title {
  font-size: 14px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  word-wrap: none;
  max-width: 100%;
}
.item_tags > span {
  font-size: 12px;
  display: inline-block;
  padding: 3px 5px;
  border: 1px solid #3cb371;
  border-radius: 3px;
  margin-right: 5px;
}
.item_info {
  color: #a9a9a9;
  font-size: 12px;
  float: right;
  margin-left: 10px;
}
@media screen and (max-width: 600px) {
  .item_info {
    color: #a9a9a9;
    font-size: 12px;
    float: left;
    margin-right: 10px;
  }
}
</style>
