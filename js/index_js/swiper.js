// 选择是否显示banner上辅导航拦
// swiper轮播js
$(function () {
  //设置全局变量
  var cur = 0; //当前的图片序号
  imgLen = $(".imgList li").length; //获取图片的数量
  timer = null; //设置定时定时器的名字，方便后面关闭

  //当鼠标移到向左和向右的图标上关闭定时器，离开时则重置定时器
  $(".pre,.next").hover(function () {
      clearInterval(timer);
  }, function () {
      changeImg();
  });

  //当鼠标移到图片上关闭定时器，离开时则重置定时器
  $(".imgList").hover(function () {
      clearInterval(timer);
  }, function () {
      changeImg();
  });

  //点击向左图标根据cur进行上一个图片处理
  $(".pre").click(function () {
      cur = cur > 0 ? (--cur) : (imgLen - 1);
      changeTo(cur);
  });

  //点击向右图标根据cur进行上一个图片处理
  $(".next").click(function () {
      cur = cur < (imgLen - 1) ? (++cur) : 0;
      changeTo(cur);
  });

  //封装图片自动播放函数
  function changeImg() {

      timer = setInterval(function () {
          if (cur < imgLen - 1) {
              cur++;
          } else {
              cur = 0;
          }
          changeTo(cur);
      }, 2000);
  }

  //调用函数
  changeImg();

  //图片切换函数
  function changeTo(num) {
      if (num === 0) {
          $(".imgList").animate({
              "left": 0
          }, 0);
          $(".dollList").find("li").removeClass("sec").eq(num).addClass("sec");
      }
      var go = num * 718;
      $(".imgList").animate({
          "left": -go
      }, 500);
      $(".dollList").find("li").removeClass("sec").eq(num).addClass("sec");

  }
  //切换table
  
});
