---
title: "JavaScript"
description: "When you strive to comprehend your code, you create
better work and become better at what you do. The code isn’t just
your job anymore, it’s your craft. ~Jenn Lukas"
layout: "guide"
icon: "flash"
weight: 2
---

###### {$page.description}

<script async src="https://static.codepen.io/assets/embed/ei.js"></script>

<article id="1">

> I am not content, nor should you be, at stopping once something just works, and not really knowing why. I gently challenge you to journey down that bumpy "*road less traveled*" and embrace all that JavaScript is and can do. With that knowledge, no **technique**, no **framework**, no popular **buzzword** acronym of the week, will be beyond your understanding. ~Kyle Simpson

## Principles of JS

### Thread of execution
* Definition: parsing and executing the code line after line
* The thread never executes more than one line at a time
	* Hence the name *"single threaded"
* **The thread of execution** will never enter your function declaration until you call the function

#### Execution Context Example

```javascript
const num = 3;

function multiplyBy2(inputNumber) {
	const result = inputNumber * 2
	resturn result
}

const output = multiplyBy2(4)
const newOutput = multiplyBy2(10)
```

* Execution context:
	* You have a **local** and a **global** execution context
	* when you call multiplyBy2 the thread enters the function
	* comprised of **local memory**
	* assigns result to 8
	* returns result and stored in `output` global memory
	* The local execution context then goes away and the global execution context picks up at newOutput


### Call Stack

*How do you keep track of calling functions within functions?*
* The way JS keeps track of the thread of execution in all its contexts is with the call stack
* The call stack uses the **stack data structure**
	* So the last thing that you **push** on the stack, is the first thing it gets out (**LIFO**)
* Typically you have one call stack in your environment
	* Sometimes you have multiple callstacks with things like web workers

*How does it work (using the previous JS example)?*

1. **Push** global on call stack
2. **Push** multiplyBy2 on stack
3. **Pop** multiplyBy2 off stack after you get return value
4. Goes back to global execution context because that is on the top of the stack
5. **Push** the second multiplyBy2 call to the top of stack
6. **Pop** multiplyBy2 off stack after you get return value
7. Goes back to global execution context because that is on the top of the stack

* The thread is always at the top of the call stack
* And variables are always stored in which ever part of the call stack they are in

### Example of reading code line by line

```javascript
function copyArrayAndDivideBy2(array) {
	let output = []
	for (let i =0; i < array.length; i++) {
		output.push(array[i]/2)
	}
	return output
}

const myArray = [1,2,3]
let result = copyArrayAndDivideBy2(myArray)
```

Line By Line:

1. Declaring copyArrayAndDivideBy2 function & storing it's definition in global storage under the label copyArrayAndDivideBy2
2. Store an unreassignable myArray variable under the label myArray in global memory with value of an Array literal that is flat with three number values
3. Declare result as undefined in global memory
4. Push copyArrayAndDivideBy2 function call onto call stack
5. Create a new local execution context for copyArrayAndDivideBy2
6. Establish params (In this case array param = [1,2,3]) 
7. Declare a reassignable variable output in copyArrayAndDivideBy2 and assign it to an empty Array literal
7. Declare i as 0
8. Establish logic to continue the loop
9. Do math push it on output
10. Exit loop
11. return output array
12. Assign return value to result in global memory
13. pop copyArrayAndDivideBy2 off callstack

</article>

<article id="3">

## Closure

> "Closure is the most important concept ever invented in the history of computing science" ~Kyle Simpson


### Key Questions:

1. *What is closure?*
	* A function that can reference it's outer enclosing scope EVEN when it is called OUTSIDE that scope

2. *How is closure created?*
	* Declare a function and within that function, reference a variable from it's outer scope

3. *How long does scope stay around?*
	* Until there are no references to it

4. *How do you leverage the module pattern?*
	* Use an outer enclosing function which runs once and returns a function that references its scope


### The power of closure:

* Our functions get '**memories**'
	* **once**
		* You can "onceify" your function so that it can only be run once
	* **memoize**
		* Say you have an algo that requries lots of steps like getting the 1000th prime number
		* You can save that value "memoize" in the function's backpack like
```javascript
const primeNumbers = { 1000: x }
```
		* So next time you look for > than the 1000th prime number
* The functions get live persistent memeory
* We can implement the JS module pattern

* When function is called a **live store** is created which includes:
	* local memory
	* variable environment (VE)
	* state

* When function is finished executing it **deletes local memory** automatically
	* The exception is for returned value
	* This is known as *garbage collection*

* "Closure is when a function '**remembers**' its lexical scope even when the function is executed outside that lexical scope" ~Kyle Simpson
	* It's like seeing something that has always been there you just haven't been able to see it before
	* Closure can save access to variables as many nested scopes as you want
	* When you reference a **variable within your function in a scope outside your function**, it will preserve access to that variable for as long as the function is alive
		* The practical lesson for this is that if you nest your functions uncessarily deep, you can create unintended closure
			* The auto garbage collector will not garbage collect while that function is still alive
			* Every time you create a new closure, you are taking up more memory
				* To manually garbage collect a function with closure, you can just assign the function to null
	* "Closure is a logical conclusion of lexical scope" ~Kyle Simpson



#### So why wouldn't you just use global memory?

* Problems with that:
	* Often times you want independent live stores associated with each function rather than one big global store
	* When you write code at scale you do not want to pollute global memory
		* If you are adding things to the global scope and you are working with hundreds of other engineers who try to use the same name, you will have name collisions
	* You can't use the module pattern
		* where you write code in such away that its data sticks around but is protected
			* You also should try to make your functions easy to write to and easy to get data out of

##### Line By Line example

<p data-height="300" data-theme-id="31719" data-slug-hash="PeWzMQ" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Closure Example" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/PeWzMQ/">JS Closure Example</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

* Given everything we currently know, when you call `myNewFunction` you would not expect it to be able to find the variable `counter` because that has been garbage collected when we finished calling `outer()`
	* **HUGE POINT**: However at the time of function declaration, it stores in its def the surrounding data
		* In this case the `counter` var

* When we store the function definition of `incrementCounter` in the variable `myNewFunction` it carries on its back a **"backpack"** which is in this case the **live persistent variable** `counter`
	* This is a beautiful concept because it provides a way to have **live persistent data between function calls**
	* The **backpack** is also known as:
		* **closure** (most colloquial but not very helpful)
		* **lexical scope**
			* This is what we mean when JS is statically or lexically scoped
		* **closed over variable environment (COVE)**
	* This backpack is stored behind the scenes in the function definition as `[[scope]]`
		* So how can you access this data?
			* It's only available from the call of this function
			* And only the data that is referenced within `incrementCounter` is going to be stored in the backpack
				* If there were other variables besides `counter` defined outside `incrementCounter` they would be garbage collected
 
</article>

<article id="4">

## Asychronous JS

* Asynchronous JS is the backbone of the modern web letting us build fast non-blocking applications

* In order to understand async you have to understand:
	1. Thread of execution
	2. Memory/variable environment
	3. Call stack
	4. Web Browser APIs/Node background threads
	5. Callback/Message/Task queue
	6. Event Loop

### Browser API

#### setTimeout

* `setTimeout` doesn't behave in the typical way a normal function does
	* We spin this up in the background
	* It is a built in way to create an async timer
	* It speaks to our browser API
		* So it is outside of the normal JS land that we are used to
	* If we were to create a timer ourselves, it would be sync because JS is single threaded
		* It wouldn't be able to execute anything else

<p data-height="300" data-theme-id="31719" data-slug-hash="GdrryW" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="setTimeout Async Example" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/GdrryW/">setTimeout Async Example</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

* "Me first `i`" will print out first
	* setTimeout is *almost like an api request* because it is speaking to the web browser
	* It doesn't just willy nilly push the call to `printHello` onto the call stack
		* It pushes it into the **callback queue**

#### Callback Queue

* The callback queue **will not push anything onto the call stack until the call stack is TOTALLY empty**!
	* There can't event be any executable code to run in the global context 
	* The event loop checks for this
* So even though you told your timer in the example above to take `0ms` it actually will take at least as long as it takes to get to the bottom of the call stack
* **Lightbulb**: this sheds light on how Node.js api methods are async
	* Because those methods transcend the JS language, they can provide the benefit of asynchronicity

#### Event Loop

* The event loop is a posh term that simply means it is **checking if the call stack is totally empty**
* So above it keeps checking over and over to see if `blockFor1Second` has been popped off until it gives the green light for the function in the callback queue to be pushed onto the call stack

#### Ways to NOT block our thread

* There are many things where waiting would block our thread
	* so we use Browser APIs instead

1. A timer to finish running
2. New info from a server (AJAX)
3. Indication that a portion of the page has loaded
4. User interaction (clicks, mouseovers, drags)
5. Writing/Reading to File System (Node)
6. Writing/reading db (Firebase)

* For each of these we have a web browser feature that we can spin up in the background and only push onto the call stack when the main thread including global code is done running

```javascript
function display(data) {
	console.log(data.post)
}

$.get('http://twitter.com/ryan/tweet/1', display)

console.log('Me first!')
```

* The same thing happens in the code above as in the `printHello` example
	* $.get makes an xmlHttpRequest (xhr) in Browser Api/Feature Land
	* Sets up an async request
	* Queues up the call to display once the data is ready in the callback queue
	* Event loop gives the green light
	* `display` is dequeued from the callback queue & pushed onto the call stack

</article>

<article id="5">

## The Module Pattern

* This is where you can protect private functions from being accessed from the public api
* Closure makes the module pattern feasible

* Main **benefit** is restricting access & protecting internal functions from being called
* Main **disadvantage** is if your testing methodology believes a unit test involves testing all private internals
	* If you subscribe to Kyle Simpson's persuasion this is not a problem
		* He believes a unit is not a function, it is a single indivisible piece of business logic

</article>

