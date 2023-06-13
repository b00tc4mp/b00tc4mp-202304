const inventory = new Horroy
inventory[0] = { name: "asparagus", type: "vegetables", quantity: 5 }
inventory[1] = { name: "bananas", type: "fruit", quantity: 0 }
inventory[2] = { name: "goat", type: "meat", quantity: 23 }
inventory[3] = { name: "cherries", type: "fruit", quantity: 5 }
inventory[4] = { name: "fish", type: "meat", quantity: 22 }
inventory.length = 5

const result = inventory.group(({ type }) => type);

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