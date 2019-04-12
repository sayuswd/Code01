// 画面の対象の画像を全て隠す関数
function hideAllImages() {
  const images_off = document.querySelectorAll('.images input');
  images_off.forEach(function (image) {
    //画像を非表示にする。
    image.style.visibility = "hidden";
  });
}

// 値が変更された時に呼ばれる関数
function onChangeValue() {
  // 全ての画像を非表示にする。
  hideAllImages();

  //input（チェックボタン）のデータをすべて取ってくる。
  const sec_checkboxes = document.querySelectorAll('.main_section input');
  //imagesのデータをすべて取ってくる。
  const all_images = document.querySelectorAll('.images input');

  //1つずつ取得したデータのdata-nameを１つずつ取得する。
  sec_checkboxes.forEach(function (checkbox) {
    const checkbox_name = checkbox.dataset.name;

    //その中でもしチェックされていたらimagesデータを取得する。
    if (checkbox.checked) {
      all_images.forEach(function (image) {
        const image_name = image.dataset.name;

        //該当のdata-nameがあったら表示する。
        if (image_name.indexOf(checkbox_name) >= 0) {
          image.style.visibility = "visible";
        }
      });
    }
  });
}

// 画面を読み込んだときに呼ばれる関数
function onLoad() {
  // 全て非表示にする。
  hideAllImages();

  //  値が変更された時に呼ばれる関数(イベントを登録する)
  document.addEventListener("change", onChangeValue);
}
//ウィンドウがロードした時に起動する。
window.addEventListener("load", onLoad);