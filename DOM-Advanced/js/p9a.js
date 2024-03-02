let redLight = document.querySelector(".red");
let yellowLight = document.querySelector(".yellow");
let greenLight = document.querySelector(".green");

function lightControl() {
  setInterval(function(){
    redLight.style.amimationPlayState = "rinning";
  },10000)


  setInterval(function(){
    yellowLight.style.amimationPlayState = "rinning";
  },20000)


  setInterval(function(){
    greenLight.style.amimationPlayState = "rinning";
  },30000)
}

setInterval(function(){
    lightControl()
},30000)

lightControl()

