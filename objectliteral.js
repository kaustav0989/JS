const inventory = [
    {title : "subham" , price : 10},
    {title : "kaustav" , price : 5}
]
const bookShop = createBookShop(inventory)
//This is done in conventional way
/*
function createBookShop(inventory)
{
    return {
        inventory : inventory,
        inventoryValue : function(){
            return this.inventory.reduce( (total,book) => total = total + book.price , 0 )
        },
        priceforTitle : function(title){
            return this.inventory.find( book => book.title == title ).price
        }
    }
}
*/
//we can do the commented part using enhanced object literals

function createBookShop(inventory)
{
    return {
        inventory,
        inventoryValue(){
            return this.inventory.reduce( (total,book) => total = total + book.price , 0 )
        },
        priceforTitle(title){
            return this.inventory.find( book => book.title === title ).price
        }
    }
}
console.log(bookShop.inventoryValue())
console.log(bookShop.priceforTitle("subham"))