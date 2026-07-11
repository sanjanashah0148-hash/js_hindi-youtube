var c=300//it is a global scope
let a=300

if(true){
    let a=10
    const b=20
    //var c=30
    console.log("INNER: ",a);
}//this block is block scope

for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}

console.log(a);
//console.log(b);
console.log(c);