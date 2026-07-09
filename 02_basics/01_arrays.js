//array
const myArr=[0,1,2,3,4,5]//js ke array resizeable hote hai

const myHeros=["shaktimaan","hulk","naagraj","ViratKohli"]

const myArr2=new Array(1,2,3,4,5)
console.log(myArr[1]);


//Array methods
myArr.push(6)
myArr.push(7)
myArr.pop()//remove one

myArr.unshift(9)//to put it at starting

console.log(myArr)

myArr.shift()

console.log(myArr)// to remove that 9 we added
console.log(myArr.includes(9))//to check whether 9 is present or not


const newArr=myArr.join()

console.log(myArr);
console.log(typeof(newArr));

//slice and spice
console.log("A",myArr);

const myn1=myArr.slice(1,3)//large not include

console.log(myn1)
console.log("B",myArr);

const myn2=myArr.splice(1,3)//last includes
console.log(myn2);