var numbers = [10,20,30,40,50]
var total = numbers.reduce(function(sum,number){
    return sum+number;
},0);

console.log(total);

//Balanced parenthesis problem

function balancedparenthesis(string)
{
    string.split("").reduce(function(previous,char){
        if( char === "(" )
        {
            ++previous;
        }
        if( char === ")" )
        {
            --previous;
        }
        return previous;
    },0);
}

var counter =  0
counter = balancedparenthesis("(())")
console.log(counter);