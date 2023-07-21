// Using the nodejs debugger
export {}
// Step-1 Run the script without any breakpoint 
let x = 5;
let y = 6;
let z = x + y; 
// run a for loop which will throw an error 
// add debugger here 
for(let i=0;i<12;i++){
    debugger; 
    console.log(i)
}


// To use the debugger for this file, run "npm --inspect" day23

