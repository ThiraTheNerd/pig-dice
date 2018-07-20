var player1 = new player("player1", 0);
var player2 = new player("player2", 0);
$(document).ready(function() {

  $(".firstPlayer #firstRoll").click(function(event) {
    event.preventDefault();

    //var player1 = new player("player1", 0, 0);
    //window.player1 = player1;
    player1.turnScore();
    console.log(turn);
    $("#dice").text(y);
    $(".firstPlayer span").text(turn);
  });

  $("#firstTotal").click(function(event) {
    player1.overallTotal();
    console.log(player1.totalScore);
    $(".firstPlayer p").text(player1.totalScore);
    document.getElementById("firstRoll").disabled = true;
    document.getElementById("firstTotal").disabled = true;
    document.getElementById("secondRoll").disabled = false;
    document.getElementById("secondTotal").disabled = false;
    turn = 0;
    $(".firstPlayer span").text(turn);
  });

  $(".secondPlayer #secondRoll").click(function(event) {
    event.preventDefault();
    //var player2 = new player("player2", 0, 0);
    //window.player2 = player2;
    player2.turnScore();
    console.log(turn);
    console.log(y);
    $(".secondPlayer span").text(turn);

  });

  $("#secondTotal").click(function(event) {
    player2.overallTotal();
    console.log(player2.totalScore);
    $(".secondPlayer p").text(player2.totalScore);
    document.getElementById("secondRoll").disabled = true;
    document.getElementById("secondTotal").disabled = true;
    document.getElementById("firstRoll").disabled = false;
    document.getElementById("firstTotal").disabled = false;
    turn = 0;
    $(".secondPlayer span").text(turn);
  });
});


//back end logic
turn = 0;

function player(name, total) {
  this.playerName = name;
  this.totalScore = total;
};

player.prototype.turnScore = function() {
  var y = Math.floor(Math.random() * (7 - 1)) + 1;;
  window.y=y;
  return turn+=y ;
}

player.prototype.overallTotal = function() {
  this.totalScore += turn;
  return this.totalScore;
}
