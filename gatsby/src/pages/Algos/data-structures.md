---
title: "Data Structures"
description: "Computer science data structure interfaces"
author: Jay Gatsby
weight: 2
---



<article id="1">

## Data Structures - Interfaces:

> Interfaces deal with the outside of the black box--the buttons on it

### Sets

> Good use case is for adding users

* A set is like an amorphous cloud that does: 1. Adds 2. Removes 3. Contains

```javascript
set
	.add(5)
	.add(7)
	.add(7)
```

* Only 5 and 7 will be added once

#### Features

    * No duplicates
	* No guarantee of order
	* ES6 has native sets along with weakSets

### Maps

#### Features

* Similar to JS objects (key value sets)
* they don't have prototypes, inheritance or methods
* No concept of order
* No dupe keys but you can have dupe values
* ES6 has native maps along with weakMaps

### Stacks

> Programming itself is a stack--think recursion

![stack](https://btholt.github.io/four-semesters-of-cs/img/stack.png)

* Most programming languages are based on a stack
* LIFO: Arrays have a stack interface but they are not a pure stack _ Because with a pure stack you push on top and pop
	from top _ You can't get to anything beneath the top node

### Queue

![Queue](https://btholt.github.io/four-semesters-of-cs/img/queue.png)

* **FIFO**
* All stacks need to have the methods enqueue (add/push) and dequeue (remove/pop)
* There are priority queues like for streaming video \* Items that have a higher priority get queued or dequeued first

</article>

<article id="2">

## Data Structures - Implementations:

##### Implementations deal with that is happening under the hood--what is going on in the blackbox

### Implementing Arrays

#### Array Lists

##### Primary lesson is to learn to make decisions based on the problem you are getting at

* BIGO:
	* Gets: O(1)
		* You have to loop through the list until you find the right node
	* Adds / Deletes: O(n)

* **Analytical Q's to ask yourself:**
	* *Will this problem require a lot of gets?*
	* *Will it require a lot of deletes?*
		* For Array lists if you want to do **a lot of gets **this is a great solution
		* But not so much for the case where you want to do **a lot of deletes**

![Array List](https://btholt.github.io/four-semesters-of-cs/img/array.png)

* We are going to fake these in JS but really we are borrowing from Java
	* These concepts are really important in non garbage collected languages like Java (or Jakarta ;)
* One annoying thing in ArrayLists is you have to collapse the array if you deleted an item
* [a,b,c,d,e,f,g]
	* -> delete index 3
	* -> array is [a,b,c,(blank),e,f,g]
	* -> shift elements 4,5,6 back one index
	* -> array is [a,b,c,e,f,g]
	* -> decrement length

* Tradeoff: This optimizes **gets** and deoptimizes **deletes** and **insertIntos**      

Exercise:

<p data-height="300" data-theme-id="31719" data-slug-hash="wmYoJG" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="Visualized Data Structures: Array List Exercise" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/wmYoJG/">Visualized Data Structures: Array List Exercise</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

* BIGO:
	* Gets: 0(n)
		* You have to loop through the list until you find the right node
	* Adds / Deletes: 0(1)

### Stacks

![stack](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg)

* **LIFO**: The **Last** item added **Into** the stack will be the **First** one taken **Out** of the stack \* The idea of
	the "call stack" goes along with this concept

##### Constructor Function

* **Storage**: using a string instead of an array so we can feel what it is like to build in that functionality ;)

##### Methods

```javascript
push(value) // adds value to the front & returns size of stack
pop() //removes value from front, returns value
size() //returns size of stack as an integer
```

<p data-height="300" data-theme-id="31719" data-slug-hash="vWLpYe" data-default-tab="js" data-user="RyanGarant" data-embed-version="2" data-pen-title="Stack" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/vWLpYe/">Stack</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

```javascript
const Stack = function() {
	this.storage = ''
}

Stack.prototype.push = function(val) {
	this.storage = `${this.storage},${val}`
}

Stack.prototype.pop = function() {
	const lastValIndex = this.storage.lastIndexOf(',')
	this.storage = this.storage.substring(0, lastValIndex)
}

Stack.prototype.size = function() {
	console.log((this.storage.match(/,/g) || []).length)
}

const myWeeklyMenu = new Stack()

myWeeklyMenu.push('redBeans')
myWeeklyMenu.push('blueBeans')
myWeeklyMenu.push('yellowBeans')

myWeeklyMenu.pop()

myWeeklyMenu.size()

console.log(myWeeklyMenu.storage)
```

## Queues

![](images/queues.png)

<p data-height="300" data-theme-id="31719" data-slug-hash="wPEyRg" data-default-tab="js" data-user="RyanGarant" data-embed-version="2" data-pen-title="Queue Data Structure" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/wPEyRg/">Queue Data Structure</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>
</article>
