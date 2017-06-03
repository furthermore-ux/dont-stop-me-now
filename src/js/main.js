var positive = $('.btn-positive');
var negative = $('.btn-negative');

var soundDir = "./assets/sounds/";

var bikeBell = new Audio(soundDir + 'bike-bell.wav');
    bikeBell.loop = false;

var airHorn = new Audio(soundDir + 'air-horn.mp3');
    airHorn.loop = false;

positive.on('click', function() {
  console.log(':D');

  bikeBell.play();
});

negative.on('click', function() {
  console.log(':0');

  airHorn.play();
});