var c=300//it is a global scope
let a=300

if(true){
    let a=10
    const b=20
    //var c=30
    console.log("INNER: ",a);
}//this block is block scope

// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }

//console.log(a);
//console.log(b);
//console.log(c);

function one(){
    const username="Sanjana"

    function two(){
        const website="Youtube"
        console.log(username);

    }
    //console.log(website);

    two()//in JS line by line execution takes place


}

one()

if(true){
    const Username="sanjana"
    if(Username==="Sanjana"){
        const website="youtube"
        console.log(Username+website);
    }
    //console.log(website);
}

//console.log(username);

// ++++++++++++++++++++++++++++++++++Intresting point+++++++++++++++++++++++++++++++++++++++

function addone(num){
    return num+1

}
addone(5)

const addTwo=function(num){
    return num+2
}
addTwo(5)