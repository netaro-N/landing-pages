$(function() {
  // color: #fff;
  // background-color: #5cabd0;
  
  // indexボタンとpre/nxtボタンで機能が重なるので、関数に定義
  function toggleChangeBtn() {
    var slideIndex = $('.slide').index($('.active')); //表示slideのindex番号
    $('.change-btn').show(); // 一旦両方のボタンを表示させる
    if (slideIndex == 0) {
      $('.prev-btn').hide(); // 先頭なら「前へ」を消す
    } else if (slideIndex == $('.slide').length - 1) {
      $('.next-btn').hide(); // 最後なら「次へ」を消す
    }
  }
  
  $('.index-btn').click(function() {
    $('.active').removeClass('active'); // クリック前のアクティブ（slide & index）をキャンセル
    var clickedIndex = $('.index-btn').index($(this)); // クリックしたindexボタンのインデックス番号
    $('.slide').eq(clickedIndex).addClass('active'); // クリックインデックス番号のslideに、activeクラス追加
    $(this).addClass('active'); // クリックしたindexボタンにactiveクラス追加

    // pre/nxtボタンのシステムへ
    toggleChangeBtn();
  });
  
  $('.change-btn').click(function() {
    // Progateと変わりないが、変数名をdisplaySlide ⇒ activeSlideへ。理由はindexボタンにも反映されるのでdisplayは不自然だから
    var $activeSlide = $('.active');
    $activeSlide.removeClass('active');

    if ($(this).hasClass('next-btn')) {
      $activeSlide.next().addClass('active');
    } else {
      $activeSlide.prev().addClass('active');

    }

    // pre/nxtボタンのシステムへ
    toggleChangeBtn();
  });
});
