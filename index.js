var numbeOFBeats = document.querySelectorAll(".drum").length;

for(i=0;i<numbeOFBeats;i++){

document.querySelectorAll(".drum")[i].addEventListener("click", function () {

var bottonToTouch = this.innerHTML;
  founder(bottonToTouch);
  animatinWo(bottonToTouch);
}
);
}
  document.addEventListener("keydown",function(event){
    founder(event.key);
    animatinWo(event.key);
});
function founder(key) {

      switch (key) {
        case "w":
          var tom4 = new Audio('sounds/tom-4.mp3');
          tom4.play();
          break;
        case "a":
          var tom3 = new Audio('sounds/tom-3.mp3');
          tom3.play();
          break;
        case "s":
          var tom2 = new Audio('sounds/tom-2.mp3');
          tom2.play();
          break;
        case "d":
          var tom1 = new Audio('sounds/tom-1.mp3');
          tom1.play();
          break;
        case "j":
          var crash = new Audio('sounds/crash.mp3');
          crash.play();
          break;
        case "k":
          var kick = new Audio('sounds/kick-bass.mp3');
          kick.play();
          break;
        case "l":
          var snare = new Audio('sounds/snare.mp3');
          snare.play();
          break;
          default: console.log(founder);
    }
}
function animatinWo(tuKy){
  var animatedWev = document.querySelector("." + tuKy);
  animatedWev.classList.add("pressed");

  setTimeout(function(){
    animatedWev.classList.remove("pressed");
  },100)
}
