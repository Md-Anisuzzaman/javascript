// var factorial = 1;

//  for (var i = 1; i<=5; i++ )
//  {
//      console.log(i);

//      factorial = factorial * i;
//  }

//  console.log(factorial);


// *************factorial for loop with function *************/

// function factorialFunction(number)
// {
//     var factorial = 1;
//     for ( var i = 1; i<=number; i++)
//     {
//         factorial = factorial * i;
//     }
//     return factorial;
// }


// var firstFactorial = factorialFunction(7) ;
// console.log(" Number 7 Factorial value is ", firstFactorial);

// var seceondFactorial = factorialFunction(10);
// console.log(" Number 10 Factorial value is ", seceondFactorial);


// *************factorial reverse for loop with function ***********************/



function factorialFunction(number)
{
    var factorial = 1;
    for ( var i = number; i>=1; i--)
    {
        factorial = factorial * i;
    }
    return factorial;
}


var firstFactorial = factorialFunction(6) ;
console.log(" Number 7 Factorial value is ", firstFactorial);

var seceondFactorial = factorialFunction(10);
console.log(" Number 10 Factorial value is ", seceondFactorial);


//*********while loop factorial**********************/
// function getFactorial(number)
// {
//     let i = 1, factorial = 1;
//     while (i<=number) {
//          factorial = factorial * i;
//          i++;
        
//     }
//     return factorial;
// }

// let firstFactorial = getFactorial(7);
// console.log (firstFactorial);


// let seceondFactorial = getFactorial(9);
// console.log (seceondFactorial);

//*********while loop factorial reverse**********************/

// function getFactorial(number)
// {
//     let i = number, factorial = 1;
//     while (i>=1) {
//          factorial = factorial * i;
//          i--;
        
//     }
//     return factorial;
// }

// let firstFactorial = getFactorial(6);
// console.log (firstFactorial);


// let seceondFactorial = getFactorial(9);
// console.log (seceondFactorial);