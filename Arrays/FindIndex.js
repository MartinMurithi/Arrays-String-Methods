//Returns first index of a value that passes a specific test
//Returns -1 if no value passes a test
//Takes a functionas an argument

const colors = ["red","orange","greeen","blue", "greein"];

function func(color) {
    return color == "green"
}

console.log(colors.findIndex(func));