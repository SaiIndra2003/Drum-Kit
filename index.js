for(var i=0;i<document.querySelectorAll(".drum").length;i++){
  document.querySelectorAll(".drum")[i].addEventListener("click",play);

  function play() {
    var char= this.innerHTML;
    sound(char);
    addAnimation(char);
  }
}


function sound(char){
  switch (char) {
    case "w":
      var audio = new Audio("sounds/tom-1.mp3");
      audio.play();
    break;
    case "a":
      var audio = new Audio("sounds/tom-2.mp3");
      audio.play();
    break;
    case "s":
      var audio = new Audio("sounds/tom-3.mp3");
      audio.play();
    break;
    case "d":
      var audio = new Audio("sounds/tom-4.mp3");
      audio.play();
    break;
    case "j":
      var audio = new Audio("sounds/snare.mp3");
      audio.play();
    break;
    case "k":
      var audio = new Audio("sounds/crash.mp3");
      audio.play();
    break;
    case "l":
      var audio = new Audio("sounds/kick-bass.mp3");
      audio.play();
    break;
    default:
      console.log(char);
  }
  // if(char==="w"){
  //   var audio = new Audio("sounds/tom-1.mp3");
  //   audio.play();
  // }
  // else if(char==="a"){
  //   var audio = new Audio("sounds/tom-2.mp3");
  //   audio.play();
  // }
  // else if(char==="s"){
  //   var audio = new Audio("sounds/tom-3.mp3");
  //   audio.play();
  // }
  // else if(char==="d"){
  //   var audio = new Audio("sounds/tom-4.mp3");
  //   audio.play();
  // }
  // else if(char==="j"){
  //   var audio = new Audio("sounds/snare.mp3");
  //   audio.play();
  // }
  // else if(char==="k"){
  //   var audio = new Audio("sounds/crash.mp3");
  //   audio.play();
  // }
  // else if(char==="l"){
  //   var audio = new Audio("sounds/kick-bass.mp3");
  //   audio.play();
  // }
  // else{
  //   console.log(char);
  // }
}

document.addEventListener("keydown",function(event){
  var key = event.key;
  sound(key);
  addAnimation(key);
})

function addAnimation(key){
  var activeBtn = document.querySelector("."+key);
  activeBtn.classList.add("pressed");
  setTimeout(function(){
    activeBtn.classList.remove("pressed");
  },100);
}
