class Toy
{
    constructor(options)
    {
        this.title = options.title
    }
    drive()
    {
        return 'Beep beep'
    }
}

class Bigtoy extends Toy
{
    constructor(options)
    {
        super(options);
        this.color = options.color;
    }
    honk()
    {
        return "vroom"
    }
}

const bigtoy = new Bigtoy({"title":"Toyota","color":"red"});
console.log(bigtoy);
console.log(bigtoy.honk());