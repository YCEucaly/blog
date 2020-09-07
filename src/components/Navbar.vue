<template>
  <div>
    <div class="top-menu">
      <span
        class="menu-item"
        @click="goToPage(item.path)"
        v-for="item in menu"
        v-bind:key="item.name"
      >
        <span class="border" :class="item.path==curPath?'active':''">{{item.name}}</span>
      </span>
    </div>
    <div class="fill"></div>
  </div>
</template>

<script>
export default {
  name: "navbar",
  data() {
    return {
      curPath: "home",
      menu: [
        {
          name: "首页",
          path: "home",
        },
        {
          name: "分类",
          path: "category",
        },
        {
          name: "关于",
          path: "about",
        },
      ],
    };
  },
  methods: {
    goToPage(path) {
      this.curPath = path;
      this.$router.push(path);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.top-menu {
  background: #000;
  color: #fff;
  height: 50px;
  line-height: 50px;
  width: 100%;
  padding: 0;
  margin: 0;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 999999999;
}
.menu-item {
  display: inline-block;
  width: 12%;
  cursor: pointer;
}

.border {
  display: inline-block;
  width: 70px;
  height: 45px;
}
.active {
  border-bottom: 5px solid #276543;
}
@media screen and (max-width: 600px) {
  .menu-item {
    width: 20%;
  }
}
.fill {
  height: 50px;
  line-height: 50px;
  width: 100%;
}
</style>
