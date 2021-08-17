//**********object declaration***********//
var computer = {
    model: 'core i5',        //*********/ property : property value;
    ram : 'corsair',
    price: 42000,
    motherboard: 'msi'
}

// console.log(computer);        //********output whole object property in a varible

// console.log(computer.model);   //********output single object property in  a whole object

// var computerPrice = computer.price;// declare a varible to find object property value
// console.log(computerPrice);        //              

//    Different ways to set value in object property

//computer.price = 15000;

//computer['price'] = 20000;

//**********declare variable to change object property**********//
var pricePoperty = "price";
computer [pricePoperty] = 12000;
console.log(computer); 










