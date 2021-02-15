$(function(){
  $('.faq-list-item').click(function(){
    var $answer = $(this).find('.answer');

    if($answer.hasClass('open')) {
      // 【閉鎖】openクラスを除去、スライドアップで閉じる、アイコンを' + 'に変更
      $answer.removeClass('open');
      $answer.slideUp();
      $(this).find('span').text('+');
    } else {
      // 【開放】openクラスを付加、slideDownで開ける、アイコンを' - 'に変更
      $answer.addClass('open');
      $answer.slideDown();
      $(this).find('span').text('-');
    }
  });
});