function* colors()
{
    yield "red";
    yield "blue";
    yield "green";
}

const returnedColors = [];
for ( let color of colors() )
{
    returnedColors.push(color);
}

console.log(returnedColors);