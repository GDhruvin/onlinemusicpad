var numberOfDrumButtons = document.querySelectorAll(".drum").length;

for (var i = 0; i < numberOfDrumButtons; i++) {

  document.querySelectorAll(".drum")[i].addEventListener("click", function () {

    var duplicate = this.innerHTML;

    var buttonInnerHTML = duplicate.toLowerCase();

    makeSound(buttonInnerHTML);

    buttonAnimation(duplicate);

  });

}

document.addEventListener("keypress", function (event) {

  makeSound(event.key);        //key proprty of keyboard pressing .key 

  buttonAnimation(event.key);

});


function makeSound(key) {

  switch (key) {
    case "q":
      var tom1 = new Audio("sounds/accordiono.mp3");
      tom1.play();
      break;

    case "w":
      var tom2 = new Audio("sounds/bagpipes.mp3");
      tom2.play();
      break;

    case "e":
      var tom3 = new Audio('sounds/trumpet.mp3');
      tom3.play();
      break;

    case "r":
      var tom4 = new Audio('sounds/bell.mp3');
      tom4.play();
      break;

    case "t":
      var tom5 = new Audio('sounds/bongo.mp3');
      tom5.play();
      break;

    case "y":
      var tom6 = new Audio('sounds/cello.mp3');
      tom6.play();
      break;

    case "u":
      var tom7 = new Audio('sounds/congo.mp3');
      tom7.play();
      break;

    case "i":
      var tom8 = new Audio('sounds/crash.mp3');
      tom8.play();
      break;

    case "o":
      var tom9 = new Audio('sounds/cymbal.mp3');
      tom9.play();
      break;

    case "p":
      var tom10 = new Audio('sounds/dholak.mp3');
      tom10.play();
      break;

    case "a":
      var tom11 = new Audio('sounds/duff.mp3');
      tom11.play();
      break;

    case "s":
      var tom12 = new Audio('sounds/duggis.mp3');
      tom12.play();
      break;

    case "d":
      var tom13 = new Audio('sounds/flute.mp3');
      tom13.play();
      break;

    case "f":
      var tom14 = new Audio('sounds/ghatam.mp3');
      tom14.play();
      break;

    case "g":
      var tom15 = new Audio('sounds/gong.mp3');
      tom15.play();
      break;

    case "h":
      var tom16 = new Audio('sounds/harmonica.mp3');
      tom16.play();
      break;

    case "j":
      var tom17 = new Audio('sounds/harmonium.mp3');
      tom17.play();
      break;


    case "k":
      var tom18 = new Audio('sounds/harp.mp3');
      tom18.play();
      break;

    case "l":
      var tom19 = new Audio('sounds/keyboard.mp3');
      tom19.play();
      break;

    case "z":
      var tom20 = new Audio('sounds/mangira.mp3');
      tom20.play();
      break;

    case "x":
      var tom21 = new Audio('sounds/sarangi.mp3');
      tom21.play();
      break;

    case "c":
      var tom22 = new Audio('sounds/Maracas.mp3');
      tom22.play();
      break;

    case "v":
      var tom23 = new Audio('sounds/santor.mp3');
      tom23.play();
      break;

    case "b":
      var tom24 = new Audio('sounds/sexophone.mp3');
      tom24.play();
      break;


    default: console.log(key);

  }
}


function buttonAnimation(currentKey) {

  var activeButton = document.querySelector("." + currentKey);   //class name  .w or .s or .j etc//

  activeButton.classList.add("pressed");        // classList used for add new class classList.add("classname"); //

  setTimeout(function () {                      //setTimeout used for how many time apply any task
    activeButton.classList.remove("pressed");  // example : setTimeout (function , time)
  }, 100);                                     // here after call buttonAnimation call classList.add("classname");                                               // one second call classList.remove("classname");
}
