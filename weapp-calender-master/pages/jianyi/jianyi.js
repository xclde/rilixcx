// pages/jianyi/jianyi.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  formSubmit: function (e) {

    if (e.detail.value.biaoti.length == 0) {
      wx.showToast({
        title: '标题不得为空!',
        icon: 'loading',
        duration: 1500
      })
      setTimeout(function () {
        wx.hideToast()
      }, 2000)

    } else {
      console.log('form发生了submit事件，携带数据为：', e.detail.value)
      // wx.request({
      //   url: 'https://shop.yunapply.com/home/Login/register',
      //   header: {
      //     "Content-Type": "application/x-www-form-urlencoded"
      //   },
      //   method: "POST",
      //   data: {
      //     mobile: e.detail.value.mobile,
      //     password: e.detail.value.password
      //   },
      //   success: function(res) {
      //     if (res.data.status == 0) {
      //       wx.showToast({
      //         title: res.data.info,
      //         icon: 'loading',
      //         duration: 1500
      //       })
      //     } else {
      //       wx.showToast({
      //         title: res.data.info, //这里打印出登录成功
      //         icon: 'success',
      //         duration: 1000
      //       })
      //     }
      //   }
      // })

    }

  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
  
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})