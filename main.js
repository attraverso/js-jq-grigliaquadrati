/*Creare in HTML una griglia di 5x5 quadrati vuoti.
XX Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
XX BONUS 1: generare la griglia con jQuery
XX BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde*/

/*DNT*/$(document).ready(function() {/*DNT*/

/*generate game field*/
for (var i = 0; i < 25; i++) {
  $('.container').append('<div class="box"></div>');
}

$('.box').each(function() {
  /*generate random number, store for later use*/
  var innerNr = (getRandomNr(0,10));
  /*insert number inside .box*/
  $(this).append(innerNr);
  /*if number is even, make red*/
  if (innerNr % 2) {
    $(this).addClass('even');
    /*if number is 0, make green*/
  } else if (innerNr == 0) {
    $(this).addClass('zero')
  }
});

})/*DNT*/

/*FUNCTIONS*/

function getRandomNr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
