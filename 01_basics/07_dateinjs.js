//dates

let myDate = new Date();//new object of date

console.log(myDate);//not readable
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toLocaleDateString());
console.log(typeof myDate);//it is an object

let myCreatedDate = new Date("2026-07-09");//month start with zero in Js
console.log(myCreatedDate.toDateString());

let myTimeStamp = Date.now();

console.log(myTimeStamp);
console.log(myCreatedDate.getTime());

console.log(Math.floor(Date.now()/1000));

let newDate=new Date()
console.log(newDate);
console.log(newDate.getMonth());
console.log(newDate.getDay());//1 is monday


newDate.toLocaleDateString('default',{
    weekday:"long"
})