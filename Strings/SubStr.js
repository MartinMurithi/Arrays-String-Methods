//Extracts part of a string#
//params, beginning position and number of char to extract
//Does not change original str

const subStr = (word, start, num) => {
    const newStr = word.substr(start, num);
    return newStr;
}

console.log(subStr('software engineer', 0, 8));