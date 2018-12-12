<template>
  <div>
    <div class="stepButton1">
      <div class="innerStep1">
        <p class="text">交运</p>
        <p class="text">0/4</p>
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
<style  lang='scss' scoped>
/* @import url('../reset/_variable.sass'); */
$dark-blue: rgb(79, 168, 255);
.stepButton1 {
  border-radius: 40rpx;
  border: 4rpx solid rgb(63, 166, 255);
  max-width: 180rpx;
  -moz-box-shadow: 0px 0px 9rpx rgb(63, 166, 255);
  -webkit-box-shadow: 0px 0px 9rpx rgb(63, 166, 255) 8;
  box-shadow: 0px 0px 9rpx rgb(63, 166, 255);
  background-color: white;
  .innerStep1 {
    margin: 8rpx 0;
    padding: 5rpx 0;
    display: flex;
    justify-content: space-around;
    color: $dark-blue;
    border-radius: 40rpx;
    margin: 5rpx;
    background-color: white;
    color: $dark-blue;
    .text {
      color: $dark-blue;
      font-size: 30rpx;
      font-weight: 100;
      padding: 0 8rpx;
    }
  }
}
</style>
