<template>
  <div class="SlayoutWiper">
    <div class="layout">
      <div class="state">
        <div class="airplaneLine">
          <div class="startPonit">
            <p class="statePoint">DH1</p>
            <div class="flyWiper">
              <img class="airplane" src="../../static/images/menu/fly.png" alt="fly">
              <hr class="airHr" size="5">
            </div>
          </div>
          <p class="startInfo">全一上海转运站</p>
        </div>
      </div>
      <div class="stateRight">
        <span class="statePoint">DH1</span>
        <span class="startInfo">上海全运转运站</span>
      </div>
    </div>
    <div class="noticWiper">
    <notice ></notice>
    </div>

  </div>
</template>
<script>
import notice from "@/components/notice.vue";

export default {
  data() {},
  components: {
    notice
  }
};
</script>

<style  lang='scss'>
/* @import url('../reset/_variable.sass'); */
$dark-blue: rgb(79, 168, 255);
$dark-gray: gray;
$light-blue: rgb(240, 248, 255);
.noticWiper{
  margin-right: 30rpx;
}
.SlayoutWiper {
  margin: 30rpx 10rpx ;
  display: flex;
  background: $light-blue;
  justify-content:space-between;
  align-items: center;

  padding:40rpx 0rpx 100rpx 0;
  .airNotice{

  }
  .layout {
    display: flex;
    margin-left: 30rpx;
    .state {
      display: flex;
      .airplaneLine {
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-content: center;
        .startPonit {
          display: flex;
          .flyWiper {
            display: flex;
            flex-direction: column;
            justify-content: center;
            .airHr {
              width: 180rpx;
              position: relative;
              top: -14rpx;
              /* width: 100%; */
              height: 1px;
              background-image: linear-gradient(
                to right,
                #ccc 0%,
                #ccc 50%,
                transparent 50%
              );
              background-size: 9rpx 1px;
              background-repeat: repeat-x;
              /* width: 100%; */
            }
            .airplane {
              width: 32rpx;
              height: 32rpx;
              margin: auto;
            }
          }
        }
      }
    }
    .stateRight {
      display: flex;
      flex-direction: column;
      .statePoint {
        margin-bottom: 6rpx;
      }
      .startInfo {
      }
    }
  }
}
</style>
