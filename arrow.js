const add = (a,b) => a+b;  //If a single expression is there then no need of giving return statement
//equivalent to {return (a+b)}
console.log(add(1,2));

//when we have a single argument in the function we can do like this

const double = number => number*2;
console.log(double(8))