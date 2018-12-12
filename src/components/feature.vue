<template>
  <div class="featureWaper">
    <div class="featur">
      <img class="QRcode" src="../../static/images/menu/QRcode.png">
      <p>扫码揽件</p>
    </div>
    <div class="upDown">
      <img class="upImg" src="../../static/images/menu/up.png" alt>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  }
};
</script>
<style  lang='scss'>
$super-bulue: rgb(227, 242, 255);
.featureWaper {
  display: flex;
  background-color: $super-bulue;
  border-radius: 7px;
  align-items: center;
  box-shadow: 0 3rpx 3rpx rgba(65, 65, 65, 0.219);
  .featur {
    display: flex;
    align-content: center;
    vertical-align: middle;
    /* flex-grow: 1; */
    margin: 5rpx auto;
    .QRcode {
      height: 50rpx;
      width: 50rpx;
      margin-right: 30rpx;
    }
  }
  .upDown {
    padding: 3rpx 0;
    position: relative;
    &::before {
      content: "";
      height: 50rpx;
      border: none;
      border-left: 2px solid white;
      position: relative;
      top: 50%;
      top: 50%;

      transform: translateY(-50%);
      position: absolute;
    }
    .upImg {
      height: 50rpx;
      width: 50rpx;
      padding: 5rpx;
      position: relative;
      top: 4rpx;
    }
  }
}
</style>
