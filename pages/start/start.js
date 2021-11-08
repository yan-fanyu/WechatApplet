const app = getApp()
const config = require("../../config.js");
const DB = wx.cloud.database().collection("list");

Page({

  /**
   * 页面的初始数据
   */
  data: {
    count: 1,
  },
  onLoad() {
    this.countDown();
  },
  go() {
    wx.switchTab({
      url: '/pages/index/index',
    })
  },
  countDown: function () {
    let that = this;
    let total = 1;
    this.interval = setInterval(function () {
      total > 0 && (total--, that.setData({
        count: total
      })), 0 === total && (that.setData({
        count: total
      }), wx.switchTab({
        url: "/pages/index/index"
      }), clearInterval(that.interval));
    }, 1e3);
  }
})