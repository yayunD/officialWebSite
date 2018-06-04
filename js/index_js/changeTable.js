/*导航栏*/
$(function(){   
  $(".headerNavContent li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
})
})
//副导航栏
$(function(){   
  $(".headerBanner_subNavContent li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).find('a').addClass('nav_active').parent().siblings().find('a').removeClass('nav_active');
})
})

/* table切换*/
$(function(){  
  $(".contentShow").find(".classContentShow:first").show();     
  $(".changeTableClass li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).find('a').addClass('active').parent().siblings().find('a').removeClass('active');
     var index=$(this).index();
     $(this).parent().next().find(".classContentShow").hide().eq(index).show();
  })
})
// 走进速文导航
$(function(){   
  $(".introduceSuWen >ul li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).find('a').addClass('intrNavActive').parent().siblings().find('a').removeClass('intrNavActive');
})
})
//走进速文导航切换
$(function(){  
  $(".OracleContent").find(".OracleContentShow:first").show();     
  $(".introduceShow li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
     var index=$(this).index();
     $(this).parent().parent().next().next().find(".OracleContentShow").hide().eq(index).show();
  })
})
//classDtailShow
$(function(){   
  $(".classDtailShow li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).find('a').addClass('intrNavActive').parent().siblings().find('a').removeClass('intrNavActive');
})
})
//课程详情
$(function(){
  $(".detailContent").find(".detailText:first").show();     
  $(".classDtailShow li").on("click",function(){ 
     var index=$(this).index();
     $(this).parent().parent().next().find(".detailText").hide().eq(index).show();
  })
})




//学员寄语导航
$(function(){   
  $(".messageNav>li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).addClass('messageActive').siblings().removeClass('messageActive');
})
})

//学员寄语导航切换
$(function(){  
  $(".messageContent").find(".tableChange:first").show();    
  $(".messageNav li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
     var index=$(this).index();
     $(this).parent().next().find(".tableChange").hide().eq(index).show();
  })
})
// 校企合作
// CooperationContentShow
$(function(){  
  $(".OracleContent").find(".CooperationContentShow:first").show();     
  $(".introduceShow li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
     var index=$(this).index();
     $(this).parent().parent().next().next().find(".CooperationContentShow").hide().eq(index).show();
  })
})
//资源下载
$(function(){   
  $(".resourcesCategories >ul li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).find('a').addClass('intrNavActive').parent().siblings().find('a').removeClass('intrNavActive');
})
})

$(function(){  
  $(".resourcesContent").find(".resourcesContent:first").show();     
  $(".resourcesCategories li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
     var index=$(this).index();
     $(this).parent().parent().next().next().find(".resourcesContent").hide().eq(index).show();
  })
})


// 新闻资讯导航
$(function(){   
  $(".newsContent >ul li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
      $(this).find('a').addClass('intrNavActive').parent().siblings().find('a').removeClass('intrNavActive');
})
})

//新闻资讯导航切换
$(function(){  
  $(".newsDetail").find(".newsChange:first").show();     
  $(".newShow li").on("click",function(){
      // 为当前点击的导航加上高亮，其余的移除高亮  
     var index=$(this).index();
     $(this).parent().parent().next().next().find(".newsChange").hide().eq(index).show();
  })
})
// // 下拉框
// $(function () {
//   $('.sel').change(function () {    // 选择后替换内容并恢复箭头方向
//       $('span').html($('.sel').find('option:selected').html());
//       // $('.sel_mask').find('img').attr('src','arrow_down.png');
//   })
//   $('.sel').blur(function () {      //什么也不选恢复箭头方向
//       $('.sel_mask').find('img').attr('src','./images/apply_image/arrow_08.jpg');
//   })
//   $('.sel').click(function(){     // 点击后更改箭头方向
//       $('.sel_mask').find('img').attr('src','./images/apply_image/arrow_08.jpg');
//   })
// })
// 备注：以上方法可以抽成一个公共函数，传参数，因为时间太急，没来得及写，页面部分都有注释