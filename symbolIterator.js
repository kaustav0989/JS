const testingTeam = {
    lead:"Kaustav",
    tester:"spandana",
    //Symbol.Iterator is used as a key and value is the geerator function
    [Symbol.iterator]: function* ()
    {
        yield this.lead;
        yield this.tester;
    }
}

const engineeringTeam = {
    testingTeam,
    lead:"suprith",
    manager:"anusha",
    team:"container",
    [Symbol.iterator]: function* ()
    {
        yield this.lead;
        yield this.manager;
        yield this.team;
        yield* this.testingTeam;
    }
}

const members = [];
for( let member of engineeringTeam )
{
    members.push(member);
} 

console.log(members);