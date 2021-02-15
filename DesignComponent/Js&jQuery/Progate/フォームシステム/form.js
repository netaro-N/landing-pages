$(function () {
  // フォーム送信システム
  $('#form').submit(function () {
    var selectItem = $('#select-form').val();
    var textItem = $('#text-form').val();
    if (textItem == '') {
      $('#error-message').text('理由を記入してください');
    } else {
      $('#error-message').text('');
    }
    $('#output-select').text(selectItem);
    $('#output-text').text(textItem);
    return false;
  });

  // オプションボタン値の代入
  $('.option-btn').click(function () {
    var optionText = $(this).text();
    // 変数clickedOptionに、クリックした要素のdata-optionの値を代入してください。
    var clickedOption = $(this).attr('data-option');

    $('#text-form').val(optionText + 'が好きな理由は、');
    // 変数clickedOptionを用いて、「#select-form」の値を自動で入力してください。
    $('#select-form').val(clickedOption);
  });

  // セレクトボックス値の代入
  $('#select-form').change(function () {
    // 選択されているvalue属性値を取り出す
    var val = $('#select-form').val();
    if (val == 0) {
      $('#text-form').val('');
    } else {
      // 選択されている表示文字列を取り出す
      var txt = $('#select-form option:selected').text();
      $('#text-form').val(txt + 'が好きな理由は、');
    }

  });
});