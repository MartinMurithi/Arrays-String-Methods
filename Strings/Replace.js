//Searches a string for a value or a regular expression
//Returns a new string with values replaced
//Does not change original string

//It takes 2 params, the word to be replaced and the word to replace it.

function replace() {
    const str = "Software Developer";
    const newStr = str.replace("Developer", "Engineer");
    return newStr;
}

console.log(replace());