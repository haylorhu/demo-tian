<template>
  <div class="index">
    <hr class="airHr" size="5">

    <div class="steps">
      <Step></Step>
      <Step1></Step1>
      <Step2></Step2>
    </div>
    <div class="arrow">
      <img class="right" src="../../../static/images/menu/right.png">
      <img class="right" src="../../../static/images/menu/right.png">
      <div class="empty"></div>
      <img class="right" src="../../../static/images/menu/right.png">
      <img class="right" src="../../../static/images/menu/right.png">
    </div>
    <div class="listWiper">
      <section>
        <div class="tansPortInfo">
          <div class="Slayout">
            <Shipping></Shipping>
            <div class="featerWiper">
              <Feature></Feature>
            </div>
          </div>
        </div>
        <div class="PackageWiper">
          <Package></Package>
        </div>
      </section>
      <div class="hr"></div>
      <section>
        <div class="PackageWiper-down">
          <Package1></Package1>
        </div>
        <div class="tansPortInfo">
          <div class="Slayout">
            <Shipping></Shipping>
            <div class="featerWiper">
              <Feature></Feature>
            </div>
          </div>
        </div>
      </section>
    </div>
    <div class="tapBar">
      <div class="iconWiperLeft">
        <img class="Qcode" src="../../../static/images/menu/SelectOrder.png">
        <p>订单管理</p>
      </div>
      <div class="iconWiper">
        <img class="Qcode center" src="../../../static/images/menu/QRcode.png">
        <p></p>
      </div>
      <div class="iconWiperRight">
        <img class="Qcode" src="../../../static/images/menu/my.png">
        <p>个人中心</p>
      </div>
    </div>
  </div>
</template>

<script>
import Step from "@/components/step.vue";
import Step1 from "@/components/step1.vue";
import Step2 from "@/components/step2.vue";
import Shipping from "@/components/shipping.vue";
import Notice from "@/components/notice.vue";
import Package from "@/components/package.vue";
import Package1 from "@/components/package1.vue";
import Feature from "@/components/feature.vue";

export default {
  components: {
    Step,
    Step1,
    Step2,
    Shipping,
    Notice,
    Package,
    Package1,
    Feature
  }
};
</script>

<style lang='scss' scoped>
.airHr {
  width: 60%;
  position: relative;
  left: 140rpx;
  top: 64rpx;
  /* width: 100%; */
  height: 1px;
  background-image: linear-gradient(
    to right,
    rgb(92, 195, 255) 0%,
    rgb(118, 205, 255) 50%,
    transparent 50%
  );
  background-size: 21rpx 1px;
  background-repeat: repeat-x;
  /* width: 100%; */
}
.arrow {
  position: absolute;
  top: 56rpx;
  left: 209rpx;
z-index: 20;
display: flex;
.empty{
  width: 163rpx;
}
  .right {
    height: 20rpx;
    width: 20rpx;
    padding: 0 10rpx;
  }
}

.tapBar {
  bottom: 0rpx;
  left: 50%;
  position: fixed;
  transform: translateX(-50%);
  display: flex;
  justify-content: space-around;
  background-color: white;
  width: 100%;
  padding: 0 40rpx;
  align-items: center;
  .iconWiperLeft {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-left: 50rpx;
  }
  .iconWiperRight {
    display: flex;
    flex-direction: column;
    justify-items: center;
    align-items: center;
    margin-right: 50rpx;
  }
  .Qcode {
    width: 50rpx;
    height: 50rpx;
  }
  .center {
    position: relative;
    bottom: 41rpx;
    width: 68rpx;
    height: 68rpx;
    border: 2px solid rgb(133, 183, 255);
    padding: 20rpx;
    box-shadow: 0 0 10rpx rgb(22, 119, 255);
    border-radius: 50%;
    background-color: white;
  }
}
.hr {
  width: 90%;
  border-top: 1px solid rgb(225, 222, 222);
  margin-left: auto;
  margin-right: auto;
}
secction {
  padding-bottom: -200rpx;
}
.index {
  .steps {
    display: flex;
    justify-content: space-around;
    align-items: center;
    margin-top: 30rpx;
    z-index: 20;
    position: relative;
  }
  .listWiper {
    background: white;
    border-radius: 5rpx;
    margin: 50rpx 15rpx 20rpx 15rpx;
    padding-top: 20rpx;
    padding-bottom: -20rpx;
    position: relative;
    box-shadow: 0rpx 2rpx 15rpx rgba(156, 156, 156, 0.452);
    top: -80rpx;
    .tansPortInfo {
      .Slayout {
        .featerWiper {
          position: relative;
          top: -100rpx;
          margin: 0 12rpx;
        }
      }
    }
    .PackageWiper {
      position: relative;
      top: -100rpx;
      margin: 10rpx 20rpx -80rpx 20rpx;
    }
    .PackageWiper-down {
      margin: 0 20rpx;
    }
  }
}
</style>
