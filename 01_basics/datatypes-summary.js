//primitive
//string,number,boolean,null,undefined,symbol,Bigint

const score =100
const scoreValue =100
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('1234')
const anotherId=Symbol('1234')

console.log(id===anotherId)

const bigNumber=2435235761786381263982132n
//non-primitive(reference)
//array,object,functions

const heros=["shaktiman","naagraj","doga"];
let myObj = {
    name: "Sanjana",
    age:22,
}


const myFunction=function(){
    console.log("hello sanjana")
}

console.log(typeof bigNumber);
console.log(typeof myFunction);//it is abject function 
console.log(typeof anotherId);
