const name ='hitesh'
const RepoCOunt = 50
//console.log(name + RepoCOunt +"Value");
//String Interpolation
console.log(`My name is ${name} and my RepoCOunt is ${RepoCOunt}`)
const nameString = new String('hitesh');
console.log(nameString[0])
console.log(nameString.length)
console.log(name.length)
console.log(name.toUpperCase())
console.log(nameString.charAt(2))
console.log(nameString.indexOf('e'));
const newString = nameString.substring(0,4)
console.log(newString)
const newString1 = nameString.slice(-5,4)

console.log(newString1)
const newString4 = "    hitesh.    "

const url ="http://hitesh.com/hitesh%20chowdarty"
const newString3 = newString4.trim()
console.log(url.replace('%20','-') )