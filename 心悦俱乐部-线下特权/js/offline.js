var $code = $('#scaC');
var $cal=$('#scaC i')
var $cd=$('#cod');


//成都信息显示
var cd = document.querySelector("#cd");
var cdInfo = cd.getElementsByClassName("mapInfo")[0];
cd.onmouseover = function () {
    cdInfo.style.opacity = 1;
}
cd.onmouseout = function () {
    cdInfo.style.opacity = 0;
}



//报名按钮特效
var $bM = $('#bM');
$bM.mouseenter(function () {
    $(this).css('backgroundPosition', '-1155px 0px');
}).mouseleave(function () {
    $(this).css('backgroundPosition', '-1155px -162px');
}).click(function () {
    $code.slideDown(800,function(){
        $cd.slideDown(800
            ,function(){ 
            $cd.css('display', 'block')
        });
     }); 
     console.log('zan');
})

//反馈按钮特效
var $febtn = $('.feedback-area #febt');
$febtn.click(function () {
    $code.slideDown(800,function(){
        $cd.slideDown(800);
     }); 
     console.log('zan');
})

//点赞按钮特效
var $feact = $('.feedback-action');
$feact.click(function () {
    $code.slideDown(800,function(){
        $cd.slideDown(800);
     });
     console.log('zan');
        
})




//二维码关闭
$cal.click(function () {
    $cd.slideUp(800,function(){
        $code.slideUp(800); 
    });
})





//link鼠标点击
var $links = $('.tab>a.link');
for (var i = 0; i < $links.length; i++) {
    $links[i].onclick = function () {
        //修改当前a为active状态
        chan($(this));
        //将当前页面切换至匹配
        slidIndex($(this).index());
    }
}

//点击tab后的画面特效
function chan(obj) {
    obj.addClass("active");
    obj.siblings().removeClass("active");
}





//滚轮事件
var $faul = $('#faul');
var cou = 0;   //当前li所在页面的下标




var sb = true;
$(window).mousewheel(function (event) {
    if (sb == true) {
        sb = false;
        
        cou = cou - event.deltaY;//修改当前li页下标
        cou = cou < 0 ? 0 : cou;
        cou = cou > 3 ? 3 : cou;
        slidIndex(cou);//滚动到指定位置
        chan($($links[cou]));//根据li页下标设置tab对应link的特效

        
    }
});


//滚动到指定页面
function slidIndex(ind) {
    var tdy = 0;
    if (ind == 3) {  //当滚动到尾部section时,强行到达ul底部并把页面下标换为最后一页li下标
        tdy = 2579;
        cou = 2;
    } else {
        tdy = 1080 * ind;
    }
    $faul.css('transform', 'translateY(' + (-tdy) + 'px)');

    setTimeout(function(){
        sb = true;
    },500);
}