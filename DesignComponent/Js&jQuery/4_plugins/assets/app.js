$(function () {
  //ナビゲーション
  $('ul.sf-menu').superfish();
  //カルーセル
  $(".pictures").slick({
    dots: true
  });
  //マテリアル
  $("#material").rippleria();
  $("#material").click(function () {
    return false;
  })
  //文字数オーバー
  $('.js-max-char-warning').maxCharWarning();
  //ツールチップ
  $('.tooltip').tooltipster();
  //SVGアニメ
  var $svg = $('svg').drawsvg();
  $svg.drawsvg('animate');
});
