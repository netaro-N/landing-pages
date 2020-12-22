$(function(){
  // 初期設定
  $("#carousel-area li:last").prependTo("#carousel-area ul");
  $("#carousel-area ul").css({ marginLeft: "-155px" });//なるほどね
  // クリック時のイベント
  $(".btn").click(function(){
    var btnId = $(this).attr("id");
    // 戻るボタン
    if(btnId == "prevBtn"){
      $("#carousel-area ul").animate({
        marginLeft: "-315px"
        },function(){
        $("#carousel-area li:first").appendTo("#carousel-area ul");
        $("#carousel-area ul").css({ marginLeft: "-155px" });
      })
    // 次へボタン
    }else if(btnId == "nextBtn"){
      $("#carousel-area ul").animate({
        marginLeft: "5px"
        },function(){
        $("#carousel-area li:last").prependTo("#carousel-area ul");
        $("#carousel-area ul").css({ marginLeft: "-155px" });
      })
    }
  })
})