//Creates a new arr from an existing arr based on a callback function

const arr = [21, 34, 12, 22, 17, 16, 14];

function checkAge(age) {
    return age > 21;
}

console.log(arr.filter(checkAge));