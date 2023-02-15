const remove = () => {
    let cities = ["Nairobi", "Moscow", "NewYork", "Berlin", "London"];
    cities.splice(1);//removes the first index
    cities.splice(2);
    console.log(cities);

    //create a new array and store the spliced elements
    let newArr = cities.splice(2, 3);//2 is the starting point, 3 is  the number of elements to delete
    return newArr; 
}

//console.log(remove());

const add = () => {
    let numbers = [11, 12, 13, 23, 34, 45, 67];
    //add 1000 and 2000 as the third and fourth element
    numbers.splice(2, 2, 1000, 2000);

    //add martin and eric as the last 2 elements
    numbers.splice(7, 2, "Martin", "Eric");
    return numbers;
} 

console.log(add());

// /Splice, changes values of an array by removing or replacing an item in an array
//Returns an array of elements that were removed