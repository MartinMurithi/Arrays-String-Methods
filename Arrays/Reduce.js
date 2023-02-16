
const shop = [
    { "Item": "Book", Price:10 },
    { "Item": "Cake", Price:30 },
    { "Item": "Pen", Price:20 },
    { "Item": "Car", Price:100 },
]

let totalPrice = shop.reduce((currentTotal, item) => {
    return item.Price + currentTotal
}, 0);
console.log(totalPrice);
console.log(typeof(shop));





// const totalPrice = () => {
//     let price = 0;

//     shop.forEach((item) => {
//         price += item.Price;
//     })

//     return price;
// }

// console.log(totalPrice());