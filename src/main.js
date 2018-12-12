import Vue from 'vue'
import App from './App'

//全局处理重复页面跳转详情初始化,和详情跳详情返回的bug
// import MyPlugin from './minxins'
// Vue.use(MyPlugin)



Vue.config.productionTip = false
// App.mpType = 'app'

const app = new Vue(App)
app.$mount()

export default {
  // 这个字段走 app.json
  config: {
    // 页面前带有 ^ 符号的，会被编译成首页，其他页面可以选填，我们会自动把 webpack entry 里面的入口页面加进去
    "pages": ["pages/index/main"],
    "window": {
      "backgroundTextStyle": "light",
      "navigationBarBackgroundColor": "#fff",
      "navigationBarTitleText": "天网联盟",
      "navigationBarTextStyle": "black"
    },
    // "tabBar": {
    //   "backgroundColor": "#fafafa",
    //   "borderStyle": "white",
    //   "selectedColor": "#61A8FF",
    //   "color": "#666",
    //   "list": [{
    //       "pagePath": "pages/index/main",
    //       "iconPath": "static/images/menu/order.png",
    //       "selectedIconPath": "static/images/menu/selectOrder.png",
    //       "text": "订单管理"
    //     },
    //     {
    //       "pagePath": "pages/topic/main",
    //       // "iconPath": "static/images/ic_menu_topic_nor.png",
    //       // "selectedIconPath": "static/images/ic_menu_topic_pressed.png",
    //       "text": ""
    //     },
    //     {
    //       "pagePath": "pages/category/main",
    //       "iconPath": "static/images/menu/my.png",
    //       "selectedIconPath": "static/images/menu/selectMy.png",
    //       "text": "个人中心"
    //     },

    //   ]
    // }
  }
}
