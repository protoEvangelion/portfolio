---
title: "JavaScript"
description: "When you strive to comprehend your code, you create
better work and become better at what you do. The code isn’t just
your job anymore, it’s your craft. ~Jenn Lukas"
author: "Ryan Garant"
---

<article id="1">

> I am not content, nor should you be, at stopping once something just works, and not really knowing why. I gently challenge you to journey down that bumpy "_road less traveled_" and embrace all that JavaScript is and can do. With that knowledge, no **technique**, no **framework**, no popular **buzzword** acronym of the week, will be beyond your understanding. ~Kyle Simpson

## Core Principles of JS

### Thread of execution

- Definition: parsing and executing the code line after line
- The thread never executes more than one line at a time
  - Hence the name \*"single threaded"
- **The thread of execution** will never enter your function declaration until you call the function

#### Execution Context Example

```js
const num = 3;

function multiplyBy2(inputNumber) {
  const result = inputNumber * 2
  resturn result
}

const output = multiplyBy2(4)
const newOutput = multiplyBy2(10)
```

- Execution context:
  - You have a **local** and a **global** execution context
  - when you call multiplyBy2 the thread enters the function
  - comprised of **local memory**
  - assigns result to 8
  - returns result and stored in `output` global memory
  - The local execution context then goes away and the global execution context picks up at newOutput

### Call Stack

_How do you keep track of calling functions within functions?_

- The way JS keeps track of the thread of execution in all its contexts is with the call stack
- The call stack uses the **stack data structure**
  - So the last thing that you **push** on the stack, is the first thing it gets out (**LIFO**)
- Typically you have one call stack in your environment
  - Sometimes you have multiple callstacks with things like web workers

_How does it work (using the previous JS example)?_

1.  **Push** global on call stack
2.  **Push** multiplyBy2 on stack
3.  **Pop** multiplyBy2 off stack after you get return value
4.  Goes back to global execution context because that is on the top of the stack
5.  **Push** the second multiplyBy2 call to the top of stack
6.  **Pop** multiplyBy2 off stack after you get return value
7.  Goes back to global execution context because that is on the top of the stack

- The thread is always at the top of the call stack
- And variables are always stored in which ever part of the call stack they are in

### Example of reading code line by line

```js
function copyArrayAndDivideBy2(array) {
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(array[i] / 2)
  }
  return output
}

const myArray = [1, 2, 3]
let result = copyArrayAndDivideBy2(myArray)
```

Line By Line:

1.  Declaring copyArrayAndDivideBy2 function & storing it's definition in global storage under the label copyArrayAndDivideBy2
2.  Store an unreassignable myArray variable under the label myArray in global memory with value of an Array literal that is flat with three number values
3.  Declare result as undefined in global memory
4.  Push copyArrayAndDivideBy2 function call onto call stack
5.  Create a new local execution context for copyArrayAndDivideBy2
6.  Establish params (In this case array param = [1,2,3])
7.  Declare a reassignable variable output in copyArrayAndDivideBy2 and assign it to an empty Array literal
8.  Declare i as 0
9.  Establish logic to continue the loop
10. Do math push it on output
11. Exit loop
12. return output array
13. Assign return value to result in global memory
14. pop copyArrayAndDivideBy2 off callstack

</article>

<article id="3">

## Closure

> "Closure is the most important concept ever invented in the history of computing science" ~Kyle Simpson

### Key Questions:

1.  _What is closure?_

- A function that can reference it's outer enclosing scope EVEN when it is called OUTSIDE that scope

2.  _How is closure created?_

- Declare a function and within that function, reference a variable from it's outer scope

3.  _How long does scope stay around?_

- Until there are no references to it

4.  _How do you leverage the module pattern?_

- Use an outer enclosing function which runs once and returns a function that references its scope

### The power of closure:

- Our functions get '**memories**'
  - **once**
    - You can "onceify" your function so that it can only be run once
  - **memoize**
    - Say you have an algo that requries lots of steps like getting the 1000th prime number
    - You can save that value "memoize" in the function's backpack like

```js
const primeNumbers = { 1000: x }
```

    * So next time you look for > than the 1000th prime number

- The functions get live persistent memeory
- We can implement the JS module pattern

- When function is called a **live store** is created which includes:

  - local memory
  - variable environment (VE)
  - state

- When function is finished executing it **deletes local memory** automatically

  - The exception is for returned value
  - This is known as _garbage collection_

- "Closure is when a function '**remembers**' its lexical scope even when the function is executed outside that lexical scope" ~Kyle Simpson
  - It's like seeing something that has always been there you just haven't been able to see it before
  - Closure can save access to variables as many nested scopes as you want
  - When you reference a **variable within your function in a scope outside your function**, it will preserve access to that variable for as long as the function is alive
    - The practical lesson for this is that if you nest your functions uncessarily deep, you can create unintended closure
      - The auto garbage collector will not garbage collect while that function is still alive
      - Every time you create a new closure, you are taking up more memory
        - To manually garbage collect a function with closure, you can just assign the function to null
  - "Closure is a logical conclusion of lexical scope" ~Kyle Simpson

#### So why wouldn't you just use global memory?

- Problems with that:
  - Often times you want independent live stores associated with each function rather than one big global store
  - When you write code at scale you do not want to pollute global memory
    - If you are adding things to the global scope and you are working with hundreds of other engineers who try to use the same name, you will have name collisions
  - You can't use the module pattern
    - where you write code in such away that its data sticks around but is protected
      - You also should try to make your functions easy to write to and easy to get data out of

##### Line By Line example

<p data-height="300" data-theme-id="31719" data-slug-hash="PeWzMQ" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Closure Example" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/PeWzMQ/">JS Closure Example</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

- Given everything we currently know, when you call `myNewFunction` you would not expect it to be able to find the variable `counter` because that has been garbage collected when we finished calling `outer()`

  - **HUGE POINT**: However at the time of function declaration, it stores in its def the surrounding data
    - In this case the `counter` var

- When we store the function definition of `incrementCounter` in the variable `myNewFunction` it carries on its back a **"backpack"** which is in this case the **live persistent variable** `counter`
  - This is a beautiful concept because it provides a way to have **live persistent data between function calls**
  - The **backpack** is also known as:
    - **closure** (most colloquial but not very helpful)
    - **lexical scope**
      - This is what we mean when JS is statically or lexically scoped
    - **closed over variable environment (COVE)**
  - This backpack is stored behind the scenes in the function definition as `[[scope]]`
    - So how can you access this data?
      - It's only available from the call of this function
      - And only the data that is referenced within `incrementCounter` is going to be stored in the backpack
        - If there were other variables besides `counter` defined outside `incrementCounter` they would be garbage collected

</article>

<article id="4">

## The Module Pattern

- This is where you can protect private functions from being accessed from the public api
- Closure makes the module pattern feasible

- Main **benefit** is restricting access & protecting internal functions from being called
  - Also helps with abstracting code so that it is more readable
- Main **disadvantage** is if your testing methodology believes a unit test involves testing all private internals
  - If you subscribe to Kyle Simpson's persuasion this is not a problem
    - He believes a unit is not a function, it is a single indivisible piece of business logic

```js
var App = (function setupApp(){
  var publicAPI = {
    init: initUI,
    addProject: addProject,
    addWorkToProject: addWorkToProject
  }

  return publicAPI

  function initUI() { ... }
  function addProject() { ... }
  function addWorkToProject() { ... }
})()

App.init()

App.addProject('client features')
```

</article>

<article id="5">

## Types

- JS is not an untyped language!
  - Rather than its types referring to the variable like statically typed languages, its types refer to the value itself

* undefined
* string
* number
* boolean
* object
* symbol
* null
* function (not a 1st class primitive type - it's a callable object)

<p data-height="300" data-theme-id="31719" data-slug-hash="LBRyXM" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Types" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/LBRyXM/">JS Types</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

- Note that `typeof` always returns a string value
  - Don't get `'undefined'` mixed up with `undefined`

### Null exception

`typeof null` returns 'object' which according to Brandon Eich is actually a bug from when JS was created

- The reason it hasn't been fixed is because of peoples' fears of breaking the web

### undefined

- This one is a bit confusing because the JS spec conflates the two ideas of undefined and undeclared
- `undefined` is actually a value
  - However if you have `foo` without assigning it to anything, at that point it is undeclared
  - So at the moment it has no value

### NaN

- Since JS didn't have a try/catch until 4 years later they needed a value to show that a number operation failed
- `NaN` with anything else will produce `NaN`
- `typeof NaN` produces "number"
- `NaN` is the only value in computing science that doesn not have the identity **property** (is never equal to itself)
  - So JS includes a builtin called `isNaN`
    - `isNaN('foo')` // produces true
      - if you pass something that is not a number to NaN it will try to convert it to a number first
      - then it checks if it is a number
  - However this function has a bug which has never been fixed
  - `Number.isNaN()` is now included in the language which does not have this flaw

> If you would like to compare `-0` or `NaN` use `Object.is()`

### Natives

- `new Object()` as a constructor or `Object()` to coerce types

- **Takeaways**
  - It's almost always never a good idea to use natives as a constructor
    - ie `new Object()`
    - Dates are an exception because there is no Date literal
    - never do `new Array(10)` with only one value because it will just create an empty array with a length of the first number passed in, in this case 10
      - no perf benefits because it does not actually preallocate memory
  - Using natives to **coerce types** can be a good idea though
    - ie `Object('hi')`

</article>

<article id="6">

## Coercion

> All of JS woes related to coercion can be traced back to the decision to coerce an empty string to 0

### Falsy & Truthy

- Not language of the spec but a helpful way to think of it
- These rules only apply if `ToBoolean` is legitimately invoked

- **Falsy**
  - If coerced to `ToBoolean` it returns false
  - **Exhaustive list of falsy values**:
    - 0, +0, -0
    - null
    - NaN
    - false
    - undefined
- **Truthy**
  - Everything not on the falsy list
  - ie
    - "foo"
    - 23
    - true
    - function(){}

### Explicit Coercion

> Kyle Simpson argues to favor the more explicit way to coerce even if it leads to more characters

- He goes on the argue that "code that you cannot understand is code that you cannot trust"

#### Coercion Grid

- http://getify.github.io/coercions-grid/
- This tool is designed to help visualize JS's value coercion corner cases, specifically the ones that are WTFs, and to see what effect fixing some or all of them can have on the landscape of values

#### From String to Number

- As a note, `parseInt` is a distinctly different mechanism than coercing a string to a number

  - Don't use `parseInt` for coercion or visa versa
  - `parseInt(123px)` will stop at p and return 123
  - where as coercion `Number('123px')` is an all or nothing operation that will return NaN
    - `+'123px'` will return the same thing

- Example of explicit vs implicit
  - using `123.toString()` versus `String(123)`
    - the latter is more explicit

#### From value to boolean

- `Boolean('234')` or `!!'123'`

  - Although `Boolean` is used less, it is more explicit and should be favored

- Explicitly implicit
  - `'123' ? true : false`
  - This is the Java way to coercing a value to a Boolean
  - It is implicity because when you do `'123' ?` JS will attempt to coerce it at that point
    - therefore there is no need to use ternary in this case though it has it's place in Java

### Implicit Coercion

> Using a declarative coding style is an exaltation of Implicitness

- Happens as a side effect of some other operation
- Just because you are familiar with something doesn't mean it is explicit
  - ie
    - `456 + "" // "456"`
    - This is a very commen way to coerce but it is not explicit it is implicit

#### Boolean

- If you do not give an if operator a boolean, it will implicitly coerce it
- Note that `==` does a number coercion not a boolean coercion

### Double Equals

> Most important take away is that the double equals algo prefers to compare numbers

- When comparing using a `==` avoid using it if:
  - either value is `true` or `false`
  - either value is `[]`, `""`, `0`

### Triple Equals

> Main difference between `==` & `===` is the former allows coercion while the latter does not

- So the question to ask yourself is "Would coercion be helpful in this case"?
  - If so use `==`
    - But beware of the above rules
  - If not use `===`
- According to the spec, if the types are identical, the `==` uses the exact same algo as `===`

### Boxing

- Boxing occurs where you have a primitive like `var foo = 'hi'` and then do `console.log(foo.length)`

  - Boxing will convert the primitive into its native object counterpart so you can acces the length property and other methods
    - This is a good thing so you don't have to cast the primitive yourself to its object counter part

- Unboxing will implicitly happen in a scenario like this:

```js
var foo = new String('yo ')
var baz = foo + 'hi'
```

</article>
