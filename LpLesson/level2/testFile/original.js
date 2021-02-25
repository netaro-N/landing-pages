$(function () {

  // 初期設定
  $(".carouselInner").css("width", 620 * $(".carouselInner ul.column").length + "px");
  $(".carouselInner ul.column:last").prependTo(".carouselInner");
  $(".carouselInner").css("margin-left", "-620px");
  // div用初期設定
  $(".carouselInnerBox").css("width", 620 * $(".carouselInnerBox div.column").length + "px");
  $(".carouselInnerBox div.column:last").prependTo(".carouselInnerBox");
  $(".carouselInnerBox").css("margin-left", "-620px");

  // 前へボタン
  $(".carouselPrev").click(function () {
    var button = $(this);
    var broButton = $(this).next('p');
    var broCarouselInner = $(this).nextAll('div').children();
    var lastColumn = broCarouselInner.children().last();

    // .add()は変数を複数指定するときに有用！
    $(button).add(broButton).hide();
    $(broCarouselInner).animate({
      "margin-left": parseInt($(broCarouselInner).css("margin-left")) + 620 + "px"
    }, "slow", "swing",
      function () {
        $(broCarouselInner).css("margin-left", "-620px")
        $(lastColumn).prependTo(broCarouselInner);
        $(button).add(broButton).show();
      });
  });

  // 次へボタン
  $(".carouselNext").click(function () {
    var button = $(this);
    var broButton = $(this).prev('p');
    var broCarouselInner = $(this).nextAll('div').children();
    var firstColumn = broCarouselInner.children().first();

    $(button).add(broButton).hide();
    $(broCarouselInner).animate({
      "margin-left": parseInt($(broCarouselInner).css("margin-left")) - 620 + "px"
    }, "slow", "swing",
      function () {
        $(broCarouselInner).css("margin-left", "-620px")
        $(firstColumn).appendTo(broCarouselInner);
        $(button).add(broButton).show();
      });
  });

});