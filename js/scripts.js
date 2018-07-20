var player1 = new player("player1", 0);
var player2 = new player("player2", 0);
$(document).ready(function() {

  $(".firstPlayer #roll").click(function(event) {
    event.preventDefault();

    //var player1 = new player("player1", 0, 0);
    //window.player1 = player1;
    player1.turnScore();
    console.log(turn);
    $("#dice").text(y);
    $(".firstPlayer span").text(turn);
  });

  $(".firstPlayer #total").click(function(event) {
    player1.overallTotal();
    console.log(player1.totalScore);
    $(".firstPlayer p").text(player1.totalScore);
    turn = 0;
  });

  $(".secondPlayer #roll").click(function(event) {
    event.preventDefault();
    //var player2 = new player("player2", 0, 0);
    //window.player2 = player2;
    player2.turnScore();
    console.log(turn);
    console.log(y);
    $(".secondPlayer span").text(turn);

  });

  $(".secondPlayer #total").click(function(event) {
    player2.overallTotal();
    console.log(player2.totalScore);
    $(".secondPlayer p").text(player2.totalScore);
    turn = 0;
  });
});


//back end logic
turn = 0;

function player(name, total, turn) {
  this.playerName = name;
  this.totalScore = total;
};

player.prototype.turnScore = function() {
  var y = diceRoll();
  window.y=y;
  return turn+=y ;
}

player.prototype.overallTotal = function() {
  this.totalScore += turn;
  return this.totalScore;
}

function diceRoll() {
  min = Math.ceil(7);
  max = Math.floor(1);
  var y = Math.floor(Math.random() * (max - min)) + min;
  return y;
}
