module.exports = function towelSort (matrix) {
    if (arguments.length === 0) {
        return [];
    }
    let arr = [];
    let arr1 = [];
    let arr2 = [];
    for (var i = 0; i < matrix.length; i++) {
        if (i % 2 === 0) {
            for (var j = 0; j < matrix[i].length; j++)
                arr1.push(matrix[i][j]);
            arr1.sort((a, b) => a - b);
            arr = arr.concat(arr1);
            arr1.length = 0;
        } else {
            for (var j = 0; j < matrix[i].length; j++)
                arr2.push(matrix[i][j]);
            arr2.sort((a, b) => b - a);
            arr = arr.concat(arr2);
            arr2.length = 0;
        }
    }
    return arr;
}
