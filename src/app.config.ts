import { AppConfig } from "remax/wechat";

const config: AppConfig = {
  pages: [
    "pages/views/home", //首页
    "pages/views/deal", //下单
    "pages/views/orders", //订单历史
    "pages/views/my", //我的
    "pages/views/more"
  ],
  window: {
    navigationBarTitleText: "Remax Wechat Template With TypeScript",
    navigationBarBackgroundColor: "#fafafa",
    navigationBarTextStyle: 'black'
  },
  "tabBar":{
    "color": "#707070",
    "backgroundColor": "#faf9f9",
    // "borderStyle": "white",
    "selectedColor": "#3CB371",
    "list":[
      {
        "pagePath": "pages/views/home",
        "text": "首页",
        "iconPath": "images/home.png",
        "selectedIconPath": "images/home-selected.png"
      },
      {
        "pagePath": "pages/views/deal",
        "text": "下单",
        "iconPath": "images/deal.png",
        "selectedIconPath": "images/deal-selected.png"
      },
      {
        "pagePath": "pages/views/orders",
        "text": "订单",
        "iconPath": "images/order.png",
        "selectedIconPath": "images/order-selected.png"
      },
      {
        "pagePath": "pages/views/my",
        "text": "我的",
        "iconPath": "images/mine.png",
        "selectedIconPath": "images/mine-selected.png"
      },
    ]
  }
};

export default config;
