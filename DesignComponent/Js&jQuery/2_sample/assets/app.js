(function() {
  'use strict';

$(function() {
  $("#btn").mousedown(function() {
    $("h1").text("みなさん、こんにちは！");
  });
  $("#btn").mouseup(function() {
    $("h1").text("Hello,World!");
  });
  $("#btn-2").click(function() {
    $("body").css({
      "color": "red",
      "background": "yellow"
    });
    $("h1")
      .text("メソッドチェーン")
      .css("font-size","1.3em")
  });
});

})();
