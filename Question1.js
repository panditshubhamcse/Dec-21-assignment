//Take 3 inputs from the user and show minimum of the three.

alert("This program will find the minimum among three number.")

var a = prompt("Enter first number");
var b = prompt("Enter second number");
var c = prompt("Enter third number");

if(a < b && a < c)
{
alert ( a);
}

else if(b < a && b < c)
{
alert(b);
}

else
{
alert(c);
}