var container = document.getElementById('canvas-container');
var canvas = document.getElementById("cvs");
var ctx = canvas.getContext("2d");
var imgCnt = 15;
var aryImg = [];
var aryCloud = [];
// var cvsw = 680;
// var cvsh = 500;
var imgBaseSizeW = 15;
var imgBaseSizeH = 18.5;
var aspectMax = 1.3;
var aspectMin = 0.5;
var speedMax = 1.7;
var speedMin = 0.5;
var angleAdd = 4;
var wind = 10;
var newWind = 0;
var windMax = 25;
var windMin = 5;
var img = new Image();
img.src = "http://www.otwo.jp/blog/demo/canvas/images/web/sakura.png";
img.onload = flow_start;

//親要素のサイズをCanvasに指定
canvas.width = container.clientWidth;
canvas.height = container.clientHeight;
var cvsw = canvas.width;
var cvsh = canvas.height;

//画像読み込み後に、setTramsformメソッドで適切な比率に縮小
//その上で、drawImageメソッドでCanvas上に描画する
// img.onload = function(){
//     var scale = canvas.width / img.width;
//     ctx.setTransform(scale, 0, 0, scale, 0, 0);
//     ctx.drawImage(img, 0, 0);
// }
//リサイズ時
window.onresize = function () {
  var scale = 0;
  //再描画のため必ずCanvasの描画領域をクリアする
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  canvas.width = container.clientWidth;
  canvas.height = container.clientHeight;
  var cvsw = canvas.width;
  var cvsh = canvas.height;
  // scale = canvas.width / img.width;
  // ctx.setTransform(scale, 0, 0, scale, 0, 0);
  // ctx.drawImage(img, 0, 0);
  flow_start(cvsw, cvsh);
}


function setImagas(w, h) {
  if (!isNaN(w)) {
    cvsw = w;
  }
  if (!isNaN(h)) {
    cvsh = h;
  }

  var aspect = 0;
  for (var i = 0; i < imgCnt; i++) {
    aspect = Math.random() * (aspectMax - aspectMin) + aspectMin;
    aryImg.push({
      "posx": Math.random() * cvsw,
      "posy": Math.random() * cvsh,
      "sizew": imgBaseSizeW * aspect,
      "sizeh": imgBaseSizeH * aspect,
      "speedy": Math.random() * (speedMax - speedMin) + speedMin,
      "angle": Math.random() * 360
    });
  }
}

var idx = 0;
var idxc = 0;
var cos = 0;
var sin = 0;
var rad = Math.PI / 180;
function flow(w,h) {
  if (!isNaN(w)) {
    cvsw = w;
  }
  if (!isNaN(h)) {
    cvsh = h;
  }
  ctx.clearRect(0, 0, cvsw, cvsh);
  for (idx = 0; idx < imgCnt; idx++) {
    aryImg[idx].posx += wind / aryImg[idx].sizew;
    aryImg[idx].posy += aryImg[idx].speedy;
    (idx % 2) ? aryImg[idx].angle += 1 : aryImg[idx].angle -= 1;
    cos = Math.cos(aryImg[idx].angle * rad);
    sin = Math.sin(aryImg[idx].angle * rad);
    ctx.setTransform(cos, sin, sin, cos, aryImg[idx].posx, aryImg[idx].posy);
    ctx.drawImage(img, 0, 0, aryImg[idx].sizew, aryImg[idx].sizeh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if (aryImg[idx].posy >= cvsh) {
      aryImg[idx].posy = -aryImg[idx].sizeh;
      if (imgCnt < idx) {
        aryImg.splice(idx, 1);
      }
    }
    if (aryImg[idx].posx >= cvsw) {
      aryImg[idx].posx = -aryImg[idx].sizew;
      if (imgCnt < idx) {
        aryImg.splice(idx, 1);
      }
    }
  }
  for (idxc = 0; idxc < aryCloud.length; idxc++) {
    ctx.drawImage(aryCloud[idxc].img, aryCloud[idxc].posx, aryCloud[idxc].posy, aryCloud[idxc].img.width, aryCloud[idxc].img.height);
    aryCloud[idxc].posx += aryCloud[idxc].speed / 15;
    if (aryCloud[idxc].posx > cvsw) {
      aryCloud[idxc].posx = -aryCloud[idxc].img.width;
    }
  }
}
function windowChange() {
  newWind = Math.random() * (windMax - windMin) + windMin;
  setInterval(function () {
    if (newWind != wind) {
      (newWind > wind) ? wind += 0.01 : wind -= 0.01;
    }
  }, 100);
}

function flow_start(w, h) {
  var scale = canvas.width / img.width;
  ctx.setTransform(scale, 0, 0, scale, 0, 0);
  ctx.drawImage(img, 0, 0);
  var cnt = cWidth = cHeight = 0;
  clouds = ["http://www.otwo.jp/blog/demo/canvas/images/web/cloud_01.png", "http://www.otwo.jp/blog/demo/canvas/images/web/cloud_02.png", "http://www.otwo.jp/blog/demo/canvas/images/web/cloud_03.png"];
  for (var cl = 0; cl < clouds.length; cl++) {
    var img2 = new Image;
    img2.src = clouds[cl];
    switch (cl) {
      case 0:
        cWidth = 150;
        cHeight = -10;
        break;
      case 1:
        cWidth = 300;
        cHeight = 400;
        break;
      case 2:
        cWidth = -300;
        cHeight = 100;
        break;
    }
    aryCloud[cl] = {
      "img": img2,
      "posx": cWidth,
      "posy": cHeight,
      "speed": Math.random(),
    };
    aryCloud[cl].img.onload = function () {
      cnt++;
      if (cnt == clouds.length) {
        setImagas(w, h);
        setInterval(windowChange, 3000);
        setInterval(flow, 10,w,h);
      }
    }
  }
}