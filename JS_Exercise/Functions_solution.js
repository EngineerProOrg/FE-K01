const mergeAndSort = (arr1, arr2) => {
    const mergedArray = [...arr1, ...arr2];
    const uniqueArray = [...new Set(mergedArray)];
    uniqueArray.sort((a, b) => a - b);
    return uniqueArray;
}

// const mergeAndSort = (arr1, arr2) => {
//     const mergedArray = arr1.concat(arr2);
//     const uniqueArray = Array.from(new Set(mergedArray));
//     uniqueArray.sort((a, b) => a - b);
//     return uniqueArray;
// }

const mergeAndSortExtreme = (arr1, arr2) => {
    const uniqueArray = mergeAndSort(arr1, arr2);
    const [smallest, ...rest] = uniqueArray;
    const largest = rest[rest.length - 1] || smallest
    return [smallest, largest];
}

module.exports = { mergeAndSort, mergeAndSortExtreme };