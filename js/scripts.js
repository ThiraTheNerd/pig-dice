$(document).ready(function() {

$(".firstPlayer #roll").click(function(event){
  event.preventDefault();

  var player1 = new player("player1");
  window.player1 = player1;
    player1.turnScore();
    console.log(turn);
});

$(".firstPlayer #total").click(function(event){
  player1.overallTotal();
  console.log(total);
  turn = 0;
});

// $(".secondPlayer #roll").click(function(event){
//   event.preventDefault();
//
//   var player2 = new player("player2");
//   window.player2 = player2;
//     player1.turnScore();
//     console.log(turn);
//     turn=0;
// });
//
// $(".secondPlayer #total").click(function(event){
//   player2.overallTotal();
//   console.log(total);
// });
});


//back end logic
var total = 0;
var turn = 0;


function player(name) {
  this.playerName = name;
};

player.prototype.turnScore = function() {
  turn += diceRoll();
  return turn;
}

player.prototype.overallTotal = function() {
  total += turn;
  return total;
}

function diceRoll(){
  min = Math.ceil(7);
  max = Math.floor(1);
  var y = Math.floor(Math.random() * (max - min)) + min;
  return y;
}
