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

    let food = val.food;
    let img = val.img;
    let cal = val.calories;
    let carb = val.carbs;
    let fat = val.fat;
    let protien = val.protien;

    items.push( 

      "<div class=\"col-md-3 foodItem\" id=\"" + key + "\"" + "style=\"background: no-repeat center center url(\'" + img + "\')\" calories=" + cal + " carbs=" + carb + " protien=" + protien + " fat=" + fat + " food=" + food + ">"
      + // val.calories, val.carbs, val.protien, val.fat, val.img +
      "</div>" 
      
      );
  });
 
  $( "<div/>", {
    "class": "foodItems row",
    html: items.join( "" )
  }).appendTo( ".interactive" );
  //console.log(data.foods[3].calories + items);
  $(".foodItem").on('click', function(){
    
    let thisFood = document.getElementsByClassName('foodItem');
    //let thisCal = thisFood.getAttribute('carbs');

    const foodSelect = $((this), thisFood);

    let clickedFood = foodSelect.attr('food')
    let thisCal = foodSelect.attr('calories')
    let thisCarbs = foodSelect.attr('carbs')
    let thisProtien = foodSelect.attr('protien')
    let thisFat = foodSelect.attr('fat')

    console.log("FOOD: " + clickedFood)
    console.log("-- Carbs => " + thisCarbs)
    console.log("-- Protien => " + thisProtien)
    console.log("-- Fat => " + thisFat)
    console.log("Total Calories => " + thisCal)
});
}); 


