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


// PREVENT SUBMIT PAGE RELOAD


// JSON call -------------- //

$.getJSON( "../Final-Project/data/foods.json", function( data ) {
  var items = [];

  $.each( data.foods, function( key, val ) {

    let imgURL = val.img;

    items.push( 

      "<div class=\"col-md-3 food-items\" id=\"" + key + "\"" + "style=\"background: no-repeat center center url(\'" + imgURL + "\')\">"
      + // val.calories, val.carbs, val.protien, val.fat, val.img +
      "</div>" 
      
      );
  });
 
  $( "<div/>", {
    "class": "food-items, row",
    html: items.join( "" )
  }).appendTo( ".interactive" );
  console.log(data.foods[3].calories + items);
}); 