$(function () {

  // 初期設定
  $("#carouselInner").css("width", 620 * $("#carouselInner ul.column").length + "px");
  $("#carouselInner ul.column:last").prependTo("#carouselInner");
  $("#carouselInner").css("margin-left", "-620px");

  // 前へボタン
  $("#carouselPrev").click(function () {
    $("#carouselNext,#carouselPrev").hide();
    $("#carouselInner").animate({
      "margin-left": parseInt($("#carouselInner").css("margin-left")) + 620 + "px"
    }, "slow", "swing",
      function () {
        $("#carouselInner").css("margin-left", "-620px")
        $("#carouselInner ul.column:last").prependTo("#carouselInner");
        $("#carouselNext,#carouselPrev").show();
      });
  });

  // 次へボタン
  $("#carouselNext").click(function () {
    $("#carouselNext,#carouselPrev").hide();
    $("#carouselInner").animate({
      "margin-left": parseInt($("#carouselInner").css("margin-left")) - 620 + "px"
    }, "slow", "swing",
      function () {
        $("#carouselInner").css("margin-left", "-620px")
        $("#carouselInner ul.column:first").appendTo("#carouselInner");
        $("#carouselNext,#carouselPrev").show();
      });
  });

});