const mergeAndSort = (arr1, arr2) => {
  const arr = [...arr1, ...arr2];
  const result = Array.from(new Set(arr));
  result.sort((a, b) => a - b);
  return result;
};

const mergeAndSortExtreme = (arr1, arr2) => {
  const arr = mergeAndSort(arr1, arr2);
  return [arr[0], arr[arr.length - 1]];
};

module.exports = { mergeAndSort, mergeAndSortExtreme };
