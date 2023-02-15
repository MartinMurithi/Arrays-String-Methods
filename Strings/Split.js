//split, separates a chunk of text from a word or a sentence

function split(str) {
    //const splitStr = str.split(" ");//Splits a sentence depending on the spaces

    const splitStr = str.split('');//Splits word as chars
    const splitStr1 = str.split();//returns one array
    const splitStr2 = str.split(/([.])/);//returns one array

    return splitStr2;
}

console.log(split("Martin is Software Engineer. Eric is a software engineer"));