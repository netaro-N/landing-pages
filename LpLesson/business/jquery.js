$(function () {

  // =============アコーディオン=============
  $(".accordion").on("click", function () {
    $(this).next().slideToggle();
    $(this).toggleClass("active");//追加部分
  });

  //=============フォームへ飛ぶ機能=============
  $('.pcview,.spview').click(function () {
    // ヘッダーが固定なので40くらい余裕を持つ
    var contactPadding = 40;
    var targetTop = $('#contactform').offset().top;
    $('html,body').animate({
      'scrollTop': targetTop - contactPadding
    }, 500);
    return false;
  });

  // pagetopボタン機能
  // #pagetopを消す
  $('#pagetop').hide();
  // スクロールが十分されたら#pagetopを表示、スクロールが戻ったら非表示
  $(window).scroll(function () {
    //マウスで16スクロール分=scroll : 60
    if ($(this).scrollTop() > 60) {
      $('#pagetop').fadeIn();
    } else {
      $('#pagetop').fadeOut();
    }
  });
  // #pagetopがクリックされたら上に戻る
  // トップへ戻るボタン
  $('#pagetop').click(function () {
    $('html,body').animate({
      'scrollTop': 0
    }, 500);

    //一応記入
    return false;
  });

});