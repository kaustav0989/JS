var numbers = [10,20,30]

var total = numbers.reduce(function(number,sum){
    return sum+number
},0)

console.log(total)

//complex example of reduce

var primaryColors = [
    {color:"red"},
    {color:"yellow"},
    {color:"blue"}
]

var returnedarray = primaryColors.reduce(function(previous,primaryColor){
    previous.push(primaryColor.color)
    return previous
},[])

console.log(returnedarray)