<template>
  <div>
    <el-carousel indicator-position="outside" height="330px">
      <el-carousel-item v-for="item in recommendList" :key="item.article_id">
        <div>
          <el-image :key="item.cover" :src="item.cover" class="cover_img" fit="cover"></el-image>
          <div class="recommend_title">{{item.article_title}}</div>
        </div>
      </el-carousel-item>
    </el-carousel>
    <div class="list">
      <el-container v-for="item in recommendList" :key="item.article_id" class="list_item_containe">
        <el-aside width="100px" style="background-color: rgb(238, 241, 246)">
          <el-image :key="item.cover" :src="item.cover" class="item_img" fit="fill"></el-image>
        </el-aside>
        <el-main class="item_main">
          <div>
            <span class="item_title">{{item.article_title}}</span>
            <span class="item_info">{{item.date}}</span>
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
        :current-page="currentPage4"
        :page-sizes="[100, 200, 300, 400]"
        :page-size="100"
        small
        layout="total, sizes, prev, pager, next, jumper"
        :total="400"
      ></el-pagination>
    </div>
  </div>
</template>

<script>
export default {
  name: "home", // 首页
  data() {
    return {
      recommendList: [
        {
          article_id: 1,
          article_title:
            "标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试标题测试",
          article_content: "<p style='color:red;'>内容测试</p>",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599334219030&di=22194e568bd597cf84fbe66d2d59a3ac&imgtype=0&src=http%3A%2F%2Fimage.namedq.com%2Fuploads%2F20190713%2F18%2F1563015100-REASKtigGP.jpeg",
          tags: ["前端", "后端", "Angular"],
          date: "2020-09-01 00:00:00",
        },
        {
          article_id: 2,
          article_title: "标题测试2",
          article_content: "<p style='color:red;'>内容测试</p>",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599334219030&di=22194e568bd597cf84fbe66d2d59a3ac&imgtype=0&src=http%3A%2F%2Fimage.namedq.com%2Fuploads%2F20190713%2F18%2F1563015100-REASKtigGP.jpeg",
          date: "2020-09-01 00:00:00",
        },
      ],
    };
  },
  created() {
    console.log("home");
  },
};
</script>

<style scoped>
.cover_img {
  height: 300px;
}
.recommend_title {
  position: relative;
  width: 100%;
  height: 30px;
}
.list {
  margin: 20px auto;
  max-width: 500px;
}
.list_item_containe {
  height: 100px;
  border: 1px solid #eee;
  margin-bottom: 15px;
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
}
</style>
