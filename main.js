/*Creare in HTML una griglia di 5x5 quadrati vuoti.
XX Con jQuery, scrivere un numero random tra 0 e 10 dentro ognuno.
XX BONUS 1: generare la griglia con jQuery
BONUS 2: se il numero da inserire è pari scriverlo in rosso, se è dispari in nero, se è 0 in verde*/

/*DNT*/$(document).ready(function() {/*DNT*/

for (var i = 0; i < 25; i++) {
  $('.container').append('<div class="box"></div>');
}

$('.box').each(function() {
  var innerNr = $(this).append(getRandomNr(0,10));
});

})/*DNT*/

/*FUNCTIONS*/

function getRandomNr(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}
