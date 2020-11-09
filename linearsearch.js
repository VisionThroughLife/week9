var arr = [1,10,4,3,7]
var number_found= false;
var addressLocation;
var numberToFind= parseInt(prompt("which number do you want to find"));

for(let i=0; i < arr.length;i++)
{
    if (numberToFind==arr[i])
    {
       number_found= true;
       addressLocation= i;
       break;
       
    }
       
}

if(number_found==true)
{
    document.write("The number " + numberToFind + " is found at the address location: "  + addressLocation);
}

else if(number_found == false)
{
    document.write("The number " + numberToFind + " is not found");
}
