// window.addEventListener("scroll", function () {
//   var header = document.querySelector("header");
//   var logo = document.querySelector("header p");
//   var li = document.querySelector("header ul");
//   header.classList.toggle("scroll-nav", window.scrollY > 0);
//   logo.classList.toggle("xs", window.scrollY > 0);
//   li.classList.toggle("xs", window.scrollY > 0);
// });
'use strict';

{
  // ハンバーガー
  const open = document.getElementById('open');
  const overlay = document.querySelector('.overlay');
  const close = document.getElementById('close');

  open.addEventListener('click', () => {
    overlay.classList.add('show');
    open.classList.add('hide');
  });

  close.addEventListener('click', () => {
    overlay.classList.remove('show');
    open.classList.remove('hide');
  });


//ヘッダーアニメーション
  window.addEventListener("scroll", function () {
    const header = document.querySelector("header");
    const main = document.querySelector(".main-wrapper");
    header.classList.toggle("scroll-nav", window.scrollY > 0);
    close.classList.toggle("scroll-nav", window.scrollY > 0);
    main.classList.toggle("scroll", window.scrollY > 0);
  });
}