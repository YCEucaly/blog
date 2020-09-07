<template>
  <div>
    <div class="um_content">
      <div class="spinner">
        <div id="loading3">
          <div class="demo3"></div>
          <div class="demo3"></div>
          <div class="demo3"></div>
          <div class="demo3"></div>
          <div class="demo3"></div>
          <div class="demo3"></div>
          <div class="demo3"></div>
          <div class="demo3"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "loading",
};
</script>

<style scoped>
.spinner {
  margin: 25% auto 0 auto;
  width: 50px;
  height: 50px;
  position: relative;
}
.spinner .spinner-container {
  position: absolute;
  width: 100%;
  height: 100%;
}
.um_content {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  background-color: rgba(255, 255, 255, 0.5);
  z-index: 9999999999;
  overflow: auto;
  width: 100%;
  height: 100%;
}
#loading3 {
  position: relative;
  width: 50px;
  height: 50px;
}
.demo3 {
  width: 0.3em;
  height: 0.3em;
  border-radius: 2px;
  background: #68b2ce;
  position: absolute;
  animation: demo3 linear 0.8s infinite;
  -webkit-animation: demo3 linear 0.8s infinite;
}
.demo3:nth-child(1) {
  left: 24px;
  top: 2px;
  animation-delay: 0s;
}
.demo3:nth-child(2) {
  left: 40px;
  top: 8px;
  animation-delay: 0.1s;
}
.demo3:nth-child(3) {
  left: 47px;
  top: 24px;
  animation-delay: 0.1s;
}
.demo3:nth-child(4) {
  left: 40px;
  top: 40px;
  animation-delay: 0.2s;
}
.demo3:nth-child(5) {
  left: 24px;
  top: 47px;
  animation-delay: 0.4s;
}
.demo3:nth-child(6) {
  left: 8px;
  top: 40px;
  animation-delay: 0.5s;
}
.demo3:nth-child(7) {
  left: 2px;
  top: 24px;
  animation-delay: 0.6s;
}
.demo3:nth-child(8) {
  left: 8px;
  top: 8px;
  animation-delay: 0.7s;
}
@keyframes demo3 {
  0%,
  40%,
  100% {
    transform: scale(1);
  }
  20% {
    transform: scale(3);
  }
}
@-webkit-keyframes demo3 {
  0%,
  40%,
  100% {
    transform: scale(1);
  }
  20% {
    transform: scale(3);
  }
}
</style>