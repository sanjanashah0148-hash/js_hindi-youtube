let score="33abc"//data type:NaN
console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//conversion
//"33"=>33
//"33abc"=>NaN:type
//true=>1;false=>0

let isLoggedIn="Sanjana"
//similarly if empty string then the value is false
//true ki 1 and false ki 0
let booleanIsLoggedIn=Boolean(isLoggedIn);
console.log(booleanIsLoggedIn);

//1=>true;0=>false
//""=>false
//"sanjana"=>true

let someNumber=33

let stringNumber=String(someNumber)
console.log(stringNumber);
console.log(typeof stringNumber);

//*******************operations***************/
let value=3
let negValue=-value
console.log(negValue);

console.log(2+2);
console.log(2-2);
console.log(2*2);
console.log(2**3);
console.log(2/3);
console.log(2%3);

let str1="hello"
let str2="Sanjana"
let str3=str1+str2
console.log(str3);

console.log("1"+2);
console.log(1+"2");

console.log("1"+"2");


console.log(1+"2"+2);
console.log(+true);//output is one
console.log(+"");

let num1,num2,num3
num1=num2=num3=2+2

num1=num2=num3=2+2
let gameCounter=100
gameCounter++;
console.log(gameCounter);
