function findLargest(x,y,z)
{
  if(x>=y && x>=z)
  {
    console.log(x + " is the largest");
  }
  else if(y>=x && y>=z)
  {
    console.log(y + " is the largest");
  }
  else
  {
    console.log(z + " is the largest");
  }
}
findLargest(8,3,5);