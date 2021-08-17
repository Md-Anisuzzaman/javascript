// var number = 0;

// while( number < 10 )
// {
//     console.log(number);
    
//     if (number == 5){
//     break;
//     }
//     number++;
// }

// for(var i=0; i<20; i++)
// {
//     console.log(i);
//     if (i==10)
//     {
//         break;
//     }
// }
// console.log('Breake the evaluation of loop')

var numbers = [25, 30, 35, 50, 70, 80, 90, 105, 110, 120, 130];

// console.log(numbers.length);
// console.log(numbers.indexOf(70));
// console .log(numbers);

for ( var i=0; i<numbers.length; i++)
{
    var number = numbers[i];
    console.log(number);
    if(number>100)
    {
        break;
    }
    
}
// console.log("out from loop");


