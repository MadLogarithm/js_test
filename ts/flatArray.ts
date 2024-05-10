function flatArray(arr, depth, FlatArray = []) {
    for (item of arr) {
        if (Array.isArray(item) && depth > 0) {
            flatArray(item, depth - 1, FlatArray);
        } else {
            FlatArray.push(item);
        }
    }
    return FlatArray;
}

const arr = [[0], 1, 2, [3, [4, 5]], 6]
console.log(flatArray(arr, 1))