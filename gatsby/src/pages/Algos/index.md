---
title: "Algos"
description: "Fundamentals: algorithms, computing, 1's & 0's"
author: Jay Gatsby
icon: "hammer"
weight: 1
---

#{$page.description}

<article id="1">

## Big O Notation

[![bigocheatsheet.png](https://s20.postimg.org/arpf7xsl9/bigocheatsheet.png)](https://postimg.org/image/x3n81brp5/)

[![array_Big_O.png](https://s20.postimg.org/w2mzc7app/array_Big_O.png)](https://postimg.org/image/hjfuashkp/)

* [Big O Cheatsheet](http://bigocheatsheet.com/)

#### TODO: [Read this](https://web.njit.edu/~wl256/download/cs610/Introduction-to-algorithm-3rdEdition.pdf)

> Big O sucks away the unimportant stuff so you can focus on what matters

### O(1)

* When you have no loops and are just doing something and exiting/returning

### O(n)

* When you are doing the same amount of work that is going into a function

### O(n^2)

* Trick here is to look for double `for` or `while` loops

### O(log n)

* Where code employs **divide and conquer** strategies that use _recursion_ like merge and quick sorts

</article>

<article id="2">

## Iteration

### Bubble Sort

`bigO = n ^ 2`

```javascript
function bubbleSort(nums) {  
  do {
    var swapped = false

    for (let i = 0; i < nums.length; i++) {
      if (nums[i] > nums[i + 1] {
        const temp = nums[i]
        nums[i] = nums[i + 1]
        nums[i + 1] = temp
        swapped = true
      }
    }
  } while(swapped)
}
```

* You probably will never use a do loop or bubble sort in production code

### Insertion Sort

`bigO = n ^ 2`

* Has more favorable coefficients than bubble sort
* Better for things that are **near sorted** \* merge sort and quick sort are pretty much faster in all other cases

```javascript
function insertionSort(nums) {
	for (let i = 1; i < nums.length; i++) {
		for (let j = 0; j < i; j++) {
			if (nums[i] < nums[j]) {
				const spliced = nums.splice(i, 1)
				nums.splice(j, 0, spliced[0])
			}
		}
	}
}
```

</article>

<article id="3">

## Recursion

> Your **base case** is the most important piece. If you don't write this first you will stack overflow

### Recipe for recursion:

1. Identify base case(s)
2. Identify recursive case(s)
3. return where appropriate
4. write procecdures for each case that bring you closer to the base case(s)

```javascript
function basicRecursion(max, current) {
	if (current > max) return
	console.log(current)
	basicRecursion(max, current + 1)
}

basicRecursion(1, 10)
```

### Fibonacci Sequences

`1, 1, 2, 3, 5, 10`

* Fibonacci sequences lends itself well to recursion because they are themselves defined **recursively**
  * You need to know the **first two preceeding** terms to get the nth number of the sequence

```javascript
function fibonacci(n) {
	if (n <= 2) return 1

	return fibonacci(n - 1) + fibonacci(n - 2)
}
```

* Notice how we are returning the recursive function
  _ It is a common mistake to not return the recursive function
  _ What will happen is it will return `undefined` instead of preserving the value you are seeking

### Factorials

`!4 = 4 * 3 * 2 * 1`

* Factorials are defined recursively by **multiplying itself** by the previous number until you get to 1

```javascript
function factorial(n) {
	if (n < 2) return 1

	return n * factorial(n - 1)
}
```

### Merge Sort

`bigO = O(n log n)`

* Recursive algo that is very **stable**
  * However when sorting numbers stability doesn't matter because you don't care what order two 4's for instance are given to you

</article>
