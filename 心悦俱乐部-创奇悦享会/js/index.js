// 顶部 登录, 地图显示
$(function () {
    // 1.登录界面
    $('#logoin').click(function(){
        $('#loginDiv').css({
            display: 'block'
        });

        $('#_overlay_').css('display','block');
    });
    // $('#loginDiv .header>a').click(function(){
    //     console.log(1);
        
    //     $('#loginDiv').css('display','none');
    //     $('#_overlay_').css('display','none');
    // });
    // 2.地图
    // 鼠标移入显示
    $('#map_fr').mouseenter(function () {
        $('#map_link').css({
            display: 'block',
            right: 0
        });
    })
    // 鼠标移出隐藏
    $('#map_fr').mouseleave(function () {
        $('#map_link').css({
            display: 'none',
            right: '-999em'
        });

    })
});

// 头部导航栏
$(function () {
    $('#headnav a').mouseenter(function () {
        $(this).addClass('bgnav-over').parent().siblings('li').children('a').removeClass('bgnav-over');
    })
});

// 轮播图
$(function () {
    // 每次打开网页时先清空计时器
    clearInterval(window.timerId)
    let x = 0;
    // 自动轮播
    window.timerId = setInterval(change, 3000);
    // 轮播函数
    function change() {
        banner(x);
        // $('.banner>ul>li:eq('+x+')').addClass("cur").siblings("li").removeClass();
        x++;
        
        if(x == 3){
            x=0;
        }


    }
    $('.h_items_box').mouseenter(function () {
        clearInterval(window.timerId);
    });
    $('.h_items_box').mouseleave(function () {
        window.timerId = setInterval(change, 3000);
    });

    // 设置一个显示其他隐藏
    function banner(x) {
        // $('.banner>ul>li').css("opacity", "0");;
        // $('.banner>ul>li').eq(x).css("opacity", "1");
        // $('.h_items_box>a').removeClass();
        // $('.h_items_box>a').eq(x).addClass('items-h');
        $('.banner>ul>li').eq(x).fadeIn(800).siblings('li').fadeOut(800);
        $('.h_items_box>a').removeClass();
        $('.h_items_box>a').eq(x).addClass('items-h');
        
    }
    // 给小圆点设置点击事件
    $('.h_items_box>a').click(function(){
        banner($(this).index());
        // 将轮播的下标给到xs
        x = $(this).index();
    });
});


// 视频弹窗
$(function () {
    $('#video').click(function () {
        $('.video').css('display', 'block');
        $('#popbg').css('display', 'block');
    })
    $('.pop-close').click(function () {
        $('.video').css('display', 'none');
        $('#popbg').css('display', 'none');

    })
})
// 滚轮事件
$(function () {
    $(window).scroll(function () {
        let scroll_top = $(window).scrollTop();
        // let scroll_bottom = $(document).height() - $(window).height() - $(window).scrollTop();
        // $(".assitanceWrap").css("bottom", (420 - scroll_bottom) > 67 ? 420 - scroll_bottom : 67);
        // 显示隐藏位置
        let target = 750;
        (scroll_top < target) ? $(".suspension").fadeOut(200): $(".suspension").fadeIn(200);
    });
    $(".suspension").click(function(){
        $("html,body").animate({
            scrollTop: 0
        }, 1000);

    });
})




// 弹窗
// 传入一个弹出盒子的id ,和关闭这个盒子的 id或类名
function popUp(Click, id, close) {
    $(Click).click(function () {
        // 给对象设置top值并显示
        let mtop = $(window).scrollTop();
        $(id).css({
            display: 'block',
            top: mtop + 50
        });

        // 给body加遮罩层
        $('<div id="mask"></div>').css({
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0,0,0,.5)',
            position: 'fixed',
            left: 0,
            top: 0,
            zIndex: 25

        }).appendTo('body');
    });


    // 关闭这个盒子并删除遮罩层
    $(close).click(function () {
        $(id).css('display', 'none');
        $('#mask').remove();
    })

}
// 新闻列表弹窗
popUp('.anew', '#poplist0', '.closed-0');

// 图片列表1弹窗
popUp('#piclist1', '#poplist1', '.closed-1');
//图片 :鼠标移入移出事件
PicMouse('#listpic0 > li', '.popbigimg');

// 图片列表2弹窗
popUp('#piclist2', '#poplist2', '.closed-2');
//图片 :鼠标移入移出事件
PicMouse('#listpic1 > li', '.popbigimg');

// 图片列表3弹窗
popUp('#piclist3', '#poplist3', '.closed-3');
//图片 :鼠标移入移出事件
PicMouse('#listpic2 > li', '.popbigimg');

// 图片列表4弹窗
popUp('#piclist4', '#poplist4', '.closed-4');
//图片 :鼠标移入移出事件
PicMouse('#listpic3 > li', '.popbigimg');


// 图片列表弹窗里的图片鼠标移入事件
// $(function(){
//     $('#listpic0 > li').mouseenter(function(){
//         $(this).find('.popbigimg').css('display','block');
//         if(($(this).index()+1 )%4 == 0){
//             $(this).find('.popbigimg').addClass('on');
//         }

//     });
//     $('#listpic0 > li').mouseleave(function(){
//         $(this).find('.popbigimg').css('display','none');

//     });
// })
// 图片列表弹窗里的图片鼠标移入事件
function PicMouse(dom, id) {
    $(dom).mouseenter(function () {
        $(this).find(id).css('display', 'block');
        if (($(this).index() + 1) % 4 == 0) {
            $(this).find(id).addClass('on');
        }

    });
    $(dom).mouseleave(function () {
        $(this).find(id).css('display', 'none');

    });

}