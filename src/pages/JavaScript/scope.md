---
title: "Scope"
description: "Super important concept about what level declared variables can be accessed"
author: Jay Gatsby
weight: 2
---



<article id="1">

## What Is Scope?

> Where to look for things

* JS is at a minimum a "*2-pass*" system that involves **compilation** and **execution**
* It's not necessary to be super familiar with compiler theory
  * However there are a few things we need to understand
    * What we care about is:
      * **how variable buckets are created** and **how we get different color marbles in the buckets**
      * Formal declarations

* Example to illustrate how the JS compiler works

```javascript
var foo = 'bar'

function bar() {
  var foo = 'baz'
}

function baz(foo) {
  foo = 'bam'
  bam = 'yay'
}
```

**1st Pass: Compiler**

* The compiler knows that line one that `foo` is on the left hand side of the equals and is therefore the **target of an assignment**
  * This is known as **LHS** (Left Hand Side)
* It knows that `'bar'` is on the right hand side of the equals and is therefore the **source of an assignment**
  * This is known as **RHS** (Right Hand Side)
* The second declaration of the variable `foo` is called shadowing
  * If you console logged in `bar` before the declaration `foo` it would print undefined
* The parameter `foo` in declaration `baz` is a formal declaration
* We don't have a variable `foo` in the scope of `baz` so we store it in the "green" `baz` bucket
* `bam` is not a formal declaration so we can't assume anything about it

**2nd Pass: JS Engine**

* This is just like go fish
  * There is two answers to the question:
    * "Hey global scope I am looking for the `foo` variable ever heard of him?"
      * Either yes or no "Go fish!"
* *Engine*: Hey scope of `baz` I have an LHS for `bam` ever heard of him?
  * *Compiler*: "Go fish!"
  * *Engine*: Hey global scope I have an LHS for `bam` ever heard of him?
    * *Compiler*: "No but I will create one for you since I don't have one formally declared"
      * This is an implicit declaration in global scope
      * This is virtually always a mistake
      * If you are doing this on purpose STOP! You should never do this
      * However if you have `"use strict"` it will not allow you to do this!
        * It will throw a referece error: `bam is not defined`
          * This is not the same as an undefined variable
          * It's actually saying `bame is not declared`

* Practical implication from this example is: USE STRICT MODE `'use strict'`
  * Although it has the ring of an overbearing parent, it is more **like a loving father**
    * By not following the specs laid out by strict mode, you are **making it harder** for JS:
      * To compile your code
      * Optimize your code
      * Execute your code
    * For instance, creating an *implicit global variable at runtime is slower than creating it it at compile time*
      * Which will in turn slow down the execution of your code
  * `'use strict'` is file based
    * So even if a 3rd party library doesn't use it, you can use it
    * **babel** adds it for you
</article>

<article id="2">

## Block Scope

> Block scopes have curly braces

* Kyle Simpson recommends using `var` most of the time, then `let`, then `const`
  * He doesn't use `const` to declare functions only uses `const` for immutable objects

* **const** implies a constant
  * means it never is *reassigned*
  * the problem of using const is that it confuses readers because a lot of people still think that a "constant" doesn't change

```javascript
function diff(x,y) {
  if (x > y) {
    let tmp = x 
    x = y
    y = tmp
  }

  return y - x
}
```

* **Let** is blocked scoped to `if`
  * If you try to access `tmp` outside of the **if block** you will get a *reference error*

* `let` is always better used in a `for loop`
* `let` cannot be redeclared but `var` can be redeclared

```javascript
function repeat(fn, n) {
  var result;

  for (let i = 0; i < n; i ++) {
    result = fn( result, i)
  }

  return result
}

```

* `var` is better used when you want to stylistically signal to the reader that `result` in this case is going to be used throughout the function

```javascript
function lookupRecord(searchStr) {
  try {
    var id = getRecord(searchStr)
  }
  catch (err) {
    var id = -1
  }

  return id
}
```

* By using `var` here you escape the block scope and can reference the variable

</article>


<article id="3">

## Function Scoping

```javascript
var foo = 'foo'

function bob(0 {
  var foo = 'foo2'
  console.log(foo) // 'foo2'
})
bob()

console.log(foo) // 'foo' phew!
```

</article>


<article id="4">

## IIFE (immediately invoked function expression) Pattern

> If you don't want to pollute the name space, but you want to **create scope and you only want your function to run once**, the IIFE pattern is helpful

* This is similar to **block scoping**

```javascript
var foo = 'foo'

(function IIFE(bar) {
  var foo = 'foo2'
  console.log(foo) // 'foo2'
})(foo)

console.log(foo) // 'foo'
```

</article>

<article id="5">

## Hoisting

> This is a made up concept which doesn't exist...it's a convenient metaphor

* This is simply a easy way to think about how lexical scope is working in the 2 pass system
  * When assignments occur (which is executable code belonging to the 2nd pass) it doesn't get "hoisted" to the top of the scope
    * *IE: function declarations are hoisted but function expressions are not*
  * `let` and `const` are **not initialized** at the top of their scope but rather are intialized at the line where they are used
    * This does not mean that they are not hoisted
      * Hoisting involves adding the variable to the enclosing lexical scope
      * Hoisting does not describe the **initialzation** step
        * `var` is hoisted and initialized whereas `let` and `const`

* One benefit of hoisting is by using **function declarations**
  * You don't have to declare functions in order before they need to be consumed
    * It takes longer to scroll down to the bottom of the file to figure out what the program is actually doing
    * You can order your functions logically
    * Or you can order them alphabetically
  * You can do mutual recursion
    * This is when one function recursively calls another function which calls another recursively
    * Mutual recursion is impossible without function declarations

</article>

