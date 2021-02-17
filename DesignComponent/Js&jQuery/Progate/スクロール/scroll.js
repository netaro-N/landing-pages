$(function(){

  // SNSボタン
  $('.social-icon').hover(
    function(){
      $(this).children('span').animate({
        'font-size':'30px'
      }, 300);
    },
    function(){
      $(this).children('span').animate({
        'font-size':'24px'
      }, 300);
    }
  );

  // #back-to-topを消す
  $('#back-to-top').hide();
  // スクロールが十分されたら#back-to-topを表示、スクロールが戻ったら非表示
  $(window).scroll(function() {
      if ($(this).scrollTop() > 500) {
          $('#back-to-top').slideDown();
      } else {
          $('#back-to-top').slideUp();
      }
  });
  // #back-to-topがクリックされたら上に戻る
  // トップへ戻るボタン
  $('#top-btn,#back-to-top').click(function(){
    $('html,body').animate({ 
      'scrollTop': 0
    }, 100);

    //一応記入
    return false;
  });
  
  // ヘッダー内の<a>タグをクリックしたときのclickイベント
  // 2021/02）今のHTMLでは、特に記述しなくても飛んでくれる。秒数指定したいときのみか。
  $('header a').click(function(){
    var id = $(this).attr('href');
    var position = $(id).offset().top;
    $('html,body').animate({
      'scrollTop': position
    }, 100);

    //一応記入
    return false;
  });
  
});