---
title: "Functional JS"
description: "Functional Programming in JS"
author: "Ryan Garant"
---

<article id="1">

#### Note: A large part of this content has been distilled from [Kyle Simpson's online FP course](https://frontendmasters.com/courses/functional-javascript-v2/pure-functions-and-side-effects):

## Functional Programming

> FP is not all about the function keyword, it is however all about using functions to model your programs

- The most prominent paradigm in the past 25 years is object oriented programming
- This is an alternative paradaigm

### Imperative vs Declarative

### Imperative:

- Focuses on **how** something to happen
- computers are better at this
- Imperative & Declarative is a continuum not one or the other
- 1's & 0's on a punch card is the pure example of imperative code

### Declarative

- Focuses on **what** you want to happen
- Purely declarative is if you were like "computer analyze this"

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

## Pure Functions

- Take and input and return an output
- From a FP point of view, just because you use a `function` keyword, doesn't make it a function
- Haskell is a language that only let's your write pure functions
  - though there is an escape hatch to do some side effects

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
