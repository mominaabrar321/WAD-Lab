let countVowels=(str)=>
{
  let count=0;
  for(let ch of str)
    {
        if(ch=='a' || ch=='e' || ch=='i' || ch=='o' || ch=='u' ||
            ch=='A' || ch=='E' || ch=='I' || ch=='O' || ch=='U')
        {
          count++;
        }
    }
  return count;
};
console.log(countVowels("Momina"));