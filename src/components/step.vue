<template>
  <div>
    <div class="stepButton">
      <div class="innerStep">
        <p class="text">揽件</p>
        <p class="text">2/9</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    title: {
      default: "揽件"
    },
    current: {
      default: 2
    },
        total: {
      default:9
    },
  },
  data() {
    return {};
  }
};
</script>
<style  lang='scss'>
/* @import url('../reset/_variable.sass'); */
$dark-blue: rgb(79, 168, 255);
.stepButton {
  border-radius: 40rpx;
  border: 4rpx solid rgb(63, 166, 255);
  max-width: 180rpx;
  -moz-box-shadow: 0px 0px 9rpx rgb(63, 166, 255);
  -webkit-box-shadow: 0px 0px 9rpx rgb(63, 166, 255) 8;
  box-shadow: 0px 0px 9rpx rgb(63, 166, 255);

  .innerStep {
    margin: 8rpx 0;
    padding: 5rpx 0;
    display: flex;
    justify-content: space-around;
    color: white;
    border-radius: 40rpx;
    margin: 5rpx;
    background-color: $dark-blue;
    color: white;
    .text {
      color: white;
      font-size: 30rpx;
      font-weight: 100;
      padding: 0 8rpx;
    }
  }
}
</style>
