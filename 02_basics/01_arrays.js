//array
const myArr=[0,1,2,3,4,5]//js ke array resizeable hote hai
//zero based indexing
//in js array u can enter values of different datatypes
//array makes shallow copy(copy which shares same referce point)
const myHeros=["shaktimaan","hulk","naagraj","ViratKohli"]
//shallow copy is a copy that share the same reference point
//deepcopy do not share same reference point
const myArr2=new Array(1,2,3,4,5)
console.log(myArr[1]);


//Array methods
myArr.push(6)//simply add values to array
myArr.push(7)
myArr.pop()//remove one which is at the last

console.log(myArr);

myArr.unshift(9)//to put it at starting

console.log(myArr)

myArr.shift()

console.log(myArr)// to remove that 9 we added
console.log(myArr.includes(9))//to check whether 9 is present or not
//it give -1 that system does not know that the value exist

const newArr=myArr.join()

console.log(myArr);
console.log(typeof(newArr));

//slice and spice
console.log("A",myArr);
//splice or spice me ye difference hai ki ek me range includew hoti hai ek me nahi hoti hai
const myn1=myArr.slice(1,3)//last not include
//slice return section of array
//splice manipulate original array
console.log(myn1)
console.log("B",myArr);


const myn2=myArr.splice(1,3)//last includes
//manipulate original array
console.log(myn2);