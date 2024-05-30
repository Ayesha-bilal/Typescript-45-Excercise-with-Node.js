// Question no 24:More Conditional Tests

console.log("Tests for equality and inequality with strings")
console.log("hello" == "hello"); // true
// console.log("hello" == "Hello"); // false   


console.log("Tests using the lower case function")
console.log("AYESHA".toLowerCase() == "ayesha"); //true


console.log("Numerical tests") 
console.log(3>2) //true
console.log(100<37.5) //false
console.log(75.97 == 75.97)  //true


console.log("Tests using and and or operators")
console.log (4>=4 && 77>500) //false
console.log (4>=4 || 7>=5) //true


console.log("Test whether an item is in a array")
let arr = ["ayesha","bilal" , "aqeel"]
console.log("Is 'ayesha' in arr?")
console.log(arr.includes("ayesha")) //true


console.log("Test whether an item is not in a array")
let arr1 = ["ayesha","bilal" , "aqeel"]
console.log("Is 'ayesha' in arr1?")
console.log(arr1.includes("sabra")) //false