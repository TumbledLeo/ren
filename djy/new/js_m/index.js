$(function(){
   // tab切换
function tabCtrl(ele) {
    //为了isScoll 第二个隐藏的tab应用
  //$(ele + ' .tabContents .tabContent').hide().eq(0).show();
  $(ele + ' .tabs .tab').eq(0).addClass('active');
  $(ele + ' .tabs .tab').click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      if ($(this).hasClass('active')) {
          return;
      }
      $(this).addClass('active').siblings().removeClass('active');
      var me = $(this);
      var index = 0;
      $(ele + ' .tabs .tab').each(function (i) {
          if (me.get(0) === $(this).get(0)) {
              index = i;
          }
      });
      $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn(500);
  });
}
function tabCtrl1(ele) {
  $(ele + ' .tabContents .tabContent').hide().eq(0).show();
  $(ele + ' .tabs .tab').eq(0).addClass('active');
  $(ele + ' .tabs .tab').click(function (e) {
      e.stopPropagation();
      e.preventDefault();
      if ($(this).hasClass('active')) {
          return;
      }
      $(this).addClass('active').siblings().removeClass('active');
      var me = $(this);
      var index = 0;
      $(ele + ' .tabs .tab').each(function (i) {
          if (me.get(0) === $(this).get(0)) {
              index = i;
          }
      });
      $(ele + ' .tabContents .tabContent').hide().eq(index).fadeIn(500);
  });
}
    tabCtrl('.taa');

    tabCtrl1('.ren');
    tabCtrl1('.ren5');


var nav = true;
$('.dot a').click(function(){
    if(nav){
        $(this).addClass('active');
        nav = false;
        $('.cell').css("display","block");
    }else{
        $(this).removeClass('active');
        nav = true;
        $('.cell').css("display","none");
    }
});

})