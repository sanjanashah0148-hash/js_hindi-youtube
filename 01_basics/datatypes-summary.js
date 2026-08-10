//primitive:7 types
//string,number,boolean,null,undefined,symbol:to make value unique,Bigint-all primitive:call by value means when changes is done it is in copy

const score =100
const scoreValue =100
const isLoggedIn=false
const outsideTemp=null
let userEmail;
const id=Symbol('1234')
const anotherId=Symbol('1234')

console.log(id===anotherId);

const bigNumber=2435235761786381263982132n
//non-primitive(reference data types)-call by refernce
//array,object,functions

const heros=["shaktiman","naagraj","doga"];
let myObj = {
    name: "Sanjana",
    age:22,
}


const myFunction=function(){
    console.log("hello sanjana");
}
 
console.log(typeof bigNumber);
console.log(typeof myFunction);//it is abject function 
console.log(typeof anotherId);
//datatypes
//null-object
//boolean-boolean
//undefined-undefined
//string-string

//+++++++++++++++++++++++++++++++++++++++++++++++++++++++

//stack(primitive)and heap memory(non-primitive)
//for stack-primitive datatype
//for heap-non-primitive datatype
let myinstagramname="_sanjanashah._."

let anothername=myinstagramname
anothername="but_why_sanjana"

console.log(anothername);
console.log(myinstagramname);

let userOne={
    email:"sanajanshah0148@gmail.com",
    registrationnumber:"20249026"
}

let userTwo=userOne

userTwo.email="sanjana.20249026@mnnit.ac.in"//object can be accessed by dot aur object ki value


console.log(userOne.email);
console.log(userOne.email);// heap memory used hence original changes