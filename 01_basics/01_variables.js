const accountId = 14453
let accountEmail="sanjanashah0148@gmail.com"
var accountPassword="12345"
accountCity="jaipur"
let accountstate;
// accountId=2 //not allowed-we cant change something with const keyword

accountEmail="hdc@gmail.com"
accountPassword="1234567"
accountCity="Prayagraj"

/*
prefer not to use var
becoz of issue in it block scope and functional scope
*/

console.log(accountId);

console.table([accountId,accountEmail,accountPassword.accountCity,accountstate])
//console.table to print everything in a table format at once rather than writing console.log everytime
//js has problem with scope