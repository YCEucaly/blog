<template>
  <div class="content">
    <el-image
      v-if="logoStatus"
      @error="logoStatus=false"
      src="https://youzouzou.run/common/assets/logo.png"
      fit="fill"
    ></el-image>
    <h2>技术改变生活。</h2>
    <h5>—— Eucaly@2020</h5>
  </div>
</template>

<script>
export default {
  data() {
    return {
      logoStatus: true,
    };
  },
};
</script>

<style scoped>
.content {
  max-width: 800px;
  margin: 80px auto;
}
</style>