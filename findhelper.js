var users = [
    {name:"Kaustav"},
    {name:"Subham"},
    {name:"Rajdeep"}
]

/*for( var i=0;i<users.length;i++ )
{
    if(users[i].name === "Subham" )
    {
        var user = users[i].
        break
    }
}
console.log(user)*/

//Same implementation using the find helper

var userfind = users.find(function(user){
    return user.name === "Kaustav"
})
console.log(userfind)