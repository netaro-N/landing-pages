$(function(){ // jQuery雛形の省略形。DOMを全て読み込んでから実行という意味。正式には⇒$(document).ready(function(){
  
  // モーダルウィンドウ

  $('.signup-show').click(function(){
    $('#signup-modal').fadeIn();
  });

  $('#close-modal').click(function(){
    $('#signup-modal').fadeOut();
  });

  // オリジナルで、.modal領域意外をクリックしたら閉じるのを追加
  $(document).on('click touchend', function(e) {
    if (!$(e.target).closest('.modal').length && !$(e.target).is(".signup-show")) {
      $('#signup-modal').fadeOut();
    }
  });

});