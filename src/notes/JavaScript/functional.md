---
title: "Functional JS"
description: "Functional Programming in JS"
author: "Ryan Garant"
---

<article id="1">

#### Note: A large part of this content has been distilled from [Kyle Simpson's online FP course] unless otherwise noted(https://frontendmasters.com/courses/functional-javascript-v2/pure-functions-and-side-effects):

## Functional Programming

> FP is not all about the function keyword, it is however all about using functions to model your programs

- The most prominent paradigm in the past 25 years is object oriented programming
- This is an alternative paradaigm

### Imperative vs Declarative

### Imperative:

- Focuses on **how** something to happen
- JS itself is an imperative language [1]
- computers are better at this
- Imperative & Declarative is a continuum not one or the other
- 1's & 0's on a punch card is the pure example of imperative code

### Declarative

- Focuses on **what** you want to happen
- Purely declarative is if you were like "computer analyze this"
- Functional programming is considered a subset of declarative programming [1]

- As soon as we add things like assembly language, we are moving slightly away from imperative code
- The languages like JS & frameworks like JS make it more declarative

## Learning Curve (where people give up)

![](images/fp-learning-curve.jpg)
_Provided by [Kyle Simpson](https://frontendmasters.com/courses/functional-javascript-v2/)_

## Provable

- Pure functional code is **more trustworthy than code backed by unit tests**
  - The reasoning for this is pure functional code is based on proven mathematical methods
  - These methods have been proven for 100s of years by mathemiticians & implemented by computer scientists for decades
  - Provable code is code that you can more easily understand & therefore **trust**
- Provable code is also more readable
  - This is because our brains don't have to think about all the details
- **Example**: _Think about a trained mountain climber_
  - He doesn't have to think about his carabiner at ever step, or how his rope mechanisms work
    - He trusts his tools and thinks about the bigger picture...getting to the top of the mountain
    - Likewise, a FP programmer trusts his tools and focuses on the bigger picture like business and overarching logic

## Abstraction

- **NOT Ecapsulation** which is hiding details away in something like a class implementation
- Comes from the root word **complex**:
  - _latin_: complect or complected
    - _word picture_: strands of a rope tightly braided together
    - the word simple is the opposite of this
  - As it relates to programming then, it is the teasing out the strands of the program from the braid and separating them with a semantic boundary
    - Not so that we don't have to think about it
    - But so that we can sit comfortably on one side of the line and think about that chunk in it's entirety without having to think about another strand
    - It therefore allows us to reason independantly about & prove pieces of our program

## Side Effects

> The goal of a FP programmer is to minimize side effects and collect side effects in a specific location

- Just moving side effects into their own buckets is extremely helpful when debugging
  - **React & Redux is an embodiment of this principle**
    - For the data transfer & transformation step, make that pure and the DOM manipulation (side effects) to a render function
  - **Concrete Example**: Think of your program like a basketball
    - The air within the basketball (the core of your program) should be pure & side effect free
    - The outer shell is where we put side effects so they are really easy to find
  - Practically, one idea is to label with a comment or other semantic boundary like a function, where you group your side Effects

* **Examples**:
  - Printing to console
  - Writing to file
  - Making a request
  - Random numbers
  - Time stamps

```js
function f() {
  y = 2 * x
}

var x = 4
```

- In this example, there is no direct input therefore it is a **side cause**
- There is no direct output therefore there is a **side effect**
- As programmers, our natural state of thinking is to use side effects
  - One reason for this is it is a lot easier to write it
  - _Why do we optimize for writing code rather than readability?_
- FP suggests that this is bad because it forces the reader of the code, to execute the entire program in their head before they can accurately understand what a particular section does
- _Can a program be observed if it is completely side-effect free?_
  - NO
  - Even the heat that the cpu generates when it runs your program is an indirect side-effect

#### Classic characteristics of functional programming

- Functions are **first class citizens**
- **Pure functions**: no side effects (_you don't change/mutate your program_)
  - It's only consequence is the return value of the function
- Immutable

#### How to do it?

- **Driver**: One person is saying psuedocode
- **Navigator**: One person is interpreting & typing psuedocode
  - The navigator never tells the driver how to turn the psuedocode into the code specifically
  - This greatly helps with technical communication

#### Generalizing Functions

Refactoring the previous example to be more DRY & General:

```js
function copyArrayAndManipulate(array, instructions) {
  let output = []
  for (let i = 0; i < array.length; i++) {
    output.push(instructions(array[i]))
  }
  return
  output
}
function multiplyBy2(input) {
  return
  input * 2
}
let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2)
```

#### First Class Objects:

- They can co-exist with and can be treated like any other js object
  - The only bonus thing of an object is that it can be executed/run

#### Higher Order Functions vs. Callbacks

- **HOCs** are simply functions that return other functions
- **Callbacks** are the function that is passed into the HOC
- They simplify your code and help keep it **DRY**

##### Line By Line example

```js
function instructionGenerator() {
  function mulitplyBy2(num) {
    return num * 2
  }

  return multiplyBy2
}

let generatedFunc = instructionGenerator()

let result = generatedFunc(3)
```

- The key line that throws seasoned devs off is `let generatedFunc = instructionGenerator()`
  - Because instruction generator doesn't actually call multiplyBy2, it returns the function definition of multiplyBy2

</article>

<article id="2">

## Purity

### Pure Functions

- Take and input and return an output
- From a FP point of view, just because you use a `function` keyword, doesn't make it a function
- Haskell is a language that only let's your write pure functions
  - though there is an escape hatch to do some side effects
- **Doesn't have access to variables outside itself**
- No matter how many times you call a pure function, if you give it the same inputs it will always return the same outputs
- Purity is not a binary characteristic
  - You cannot say with 100% confidence in a mutable system like js, that a function is pure

### How can we purify a function

**Solution 1**: encapsulate impurity in a function:

- If the outer observation of a function is that it is pure, even if the function wraps a function that is impure, it is still considered pure
  - A use case of this is if you have a library and want to contain its side effects
    - You could wrap it in a function

**Solution 2**: reset side-effects at the end of function

- if you there is a function that say sets global variables, you can reset those variables at the end of that function's life

### Unary & Binary Functions

- **Unary**: takes one argument
- **Binary**: takes two arguments
- **Nary**: takes 3 or more arguments

- Typically you want to **only use unary & binary functions**
  - The reason for this is it is easier to work with you you have less arguments
  - A common utility in a functional programming library is a function that converts a given function into a unary function
    - there are also utilities to flip or reverse args

</article>

<article id="3">

## Point-Free Style

- Points refer to unnecessary params
- Intended to reduce the verbosity of your code
- This helps us be more declarative

```js
function isOdd(v) {
  return v % 2 == 1
}

function isEven(v) {
  return !isOdd(v)
}

isEven(4)
```

- The `isEven` function unnecessarily takes an argument & maps it to the call of another function
- A common solution for this is to have a `not` or `negation` function
- The intent is not about having completely point-free code but abstracting the point mapping into provable readable utility functions

```js
function not(fn) {
  return function negated(...args) {
    return !fn(...args)
  }
}

function isOdd(v) {
  return v % 2 == 1
}

var isEven = not(isOdd)

isEven(4)
```

- Though the code above is not point-free, it limits the amount of points in our program by using a utility function that handles the argument mapping for us

- Pros for point-free Style [1]
  - It makes programs simpler and more concise
    - This isn’t always a good thing, but it can be
  - It makes algorithms clearer
    - By focusing only on the functions being combined, we get a better sense of what’s going on without the data arguments getting in the way
  - It forces us to think more about the **transformation being done** than about the data being transformed
  - It helps us think about our functions as generic building blocks that can work with different kinds of data, rather than thinking about them as operations on a particular kind of data
    - By giving the data a name, we’re anchoring our thoughts about where we can use our functions. By leaving the data argument out, it allows us to be more creative

</article>

<article id="4">

## Curry

- Is the **pattern** of returning a function if all the expected args are not provided
- This also enables partial application or partially building functions

</article>

<article id="5">

## Argument Order

> Configuration first data last

```js
const publishedInYear = curry((year, book) => book.year === year)

const titlesForYear = (books, year) => {
  const selected = filter(publishedInYear(year), books)

  return map(book => book.title, selected)
}
```

- `year` param comes first because it is used to configure the function
- `book` param comes second because it is the data operated on

- If you have a function that you don't control or need it in a certain order for another reason, you can use utility function like `flip`

```js
const publishedInYear = curry((book, year) => book.year === year)

const titlesForYear = (books, year) => {
  const selected = filter(flip(publishedInYear)(year), books)

  return map(book => book.title, selected)
}
```

- Or you can use placeholders `__`

```js
const threeArgs = curry((a, b, c) => {
  /* ... */
})

const middleArgumentLater = threeArgs('value for a', __, 'value for c')
```

OR

```js
const threeArgs = curry((a, b, c) => {
  /* ... */
})

const middleArgumentOnly = threeArgs(__, 'value for b', __)
```

</article>

[1]: http://randycoulman.com/blog/2016/06/14/thinking-in-ramda-declarative-programming/
[2]: http://randycoulman.com/blog/2016/06/21/thinking-in-ramda-pointfree-style/
