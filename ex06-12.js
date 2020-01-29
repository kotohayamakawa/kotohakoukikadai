function ThreeSecChange() { 
 //関数imgchange1()を3000ミリ秒間隔で呼び出す 
  setInterval("imgchange12()",3000); } 
   

 function imgchange12() {
   document.getElementById('logo2').src = './image/snowman2.png';
 }


 //      <input type="button" value="画像の変更" onclick="imgchange1();">
 //  <img src='./image/snowman.png' id="logo" alt="snowman Logo">

 // * ex06-9.js
 // function imgchange1() {
 //  document.getElementById('logo').src = './image/snowman2.png';
