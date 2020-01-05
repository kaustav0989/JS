const testingTeam = {
    lead:"Kaustav",
    tester:"spandana"
}

const engineeringTeam = {
    testingTeam,
    lead:"suprith",
    manager:"anusha",
    team:"container"
}

function* Teamiterator(teamD)
{
    yield teamD.lead;
    yield teamD.manager;
    yield teamD.team;

    //Delegation of genertors
    const testingTeamGenerator = testingTeamiterator(teamD.testingTeam);
    yield* testingTeamGenerator;
}

function* testingTeamiterator(teamD)
{
    yield teamD.lead;
    yield teamD.tester;
}

const members = [];
for( let member of Teamiterator(engineeringTeam) )
{
    members.push(member);
} 

console.log(members);