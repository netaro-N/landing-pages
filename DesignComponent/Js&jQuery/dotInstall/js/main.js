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
    var header = document.querySelector("header");
    header.classList.toggle("scroll-nav", window.scrollY > 0);
    close.classList.toggle("scroll-nav", window.scrollY > 0);
  });
}