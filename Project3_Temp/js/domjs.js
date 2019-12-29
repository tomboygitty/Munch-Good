const refreshRate = 1000 / 60;
const maxXPosition = 180;
let rect = document.getElementById('radial');
let speedX = 1 / 10;
let positionX = 0;
function step() {
  positionX = positionX + speedX;
  if (positionX > maxXPosition || positionX < 0) {
    speedX = speedX * (-1);
  }
  rect.style.transform = 'rotate(' + positionX + 'deg)';
  window.requestAnimationFrame(step);
}
window.requestAnimationFrame(step);


let arcElement = document.getElementsByClassName('h1blackDescriptive');
let arcText = document.getElementsByClassName('h1blackDescriptive')[0].innerHTML;

console.log(arcText); 


// PREVENT SUBMIT PAGE RELOAD

document.querySelector(".registerSubmit").addEventListener("click", function(event) {
         event.preventDefault();
}, false);

