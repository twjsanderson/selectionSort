
/**
 * Swap Function
 * Helper function swaps 2 array values in-place
 * @param {array} array 
 * @param {number} i 
 * @param {number} j 
 */
const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

/**
 * Iterative Selection Sort Function
 * Version 1 
 * @param {array} array
 * @return {array} 
 */
const selectionSort1 = (array) => {
    let result = [],
        smallest;

    while (true) {
        for (let i = 0; i < array.length; i++) {
            if (array[0] >= array[i + 1]) {
                swap(array, 0, i + 1);
            }
        }

        smallest = array.shift();
        result.push(smallest);

        if (!array.length) return result;
    }
};

/**
 * Recursive Selection Sort Function
 * @param {array} array 
 * @param {number} startIndex 
 */
const selectionSort2 = (array, startIndex) => {  

    // Base case
    if (startIndex === array.length) return;

    for (let i = startIndex + 1; i < array.length; i++) {
        if (array[startIndex] > array[i]) {
            swap(array, startIndex, i);
        }
    }

    startIndex++
    selectionSort2(array, startIndex)
};

/**
 * Iterative Selection Sort Function
 * Version 2
 * @param {array} array 
 * @return {array} 
 */
const selectionSort3 = (array) => {
    for (let i = 0; i < array.length; i++) {
        let minIndex = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[minIndex] > array[j]) {
                minIndex = j;
            }
        }
        if (minIndex !== i) {
            swap(array, minIndex, i)
        }
    }
    return array;
};

let array1 = [-2,-3,5,3,-70,6,-2];
console.log('selectionSort1: ', selectionSort1(array1))

let array2 = [-2,-3,5,3,-70,6,-2];
console.log('Before selectionSort2 has been called: ', array2)
selectionSort2(array2, 0);
console.log('After selectionSort2 has been called: ', array2)

let array3 = [-2,-3,5,3,-70,6,-2];
console.log('selectionSort3: ', selectionSort3(array3))