function arraySum(numbers)
{
    var sum = 0;
    for (var i = 0; i < numbers.length; i++)
    {
        var element = numbers[i];
        sum = sum + element;              
    } 
    return sum;
}

var numbers = [25, 55, 52, 66, 29, 89,69];
var arrayTotal = arraySum(numbers);
console.log(arrayTotal);