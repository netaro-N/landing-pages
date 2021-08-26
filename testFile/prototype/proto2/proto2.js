var canvas = document.getElementById("cvs");
var container = document.getElementById("canvas-container");
var ctx = canvas.getContext("2d");
var imgCnt = 25;  // 描画する画像の数
var aryImg = [];  // 画像の情報を格納
// ↓step2より追加
var aspectMax = 1.5;      // アスペクト比計算時の最大値
var aspectMin = 0.5;      // アスペクト比計算時の最小値
var speedMax = 2;         // 落下速度の最大値
var speedMin = 0.5;       // 落下速度の最小値
// step3
var angleAdd = 4;         // 画像角度への加算値
// Ori
var aryCloud = []; //雲画像の情報を格納
var wind = 30;
var newWind = 0;
var windMax = 60;
var windMin = 5;

var cvsSize = []; //キャンバスのサイズを格納（幅，高さ）

// 画像用の親要素幅高取得 clientWidth要勉
// キャンバス幅と高さを初期設定 キャンバスの幅canvas.width要勉
canvas.width = container.clientWidth;   // 【可変】親要素の幅
canvas.height = container.clientHeight;   // 【準固定】親要素の高さ(ここもビューポートによってレスポンシブなのでリサイズ時に常に取得)
var cvsw = canvas.width;   // キャンバスの幅canvas.width要勉
var cvsh = canvas.height;   // キャンバスの高さ
cvsSize.push({
  "cvsw" : cvsw,
  "cvsh" : cvsh
});
// console.log(cvsSize[0]);
var imgBaseSizeW = 15/1000*cvsw;    // 画像の基本サイズ横幅(1000のとき15)
var imgBaseSizeH = imgBaseSizeW*1.25;  // 画像の基本サイズ立幅(幅1000のとき18.5)


// 桜が落ちる速度
var dropspeed = 10;
if (cvsh<500){
  dropspeed = 15;
}


// 画像の読み込み
var img = new Image();
img.src = "./sakura-y.png";
img.onload = flow_start;

// 画像のパラメーターを設定
function setImagas(){
  var aspect = 0;
  for(var i = 0;i < imgCnt;i++){
    // 画像サイズに掛けるアスペクト比を0.5~1.5倍でランダムで生成
    aspect = Math.random()*(aspectMax-aspectMin)+aspectMin;
    aryImg.push({
      "posx": Math.random()*cvsSize[0].cvsw,   // 初期表示位置x
      "posy": Math.random()*cvsSize[0].cvsh,   // 初期表示位置y
      "sizew": imgBaseSizeW*aspect, // 画像の幅
      "sizeh": imgBaseSizeH*aspect, // 画像の高さ
      "aspect": aspect, //念の為アスペクト比保持
      "speedy": Math.random()*(speedMax-speedMin)+speedMin, // 画像が落ちていく速度
      "angle": Math.random()*360   // 角度
    });
  }

}

// 描画、パラメーターの更新
var idx = 0;
var idxc = 0;
var cos = 0;
var sin = 0;
var rad = Math.PI / 180;
function flow(){
  ctx.clearRect(0,0,cvsSize[0].cvsw,cvsSize[0].cvsh);
  for(idx = 0;idx < imgCnt;idx++){
    aryImg[idx].posx += wind/aryImg[idx].sizew;
    aryImg[idx].posy += aryImg[idx].speedy;
    (idx%2) ? aryImg[idx].angle += 1 : aryImg[idx].angle -= 1;
    cos = Math.cos(aryImg[idx].angle * rad);
    sin = Math.sin(aryImg[idx].angle * rad);
    ctx.setTransform(cos, sin, sin, cos, aryImg[idx].posx, aryImg[idx].posy);
    ctx.drawImage(img, 0, 0 , aryImg[idx].sizew , aryImg[idx].sizeh);
    ctx.setTransform(1, 0, 0, 1, 0, 0);
    if(aryImg[idx].posy >= cvsSize[0].cvsh){
      aryImg[idx].posy = -aryImg[idx].sizeh;
      if(imgCnt < idx){
        aryImg.splice(idx, 1);
      }
    }
    if(aryImg[idx].posx >= cvsSize[0].cvsw){
      aryImg[idx].posx = -aryImg[idx].sizew;
      if(imgCnt < idx){
        aryImg.splice(idx, 1);
      }
    }
  }
  //以下，雲アニメなので一旦外す
  for(idxc = 0;idxc < aryCloud.length;idxc++){
    // ctx.drawImage(aryCloud[idxc].img, aryCloud[idxc].posx, aryCloud[idxc].posy , aryCloud[idxc].img.width , aryCloud[idxc].img.height);
    ctx.drawImage(aryCloud[idxc].img, aryCloud[idxc].posx, aryCloud[idxc].posy , cvsSize[0].cvsw * 0.4 , (cvsSize[0].cvsw * 0.4) * (aryCloud[idxc].img.height / aryCloud[idxc].img.width) );
    aryCloud[idxc].posx += aryCloud[idxc].speed / 15;
    if(aryCloud[idxc].posx > cvsSize[0].cvsw){
      // aryCloud[idxc].posx = -aryCloud[idxc].img.width;
      aryCloud[idxc].posx = -cvsSize[0].cvsw * 0.4;
    }
  }
}

// 風のスピード
function windowChange(){
  newWind = Math.random()*(windMax-windMin)+windMin;
  setInterval(function(){
    if(newWind != wind){
      (newWind > wind) ? wind += 0.01 : wind -= 0.01;
    }
  },10);
}

// 雲の描画があるので一旦外す
function flow_start(){
  var cnt = cWidth = cHeight = 0;
  clouds = ["./cloud_01.png","./cloud_02.png","./cloud_03.png"];
  for(var cl = 0;cl < clouds.length;cl++){
    var img2 = new Image;
    img2.src = clouds[cl];
    switch (cl) {
      case 0:
        // cWidth = 150;
        cWidth = canvas.width/4;
        cHeight = -10;
      break;
      case 1:
        // cWidth = 300;
        cWidth = canvas.width/2;
        cHeight = canvas.height * 3/5;
      break;
      case 2:
        // cWidth = -300;
        cWidth = -canvas.width * 0.4 /2;
        cHeight = canvas.height * 1/5;
      break;
    }
    aryCloud[cl] = {
      "img" : img2,
      "posx" : cWidth,
      "posy" : cHeight,
      // "speed" : Math.random(),
      "speed" : 1,
    };
    aryCloud[cl].img.onload = function(){
      cnt++;
      if(cnt == clouds.length){
        setImagas();
        setInterval(windowChange,3000);
        setInterval(flow,dropspeed);
      }
    }
  }
}

// リサイズ時
window.onresize = function(){
  canvas.width = container.clientWidth;   // 【可変】親要素の幅
  canvas.height = container.clientHeight;   // 【準固定】親要素の高さ
  cvsSize[0].cvsw = canvas.width;
  cvsSize[0].cvsh = canvas.height;
  var imgBaseSizeW = 15/1000*cvsSize[0].cvsw;
  var imgBaseSizeH = imgBaseSizeW*1.25;
  for(idx = 0;idx < imgCnt;idx++){
    aryImg[idx].sizew = imgBaseSizeW * aryImg[idx].aspect;
    aryImg[idx].sizeh = aryImg[idx].sizew *1.25;
  }
  // for(idxc = 0;idxc < aryCloud.length;idxc++){
  //   aryCloud[idxc].img.width = cvsSize[0].cvsw * 0.3;
  // }
}