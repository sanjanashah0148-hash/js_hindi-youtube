// const coding=["js","ruby","java","python","cpp"]

// const values=coding.forEach((item)=>{
//     console.log(item);
    
// })
// //console.log(values);//return is undefined

const myNums=[1,2,3,4,5,6,7,8,9,10];

//const newNums=myNums.filter((num)=>num>4)//filter takes callback in it
// const newNums=myNums.filter((num)=>{
//     //num>4
//     return num>4
// })
//console.log(newNums);//we get empty ARRAY//Actually when we use scope we should use parenthesis with return keyword to get values

// const newNums=[]

// myNums.forEach((num) => {
//     if(num>4){
//         newNums.push(num);//in order to add any number
//     }
    
// });
// console.log(newNums);

const books=[
    {title:'Book One',genre:'Fiction',publish:1981,edition:2004},
    {title:'Book two',genre:'Fiction',publish:1992,edition:2008},
    {title:'Book three',genre:'Fiction',publish:1999,edition:2007},
    {title:'Book Four',genre:'Science',publish:1989,edition:2010},
    {title:'Book Five',genre:'Fiction',publish:2009,edition:2014},
    {title:'Book Six',genre:'History',publish:1987,edition:2010},
    {title:'Book seven',genre:'Science',publish:1987,edition:1996},
    {title:'Book Eight',genre:'Non-Fiction',publish:1986,edition:1989},
];
let userBooks=books.filter((bk)=>bk.genre==='History')
userbooks=books.filter((bk)=>{
    return bk.publish>=1995 && bk.genre==="History"
})

console.log(userBooks);
