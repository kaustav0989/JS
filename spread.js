const primaryColors = ["subham","kaustav"]
const favoriteColors = ["samrat","rajdeep"]
const collegeColors = ["amit","satyajit"]

const total = ["aninda", ...primaryColors , ...favoriteColors , ...collegeColors]
console.log(total)

//Another example of practical use of spread operator

function validateShopping(...items)
{
    if ( items.indexOf("milk") < 0 )
    {
        return ["milk", ...items]
    }
    return items
}
console.log(validateShopping("orange"))