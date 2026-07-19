let score="33abc"//data type:NaN
console.log(typeof score);
console.log(typeof (score));

let valueInNumber=Number(score)
console.log(typeof valueInNumber);
console.log(valueInNumber);
//conversion
//"33"=>33
//"33abc"=>NaN:type
//truue=>1;false=>0

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
