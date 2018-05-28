---
title: "Asynchronous JS"
description: "Deep dive into how js deals with async tasks"
layout: "guide"
weight: 5
---

<article id="1">

## Intro

> Async is the backbone of modern web dev in JS

* Since JS is sync we can't move onto the next line until the current line is finished executing
	* So then what happens when we call a function that takes 20 seconds to run?
		* Your program will freeze
		* The tension is sometimes you want to just call the function and move on if you don't need the data
			* But sometimes you want to wait for the data to return before doing anything else

* Browser APIs (not JS itself) provide us with an async architecture

* In order to understand async you have to understand:
	1. Thread of execution
	2. Memory/variable environment
	3. Call stack
	4. Web Browser APIs/Node background threads
	5. Callback/Message/Task queue
	6. Event Loop

</article>


<article id="2">

## Callback Queue

* The callback queue **will not push anything onto the call stack until the call stack is TOTALLY empty**!
	* There can't event be any executable code to run in the global context 
	* The event loop checks for this
* So even though you told your timer in the example above to take `0ms` it actually will take at least as long as it takes to get to the bottom of the call stack
* **Lightbulb**: this sheds light on how Node.js api methods are async
	* Because those methods transcend the JS language, they can provide the benefit of asynchronicity

</article>

<article id="3">

## Event Loop

* The event loop is a posh term that simply means it is **checking if the call stack is totally empty**
* So above it keeps checking over and over to see if `blockFor1Second` has been popped off until it gives the green light for the function in the callback queue to be pushed onto the call stack

</article>

<article id="4">

## Browser APIs

### setTimeout

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

### Ways to NOT block our thread

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

### Goals

1. Be able to do tasks that take a long time to complete like getting data from the server
2. Continue running our JS line by line without one long task blocking single thread
3. When slow tasks resolves, we should run functionality knowing that the task is done and data is ready

Browser Features/APIs:
* Storage
* XHR ability
* Console
* DOM
* Window
</article>


<article id="5">

## Promises

* Promises are a readability enhancer
* They are special objects built into JS that get returned immediately when we make a call to a web browser API/feature (like fetch)
* They act as a placeholder for data we hope to get back from web browser land's feature background work
* They will auto trigger functionality once the Promise resolves

```js
function display(data) {
  console.log(data)
}

const futureData = fetch('twitter.com/ryan/tweets/1')

futureData.then(display)

console.log('Me first!')
```

* Example above
	* When you make a `fetch` call, you:
		1. Kick off a `Promise` in JS land
		2. Call `xmlHttpRequest` in Web Browser land
	* The `Promise` stores an initial object in memory:
		* `futureData: $#123; value: undefined,  onFulfillment: [] &#125;`
	* Then `futureData.then(display)` call does this
		* `futureData: $#123; value: undefined,  onFulfillment: [ DisplayFunctionDefinition ] &#125;`
	* Then we execute `console.log('Me first!')`
	* In `x` ms Twitter servers return a tweet: `'hi'`
	* Now that the data has come back, we assign that returned value to `futureData`
		* `futureData: $#123; value: 'hi',  onFulfillment: [ DisplayFunctionDefinition ] &#125;`
	* Then we trigger running the `display` function with parameter `'hi'`
	* Then `console.log('hi')`
* This example achieves the 3 goals we listed earlier

```js
function display(data) {
  console.log(data)
}

function printHello() {
  console.log('Hello')
}

function blockFor300ms() {
	// block for 300ms
}

setTimeout(printHello, 0)

const futureData = fetch('twitter.com/ryan/tweets/1')

futureData.then(display)

// Which will run first?

console.log('Me first!')
```

* Example above
	* Store the display function definition in global memory under the label `display`
	* Store printHello in global memory
	* Store blockFor300ms in global memory
	* Call browser api `setTimeout` with argument of the function definition `printHello`
	* Once the timer is finished after apprx 0ms it enqueues `printHello` to the callback queue
		* Since `global()` is still on the call stack, the event loop will not tell the callback queue to push `printHello`
	* Store `futureData` in global memory whose value is `&#123; value: undefined, onFulfillment: [] &#125;`
	* Set up XHR call in browser land
		* Send request to Twitter servers
	* Execute `futureData.then(display)` which stores this function definition on `futureData` as `&#123; value: undefined, onFulfillment: [display] &#125;`
	* Execute `blockFor300ms`
	* While we are inside `blockFor300ms` the fetch request resolves an returns the value `'hi'` and stores it on `futureData` as `&#123; value: 'h&#125; [display] &#125;`
	* `blockFor300ms` finishes running
	* Execute `console.log('Me first!')`
	* QUESTION: Will `printHello` from `setTimeout` or `display` from `fetch` run first?
		* There is a second queue called the **microtask queue** (known as **Job Queue** in the JS spec) will determine this answer
			* `printHello` will be added to the callback queue
			* `display` will be added to the microtask queue since its value actually gets updated in the JS global object `futureData`
				* The Browser prioritizes the microtask queue over the callback queue
				* Therefore `display` will be called first
	* The microtask queue will dequeue `display` and push it to the call stack
	* Execute `console.log('hi')`
	* Pop `display` from the call stack
	* The callback queue will dequeue `printHello` and push it to the call stack
	* Pop `printHello` from the call stack
	* Execute `console.log('hello')`
* Note that we didn't handle the Promise `status` property on the `futureData` object
</article>


<article id="6">

## Iterators

* We regularly have lists or collections or data where we want to go through each item and do something to each element
* The classic way to do this is with for loops

```js
const numbers = [4, 5, 6]

for (let i = 0; i < numbers.length; i++) {
	console.log(numbers[i])
}
```

* The problem with this is that we are spending so much time on how to iterate that it takes more time to just focus on the code
* There are better ways to do this in js

Example:

* WE want to create a function that holds our array the position we are currently at in our stream of elements and can return the next element
	* The problem that we have to solve is that functions do not remember their previous invocation (unless you do something special which is the solution)

```js
function createFlow(array) {
	let i = 0

	function inner() {
		const element = array[i]
		i++
		return element
	}

	return inner
}

const returnNextElement = createFlow([4, 5, 6])

returnNextElement()
returnNextElement()
returnNextElement()
```

</article>

<article id="7">

## Generators

* Very similar to closure:
	* We have a persistent backpack of data
	* But we also track the position of execution after each `yield` statement
* Generators are not a new concept in the world of programming
	* They are included in languages like Python


### Ground up generator function

* https://codepen.io/pen?editors=0012

### Built in Generator functions

```js
function *createFlow() {
  yield 4
  yield 5
  yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next()
const element2 = returnNextElement.next()
```

* Example above
	* This example does almost exactly what we did manually in the previous example
		* It returns an object with next function
	* the call to `createFlow` does enter createFlow's execution context, it actually returns an object: `&#123; next: ƒ def &#125;`
	* the call to `returnNextElement.next()` will then enter `createFlow`'s execution context and returns 4
	* then next call `returnNextElement.next()` returns 5
* This allows us to dynamically set what data flows to us each time we turn on the "tap"

```js
function *createFlow() {
	const num = 10
	const newNum = yield num
	yield 5 + newNum
	yield 6
}

const returnNextElement = createFlow()
const element1 = returnNextElement.next() // 10
const element2 = returnNextElement.next(2) // 7

```

* Example above:
	* The first `returnNextElement.next()` hits `yield num` and returns `10` and pauses before it even gets assigned to `newNum`
	* The second call to `returnNextElement.next(2)` whatever we pass in is going to be the evaluated result of `yield 10`
		* Which `newNum` becomes 2
		* So the first yield statement becomes 2
	* We hit `yield 5 + 2` and it pauses and returns 7
* The practical ramification is that this allows us to insert data back into our execution context dynamically
* This is a paradigm shift on how we design our programs
* The state of the generator is stored under the property `[[generator]]` property which includes:
	* our backpack of persistent data
		* `&#123; value: 10, done: false &#125;`
	* the current location/line in the thread of execution

```js
function doWhenDataReceived(value) {
	returnNextElement.next(value)
}

function* createFlow(){
	const data = yield fetch('twitter.com/tweets/ryan/1')
	console.log(data)
}

const returnNextElement = createFlow()
const futureData = returnNextElement.next()

futureData.then(doWhenDataReceived)
```

* Example above
	* Store doWhenDataReceived def in global mem
	* Store createFlow def in global mem
	* execute `createFlow` which does not enter its execution context yet
	* Next line `returnNextElement.next()` will enter the generator function's execution context and hit the yield statement
		* It's important to note that it does not assign whatever the return of `yield` to `data` until the next iteration
		* `fetch` will return a promise `&#123; value: unfulfilled, onfulfillment: [] &#125;`
		* `fetch` will also kick off an XHR
		* So `futureData` = `&#123; value: unfulfilled, onfulfillment: [] &#125;`
	* `futureData.then(doWhenDataReceived)` will set add the `doWhenDataReceived` to `unfulfillment` array
		* When the XHR data resolves, the response will get passed to `doWhenDataRecieved`
		* Which will then get passed to the iterator with `returnNextElement.next(value)`
		* which will then console.log(data)
* This is **async await** built from scratch!!!!!!

</article>

<article id="8">

## Async Await

* This pattern will do what we did above but just more elegantly and tersely

```js
async function createFlow() {
	console.log('Me first')
	const data = await fetch('twitter.com/will/tweets/1')
	console.log(data)
}

const futureData = createFlow()

console.log('Me second')
```

* Example above
	* Store `createFlow` func def in global mem
	* Store `futureData` in global mem with unfulfilled value
	* Push createFlow onto the call stack
	* Create new execution context for createFlow
	* Because it is an `async` function we enter directly into it's execution context
		* We don't have to trigger it like we did with generator functions `.next()` method
	* `console.log('me first')`
	* create a variable data in local mem with unfulfilled value
	* `fetch` will return a Promise object: `&#123; value: undefined, unfulfillment: [] &#125;`
		* `await` says what ever gets resolved here throw it as my output which WON'T be stored in `data` but will be stored in `futureData`
		* So currently `futureData` = `&#123; value: undefined, unfulfillment: [] &#125;`
	* `fetch` will also kick off XHR browser feature/api
		* XHR gets a url, path, type
			* Then XHR sends a http message to Twitter's servers
	* `Console.log('me second')`
	* Twitter responds with string `'hi'`
	* XHR then adds `'hi'` to `futureData` so now it looks like `&#123; value: 'hi', unfulfillment: [] &#125;`
* This way we auto trigger the resumption of createFlow instead of using `.then`

</article>