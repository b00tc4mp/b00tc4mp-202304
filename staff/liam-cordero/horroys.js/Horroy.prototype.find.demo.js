//tests

//case1

const a1 = new Horroy
a1[0] = 5
a1[1] = 12
a1[2] = 8
a1[3] = 130
a1[4] = 44
a1.length = 5

var found = a1.find(element => element > 10);

console.log(found)
// Expected output: 12

// 2 case 
const a2 = new Horroy
a2[0] = 'Benjamin'
a2[1] = 'jamin'
a2[2] ='perpendicula'
a2[3] = 'Rindfleischetikettezertifizierungsapparat'
a2[4] ='Liam'
a2.length = 5

var found = a2.find(element => element.length > 15);

console.log(found)

// case 3 

const a3= new Horroy
a3[0] = {name:'Benjamin',surname: 'Pinter'}
a3[1] = {name:'Ben',surname: 'Dover'}
a3[2] = {name:'Tyron',surname: 'Bro'}
a3[3] = {name:'Quandale',surname: 'dingle'}
a3[4] = {name:'john',surname: 'Pork'}
a3.length = 5

var found = a3.find(element => element.length > 15);

console.log(found)