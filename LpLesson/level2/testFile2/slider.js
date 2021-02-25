$(function () {

  //ページングの設定
  $("#slide li").each(function () {
    $("#paging").append($("<li></li>").attr("data-img", $("img", this).attr("src")));
  });
  $("#paging li:first-child").addClass("active");

  //右矢印ボタンが押された際の挙動
  $("#nav .next").click(function () {
    $("#slide:not(:animated)").animate({
      "margin-left": -1 * $("#slide li").width()
    }, function () {
      $("#slide").css("margin-left", "0").append($("#slide li:first-child"));
      $("#paging li.active").removeClass("active");
      $("#paging li[data-img='" + $("#slide li:first-child img").attr("src") + "']").addClass("active");
    });
  });

  //左矢印ボタンが押された際の挙動
  $("#nav .prev").click(function () {
    $("#slide:not(:animated)")
      .css("margin-left", -1 * $("#slide li").width())
      .prepend($("#slide li:last-child"))
      .animate({
        "margin-left": 0
      }, function () {
        $("#paging li.active").removeClass("active");
        $("#paging li[data-img='" + $("#slide li:first-child img").attr("src") + "']").addClass("active")
      });
  });

  // indexボタンが押されたときの実装（オリジナル）
  $("#paging li").click(function(){
    var activeIndex = $("#paging li.active").index() + 1;
    var clickedIndex = $("#paging li").index($(this)) + 1;
    var sumIndex = clickedIndex - activeIndex;
    // スライド
    console.log("sumIndex="+sumIndex);
    if(sumIndex > 0){
      $("#slide:not(:animated)").animate({
      "margin-left": -sumIndex * $("#slide li").width()
    }, function () {
      $("#slide").css("margin-left", "0").append($("#slide li:nth-child(-n+" + sumIndex + ")"));
      $("#paging li.active").removeClass("active");
      $("#paging li[data-img='" + $("#slide li:first-child img").attr("src") + "']").addClass("active");
    });
    }else if(sumIndex < 0){
      var positiveSumIndex = -sumIndex;
      $("#slide:not(:animated)")
      .css("margin-left", -positiveSumIndex * $("#slide li").width())
      .prepend($("#slide li:nth-last-child(-n+" + positiveSumIndex + ")"))
      .animate({
        "margin-left": 0
      }, function () {
        $("#paging li.active").removeClass("active");
        $("#paging li[data-img='" + $("#slide li:first-child img").attr("src") + "']").addClass("active")
      });
    }
    
  });

});