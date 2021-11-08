var data = {
  // 开机图片
  bgurl: '/images/startBg.jpg',
   
  //配置学院，建议不要添加太多，不然前端不好看
  college: [{
      name: '通用',
      _name:"tongyong",
      id: -1
    },
    {
      name: '机械',
      _name:"jixie",
      id: 0
    },
    {
      name: '经管',
      _name:"jingguan",
      id: 1
    },
    {
      name: '新闻',
      _name:"xinwen",
      id: 3
    },
    {
      name: '数统',
      _name:"shutong",
      id: 4
    },
    {
      name: '物理',
      _name:"wuli",
      id: 5
    },
    {
      name: '化工',
      _name:"huagong",
      id: 6
    },
    {
      name: '生物',
      _name:"shengwu",
      id: 7
    },
    {
      name: '电气',
      _name:"dainqi",
      id: 8
    },
    {
      name: '机械',
      _name:"jixie",
      id: 9
    },
    {
      name: '资环',
      _name:"huanzi",
      id: 11
    },
    {
      name: '材料',
      _name:"cailiao",
      id: 12
    },
    {
      name: '其它',
      _name:"qita",
      id: 14
    },
  ],
}
//下面的就别动了
function formTime(creatTime) {
  let date = new Date(creatTime),
    Y = date.getFullYear(),
    M = date.getMonth() + 1,
    D = date.getDate(),
    H = date.getHours(),
    m = date.getMinutes(),
    s = date.getSeconds();
  if (M < 10) {
    M = '0' + M;
  }
  if (D < 10) {
    D = '0' + D;
  }
  if (H < 10) {
    H = '0' + H;
  }
  if (m < 10) {
    m = '0' + m;
  }
  if (s < 10) {
    s = '0' + s;
  }
  return Y + '-' + M + '-' + D + ' ' + H + ':' + m + ':' + s;
}

function days() {
  let now = new Date();
  let year = now.getFullYear();
  let month = now.getMonth() + 1;
  let day = now.getDate();
  if (month < 10) {
    month = '0' + month;
  }
  if (day < 10) {
    day = '0' + day;
  }
  let date = year + "" + month + day;
  return date;
}
module.exports = {
  data: JSON.stringify(data),
  formTime: formTime,
  days: days
}