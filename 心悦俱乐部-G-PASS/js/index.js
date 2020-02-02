$(function () {
    $(window).scroll(function () {
        let scroll_top = $(window).scrollTop()
        let scroll_bottom = $(document).height() - $(window).height() - $(window).scrollTop();
        // console.log(scroll_bottom)
        if (scroll_top < 600) {
            $(".assitanceWrap").fadeOut(300);
        } else if (scroll_top <= 1100) {
            $(".assitanceWrap").fadeIn(300);
            $(".assitanceWrap").css("bottom", 63)
        } else {
            let num = 420 - scroll_bottom;
            $(".assitanceWrap").css("bottom", num)
        }
        if (scroll_top >= 200) {
            $("header").addClass("other");
        } else {
            $("header").removeClass();
        }
    })
})
$(function () {

    $(".appDownload-btn").mouseenter(function () {
        $(".appSlide").removeClass("out").addClass("active");
    })
    $(".appDownload-btn").mouseleave(function () {
        $(".appSlide").removeClass("active").addClass("out")
    })
    //为当前窗口添加滚动条滚动事件（适用于所有可滚动的元素和 window 对象（浏览器窗口））


    //为返回顶部元素添加点击事件
    $('.js-goTop').click(function () {
        //将当前窗口的内容区滚动高度改为0，即顶部
        $("html,body").animate({
            scrollTop: 0
        }, "fast");
    });





})
// 为导航栏 右侧按钮 添加点击事件 弹出下拉框
$(function () {

    //  显示下拉框
    $('.navBtn').click(function () {
        $('.navcontent').slideDown();

        $('#navwarp').css('display', 'block');

        $('.zhixian').attr('id', 'zhixian').siblings('i').css('width', '0');



    });

    // 点击 close 关闭下拉框
    $('.zhixian').click(function (e) {
        e.stopPropagation(); //阻止冒泡
        // 滑入
        $('.navcontent').slideUp();

        $('#navwarp').css('display', 'none');
        $('.zhixian').attr('id', 'zhixian').siblings('i').css('width', '34');

        $(this).removeAttr('id');
    });
    // 点击 遮罩层 关闭下拉框
    $('#navwarp').click(function (e) {
        // 滑出
        $('.navcontent').slideUp();
        $('#navwarp').css('display', 'none');
        $('.zhixian').attr('id', 'zhixian').siblings('i').css('width', '34');

        $('.zhixian').removeAttr('id');

    });
    // 阻止点击通栏白色背景冒泡
    $('.navcontent').click(function (e) {
        e.stopPropagation();
    })
});
$(".news-sort>li").click(function () {
    $(this).addClass("news-hover").siblings("li").removeClass();
    $(".news-list:eq(" + $(this).index() + ")").css("display", "block").siblings(".news-list").css("display", "none")
})

$(".qc-tab").click(function () {
    $(".qcwx-login-frame").removeClass("qcwx-active-wx").addClass("qcwx-active-qc")
})
$(".wx-tab").click(function () {
    $(".qcwx-login-frame").removeClass("qcwx-active-qc").addClass("qcwx-active-wx")
})
$(".qcwxtab-close").click(function () {
    $("#qcwx-login").css("display", "none")
})
$(".login").click(function () {
    $("#qcwx-login").css("display", "block")
})