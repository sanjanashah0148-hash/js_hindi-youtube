const name="Sanjana"
const repoCount=50

//console.log(name+repocount+"value"); this is not good way of writing syntax
console.log(`hello my name is${name}and my repo count is${repoCount}`);

const gameName=new String("sanjana-ss")

console.log(gameName[0]);
console.log(gameName.__proto);
console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString=gameName.substring(0,4)//last value is not included
//subsstring ignores value is negative it takes it as zero
console.log(newString);

const anotherString=gameName.slice(-8,4)//reverse ke case
console.log(anotherString);

const newStringOne="   sanjana   "//lot og extra spaces
console.log(newStringOne);
console.log(newStringOne.trim());//trim reduce lot of extra spaces
//trim works on white spaces and line terminator

const url="https://sanjana.com/sanjana%20shah"//by browser those space converted into %20

console.log(url.replace('%20','-'));
console.log('sundar');

console.log(gameName.split('-'))//split on the basis of -
