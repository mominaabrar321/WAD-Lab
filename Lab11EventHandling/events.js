btn3.addEventListener("click", (evt)=>{
console.log("button3 was clicked");
console.log(evt);
console.log(evt.type);
});
btn3.addEventListener("click", () => {
console.log("button3 was clicked handler2");
});
btn3.addEventListener("click", () => {
console.log("button3 was clicked handler3");
});
btn3.addEventListener("click", () => {
console.log("button3 was clicked handler4");
});
// to remove events
// create variable for that event
const handler3=()=>{
    console.log("button3 was clicked-handler3")
}
//Pass this variable to add listener event:
btn3.addEventListener("click", handler3)
btn3.addEventListener("click", ()=>{
    console.log("button3 was clicked-handler3");
});
//Now pass this variable to remove listener 
btn3.removeEventListener("click", handler3);