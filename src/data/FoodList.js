// Standard React import to make this a React Component
import React from 'react';
import FoodData from '../data/foods.json'
import $ from 'jquery';

class FoodList extends React.Component {

  componentDidMount(){
    let fatMeter = [];
    let proMeter = [];
    let carbMeter = [];

    $(".foodItem").on('click', function(){
      
      let thisFood = document.getElementsByClassName('foodItem');
      //let thisCal = thisFood.getAttribute('carbs');

      const foodSelect = $((this), thisFood);

      let clickedFood = foodSelect.attr('food')
      let thisCal = foodSelect.attr('calories')
      let thisCarbs = foodSelect.attr('carbs')
      let thisProtien = foodSelect.attr('protien')
      let thisFat = foodSelect.attr('fat')

      const fatValue = thisFat * 9;
      const carbValue = thisCarbs * 4;
      const proValue = thisProtien * 4;

      $('.foodEaten').text(clickedFood);

      let chime = document.getElementById('chimeSound');

      chime.play();
      chime.playbackRate = 2.5;

      
      fatMeter.push(fatValue);
      proMeter.push(proValue);
      carbMeter.push(carbValue);
    
      var cumFat = 0;
      var cumCarb = 0;
      var cumProtien = 0;

      for(var i = 0; i < fatMeter.length; i++){
        cumFat += fatMeter[i];
        cumCarb += carbMeter[i];
        cumProtien += proMeter[i];
      }
// Current cumulative TOTALS FOR MACROS
console.log('Your cumulative (cumFat) fat total is =================>' + cumFat);
console.log('Your cumulative (cumCarb) carb total is ===============>' + cumCarb);
console.log('Your cumulative (cumProtien) protien total is =========>' + cumProtien);

// JQuery for displaying Macronutrient bars (expands width of internal div)
      $('.fatMeter').css('width', (cumFat * .9) + "px")
      $('.carbMeter').css('width', (cumCarb * .9) + "px")
      $('.proMeter').css('width', (cumProtien * .9) + "px")

      $('#fatStat').html(cumFat)
      $('#proStat').html(cumProtien)
      $('#carbStat').html(cumCarb)

      if (carbValue > proValue && carbValue > fatValue) {
        $('.mainMacro').text('ENERGY!');
      }
      else if (proValue > carbValue && proValue > fatValue){
        $('.mainMacro').text('GROWTH!');
      }
      else {
        $('.mainMacro').text('SKIN & ORGAN HEALTH!');
      }
console.log("FOOD: " + clickedFood)
console.log("TOTAL FOOD ITEM Carbs (thisCarbs)=========> " + thisCarbs)
console.log("TOTAL FOOD ITEM Protien (thisProtien)=====> " + thisProtien)
console.log("TOTAL FOOD ITEM Fat (thisFat)=============> " + thisFat)
console.log("Total FOOD ITEM Calories (thisCal)========> " + thisCal)

let intCarb = parseInt(cumCarb);
let intProtien = parseInt(cumProtien);
let intFat = parseInt(cumFat);

if (intCarb > 600 ) {
    $(".welcomeBkgrd").css('background-image', 'url(./../../img/allisonTired.png)')
    $('body').css('background', '#B0C4DE')
    $('#mood').html('<span class="state tired"> Tired </span>')
    $('.carbMood').html('<br /><span class="howmuch">' + (intCarb - 600) + '</span><span class="whyCarbs why"> &ndash; too many bread and sugar calories ... </span>')
  }
if (intProtien > 600) {
    $(".welcomeBkgrd").css('background-image', 'url(./../../img/allisonTired.png)')
    $('body').css('background', '#B0C4DE')
    $('#mood').html('<span class="state tired"> Meat sweats </span>')
    $('.protienMood').html('<br /><span class="howmuch">' + (intProtien - 600) + '</span><span class="whyProtien why"> &ndash; too many meat, nuts, and grains ... </span>')
  } 
if (intFat > 600) {
    $(".welcomeBkgrd").css('background-image', 'url(./../../img/allisonTired.png)')
    $('body').css('background', '#B0C4DE')
    $('#mood').html('<span class="state tired"> Kinda icky </span>')
    $('.fatMood').html('<br /><span class="howmuch">' + (intFat - 600) + '</span><span class="whyFats why"> &ndash; too much fatty food ... </span>')
  }    
    });
} 

render() {
  return (
      <>
        {FoodData.foods.map((foodDetail, index) => {
            return (
                <div className="col-lg-3 col-md-3 col-sm-2 col-xs-2" key={index}> 
                    <img 
                    className="foodItem"
                    src= {foodDetail.img} 
                    alt={foodDetail.food} 
                    key={foodDetail.index}
                    food={foodDetail.food}
                    carbs={foodDetail.carbs}
                    protien={foodDetail.protien}
                    fat={foodDetail.fat}
                    calories={foodDetail.calories}
                    />
                </div>
    
            ) 
        })}
      </>
    );
  }
}
export default FoodList;
