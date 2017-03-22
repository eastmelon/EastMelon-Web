/**
 * Created by hudw on 2017/3/21.
 */
/*
* author:eastmelon
* 基于jquery库
* */
$.fn.test=function(){
    $(this).css('color','green');
};
$(function(){
    alert(JSON.stringify($('#my')));
})