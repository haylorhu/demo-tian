<template>
  <div class="allbag">
    <div class="bag">
      <img class="bagIcon" src="../../static/images/menu/unPick.png" alt="unPick">

      <p>待揽件</p>
    </div>
    <div class="bag">
      <img class="bagIcon" src="../../static/images/menu/unPick.png" alt="unPick">

      <p>待揽件</p>
    </div>
    <div class="bag">
      <img class="bagIcon" src="../../static/images/menu/unPick.png" alt="unPick">

      <p>待揽件</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style  lang='scss'>
.allbag {
  display: flex;
  margin: 10rpx 3rpx;
  .bag {
    display: flex;
    flex-direction: column;
    justify-items: center;
    justify-content: center;
    position: relative;
    margin-right: 47rpx;
    .bagIcon {
      height: 50rpx;
      width: 50rpx;
      margin: auto;
        &::after {
        content: "";
        position: absolute;
        top:25rpx;
        left: 67rpx;
        border-top: 2px solid rgb(233, 233, 233);
        width: 80rpx;
      }
    }
  }
}
</style>
