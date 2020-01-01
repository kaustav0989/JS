const expense = {
    type : "business",
    amount : "USD45"
}

const {type , amount} = expense
console.log(type);

//Another example

function objectSummary({type, amount})
{
    return `the type is ${type} and amount is ${amount}`
}
console.log(objectSummary(expense))