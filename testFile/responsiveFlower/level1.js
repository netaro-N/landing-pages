//canvasのidが#canvasとする
var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");

var background = new Image();
background.src = "http://www.otwo.jp/blog/demo/canvas/images/web/bg.jpg";

//画像をCanvasのサイズに合わせて等倍して画像をcanvasに貼り付ける.
var canvas_width = 1000;
var canvas_hegiht = 500;
background.onload = function(){
    //canvas_widthを height / width倍する.
    // ctx.drawImage(background,0,0,canvas_width, background.height * canvas_width / background.width);
    ctx.drawImage(background,0,0,canvas_width, background.height);
}