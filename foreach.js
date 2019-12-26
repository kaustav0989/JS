var colors =["red","blue","green"]

//Generally looping using for loop

/*for( var i=0;i<colors.length;i++ )
{
    console.log(colors[i])
} */

//Looping using forEach helper

/*colors.forEach(function(color) {
    console.log(color)
});*/

//Looping using forEach helper seperately declaring the function

var numbers = [1,2,3,4,5]
var sum = 0;
function adder(number)
{
    sum += number
}
numbers.forEach(adder)
    console.log(sum)
