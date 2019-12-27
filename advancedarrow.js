const numbers = [1,2,3]

const array = numbers.map( number => number*2 )

//console.log(array)

const team = {
    members : ["Kaustav","Suprith"],
    teamName : "CompatContainers",
    /*teamMessage : function()
    {
        return this.members.map(function(member){
            return `this ${member} is part of ${this.teamName}`
        }.bind(this));
    }*/
    //This bind problem can be resolved using fat arrow functions.
    
    teamMessage : function()
    {
        return this.members.map((member) =>  `this ${member} is part of ${this.teamName}`
        )}
}

console.log(team.teamMessage())
