$(function () {
  $(".question").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");//追加部分
  });
})