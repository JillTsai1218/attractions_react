import React from "react";
import $ from 'jquery';
export default class Jq  extends React.Component {
    componentDidMount(){      
$(function() {  
    $(window).scroll(function(){
       object_scroll();	
    });
    function object_scroll(){	
        if ($(window).scrollTop()>50){
            $('.fixed_bar').css({display:'flex'});
        }else {
            $('.fixed_bar').css({display:'none'});
        }
        
        if ($(window).scrollTop()>150){   
            $('.fixed_bar').css({top:0});
            $('#back').fadeIn(); 
            $('#back').css({ 'bottom': '25px' });             
        } else {
            $('.fixed_bar').css({top:'-100%'});
            $('#back').fadeOut(); 
            $('#back').css({ 'bottom': '-100px' });
        }
        
    
    }    
    /*gotop*/
        var $el = $(scrollableElement('html', 'body'));
        var speed = 550;
        var $iconTOP = $('#back-img1');
        $($iconTOP).click(function(event) {
            event.preventDefault();
            $el.stop().animate({ scrollTop: -50 }, speed);
        });
        // 透過scrollTop檢測可用元素的函數// http://www.learningjquery.com/2007/10/improved-animated-scrolling-script-for-same-page-links#update4
        function scrollableElement() {
            var i, len, el, $el, scrollable;
            for (i = 0, len = arguments.length; i < len; i++) {
                el = arguments[i];
                $el = $(el);
                if ($el.scrollTop() > 0) {
    
                    return el;
                } else {
                    $el.scrollTop(1);
                    scrollable = $el.scrollTop() > 0;
                    $el.scrollTop(0);
                    if (scrollable) {
                        return el;
                    }
                }
            }
            return [];
        }
     /*gotop ed*/

     
  if ($(window).width() > 767) {
    $(window).scroll(function(){
        //向下滾動logo_box增加陰影
      if($(window).scrollTop() > 400 ){
          $('.logo_box').css({backgroundColor: 'rgba(0, 0, 0, 0.3)'});
      }else{
          $('.logo_box').css({backgroundColor: 'rgba(0, 0, 0, 0)'});
      }
      //map圖隨著捲動，往上蓋過上面區塊
    //   if($(window).scrollTop() > 10 && $(window).scrollTop() < 500) {
    //     $(".map_bg").css("position","relative");
    //     $(".map_bg").css("margin-top",-$(window).scrollTop());
    //   }
    });
  }
  //螢幕width改變 重新reload頁面

//手機版 隨著捲動，影片往上蓋過上面banner區塊，並fix在上面
var $fv=$('.freeway_video').offset().top;
var freeway_video_c=$('.freeway_video').clone();
$('.video_fix .frame_box').append(freeway_video_c);

function video_scroll(){
    $(window).scroll(function(){    
        if ($(window).width() < 500) {   
            if($(window).scrollTop() > $fv){
                $('.video_fix').show();      
            }else{
                $('.video_fix').hide();
            } 
        }else{
            $('.video_fix').hide();
        }    
    });
}
video_scroll();
$(window).resize(function(){video_scroll();});



//live圖片閃爍
 var counter = 0;
function cycle(){
    if(counter%2==0){
        $(".live_div").css("visibility","hidden");
        
    }else{
        $(".live_div").css("visibility","visible");
    } 
    counter++;
}
setInterval(cycle, 500 );
    
    });
}
render(){return (
<div className="myjs">
</div>)}
}