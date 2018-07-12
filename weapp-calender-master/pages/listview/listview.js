// pages/list/list.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    title: '加载中...', // 状态
    list: [], // 数据列表
    type: '', // 数据类型
    // loading: true // 显示等待框
  },
  addEvent: function (e) {

    wx.navigateTo({
      url: '../addevent/addevent?addDate='
    });
    // console.log("添加事件" + addDate);
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) { // options 为 board页传来的参数
    const _this = this;
    _this.setData({
      list: [{
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      }, {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      },
      {
        "title": "标题1",
        "original_title": "标题1",
        "year": "20160201"
      }],
      type:"coming_soon"      
    })    


    // 拼接请求url
    const url = 'https://api.douban.com/v2/movie/coming_soon';
    // // 请求数据
    // wx.request({
    //   url: url,
    //   data: {},
    //   header: {
    //     'content-type': 'json' // 默认值
    //   },
    //   success: function (res) {
    //     console.log(res.data);
    //     // 赋值
    //     _this.setData({
    //       title: res.data.title,
    //       list: res.data.subjects,
    //       type: options.type,
    //       loading: false // 关闭等待框
    //     })
    //   }
    // })
  }
})