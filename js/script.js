$(document).ready(function(){
  $(window).scroll(function() {  
    // selectors
    var $window = $(window),
        $body = $('body'),
        $panel = $('section');
    
    // Change 33% earlier than scroll position so colour is there when you arrive.
    var scroll = $window.scrollTop() + ($window.height() / 3);
    
    $panel.each(function () {
      var $this = $(this);
      
      // if position is within range of this panel.
      // So position of (position of top of div <= scroll position) && (position of bottom of div > scroll position).
      // Remember we set the scroll to 33% earlier in scroll var.
      if ($this.position().top <= scroll && $this.position().top + $this.height() > scroll) {
            
        // Remove all classes on body with color-
        $body.removeClass(function (index, css) {
          return (css.match (/(^|\s)color-\S+/g) || []).join(' ');
        });
          
        // Add class of currently active div
        $body.addClass('color-' + $(this).data('color'));
      }
    }); 

    //목업1 스크롤 애니메이션
    if($('body').hasClass('color-lavender') == true){
      $("#about .mokup1").addClass('anim_go');
    }else{
      $("#about .mokup1").removeClass('anim_go');
    };
    

    
  }).scroll();

  //슬라이드
  var swiper = new Swiper('.swiper-container', {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
      delay: 4500,
      disableOnInteraction: false,
    },
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  });


});
