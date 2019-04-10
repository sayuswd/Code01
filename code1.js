const spring_word = document.querySelectorAll('.spring_section button');

spring_word.forEach(function(element) {
    element.addEventListener('click',() => {
      alert("スプリングカラー");
  });
});


const autumn_word = document.querySelectorAll('.autumn_section button');

autumn_word.forEach(function(element) {
    element.addEventListener('click',() => {
      alert("オータムカラー");
  });
});


const summer_word = document.querySelectorAll('.summer_section button');

summer_word.forEach(function(element) {
    element.addEventListener('click',() => {
      alert("サマーカラー");
  });
});


const winter_word = document.querySelectorAll('.winter_section button');

winter_word.forEach(function(element) {
    element.addEventListener('click',() => {
      alert("ウィンターカラー");
  });
});
