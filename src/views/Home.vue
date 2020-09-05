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
          article_title: "标题测试",
          article_content: "<p style='color:red;'>内容测试</p>",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599334219030&di=22194e568bd597cf84fbe66d2d59a3ac&imgtype=0&src=http%3A%2F%2Fimage.namedq.com%2Fuploads%2F20190713%2F18%2F1563015100-REASKtigGP.jpeg",
        },
        {
          article_id: 2,
          article_title: "标题测试2",
          article_content: "<p style='color:red;'>内容测试</p>",
          cover:
            "https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1599334219030&di=22194e568bd597cf84fbe66d2d59a3ac&imgtype=0&src=http%3A%2F%2Fimage.namedq.com%2Fuploads%2F20190713%2F18%2F1563015100-REASKtigGP.jpeg",
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
</style>
