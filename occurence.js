var arr =[1,2,8,3,4,2,3];
var occurence = 0;
var numberToCheck= parseInt(prompt("what number do you need to determine the occurence for?"));
for(let i=0; i < arr.length; i++)
{
    if(numberToCheck == arr[i])
    {
        occurence++;
        
    }
}

document.writeln("There were " + occurence + " occurence of " + numberToCheck);

