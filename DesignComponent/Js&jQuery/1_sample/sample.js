// var result = confirm("あなたはN高生ですか？");

// if (result == true) {
//   alert("N高へようこそ！");
// } else {
//   window.location.href = "https://nnn.ed.jp/admission/";
// }

var count = 0; // クイズが正解した数をカウントする変数

// クイズの質問と答えを配列で格納した変数
var quiz = [
  {
    question: "犬は英語で何と言うでしょう？",
    answer: "dog"
  },
  {
    question: "鳥は英語で何と言うでしょう？",
    answer: "bird"
  },
  {
    question: "クジラは英語でなんと言うでしょう？",
    answer: "whale"
  }
];

var your_lose = [];
// クイズを繰り返し表示する
for (var i = 0; i < quiz.length; i++) {
  var your_answer = prompt(quiz[i].question);
  if (your_answer == quiz[i].answer) {
    console.log("正解！");
    count++;
  } else {
    console.log("はずれ！");
    your_lose.push(quiz[i].question + "⇒" + quiz[i].answer);
  }
}

// ゲームの結果を表示する
console.log(quiz.length + "問中、" + count + "問正解でした！");
if (!(your_lose.length === 0)) {
  for (var j = 0; j < your_lose.length; j++) {
    document.write(your_lose[j] + "<br>");
  }
}