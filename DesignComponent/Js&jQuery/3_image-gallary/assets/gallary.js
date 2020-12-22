$(function(){
  $("#thumnail-list li").click(function(){
    // 画像を切り替える
    var imageSrc = $(this).find("a").attr("href");
    $("#main-image").attr("src",imageSrc);
    // selectedをリセットする
    $("#thumnail-list li").removeClass("selected");
    // 指定しているサムネイルにselectedクラスを付ける
    $(this).addClass("selected");
    // aタグのリンクを無効にする
    return false;// へー
  })
})