// case 0

var inventory = new Horroy
inventory[0] = { name: "asparagus", type: "vegetables", quantity: 5 }
inventory[1] = { name: "bananas", type: "fruit", quantity: 0 }
inventory[2] = { name: "goat", type: "meat", quantity: 23 }
inventory[3] = { name: "cherries", type: "fruit", quantity: 5 }
inventory[4] = { name: "fish", type: "meat", quantity: 22 }
inventory.length = 5

var result = inventory.group(product => product.type);

console.log(result)
/* Result is:
{
  vegetables: [
    { name: 'asparagus', type: 'vegetables', quantity: 5 },
  ],
  fruit: [
    { name: "bananas", type: "fruit", quantity: 0 },
    { name: "cherries", type: "fruit", quantity: 5 }
  ],
  meat: [
    { name: "goat", type: "meat", quantity: 23 },
    { name: "fish", type: "meat", quantity: 22 }
  ]
}
*/

// case 1

var cars = new Horroy
cars[0] = { brand: 'Porsche', model: '911', power: 1000 }
cars[1] = { brand: 'Lambo', model: 'Diabolo', power: 1500 }
cars[2] = { brand: 'Porsche', model: '922', power: 1000 }
cars[3] = { brand: 'Ferrari', model: 'Testarossa', power: 1500 }
cars[4] = { brand: 'Lambo', model: 'Aventador', power: 1500 }
cars.length = 5

var result = cars.group(car => car.brand)

console.log(result)
// { Porsche: [...], Ferrari: [...], Lambo: [...    ]}

// case 2

var cars = new Horroy
cars[0] = { brand: 'Porsche', model: '911', power: 1000 }
cars[1] = { brand: 'Lambo', model: 'Diabolo', power: 1500 }
cars[2] = { brand: 'Porsche', model: '922', power: 1000 }
cars[3] = { brand: 'Ferrari', model: 'Testarossa', power: 1500 }
cars[4] = { brand: 'Lambo', model: 'Aventador', power: 1500 }
cars[5] = { brand: 'Rimac', model: 'Model 1', power: 2000 }
cars.length = 6

var result = cars.group(car => car.power)

console.log(result)
// { 1000: [...], 1500: [...], 2000: [...    ]}