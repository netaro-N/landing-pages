var canvas = document.getElementById("cvs");
var container = document.getElementById("canvas-container");
var ctx = canvas.getContext("2d");
var imgCnt = 25;  // 描画する画像の数
var aryImg = [];  // 画像の情報を格納


// 画像用の親要素幅高取得 clientWidth要勉
// キャンバス幅と高さを初期設定 キャンバスの幅canvas.width要勉
canvas.width = container.clientWidth;   // 【可変】親要素の幅
canvas.height = container.clientHeight;   // 【準固定】親要素の高さ(ここもビューポートによってレスポンシブなのでリサイズ時に常に取得)
var cvsw = canvas.width;   // キャンバスの幅canvas.width要勉
var cvsh = canvas.height;   // キャンバスの高さ
var imgBaseSizeW = 10/1000*cvsw;    // 画像の基本サイズ横幅(1000のとき15)
var imgBaseSizeH = imgBaseSizeW*1.25;  // 画像の基本サイズ立幅(幅1000のとき18.5)


// 桜が落ちる速度
var dropspeed = 10;
if (cvsh<500){
  dropspeed = 15;
}


// 画像の読み込み
var img = new Image();
img.src = "./images/sakura.png";
img.onload = flow_start;

// 画像のパラメーターを設定
function setImagas(){
  for(var i = 0;i < imgCnt;i++){
    aryImg.push({
      "posx": Math.random()*cvsw,     // 初期表示位置x
      "posy": Math.random()*cvsh,     // 初期表示位置y
      "sizew": imgBaseSizeW,          // 画像の幅
      "sizeh": imgBaseSizeH,          // 画像の高さ
    });
  }
}

// 描画、パラメーターの更新
var idx = 0;
function flow(){
  ctx.clearRect(0,0,cvsw,cvsh);
  for(idx = 0;idx < imgCnt;idx++){
    aryImg[idx].posy += 1;
    ctx.drawImage(img, aryImg[idx].posx, aryImg[idx].posy, aryImg[idx].sizew , aryImg[idx].sizeh);
    // 範囲外に描画された画像を上に戻す
    if(aryImg[idx].posy >= cvsh){
      aryImg[idx].posy = 0 - aryImg[idx].sizeh;
    }
  }
}

function flow_start(){
  console.log(dropspeed);
  setImagas();
  setInterval(flow,dropspeed);
}

// リサイズ時
window.onresize = function(){

  var cvsw = container.clientWidth;   
  var imgBaseSizeW = 10/1000*cvsw;
  var imgBaseSizeH = imgBaseSizeW*1.25;
  for(idx = 0;idx < imgCnt;idx++){
    aryImg[idx].sizew = imgBaseSizeW;
    aryImg[idx].sizeh = imgBaseSizeH;
  }

}