var positive = document.getElementById('btn-positive');
var negative = document.getElementById('btn-negative');

var soundDir = "./assets/sounds/";

var bikeBell = new Audio(soundDir + 'bike-bellx3.wav');
    bikeBell.loop = false;

var airHorn = new Audio(soundDir + 'air-horn.mp3');
    airHorn.loop = false;

positive.onclick = function() {
  console.log(':D');

  bikeBell.play();
}

negative.onclick = function() {
  console.log(':D');

  airHorn.play();
}