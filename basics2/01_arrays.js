//arrays
const myArr =[0,1,2,3,4,5]
const myHeroes =["shakti","nagraj"]

const Arr2 =new Array(01,1,2,3,7)
console.log(myArr[1])

//Array methods
myArr.push(6)
myArr.pop()
myArr.unshift(9) // add to to the first place
myArr.shift() //removes first item in array
console.log(myArr)
console.log(myArr.includes(2))
console.log(myArr.indexOf(3))

const myArr2 = myArr.join()
console.log(myArr2)
console.log(typeof(myArr2))
//slice,splice

console.log("A",myArr)
const myn1 =myArr.slice(1,3)
console.log("b",myn1)
console.log("c",myArr)


const myn2 =myArr.splice(1,3)
console.log("cd",myn2)

