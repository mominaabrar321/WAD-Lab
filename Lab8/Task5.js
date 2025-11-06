    const prompt=require("prompt-sync")();
    let n = parseInt(prompt("Enter a number:"));
    let numbers = [];
    for (let i = 1; i <= n; i++) {
      numbers.push(i);
    }
    console.log(numbers);