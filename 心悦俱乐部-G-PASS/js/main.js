

$(function(){

    $('.page3>ul>li').click(function(){
        $('.zheZhao').slideDown();
        $('.erWeiMa').slideDown();
    })

    $('.erWeiMa>#btn1').on('click','.i8',function(){
        $('.zheZhao').slideUp();
        $('.erWeiMa').slideUp();
       
    })

})