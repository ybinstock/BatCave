$(document).ready(function() {

  var script = document.querySelector('#script');
  var potBanging = document.querySelector('#pot-banging');
  var frog = document.querySelector('#frog-sound');
  var eyes = document.querySelector('#eyes');
  var flyingbats = document.querySelector('#bats');

//for script
  script.pause();
  function playScript() {
    script.play();
  }

  setTimeout(playScript, 2000);

  //for potbanging
  potBanging.pause();
  function playPots() {
    potBanging.play();
  }

  setTimeout(playPots, 2000);

  //Water audio

  frog.pause();
  function playFrogs() {
    frog.play();
  }

  setTimeout(playFrogs, 2000);

  flyingbats.pause();
  function playBats() {
    flyingbats.play();
  }

  setTimeout(playBats, 2000);
  
});
