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
var la = true;
$('.la').click(function(){
    // $(this).parent().find('.first_none').animate({height:"300px"});
    $(this).parent().find('.first_none').slideToggle("slow");
    if(la){
        $(this).find('img').attr("src","img_m/sou.png");
        la = false;
    }else{
        $(this).find('img').attr("src","img_m/la.png");
        la = true;
    }
});
$('.tu').click(function(){
    $('.first_none').slideUp();
    $('.la').find('img').attr("src","img_m/la.png");
});
});
$(function(){
	$(".tab li").mouseover(function(){
		$(".tab li").find("span").removeClass("active");
		$(this).find("span").addClass("active");
		$("#tb1,#tb2,#tb3,#tb4").hide();
		$("#"+$(this).attr("rel")).show();	
	})
	
	$(".calencont ul li p:last-child").click(function(){
		$(".calencont li p:last-child").removeClass("active");
		$(this).addClass("active");		
	})
	$(".calencont li[id!='hasactiv']").click(function(){			
			$("#activ3").removeClass("minheight");
			$("#activ3").hide();
			$("#activ3").height(438);
			$("#activ3").slideUp();
			$("#activ4").slideDown();
	})
	$("#hasactiv").click(function(){
			$("#activ3").hide();
			$("#activ4").hide();
			$("#activ3").height(438);
			$("#activ3").slideDown();
    });
    $(".panel-head").click(function(){
        $(".panel-head").removeClass("active");
        $(".panel-body").slideUp();
        if($(this).next(".panel-body").is(":hidden")){
            $(this).addClass("active");
            $(this).next(".panel-body").slideDown();
        }
    });		
});
function navshow(){
    $(".nav").show(500);
    $("#overlay").show();
}
function navhide(){
    $(".nav").hide(500);
    $("#overlay").hide();
}
