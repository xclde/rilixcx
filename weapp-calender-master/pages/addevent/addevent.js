// pages/addevent/addevent.js

Page({

  /**
   * 页面的初始数据
   */
  data: {
    picker1Value: 0,
    picker1Range: ['请选择', '50以下', '50-89', '90-129', '130-139', '140-149', '150-159', '160-169', '170-179', '180以上'],
    leibieValue: 0,
    leibieRange: ['其他', '结婚纪念日', '生日'],
    chongfuValue: 0,
    chongfuRange: ['永不', '每天', '每周', '每月', '每年'],
    tixingValue: 0,
    tixingRange: ['无', '准时', '提前一天09:00', '提前一周09:00', '提前两周9:00'],
  },
  bindDateChange:function(e){
    var riqi = e.detail.value.split("-");

    // console.log();
    this.setData({
      title: riqi[0] + "年" + riqi[1] + "月" + riqi[2] + "日"
    })
    

  },
  normalPickerBindchange: function (e) {
    this.setData({
      picker1Value: e.detail.value
    })
  },
  leibieBindchange: function (e) {
    this.setData({
      leibieValue: e.detail.value
    })
  },
  chongfuBindchange: function (e) {
    this.setData({
      chongfuValue: e.detail.value
    })
  },
  tixingBindchange: function (e) {
    this.setData({
      tixingValue: e.detail.value
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // console.log(options);
    console.log(options.addDate);
    if (options.addDate != null && options.addDate != undefined) {
      this.setData({
        title: options.addDate
      })
    }
  },
  formReset: function (e) {
    console.log(e);
    console.log('form发生了reset事件，携带数据为：', e.detail.value)
    this.setData({
      chosen: ''
    })
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

  },
  formSubmit: function (e) {

    if (e.detail.value.biaoti.length == 0) {

      wx.showToast({
        title: '手机号码不得为空!',
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

  }


})