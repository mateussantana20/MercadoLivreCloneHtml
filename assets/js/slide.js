$(function() {

  var indeceAtual = 0;
  var indiceMaximo = $('.slider img').length;

  initSlider();
  cliqueSlider();
  function initSlider() {
    $('.slider img').eq(0).fadeIn();
    setInterval(() => {
      aleternarSlider();
    },5000);
  } 

  function cliqueSlider() { 
    $('.pointer').click(() => {
      $('.slider img').eq(indeceAtual).stop().fadeOut(2000);
      indeceAtual = $(this).index();
      $('.slider img').eq(indeceAtual).stop().fadeIn(2000);
    })
   }

  function aleternarSlider() {  
    $('.slider img').eq(indeceAtual).stop().fadeOut(2000);
    indeceAtual+=1;
    if(indeceAtual == indiceMaximo){
      indeceAtual = 0;
    }
    $('.slider img').eq(indeceAtual).stop().fadeIn(2000);
  }
})