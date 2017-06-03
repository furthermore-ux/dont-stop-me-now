// var audio = new Audio('audio_file.mp3');
// audio.play();

var positive = $('.btn-positive');
var negative = $('.btn-negative');

var soundDir = "./assets/sounds/";

var bikeBell = new Audio(soundDir + '212663__mboscolo__bike-bell.wav');

positive.on('click', function() {
  console.log(':D');

  bikeBell.play();
});

negative.on('click', function() {
  console.log(':0');
});