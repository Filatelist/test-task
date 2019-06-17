
function Animal() {
}

Animal.prototype.getName = function () {
    return this.name
}

function Dog(name){
    this.name = name;
    this.bark = function () {
        return `Dog ${this.name} is barking`
    }
};

Dog.prototype = Object.create(Animal.prototype);

var dog = new Dog ('Aban');


console.log(dog.getName () === 'Aban');
console.log(dog.bark () === 'Dog Aban is barking');

class Animal {
    getName = () =>{
        return this.name;
    }
}

class Dog extends Animal{
    constructor(name){
        super();
        this.name = name;
    }
    bark = () =>{
        return `Dog ${this.name} is barking`
    }
}

const dog = new Dog('Aban')

console.log(dog.getName () === 'Aban');
console.log(dog.bark () === 'Dog Aban is barking');
