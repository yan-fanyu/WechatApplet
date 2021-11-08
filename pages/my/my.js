Page({
  data:{
    userInfo: "",
    money: ""
  },
  onLoad(){
    let user = wx.getStorageSync('user')
    this.setData({
      userInfo: user,
      money: 1000
    })
  },
  login(){
    wx.getUserProfile({    
      desc: '必须授权',
      success:res=>{
        let user = res.userInfo
        wx.setStorageSync('user', user)
        console.log("用户信息", user)
        this.setData({
          userInfo: user
        })
      },
      fail: res=>{
        console.log("授权失败", res.userInfo)
      }
    })
  },
  loginOut(){
    this.setData({
      userInfo: ""
    })
    wx.setStorageSync('user', null)
  }
})