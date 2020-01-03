function Car(options)
{
    this.title = options.title
}

Car.prototype.drive = function(){
    return 'vroom'
}

const car = new Car({title:"bmw"})
console.log(car);
console.log(car.drive());