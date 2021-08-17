// const number = -5;
// const output = Math.abs(number);
// console.log(output);

// const number = 7.523655;
// const output = Math.ceil(number);
// console.log(output);


 //const number = 12.96;
//const output = Math.floor(number);
//const output = Math.round(number);
//const output = Math.random() * 5;
//const rounded = Math.floor(12.96);
// const output = Math.random()*10;
//console.log(rounded);


// for( let i = 0; i<=30; i++)
// {
// const output = Math.random() * 5;
// const rounded = Math.round(output);
// console.log(rounded);
// }


// var a=2; var b=3;

// if(a<b)
// {
//     console.log("hello");
// }




const names =['abul','babul','kabul','sabul','mabul','babul','sabul','kabul', 'jagul','mabul'];

function removeDuplicate(names) 
{
    const unique = [];
    for( const element of names)
    {
        console.log(element);
        if(unique.indexOf(element.lenfg) == -1)
        {
            unique.push(element);
        }
    }
    return unique;

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);



if(array name [index variable ].length ==5){
    return statement ;
    }
