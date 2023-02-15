//Push(), adds new elements to the end of the array
//returns a new array

const pushElm = () => {
    let numbers = [1, 2, 3, 4, 5, 6];
    numbers.push(21, 34, 54);
    return numbers;
}
console.log(pushElm());