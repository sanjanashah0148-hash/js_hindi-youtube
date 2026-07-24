// let myName="sanjana   "
// console.log(myName.truelength);
// console.log(myName.truelength)


let myHero=["thor","spiderman"]
let heropower ={
    thor:"hammer",
    spidermaan:"sling",

    getSpiderPower:function(){
        console.log(`spidy power is ${this.spiderman}`);
        
    }
}
Object.prototype.sanjana=function(){
    console.log(`sanjana is present in all objects`);
}
Array.prototype.heysanjana=function(){
    console.log(`Sanjana says hello`);
}
// myheros.sanjana()
//heropower.sanjana()

// heropower.heysanjana()
myHero.heysanjana()

const User={
    name:"Chaiaiai"
}

const Teacher={
    makeVideo:true
}

const TeachingSupport={
    isAvailable:false
}

const TASupport={
    makeAssignment:'JS assignment',
    fullTime:true,
    __proto__:TeachingSupport
}

Teacher.__proto__=User

//modern Syntax
Object.setPrototypeOf(TeachingSupport,Teacher);

let anotherUsername="ChaiaurCode"

String.prototype.trueLength=function(){
    console.log(`${this .name}`);
    console.log(`${this.name}`);
    console.log(`True length is ${this.trim().length}`);

    
}

anotherUsername.trueLength()
"Sanjana".trueLength()
"iceTea".trueLength()
