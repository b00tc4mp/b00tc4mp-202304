function reverse(array) {
    var a = array.length - 1
    var b = 0  
  for(let i = 1 + array.length%2; i < array.length; i++) {
       var c = array[b]
      var d = array[a]
      array[a] = c
      array[b] = d
      a--
      b++
  }
 return array
}

// tests

// case 1

var array1 = ['one', 'two', 'three' ,'four', 'five']
console.log(array1)
// Expected output: "array1:" Array ["one", "two", "three"]

var reversed = reverse(array1)

console.log(reversed);
// Expected output: "reversed:" Array ["three", "two", "one"]

console.log(array1)
// Expected output: "reversed:" Array ["three", "two", "one"]

console.log(reversed === array1)
// true