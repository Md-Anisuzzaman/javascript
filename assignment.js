// Problem 1: Seer-To-Mon Conversion which return a number value.


function seerToMon(seer) {
    if (typeof seer != "string") {
        const mon = seer / 40;
        return mon;
    }
    else {
        console.log("its wrong input");   // Error message
    }

}

let getMonValue = seerToMon(400);
console.log(getMonValue);


// Problem 2: Total Sales Calculation which return a totalsales number value.


function totalSales(shirtQuantity, pantQuantity, jutaQuantity) {


    const perShirtPrice = 100;
    const perPantPrice = 200;
    const perJutaPrice = 500;

    let totalSalesPrice = 0;


    if (shirtQuantity < 0) {

        console.log("Shirt Quantity Input Is Wrong")         // Error message
    }
    else {

        const shirtTotalQuantity = shirtQuantity * perShirtPrice;
        totalSalesPrice = totalSalesPrice + shirtTotalQuantity;
    }
    if (pantQuantity < 0) {

        console.log("Pant Quantity Input Is Wrong")          // Error message

    }
    else {

        const pantTotalQuantity = pantQuantity * perPantPrice;
        totalSalesPrice = totalSalesPrice + pantTotalQuantity;
    }
    if (jutaQuantity < 0) {

        console.log("Juta Quantity Input Is Wrong")          // Error message

    }
    else {

        const jutaTotalQuantity = jutaQuantity * perJutaPrice;
        totalSalesPrice = totalSalesPrice + jutaTotalQuantity;

    }
    return totalSalesPrice;
}


const myShoppingExpenses = totalSales(10, 12, 22);
console.log(myShoppingExpenses);


//Problem 3: Delivery Cost Calculation which return a totsl delovery cost number value.


function deleveryCost(quantity) {

    let first100Quantity;
    let seceond100Qunatity;
    let restQuantity1;
    let restQuantity2
    let seceond100Qunatitytotal;
    let totalDeliveryCost;
    let thirdGreater200Quantity;
    let seceondQuantitytotal;


    if (quantity <= 100) {

        first100Quantity = quantity * 100;
        totalDeliveryCost = first100Quantity;
        return totalDeliveryCost;
    }
    else if (quantity >= 100 && quantity <= 200) {

        first100Quantity = 100 * 100;
        restQuantity1 = quantity - 100;
        seceond100Qunatity = restQuantity1 * 80;
        totalDeliveryCost = seceond100Qunatity + first100Quantity;
        return totalDeliveryCost;


    }
    else if (quantity > 200) {

        first100Quantity = 100 * 100;
        seceond100Qunatity = 100 * 80;
        restQuantity2 = quantity - 200;
        thirdGreater200Quantity = restQuantity2 * 50;
        totalDeliveryCost = seceond100Qunatity + first100Quantity + thirdGreater200Quantity;
        return totalDeliveryCost;
    }

    else {
        console.log(" Sorry!, you input wrong quantity ");     // Error message
    }
}



totalDeliveryCost = deleveryCost(155);
console.log(totalDeliveryCost);


//Problem 4: If found a string name which length Five character then return that name.


const friends = ['Mosaddek', 'Sahadat', 'Robin', 'Kafi', 'Jabbar'];

function perfectFriends(friends) {
    if (Array.isArray(friends)) {

        for (let i = 0; i < friends.length; i++) {
            if (friends[i].length == 5) {
                return friends[i];
            }
        }

    }
    else {
        console.log(" Sorry! its not array ");        // Error message
    }

}
let friendName;
friendName = perfectFriends(friends);
console.log(friendName);







