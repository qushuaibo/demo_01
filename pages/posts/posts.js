/*
 * @Descripttion: 
 * @version: 
 * @Author: qushuaibo
 * @Date: 2020-09-21 15:41:21
 * @LastEditors: qushuaibo
 * @LastEditTime: 2020-09-23 22:59:36
 */
// 导入
// 旧的版本 可以不一样
// var postData = require("../../data/data.js")
// console.log(postData)

// 新的 比require少一级 但是名字必须和前面的一样
import {postList} from '../../data/data.js'
console.log(postList)

Page({

  /**
   * 页面的初始数据
   */
  data: {
    // 所有要绑定的变量 建议在data里定义 data里相当于初始值
    a: "张伟是从服务器中取出来的",
    flag: true
  },
  /**
   * 生命周期函数--监听页面加载
   * 钩子函数
   * 条件渲染 if 和 else 列表渲染(一组数据的展示 block)
   */
  onLoad: function (options) {
    // a = "张伟是从服务器中取出来的"
    /* 
      Dom以前是线获取到结点 
      var d = documnet.getElemtById('');
    
      直接使用变量传递这里的数据绑定就可以直接使用
      数据优先(数据驱动) -> 数据绑定
      
      开发小程序不需要用dom 但有相应的api
     */

    // 接受javascript对象
    // 所有变量都是在data里  setData会自动把变量加入到data里

    // this.setData({
    //   b:"2021",
    //   c:" 2028"
    //   })
    /*     this.setData({
          posts:postList
        }); */
    // 简化为postList
    this.setData({
      postList
    });
  },
  //跳转到新闻详情页面
  onGoToDetail(event) {
    wx.navigateTo({
      url: '/pages/post_detail/post_detail',
    })
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  // es6简化了function
  onReady () {
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