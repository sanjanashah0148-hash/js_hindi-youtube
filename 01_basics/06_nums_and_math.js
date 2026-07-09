const score=400
console.log(score)

const balance=new Number(100)
console.log(balance);

console.log(balance.toString().length);
console.log(balance.toFixed(2));//that means we are taking two precison values


const otherNumber=23.8966

console.log(otherNumber.toPrecision(3));

const hundreds =1000000
console.log(hundreds.toLocaleString());//according to US standard
console.log(hundreds.toLocaleString("en-IN"));//according to indian standards


//+++++++++++++++Maths++++++++++++++++++++++++++++

console.log(Math);
console.log(Math.abs(-4));

console.log(Math.round(4.6));
console.log(Math.ceil(4.5));
console.log(Math.floor(4.5));
console.log(Math.min(4,3,6,8));
console.log(Math.max(4,3,6,8));

console.log(Math.random());//value of it is always less than 1
console.log((Math.floor(Math.random()*10)+1));//value of it is multiplies to 10 to get greater than 1 and added 1 for clarity

const min=10
const max=20

console.log(Math.floor(Math.random() *(max-min+1))+min)

