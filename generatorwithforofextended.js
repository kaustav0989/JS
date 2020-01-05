const engineeringTeam = {
    lead:"suprith",
    manager:"anusha",
    team:"container"
}

function* iterator(teamD)
{
    yield teamD.lead;
    yield teamD.manager;
    yield teamD.team;
}

const members = [];
for( let member of iterator(engineeringTeam) )
{
    members.push(member);
} 

console.log(members);