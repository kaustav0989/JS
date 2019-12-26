var products = [
    {name:"banana",type:"fruit"},
    {name:"cabbage",type:"veg"},
    {name:"bhindi",type:"veg"},
    {name:"cucumber",type:"fruit"}
]

/*var filtered=[]

for( var i = 0; i < products.length; i++ )
{
    if( products[i].type === "fruit" )
    {
        filtered.push(products[i].name)
    }
}
console.log(filtered)*/

var filteredprods = products.filter( function(product){
    return product.type === "fruit"
})
console.log(filteredprods)