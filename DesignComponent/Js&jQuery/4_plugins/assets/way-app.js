$(function(){
  $("#menu1").waypoint(function(){
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(1)").addClass("recent");
  })
  $("#menu2").waypoint(function(){
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(2)").addClass("recent");
  })
  $("#menu3").waypoint(function(){
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(3)").addClass("recent");
  })
  $("#menu4").waypoint(function(){
    $("header ul li").removeClass("recent");
    $("header ul li:nth-child(4)").addClass("recent");
  })
});