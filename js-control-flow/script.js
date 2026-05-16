let cartTotal = 40;

if (cartTotal >= 150) {
    console.log("20% discount.");
} else if (cartTotal >= 100) {
    console.log("10% discount.");
} else if (cartTotal >= 50) {
    console.log("Free Shipping.");
} else {
    console.log("Try Again");
}

//loop
let totalItemsInCart = 3;

for (let i = 1; i <= totalItemsInCart; i++) {
    console.log("Scanning item number " + i + "...");
}

let boxesToRestock = 1;

while (boxesToRestock <= 4) {
    console.log("Restocked product box " + boxesToRestock);
    boxesToRestock++;
}

//function
function calculateTax(price, taxRate) {
    return price * taxRate;
}

function confirmOrder(customerName, orderNumber) {
    console.log("Order #" + orderNumber + " , Thank you for shopping, " + customerName + ".");
}

let itemPrice = 50000;
let tax = calculateTax(itemPrice, 0.10);

console.log("The tax for a Rp " + itemPrice + " item is: Rp " + tax);

confirmOrder("budi", 84729);