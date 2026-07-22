const score=400
console.log(score)

const balance=new Number(100)//explicitly defining number as datatype
//it specifically shows that it is a number
console.log(balance);

console.log(balance.toString().length);//changes into string
console.log(balance.toFixed(2));//that means we are taking two precison values


const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));//it return string
//number can have value from 1 to 21

const hundreds =1000000
console.log(hundreds.toLocaleString());//according to US standard
console.log(hundreds.toLocaleString("en-IN"));//according to indian standards


//+++++++++++++++Maths++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));//for absolute value

console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(4,3,6,8));//to find minimum value in an array
console.log(Math.max(4,3,6,8));

console.log(Math.random());//value of it is always batween 0 and 1
console.log((Math.floor(Math.random()*10)+1));//value of it is multiplies to 10 to get greater than 1 and added 1 for clarity

const min=10
const max=20

console.log(Math.floor(Math.random() *(max-min+1))+min)

