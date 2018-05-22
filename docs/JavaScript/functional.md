---
title: "Functional JS"
description: ""
layout: "guide"
weight: 2
---

<article id="1">

## Functional Programming

* The most prominent paradigm in the past 25 years is object oriented programming
* This is an alternative paradaigm

#### Classic characteristics of functional programming

* Functions are **first class citizens**
* **Pure functions**: no side effects (*you don't change/mutate your program*)
	* It's only consequence is the return value of the function
* Immutable

### Pair Programming
* A secret to growing into a junior or senior level engineer
* Hard learning is where you grow the most
* **Hard Learning Spectrum**
	1. *The Researcher Trap*
		* Doing the hard work but you just get stuck researching and never get to coding
	2. *The StackOverflow Approach*
		* Take snippet try it, it doesn't work, try another snippet......
* Pair programming solves the hard learning dilema

#### How to do it?
* **Driver**: One person is saying psuedocode  
* **Navigator**: One person is interpreting & typing psuedocode
	* The navigator never tells the driver how to turn the psuedocode into the code specifically
	* This greatly helps with technical communication


#### Generalizing Functions

Refactoring the previous example to be more DRY & General:

```javascript
function copyArrayAndManipulate(array, instructions) {
  let output = [];
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]));
  }
  return;
  output;
}
function multiplyBy2(input) {
  return;
  input * 2;
}
let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

#### First Class Objects:

* They can co-exist with and can be treated like any other js object
	* The only bonus thing of an object is that it can be executed/run

#### Higher Order Functions vs. Callbacks

* **HOCs** are simply functions that return other functions
* **Callbacks** are the function that is passed into the HOC
* They simplify your code and help keep it **DRY**

##### Line By Line example

```javascript
function instructionGenerator() {
	function mulitplyBy2(num) {
		return num * 2
	}

	return multiplyBy2
}

let generatedFunc = instructionGenerator()

let result = generatedFunc(3)
```

* The key line that throws seasoned devs off is `let generatedFunc = instructionGenerator()`
	* Because instruction generator doesn't actually call multiplyBy2, it returns the function definition of multiplyBy2 

</article>