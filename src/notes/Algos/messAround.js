const unsortedArr = [ 5, 1, 23, 34, 1, 234, 2]

function bubbleSort(arr) {
  let swapped = false

  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] > arr[j + 1]) {
        [ arr[j + 1], arr[j] ] = [ arr[j], arr[j + 1] ];

        swapped = true
      }
    }

    if (!swapped) return arr
  }

  return arr
}

bubbleSort(unsortedArr)
console.log(unsortedArr)
