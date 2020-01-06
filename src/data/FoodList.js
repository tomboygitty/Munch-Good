// Standard React import to make this a React Component
import React from 'react';
import FoodData from '../data/foods.json'
import $ from 'jquery';

// Import of individual referenced components

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

console.log('Your fat total is ' + cumFat);
console.log('Your carb total is ' + cumCarb);
console.log('Your protien total is ' + cumProtien);

    $('.fatMeter').css('width', cumFat + "px")
    $('.carbMeter').css('width', cumCarb + "px")
    $('.proMeter').css('width', cumProtien + "px")

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
    console.log("-- Carbs => " + thisCarbs)
    console.log("-- Protien => " + thisProtien)
    console.log("-- Fat => " + thisFat)
    console.log("Total Calories => " + thisCal)

});
    }

  render() {
    return (
      <>
        {FoodData.foods.map((foodDetail, index) => {
            return (
                <div className="col-md-3" key={index}> 
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
