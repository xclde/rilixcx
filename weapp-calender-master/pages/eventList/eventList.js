Page({
  data: {
    dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20],
    count: 0
  },
  onPullDownRefresh() {
    // console.log("alxlppp");
    var arr = this.data.dataList, max = Math.max(...arr);
    // console.log(max);
    // console.log(this.data.count);
    this.setData({
      dataList: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
    })
    // if (this.data.count < 3) {
    //   for (var i = max + 1; i <= max + 5; ++i) {
    //     arr.push(i);
    //   }
    //   this.setData({
    //     dataList: arr,
    //     count: ++this.data.count
    //   });
    // } else {
    //   wx.showToast({
    //     title: '没有更多数据了！',
    //     image: '../../src/images/noData.png'
    //   })
    // }
    
  },
  onReachBottom() {
    console.log("zxxxx");
    var self = this;
    setTimeout(() => {
      // 模拟请求数据，并渲染
      var arr = self.data.dataList, max = Math.max(...arr);
      console.log(arr);
      for (var i = max + 1; i <= max + 3; ++i) {
        arr.unshift(i);
      }
      self.setData({ dataList: arr });
      // 数据成功后，停止下拉刷新
      wx.stopPullDownRefresh();
    }, 1000);
  }
})