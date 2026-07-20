const coding=["js","ruby","java","python"]

// coding.forEach(function (val)  {
//     console.log(val);


// })//call back function

coding.forEach((item)=>{
    console.log(item);
    
})

// function printMe(item){
//     console.log(item);
    
// }
// coding.forEach(printMe)

coding.forEach((ite,index,arr)=>{
    console.log(item,index,arr);
    
})

const myCoding=[
    {
        languageName:"javascript",
        languagefilename:"js"
    }
    {
        languageName:"java",
        languagefilename:"java"
    }
    {
        languageName:"python",
        languagefilename:"py"
    }
]

myCoding.forEach((item)=>{
    console.log(item.languageName);
})