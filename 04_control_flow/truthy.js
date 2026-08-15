const userEmail="ss@gmail.com"

if(userEmail){
    console.log("got user email");

}else{
    console.log("dont have user email");
}
//Falsy value
//false,0,-0,BigInt 0n,"",null,undefined,NaN
//"truthy values
//"0",'false'," ",[],{},function(){}

if(userEmail.length===0){
    console.log("Array is empty");
    
}
if(Object.keys(emptyObj)){
    console.log("Object is empty");
}