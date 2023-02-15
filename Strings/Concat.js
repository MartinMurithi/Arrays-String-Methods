//joins one or more strings
//Returns a new string
//Does not change existing strings

function concatStr(str1, str2) {
    const str = str1.concat(str2);
    return str;
}

console.log(concatStr("Foot","ball"));