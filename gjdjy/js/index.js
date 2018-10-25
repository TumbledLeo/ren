$(function(){
  $('.play').hover(function(){
    $(this).addClass('active').parent().find('.menu').stop(true).fadeIn(100).animate({marginTop:"0",opacity:"1"});
    // $(this).parent().find('.menu').sblings().css("opacity","0");
    $(this).addClass('active');
  },function(){
    $(this).addClass('active');
    $(this).parent().mouseleave(function(){
      $('.menu').stop(true).fadeOut(200).animate({marginTop:"-24px",opacity:"0"});
      $('.play').removeClass('active');
    });
  });
  $('.img0').hover(function(){
    $(this).find('img').attr("src",'img/cg11.jpg');
    $(this).find('p').animate({fontSize:"26px",top:"80px",left:"150px"},200);
  },function(){
    $(this).find('img').attr("src",'img/cg1.jpg');
    $(this).find('p').animate({fontSize:"20px",top:"85px",left:"160px"},200);
  });
  $('.img1').hover(function(){
    $(this).find('img').attr("src",'img/cg22.jpg');
  },function(){
    $(this).find('img').attr("src",'img/cg2.jpg');
  });
  $('.img2').hover(function(){
    $(this).find('img').attr("src",'img/cg33.jpg');
  },function(){
    $(this).find('img').attr("src",'img/cg3.jpg');
  });
  
  $('.logo_left a').click(function(){
     if($('header').hasClass('hide')){
       $('header').fadeIn().removeClass('hide');
       $('.logo_left img').attr("src",'img/goto.png');
      // $('.top_logo').css("display","none");
      $('.logo_left').addClass('show');

    }else{
      $('header').fadeOut().addClass('hide');
      $('.logo_left img').attr("src",'img/go.png');
      //$('.top_logo').css("display","block");
    }
    //alert($('header').hasClass('hide'));
    //$('.show').fadeIn();
  });

  $('.logo_left.show').mouseenter(function(){
    $('header').fadeIn().removeClass('hide');
    $('.logo_left img').attr("src",'img/goto.png');
    $(this).removeClass('show');
  });
});