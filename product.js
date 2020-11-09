var num1 = 0;
var num2 = 0;
var sum = 0;
var product = 0;

alert("You should enter 2 numbers of your choice" + "\n" + "Press ok to proceed");

 num1 =parseInt(prompt("Enter the first number"));

 if (num1 < 0)
 {
     document.writeln("The number entered should be greater than 0");
 }
 else if(num1 > 0)
{
    num2= parseInt(prompt("Enter the second number"));
    if(num2 < 0)
    {
        document.writeln("The number entered should be greater than 0");
    }
    else if(num2 > 0)
    {
        product = (num1 * num2);
        document.write("The product of the 2 numbers is: " + product);
    }
}

else
{
    document.writeln("Error");
}

