let numbers=[3,1,8,2,6];
let max=numbers[0];
let min=numbers[0];
for(let n of numbers)
{
  if(n>max) 
    max=n;
  if(n<min)
    min=n;
}
console.log("Maximum:",max);
console.log("Minimum:",min);