// var ada =5000, rasun =1500 , piyaj = 2200;

// if (ada > rasun &&  ada > piyaj )
// {
//     console .log(" ada is  max values");
// }

// else if ( rasun > ada && rasun > piyaj)
//  {
//    console.log("rasun is max value");
//  }
// else 
// {
//     console.log("piyaj is max value"); 

// }


// other way

// var max = Math.max(ada.rasun,piyaj);
// console.log("largest is ", max);

// //other way


function largestValue(first,seceond,third)
{
    if(first > seceond && first > third)
    {
        return first;
    }
    else if (seceond > first && seceond > third)
    {
        return seceond;
    }
    else
    {
        return third;
    }
    
}


var maxValue = largestValue(10, 200, 100);
console.log("largest value ", maxValue);


