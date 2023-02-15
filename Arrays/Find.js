// The find() method returns the value of the first element that passes a test.

// The find() method executes a function for each array element using a callback fn.

// The find() method returns undefined if no elements are found.

const fruits = ['apple', 'mango', 'banana', 'passion', 'pineapple'];

const checkFruit = (fruit) => {
    return fruit.length >= 9;
}

console.log(fruits.find(checkFruit));