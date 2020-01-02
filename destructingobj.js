const expense = {
    type : "business",
    amount : "USD45"
}

const {type , amount} = expense
console.log(type);

//Another example

function objectSummary({type, amount},{name})
{
    return `the type is ${type} and amount is ${amount}.${name}`
}
console.log(objectSummary(expense,{name:"concertium"}))

//Example for array

const cars = ["audi","volvo","bmw"]

const{length} = cars            //for properties use {}
const [ name1, ...rest] = cars  //for elements use []
console.log(length);
console.log(name1);
console.log(rest);

//restructuring objects and arrays at the same time

const companies = [
    {name:"Google",location:"USA"},
    {name:"Wipro",location:"INDIA"}
]

const [{location}] = companies
console.log(location);