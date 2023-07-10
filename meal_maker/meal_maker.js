// Note this is for the specials and not the full menu
const menu={
  _meal:"",
  _price:0,
  set meal(mealToCheck){
    if(typeof mealToCheck==='string')
    {
        //console.log("ok");
        this._meal=mealToCheck
    }else{console.log("input not a string. Try Again!");}
  },
  set price(priceToCheck){
    if(typeof priceToCheck==='number')
    {
        //console.log("ok");
        this._price=priceToCheck; 
    }else{console.log("input not a number. Try Again!");}
    //console.log(typeof priceToCheck);
  },
  get todaysSpecial(){
    if(this._meal&&this._price){
      return `Today's Special is ${this._meal} for \$${this._price}!`;
    }else{
      return "meal or price not setup correctly";
    }
    //console.log("asdf")
    //console.log(`${if(this._meal)}\n${if(this._price)}`);
  },
};
// setting wrong values on purpose
// part of lesson 
// to account for wrong inputs
// important note: this "works" as it bypasses the setter
menu._meal=5;
menu._price="5";
//trying the above with the proper setter
menu.meal=5;
menu.price="5";
// fails as expected
//debug print
//console.log(menu);
menu.meal="Clam Chowder";
menu.price=3.50;
//debug print
//console.log(menu);
console.log(menu.todaysSpecial);
console.log("\nExtra: randomly set special");
const pizzas = [["Small Pizza w 2 toppings",9.99],["medium pizza w 3 toppings",12.99],["Large Pizza w 3 toppings",14.95],["\"Extreme\" Pizza w 5 toppings",20.00]];
const burgers=[["Basic burger w fries",6.99],["Bacon Cheeseburger w Cajun fries",7.99],["Delux Cheeseburger w Garlic Fries",8.99],["\"Extreme\" Burger w waffle fries",9.99]];
const chickenDishes=[["Rotisserie Chicken Dinner",14.99],["Steamed Chicken w Sauce",8.99],["Chicken parmesan with pasta",8.79]];
const meals=[pizzas,burgers,chickenDishes]
//console.log(meals);
const setSpecial = () => {
// pick meal group
const categoryIndex=Math.max(0,Math.floor(Math.random()*meals.length));
// pick meal (and its price)
const mealIndex = Math.max(0,Math.floor(Math.random()*meals[categoryIndex].length))
// set meal
menu.meal=meals[categoryIndex][mealIndex][0]
// set price
menu.price=meals[categoryIndex][mealIndex][1]
}

setSpecial();
console.log(menu.todaysSpecial);



