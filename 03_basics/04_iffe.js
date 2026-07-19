//immediately Invoked Function Expressions(IIFE)
// to execute a function immediately-file jese start ho vese database ka connection start ho jaye
//no pollution due to global scope
//iffe is a function that can be immediately executed and do not pollute
(function chai(){
    console.log(`DB CONNECTED`);

})();
// (function aurcode() {
//     console.log(`DB CONNECTED TWO ${name}`);
    
// })();//do iffe likhne hai to bas ek colon laga do
((name) => {
    console.log(`DB CONNECTED TWO `);
    
})("sanjana");
