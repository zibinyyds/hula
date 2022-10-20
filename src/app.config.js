export default defineAppConfig({
  pages: [
    "pages/index/index",
    "pages/detail/index",
    "pages/detail2/index",
    "pages/classify/index",
    "pages/user/index",
    "pages/h5page/index",
  ],
  tabBar: {
    color: "#000000",
    selectedColor: "#004cff",
    list: [
      {
        pagePath: "pages/index/index",
        selectedIconPath: "./images/homeSelected.png",
        iconPath: "./images/home.png",
        text: "首页"
      },
      // {
      //   pagePath: "pages/classify/index",
      //   selectedIconPath: "./images/shopSelected.png",
      //   iconPath: "./images/shop.png",
      //   text: "商店"
      // },
      {
        pagePath: "pages/user/index",
        selectedIconPath: "./images/userSelected.png",
        iconPath: "./images/user.png",
        text: "我的"
      }
    ]
  },
  window: {
    backgroundColorBottom: "#f0f3f7",
    backgroundColorTop: "#fff",
    backgroundTextStyle: "light",
    navigationBarBackgroundColor: "#fff",
    navigationBarTitleText: "WeChat",
    navigationBarTextStyle: "black",
    // enablePullDownRefresh: true,
    // backgroundTextStyle: "dark",
  }
});
