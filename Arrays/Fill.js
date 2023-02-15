//Fills specific elements in an array with specific values
//Overwrites the original array
//Params, start and end position, else, all elms will be filled

const fillArr = () => {
    let arr = ['Eric', 'Martin', 'Enoch', 'Racheal', 'Jillian', 'Erica'];

    let newArr = arr.fill('Frank', 3, 4);
    console.log(newArr);
}

fillArr()