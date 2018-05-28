---
title: "OOP JavaScript"
description: "Object Oriented Programming in JS"
layout: "guide"
weight: 3
---

<article id="1">

## Object Oriented Programming (OOP)

* Easy to add features and functionality
* Performant (efficient in terms of memory)
* Easy for us and other developers to reason about (a clear structure)

* **Encapsulation**:
	* Binding together data and functions that manipulate the data

<p data-height="300" data-theme-id="31719" data-slug-hash="deNWmr" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="Simple OOP Example" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/deNWmr/">Simple OOP Example</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

* This has the benefit of being very simple but
	* Each time we create a new user we make space in our computer's memory for all our data and functions
		* But the functions are just copies
	* If you have hundreds of users, why would you just copy the same copy over and over again?
		* So inefficient :(

### Object.create

#### Example

<p data-height="300" data-theme-id="31719" data-slug-hash="devNmP" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="__proto__ JS Bond Example" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/devNmP/">__proto__ JS Bond Example</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

* Main point of this example is to show the special bond that `Object.create()` makes
	* So Object.create actually does 2 things:
		* It returns an empty object
		* It creates a reference to whatever object that you pass in under the special property `__proto__`
			* Check out the browser console in the example above and click the dropdown under the prop `__proto__` to see it in action
				* `__proto__` already exists on an empty object and contains things like `toString` and `hasOwnProperty`
				* What we do with `Object.create(ourObj)` is add our object methods that we pass in as the new first level of the `__proto__` object
					* The previous methods that exist in `__proto__` still exist but they are now nested in a second level under the key `__proto__`
			* This is actually really useful
			* Say you have a function that you want available on every user object but you don't want to duplicate it for every object
				* You create instead link the function to your object so it is store one place in memory rather than being stored once for every single user object

### new Keyword

* There are a couple things you need to understand about functions before understanding what's going on under the hood with the new Keyword
	* Functions are actually just objects
		* If you have a function stored in global memory under the label `myFunc` you can write `myFunc.firstName = 'Ryan'`
			* And if you log that out you will actually see `firstName` as a key on `myFunc`
			* The **actual functionality of the function** when you call it with parens is under the `call` property of the function definition which is located within the `__proto__` property
			* Note that this is not standard practice to use functions as an object, but good to know that in their essence they are actually an object

<p data-height="300" data-theme-id="31719" data-slug-hash="gzWpwQ" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Functions As Objects" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/gzWpwQ/">JS Functions As Objects</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>


* When we call the constructor function with new in front we automate 2 things:
	* Create a new user object: `this = Object.create(userCreator)`
		* This creates the `__proto__` property which references the prototype object methods
	* return the new user object: `return this`

<p data-height="300" data-theme-id="31719" data-slug-hash="deWWjK" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS New Keyword" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/deWWjK/">JS New Keyword</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### The Class 'Syntactic Sugar'

* It is doing the same thing under the hood as the `new` keyword

<p data-height="300" data-theme-id="31719" data-slug-hash="RyVVmd" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Class Sugar For new Keyword" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/RyVVmd/">JS Class Sugar For new Keyword</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

</article>