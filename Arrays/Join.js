// The join() method returns an array as a string.

// The join() method does not change the original array.

// Any separator can be specified. The default is comma (,).

function join() {
    const arr1 = ['car', 'dog', 'cat'];

    const str = arr1.join(", ")
    console.log(str);
}

join()