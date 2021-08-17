// const names =['abul','babul','kabul','sabul','mabul','babul','sabul','kabul', 'jagul','mabul'];

// function removeDuplicate(names) 
// {
//     const unique = [];
//     for( let i=0; i<names.length; i++)
//     {
//         const element = names[i];
//         console.log(element);
//         if(unique.indexOf(element) == -1)
//         {
//             unique.push(element);
//         }
//     }
//     return unique;

// }

// const uniqueNames = removeDuplicate(names);
// console.log(uniqueNames);

// ohter way  for {const element of }

const names =['abul','babul','kabul','sabul','mabul','babul','sabul','kabul', 'jagul','mabul'];

function removeDuplicate(names) 
{
    const unique = [];
    for( const element of names)
    {
        console.log(element);
        if(unique.indexOf(element) == -1)
        {
            unique.push(element);
        }
    }
    return unique;

}

const uniqueNames = removeDuplicate(names);
console.log(uniqueNames);