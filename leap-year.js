function isLeapYear(year)
{
    if (year % 2 == 0)
    {
       return true; 
    }
    return false;
}

var theYear = 2041;
var isTheYear = isLeapYear(theYear);
console.log("Is the year Leap-- ", isTheYear);

var herYear = 2055;
var isHerYear = isLeapYear(herYear);
console.log("Her the year Leap-- ", isHerYear);

