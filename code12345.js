
// 画面の対象の画像を全て隠す関数
function hideAllImages()
{
  const images_off = document.querySelectorAll('.images input');
  images_off.forEach(function(image) {
    image.style.visibility ="hidden";
  });
}

// 値が変更された時に呼ばれる関数
function onChangeValue()
{
  hideAllImages();

  const sec_checkboxes = document.querySelectorAll('.one_section input');
  const all_images = document.querySelectorAll('.images input');

  sec_checkboxes.forEach(function (checkbox) {
    const checkbox_name = checkbox.dataset.name;

    if(checkbox.checked)
    {
      all_images.forEach(function (image) {
        const image_name = image.dataset.name;

        if (image_name.indexOf(checkbox_name) >= 0 ) {
          image.style.visibility ="visible";
        }
      });
    }
  });
}

// 画面を読み込んだときに呼ばれる関数
function onLoad()
{
  // 全ての画像を非表示にする。
  hideAllImages();

  // イベントを登録する。
  document.addEventListener("change", onChangeValue);
}

window.addEventListener("load", onLoad);


  // 今回は使わない
  //const check1 = document.one_section.check_one1.checked;
  //const check2 = document.one_section.check_one2.checked;
  //const check3 = document.one_section.check_one3.checked;



/**
if (check2 == true) {
  alert("2チェックされました");
}else{
  alert("2チェックされてません");
}

if (check3 == true) {
  alert("3チェックされました");
}else{
  alert("3チェックされてません");
}
*/
    /**
      const cool = image_img.indexOf("クール");
  
        if (cool >= 0) {
          value.style.visibility ="visible";
        }else{
          value.style.visibility ="hidden";
        }


      const idol = image_img.indexOf("アイドル");

      if (idol >= 0) {
        value.style.visibility ="visible";
      }else{
        value.style.visibility ="hidden";
      }

    });
  });
});










  /**
  const image_img1 = all_image;


  const kawaii = image_img1.dataset.name;
  //alert(kawaii);

  const image_img2 = all_image;
  const cool = image_img2.dataset.name;
  //alert(cool);
 */
  
  //型の検索　alert(kawaii instanceof  String);
  
  /**  
   * 使用しないでデータが取得できた。↓
    const kawaii_a = images_imgs.indexOf('かわいい');
    const cool = images_imgs.indexOf('クール');
    const idol = images_imgs.indexOf('アイドル');
    alert(cool);
    alert(idol);

});  */
/**
 * 
 * 　2枚の画像合わせ　2019年3月24日
document.addEventListener("change",function(){

  const all_images = document.querySelectorAll('.images input');

  all_images.forEach(function(value){
    const images_imgs = value.class;
    if(images_imgs  == img1){
      document.getElementById("img1").style.visibility="visible";
    }else{
    document.getElementById("img1").style.visibility="hidden";
  }


  const section1_1_word = document.querySelector('#sec1-1');
  if(section1_1_word.checked == true) {
    alert("可愛い");
  }else if(section1_1_word.checked == false)　{
    alert("違う");
  }

  const section1_2_word = document.querySelector('#sec1-2');
  if(section1_2_word.checked == true) {
    alert("クール");
  }else if(section1_2_word.checked == false)　{
    alert("違う");
  }

  const section1_3_word = document.querySelector('#sec1-3');
  if(section1_3_word.checked == true) {
    alert("悩む");
  }else if(section1_3_word.checked == false)　{
    alert("違う");
  }


  });

});  

　　　　個別に設計した表示　　　　　　2019年3月24日
const image_reset = document.querySelectorAll('.images type');
  image_reset.forEach(function(value){
    value.style.visibility="hidden";
  };


value.type;
    image_reset.style.visibility="hidden";

document.addEventListener("change",function(){

  const all_images = document.querySelectorAll('.images input');

  all_images.forEach(function(value){
    const image_img = value.className;
  
  const section1_1_word = document.querySelector('#sec1-1');

  if(section1_1_word.checked == true) {
    if(image_img  == "img1") {
      document.querySelector(".img1").style.visibility="visible";
  
  }else if(section1_1_word.checked == false)　{
    document.querySelector(".img1").style.visibility="hidden";
    }
  }

  const section1_2_word = document.querySelector('#sec1-2');
  if(section1_2_word.checked == true) {
    if(image_img  == "img2"){
      document.querySelector(".img2").style.visibility="visible";
  }else if(section1_2_word.checked == false)　{
    document.querySelector(".img2").style.visibility="hidden";
    }
  }

  const section1_3_word = document.querySelector('#sec1-3');
  if(section1_3_word.checked == true) {
    document.querySelector(".img1").style.visibility="visible";
    document.querySelector(".img2").style.visibility="visible";
  }
  });

});  */
