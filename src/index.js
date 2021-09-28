const bin = (arr, val) => {
  let mid = Math.floor(arr.length /2);
  const maxVal = arr[arr.length -1];

  if (val > maxVal) {
    return -1;
  }

  while (mid >= 0 && mid <= arr.length) {
    if(arr[mid] === val) {
      return arr[mid];
    }

    if (arr[mid] > val) {
      return arr[mid];
    }
    
    if (arr[mid] < val) {
      mid = Math.floor((arr.length - mid) /2);
    }
  }
  return -1;
}
console.log(bin([1,2,3,4,5,6,7,8], 105))
