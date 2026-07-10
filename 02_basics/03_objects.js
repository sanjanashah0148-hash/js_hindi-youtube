//singleton

//obejct literal
//object.create

const mySym=Symbol("key1")//to declare a symbol
const JsUser={
    name:"Sanjana",
    "FullName":"Sanjana Shah",
    age:20,
    [mySym]:"mykey1",
    location:"Prayagraj",
    email:"sanjana.20249026@mnnit.ac.in",
    isLoggedIn:false,
    lastLoginDays:["Monday","Saturday"]
}

console.log(JsUser.email)
console.log(JsUser["email"])
console.log(JsUser.FullName)
console.log(JsUser[mySym])

JsUser.email="sanjanashah0148@gmail.com"
//Object.freeze(JsUser)//now changes will not propagate

//function are treated as variables not differently

JsUser.greeting=function(){
    console.log("Hello JS User");
}

JsUser.greetingTwo=function(){
    console.log(`Hello JS user ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());