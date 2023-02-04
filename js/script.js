$(document).ready(function(){
    //탑버튼 클릭시 위로 올라가기
    $(".topBtn").css("cursor", "pointer").click(function(
        ){$('body, html').animate({scrollTop:0}, 500);
        return false;
    });

    $("#gnb>div>ul>li>a").click(function(event){ event.preventDefault(); $('.itemBox').animate({scrollTop:$(this.hash).offset().top-165}, 1000); });
});
