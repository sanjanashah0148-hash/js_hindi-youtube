console.log(2>1);
console.log(2>=1);
console.log(2<1);
console.log(2>1);
console.log(2==1);
console.log(2!=1);
console.log("2">1);//two datatype cant be compared in typescript but done in javascript


console.log(null==0);//== does not changes null to 0
console.log(null>=0);//== changes null to 0 rather in relational operator it changes to NaN
console.log(null<=0);//== changes null to 0 rather in relational operator it changes to NaN


console.log(undefined==0);
console.log(undefined<=0);
console.log(undefined>=0);

//==== it also checks data types and it is called as strict check

console.log(null===0);
console.log("2"===2);