<template>
  <div>
    <div class="list">
      <div class="search_bar">
        <el-input
          placeholder="请输入关键字"
          clearable
          prefix-icon="el-icon-search"
          v-model="params.keyword"
          @blur="getListByKeyword()"
        ></el-input>
      </div>
      <div class="category_list">
        <el-tag
          @click="chooseTag(item.name)"
          class="tag"
          v-for="item in categoryList"
          :key="item.name"
          :type="item.color"
          :effect="item.name==params.tag?'dark':'plain'"
        >{{ item.name }}</el-tag>
      </div>
      <el-container v-for="item in list" :key="item.article_id" class="list_item_containe">
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
        v-if="total>0"
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page="params.pageNo"
        :page-sizes="[10,20,30,50]"
        :page-size="params.pageSize"
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
  name: "category", // 分类
  components: { loading },
  data() {
    return {
      categoryList: [
        {
          name: "前端",
          color: "primary",
        },
        {
          name: "后端",
          color: "success",
        },
        {
          name: "运维",
          color: "warning",
        },
      ],

      list: [],
      params: {
        pageNo: 1,
        keyword: "",
        pageSize: 20,
        tag: "",
      },
      total: 0,
      defaultCover: global.defaultCover,
      loadingStatus: false,
    };
  },
  created() {
    this.getListByKeyword();
  },
  methods: {
    getListByKeyword() {
      const _this = this;
      _this.loadingStatus = true;
      this.$axios
        .get(global.httpUrl + "/blog/getArticles", {
          params: this.params,
        })
        .then(function (response) {
          console.log(response);
          if (response.data && response.data.list) {
            _this.list = response.data.list;
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
    goToDetail(id) {
      console.log(id);
      if (id > 0) {
        this.$router.push({ path: "/detail", query: { id: id } });
      }
    },
    chooseTag(tag) {
      if (this.params.tag == tag) {
        const params = JSON.parse(JSON.stringify(this.params));
        params.tag = "";
        this.params = params;
      } else {
        this.params.tag = tag;
      }
      this.getListByKeyword();
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
      this.params.pageSize = val;
      this.getListByKeyword();
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
      this.params.pageNo = val;
      this.getListByKeyword();
    },
  },
};
</script>

<style scoped>
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
.search_bar {
  margin-bottom: 30px;
}
.category_list {
  text-align: left;
  margin-bottom: 30px;
}

.tag {
  cursor: pointer;
  margin-right: 8px;
}
</style>
