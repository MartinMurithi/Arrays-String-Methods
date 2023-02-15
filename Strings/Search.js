//Search, returns index of a specified value
//It is case sensitive
//If value is not found, it returns a -1

const search = (word) => {
    let x = word.search('Wachira');
    let y = word.search(/Wachira/i);//removes case sensitivity
    return y;
}

console.log(search('Martin wachira'));
