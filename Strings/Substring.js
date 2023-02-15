//extracts str from a string based on the given start and end point

const subString = (word) => {
    const newWord = word.substring(1, 4);
    return newWord;
}

console.log(subString('martin'));