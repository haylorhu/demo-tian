<template>
  <div class="PackWiper">
    <div class="bagOutInfo">
      <div class="bagCode">
        <p class="infoBga">外袋条码:</p>
        <p class="orderNum">103748568</p>
      </div>
      <p class="bagData">2018-10-31</p>
    </div>
    <div class="bagInertInfo">
      <p class="infoBga">包内件数:</p>
      <p class="num">23件</p>
      <p class="infoBga">实际重量:</p>
      <p class="num">23KG</p>
      <p class="infoBga">材质重量:</p>
      <p class="num">23KG</p>
    </div>
      <div class="allbag">
    <div class="bag">
      <img class="bagIcon" src="../../static/images/menu/unPick.png" alt="unPick">

      <p>待揽件</p>
    </div>


  </div>
  </div>
</template>
<script>
import BagState from "@/components/bagState.vue";
export default {
  components: {
    BagState
  }
};
</script>
<style  lang='scss'>
$data-gray:rgb(145,145,145);
$info-gray:rgb(103,103,103);
$num-black:rgb(51,51,51);
.PackWiper {
  .infoBga{
   color:  $info-gray;
  }
  .orderNum{
   color: $num-black;
   font-weight: 900;
  padding: 0 20rpx;

  }

  .bagOutInfo {
    display: flex;
    justify-content: space-between;
    padding: 10rpx 0rpx;
    .bagData{
      color: $data-gray;
    }
    .bagCode {
      display: flex;
    }
  }
  .bagInertInfo {
    display: flex;
    .num {
      padding: 0 10rpx;
      color: $num-black;
      font-weight: 500;
      padding: 0 20rpx;
    }
  }
}
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
