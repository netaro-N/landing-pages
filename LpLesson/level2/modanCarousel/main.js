class Carousel {
  // 初期化
  constructor(query) {
    this.$elm = document.querySelector(query);

    this.maxIndex = Math.round(this.$elm.scrollWidth / this.$elm.clientWidth);

    // ul#pagingを取得する
    var page = document.getElementById('paging');
    // カルーセル画像枚数を取得する
    // 枚数分のリストを作成／追加、さらに'.indexbtn'クラスを付与
    for (var i = 0; i < this.maxIndex; i++) {
      var li_elm = document.createElement('li');
      if(i === 0){
      // 最初の要素にはactiveクラスを追加
      page.appendChild(li_elm).classList.add('indexbtn','active');
      }else{
      page.appendChild(li_elm).classList.toggle('indexbtn');
      }
    }
  }

  // このシステムで言うindexとは、画像の両端に振った番号と捉える？
  // 今の index を取得
  get index() {
    var index = Math.round(this.$elm.scrollLeft / this.$elm.clientWidth);
    // console.log('現在のインデックスは' + index);
    return index;
  }

  // 指定した場所に移動
  goto(index) {
    var i = (index + this.maxIndex) % this.maxIndex;
    // console.log('子要素i番目に跳ぶ。i= ' + i);
    this.$elm.children[i].scrollIntoView({ behavior: "smooth" });
  }

  // インデックスボタンにactiveクラス追加
  active(i) {
    // indexbtn+activeクラスのactiveを除去
    document.querySelector('#paging li.active').classList.remove('active');
    // indexbtnクラスのi番目に、activeクラスを追加する
// #pagingのchildren(i)に追加したほうが良い？
document.querySelector('#paging').children[i].classList.toggle('active');

  }

  // 次へ
  next() {
    this.goto(this.index + 1);
  }

  // 前へ
  prev() {
    this.goto(this.index - 1);
  }

  //スクロール⇒active()
  scroll() {
    var i = (this.index + this.maxIndex) % this.maxIndex;
    this.active(i)
  }

  // インデックスボタンの番号へ
  btn(btnIndex) {
    this.goto(btnIndex);
  }
}

window.onload = function () {
  // カルーセルを生成
  var carousel = new Carousel('.carousel');

  // ボタンのセットアップ
  var $btnPrev = document.querySelector('.btn-prev');
  var $btnNext = document.querySelector('.btn-next');

  $btnPrev.onclick = () => { carousel.prev(); };
  $btnNext.onclick = () => { carousel.next(); };

  // インデックスボタンのセットアップ
  const elms = document.querySelectorAll(".indexbtn");// elementsクラスを持つ要素をすべて取得
  let index;// クリックした要素のインデックスを格納する変数
  elms.forEach((elm) => {// elementsを持つ要素すべてに以下の処理を追加する
    elm.addEventListener("click", (s) => {// クリックしたときに
      index = [].slice.call(elms).indexOf(elm);// インデックスを変数indexへ格納する
      carousel.btn(index);
    });
  });
  console.log(carousel.$elm);
  // スクロールイベントを行ったとき、carousel.active()を作動
  carousel.$elm.addEventListener('scroll', function() {
   carousel.scroll();
  })
};