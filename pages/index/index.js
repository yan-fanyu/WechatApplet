const config = require("../../config.js");
Page({
      data: {
            college: JSON.parse(config.data).college,
            collegeCur: -2,
            bookNum: 1,
            good:{
                  picture: "cloud://cloud1-8g01w2xv3b021522.636c-cloud1-8g01w2xv3b021522-1307453073/startBg.jpg",
                  name: "商品名",
                  price: 200
            },
            currentSubject:"quanbu",
            tempSubject:""
      },
      onLoad() {

      },
      //学科选择
      collegeSelect(e) {
            this.setData({
                  collegeCur: e.currentTarget.dataset.id - 1,
                  scrollLeft: (e.currentTarget.dataset.id - 3) * 100,
                  currentSubject:""
            })

      },
      
      goSubjectPage(e){            
            let tempSubject = e.currentTarget.dataset.id
            this.setData({
                  currentSubject: "/pages/subjects/" + tempSubject + "/" + tempSubject,
            })
            
      },

      //选择全部
      selectAll() {
            this.setData({
                  collegeCur: -2,
                  scrollLeft: -200
            })
      },
      //下拉刷新
      onPullDownRefresh() {
      }
})