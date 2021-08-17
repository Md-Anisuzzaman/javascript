//  let sum = 0;  

// for ( let i = 6; i >= 1; i--){
//    // console.log(i);
//     sum = sum + i;
// }
//console.log(sum);
// let result;
// function sum(i){

//    if (i == 1){
//        return 1;
//    }
//    return sum(i-1) + i;
// }


// console.log(i);
// let factorial = 1;
// for ( let i = 6; i>=1; i--){
//     console.log(i);
//     factorial = factorial * i;
// }

// console.log("the value", factorial);

//********************//////////*/////// */

// function factorial (i){
//     if (i == 1){
//         return 1;

//     }
//     return i * factorial(i -1);

// }

// //console.log(factorial(6));

// let getFactorial = factorial(6);
// console.log(getFactorial);

//************************************//////////


// const fibo = [0,1];
// for (let i = 2 ; i<=6; i++){
//     fibo[i] = fibo[i-1] + fibo[i-2];
// }

// console.log(fibo);

//************************************//////////

// function fibonacci(i){
//     if (i == 0){
//         return 0;
//     }
//     if ( i== 1){
//         return 1
//     }
//     return fibonacci(i-1) + fibonacci(i-2);

// }


// console.log(fibonacci(6));

//************************************//////////


const products = [

    { name: 'Samsung S3 Mobile', price: 12000 },
    { name: 'Iphone X', price: 80000 },
    { name: 'Acer Laptop', price: 50000 },
    { name: 'Hp Laptop', price: 65000 },
    { name: 'Bashundhara Tissue', price: 50 },
    { name: 'Sorisar Oil', price: 980},
    { name: 'Samsung watch', price: 1500},
]

function searchProducts(products, searchText) {
    const matched = [];
    for (const product of products) {
        const name = product.name;
        if (name.indexOf(searchText) != -1) {
            matched.push(product);
        }
    }
    return matched;

}

const matched = searchProducts(products, 'Laptop')
console.log(matched);
//console.log(products.name);

