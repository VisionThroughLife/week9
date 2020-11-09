var num1 = 0;
var num2 = 0;
var sum = 0;
var difference = 0;


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
        if(num1 > num2)
        {
            difference = (num1 -num2);
            document.writeln(num1 + " - " + num2 + " = " +  difference);
        }
        else if(num1 < num2)
        {
            difference = (num2 -num1);
            document.writeln(num2 + " - " + num1 + " = " +  difference);

        }
     }
}

else
{
    document.writeln("Error");
}
