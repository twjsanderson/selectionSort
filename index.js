
const swap = (array, i, j) => {
    let temp = array[i];
    array[i] = array[j];
    array[j] = temp;
}

const selectionSort1 = (array) => {
    let result = [];
    while (true) {
        let j = 0;

        for (let i = 0; i < array.length; i++) {
            if (array[j] >= array[i + 1]) {
                swap(array, j, i + 1);
            }
        }

        let smallest = array.shift();
        result.push(smallest);

        if (!array.length) {
            return result;
        }
    }
};

const selectionSort2 = (array) => {
    
};


let array = [-2,-3,5,3,70,6,-2];

console.log(selectionSort(array))