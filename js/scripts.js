var player1 = new player("player1", 0);
var player2 = new player("player2", 0);
$(document).ready(function() {

  $(".firstPlayer #firstRoll").click(function() {
    if (y == 1) {
      turn = 0;
      player1.overallTotal;
      alert("player rolled 1");
      $(".firstPlayer span").text(turn);
      document.getElementById("firstRoll").disabled = true;
      document.getElementById("firstTotal").disabled = true;
      document.getElementById("secondRoll").disabled = false;
      document.getElementById("secondTotal").disabled = false;
    } else {
      player1.turnScore();
      console.log(turn);
      $("#dice").text(y);
      $(".firstPlayer span").text(turn);
    }
  });

  $("#firstTotal").click(function() {
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

  $(".secondPlayer #secondRoll").click(function() {
    if (y == 1) {
      turn = 0;
      player1.overallTotal;
      alert("player rolled 1");
      $(".secondPlayer span").text(turn);
      document.getElementById("firstRoll").disabled = false;
      document.getElementById("firstTotal").disabled = false;
      document.getElementById("secondRoll").disabled = true;
      document.getElementById("secondTotal").disabled = true;
    } else {
    player2.turnScore();
    console.log(turn);
    $("#dice").text(y);
    $(".secondPlayer span").text(turn);
}
  });

  $("#secondTotal").click(function() {
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
var turn = 0;
var y = 0;


function player(name, total) {
  this.playerName = name;
  this.totalScore = total;
};

player.prototype.turnScore = function() {
  y = Math.floor(Math.random() * (7 - 1)) + 1;;
  window.y = y;
  return turn += y;
}

player.prototype.overallTotal = function() {
  this.totalScore += turn;
  return this.totalScore;
}
