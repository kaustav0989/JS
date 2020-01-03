//ES5 representation
function Car(options)
{
    this.title = options.title
}

Car.prototype.drive = function(){
    return 'vroom'
}

function Toyota(options)
{
    Car.call(this,options)
    this.category = "vehicle"
}

const car = new Car({title:"bmw"})
console.log(car);
console.log(car.drive());
const titleT = new Toyota({title:"hello"}).title
console.log(titleT);

console.log("---------------------")

//ES6 representation

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

const toy = new Toy({'title':"Toyota"});
const {title} = toy;
console.log(title);
console.log(toy.drive());