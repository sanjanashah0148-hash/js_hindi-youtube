console.log("S");
console.log("A");
console.log("N");
console.log("J");
console.log("A");
console.log("N");
console.log("A");

function saymyname(){
    console.log("S");
    console.log("A");
    console.log("N");
    console.log("J");
    console.log("A");
    console.log("N");
    console.log("A");
}
//saymyname()

// function addtwonumber(number1,number2){//these are paarmeters
//     console.log(number1+number2);
// }


function addtwonumber(number1,number2){//these are paarmeters
    // let result=(number1+number2);
    // return result//after return whatever u write does not execute
    return number1+number2
}
const result=addtwonumber(3,4)//here datatype doesnt matter all get added and one more thing even null+int or string+string//these are argument
console.log("Result: ",result)


function loginUsermessage(userfullname=Sam){
    if(!userfullname){//can also write userfullname===userfullname
        console.log("please enter a userfullname: ");
        return
    }
    return`${userfullname} just logged In`
}

console.log(loginUsermessage("Sanjana"))
//in JS empty string as false and undefined as false value
