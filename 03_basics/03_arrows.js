const user={
    username:"sanjana",
    price:999,

    welcomeMessage:function(){
        console.log(`${this.username},welcome to website`);//this keyword is for current context
        console.log(this);
        
    }
    // this keyword arrow function ke andar this nahi hota hai
}
// user.welcomeMessage()
// user.username="sam"
// user.welcomeMessage()//as value of username is not hardcore hence got changed at once
console.log(this);//when only this is printed we are in node environment hence empty
//browser me jo global object hai vo hai windows object

// function chai(){
//     let username="Sanjana"
//     console.log(this);
//     console.log(this.username)

    
// }

// chai()

// const chai=function(){
//     let username="Sanjana"
//     console.log(this.username);
    
// }
// const chai=()=>{
//     let username="Sanjana"
//     console.log(this);
    
// }
//arrow function me this use nahi kar sakte vese kar sakte hai
//basic syntax of arrow function()=>{}
// const addTwo=(num1,num2) => {
//     return num1+num2
// }

// console.log(addTwo(3,4));//this was the basic parentheis
//we can use it in different way also like:--
//const addTwo=(num1,num2) => num1+num2
const addTwo=(num1,num2) => (num1+num2)
//after using curly braces we have to use return keyword otherwise not have to write return keyword
// const addtwo=(num1,num2)=>{username:"sanjana"}
// return object we have to wrap it in a parenthesis
const addtwo=(num1,num2)=>({username:"sanjana"})

console.log(addTwo(3,4));

const myArray=[2,5,3,7,8]

myArray.forEach(function(){})