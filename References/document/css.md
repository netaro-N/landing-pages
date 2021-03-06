#はじめてのCSS入門講座

## CSSのセレクタ
### 2-1
ブロック要素：p, div, table, hタグ
インライン要素：a, span, img

### 2-2 : class セレクタとid セレクタ
- タイプセレクタ：HTMLタグ
- class : .〇〇
- id : #〇〇

### 2-3 : CSSをまとめる
- .〇〇 , .〇〇　と、「,」でセレクタをまとめる
- もしくはHTMLでクラスを複数指定することでまとめる（class="base red"とスペースで）

### 2-4 : 特殊なセレクタ
- ">" : 子のみ（！）要素を選べる（.main > span{ }） (.main span{ }のスペース区切りだと子孫セレクタになる。つまり.main span内の孫要素にも適用される)
- "+" : 隣接セレクタ（h2 + p{ } h2の次がpタグなら、そのPに適用）
- "~" : 間接セレクタ(h2 ~ p{ } 同じ階層の後ろにある全てのpに適用。つまり兄h2の全弟pに適用)

### 2-5 : 属性セレクタ
*【めっちゃ便利】*
属性値のみではなく、属性名そのものを指定することができる
- [class]{} //クラス属性を持った全ての要素
- [href="#"]{} //#のリンクを持ったhref属性を持った要素
- a[href="#"]{} // ゞ でかつaタグの要素

### 2-6 : 擬似要素
動的な事象へのセレクタ
- :link | 未訪問のリンク
- :visited | 訪問済みのリンク
- :focus | :focus{ } フォーカスされている（input要素などに便利）
- :hover | マウスが乗っている
- 他多数

### 2-7 : 構造的な擬似要素
どれも例で把握すること
- :first-child | 兄弟関係の同じ要素のうち、最初の要素（※子要素という考え方で説明するのは複雑になるので、兄弟関係と考えた方が良い）
- :last-child | ゞ、最後の要素（※子要素という考え方で説明するのは複雑になるので、兄弟関係と考えた方が良い）
- :only-child | その要素が唯一の子要素であれば適用される

### 3-1 : サイズの指定方法
- 絶対的サイズ
 - in：1inch = 2.54cm = 25.4mm
 - mm
 - cm
 - pt : 72pt = 1inch = 6pc
 - pc（パイカ） : 1pc = 12pt
- 相対的サイズ
 - ex（"x"の高さを基準１とする時のサイズ）
 - em（一文字の高さを基準１とするときのサイズ）
 - px（解像度の点一つ分）

## 3-2 : 単語による指定の方法
- inherit：例えば span{ color: inherit; }とかやれば、spanの親要素のcolorを引き継ぐ。
- \ バックスラッシュでエスケープする。 ex) "私は\"css\"の勉強をしています。"