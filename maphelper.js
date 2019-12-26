var numbers = [1,2,3]
var doublednumbers = []
/*for( var i=0;i<numbers.length;i++ )
{
    doublednumbers.push( 2*numbers[i] )
}
console.log(doublednumbers);*/

//Doing the same using Map helper function
function double(number){
    return number*2
}
doubled = numbers.map(double)
console.log(doubled);

var cars = [
    {model:"tiago",price:"cheap"},
    {model:"bmw",price:"expensive"}
]
 
var prices = cars.map(function pricecalculator(car)
{
    return car.price
});
console.log(prices)