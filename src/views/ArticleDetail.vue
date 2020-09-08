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
      <div class="article_content">
        <mavon-editor
          class="md"
          :value="detail.article_content"
          :subfield="prop.subfield"
          :defaultOpen="prop.defaultOpen"
          :toolbarsFlag="prop.toolbarsFlag"
          :editable="prop.editable"
          :scrollStyle="prop.scrollStyle"
        />
      </div>
    </div>
    <div v-if="loadingStatus">
      <loading></loading>
    </div>
  </div>
</template>

<script>
import { mavonEditor } from "mavon-editor";
import "mavon-editor/dist/css/index.css";
import global from "../utils/global";
import loading from "../components/Loading";
export default {
  components: { loading, mavonEditor },
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
  computed: {
    // 解析器配置
    prop() {
      let data = {
        subfield: false, // 单双栏模式
        defaultOpen: "preview", //edit： 默认展示编辑区域 ， preview： 默认展示预览区域
        editable: false, // 是否允许编辑
        toolbarsFlag: false,
        scrollStyle: true,
      };
      return data;
    },
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
  width: 100%;
  overflow-x: hidden;
}
.article_content >>> img {
  max-width: 100%;
  text-indent: 0;
}
</style>