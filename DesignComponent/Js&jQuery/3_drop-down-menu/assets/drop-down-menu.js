$(function(){
  $(".main > li").mouseover(function(){
    $(this).find(".sub").show();
  })
  $(".main > li").mouseout(function(){
    $(this).find(".sub").hide();
  })
})
