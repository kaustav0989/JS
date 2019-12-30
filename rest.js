function addNumbers(...numbers)
{
    return numbers.reduce((number,sum) => sum = sum+number,0)
}

console.log(addNumbers(1,2));