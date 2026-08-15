//if
 const isUserloggedIn=true
 if(2===2){
     console.log("executed");


 }
//<,>,<=,>=,==.!=.===//= it is assignment operator,=== is strict equal

 const score=200
 if (score>100){
     let power="fly"//var scope is global hence it can be accessed globally
     console.log(`User power:${power}`);

 }
 console.log(`User power:${power}`);

 const balance=1000
//if (balance>500) console.log("test"),console.log("test2");
//This syntax is very baad and not accceptable at many professinal place
 if (balance<500){
     console.log("less than");

 }else if(balance<750){
         console.log("less than 500");

    
 }else if(balance<900){
         console.log("less than 500");
}else{
     console.log("less than 1200");
    
 }
const userLoggedIn=true
const debitCard=true
const loggedInFromGoogle=false
const loggedInFromEmail=true

 if(userLoggedIn && debitcard&&2==2){
     console.log("Allow to buy course");
 }
 if(loggedInFromGoogle||loggedInFromEmail){
     console.log("User Logged In");
    
 }
//Nullish coalaescing Operator(??):null undefined
let val1;
//val1=5??10
//val1=null??10
val1=undefined??15
val1=null??10??10

console.log(val1);

//Ternary operator

//condition ? true:false

const iceTeaPrice=100
iceTeaPrice>=80 ? console.log("less than 80") :console.log("more than 80")
