function Person(name, age, gender) {
    this.name = name
    this.age = age
    this.gender = gender
}

Person.prototype.pee = function() {
    return this.name + ': pee 💦' 
}

Person.prototype.poo = function() {
    return this.name + ': poo 💩' 
}

Person.prototype.drink = function(what) {
    return this.name +  ': drink ' + what
}

Person.prototype.eat = function(what) {
    return this.name +  ': eat ' + what
}

var liam = new Person('Liam C', 19, 'male')
var benja = new Person('Benja P', 18, 'male')
var carl = new Person('Carl R', 18, 'male')

liam.pee === benja.pee
// true