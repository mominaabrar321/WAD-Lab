<?php
$x=3;
$y=5;
$z=8;
if ($x > $y && $x > $z)
{
  echo "$x is the largest number<br>";
}
elseif ($y > $x && $y > $z)
{
  echo "$y is the largest number<br>";
}
else
{
  echo "$z is the largest number<br>";
}
?>