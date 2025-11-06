console.log("Visual Studio");

a=null;
y=undefined;
console.log(a);
console.log(y);

var name = "Nayab";
console.log(name); // Output: Nayab

var name = "Ali"; // Redeclaring allowed
console.log(name); // Output: Ali

name = "Sara"; // Updating allowed
console.log(name); // Output: Sara

if (true) {
    var test = "Inside block";
}
console.log(test); // Output: Inside block (not block-scoped) 

let age = 25;
console.log(age); // Output: 25

age = 30; // Updating allowed
console.log(age); // Output: 30

if (true) {
    let insideBlock = "Hello";
    console.log(insideBlock); // Output: Hello
}
// console.log(insideBlock); //  Error: insideBlock is not defined

var time=10;
if(time>5 && time<17)
{
    console.log("Good Morning");
}
else
    {
        console.log("Good Evening");
    }