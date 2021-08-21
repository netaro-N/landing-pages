var container = document.getElementById('canvas-container');
var canvas = document.getElementById('cvs');
var ctx = canvas.getContext('2d');
var isInit = false;
var img = new Image();
img.src = "../img/sakura-w.png";

//描画
var render = function(){
    var scale = 0;
    // ↓全体描写じゃないからいらないかも
    // if(isInit){
    //     ctx.clearRect(0, 0, canvas.width, canvas.height);
    // }else{
    //     isInit = true;
    // }
    canvas.width = container.clientWidth;
    canvas.height = container.clientHeight; 
    scale = (canvas.width * 0.03) / img.width;
    ctx.setTransform(scale, 0, 0, scale, 100, 100);
    ctx.drawImage(img, 0, 0);
}

//メイン
var main = function(){
    img.addEventListener('load', render, false);
    window.addEventListener('resize', render, false);
}
//メイン実行
main();