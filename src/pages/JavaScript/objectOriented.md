---
title: "OOP JavaScript"
description: "Object Oriented Programming in JS notes adapted from [JS Hardparts](https://frontendmasters.com/courses/javascript-hard-parts) & [JS Foundations](https://frontendmasters.com/courses/javascript-foundations)"
author: "Ryan Garant"

---

<article id="1">

## Object Oriented Programming (OOP)

- Easy to add features and functionality
- Performant (efficient in terms of memory)
- Easy for us and other developers to reason about (a clear structure)

- **Encapsulation**:
  - Binding together data and functions that manipulate the data

<p data-height="300" data-theme-id="31719" data-slug-hash="deNWmr" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="Simple OOP Example" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/deNWmr/">Simple OOP Example</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

- This has the benefit of being very simple but
  - Each time we create a new user we make space in our computer's memory for all our data and functions
    - But the functions are just copies
  - If you have hundreds of users, why would you just copy the same copy over and over again?
    - So inefficient :(

### Object.create

#### Example

<p data-height="300" data-theme-id="31719" data-slug-hash="devNmP" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="__proto__ JS Bond Example" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/devNmP/">__proto__ JS Bond Example</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

- Main point of this example is to show the special bond that `Object.create()` makes
  - So Object.create actually does 2 things:
    _ It returns an empty object
    _ It creates a reference to whatever object that you pass in under the special property `__proto__`
    _ Check out the browser console in the example above and click the dropdown under the prop `__proto__` to see it in action
    _ `__proto__` already exists on an empty object and contains things like `toString` and `hasOwnProperty`
    _ What we do with `Object.create(ourObj)` is add our object methods that we pass in as the new first level of the `__proto__` object
    _ The previous methods that exist in `__proto__` still exist but they are now nested in a second level under the key `__proto__`
    _ This is actually really useful
    _ Say you have a function that you want available on every user object but you don't want to duplicate it for every object \* You create instead link the function to your object so it is store one place in memory rather than being stored once for every single user object
    </article>

<article id="2">

## this Keyword

- Every function (while executing) has a reference to its current execution context, called `this`
- The JS's version of **dynamic scope** is `this`
- The arrow function with a this keyword behaves according to lexical rules
  - It treats it as a normal variable and looks up the scope chain to find the variable this

<img src="images/this-scope.png" alt="this keyword scope">

- Example

```javascript
function foo() {
  console.log(this.bar)
}

var bar = 'bar1'
var obj = { bar: 'bar2' }
var o2 = { bar: 'bar2', foo }
var o3 = { bar: 'bar3', foo }

foo() // 'bar1'
foo.call(obj) // 'bar2'
o2.foo() // 'bar2'
o3.foo() // 'bar3'
```

- The 4 `this` rules from the example above:

1.  **Default Rule**: in _non strict mode_ the this keyword points at the global object IE
2.  **Explicit Binding Rule**: `foo.call(obj)` calls foo but uses `obj` as its this context
3.  **Implicit Binding Rule**: `o2.foo()` implicitly binds `this` to the `o2` object `bar`

- The danger of implicit binding is that you can't enforce `this` being bound to its calling context
- The work around for this is **hard binding**

### Hard Binding

```javascript
function foo(baz, bam) {
  console.log(`${this.bar} ${baz} ${bam}`)
}

var obj = { bar: 'bar' }
foo = foo.bind(obj, 'baz')

foo('bam') // 'bar baz bam'
```

- This solves the problem of not being able to control the value of `this` at the call site
- You can pass a hard bound function so `this` will be consistent & **predictable**
- The tradeoff is that you lose **flexibility**
  - There is a tension between **flexibility** vs **predictability**
  - The heuristic you can use is:
    - Use **Lexical Scope**: If you need predictability the lexical system is better
    - use **Dynamic Scope** (`this`): If you need flexibility
    - IE
      - Say you are using `this` and every once in a while you use a couple hard bindings then `this` is typically better
      - If you are using `this` and having to hard bind a bunch then **lexical scope** would be better
    - Use each system for what they are better at

### Order of Precedence Rules In Determining What `this` Points To

1.  Is the function called by `new`?
2.  If not is the function called by `call()` or `apply()`? (bind uses apply)
3.  If not was the function called with a context object?
4.  If not default to the global object (except in strict mode)

</article>

<article id="3">

## new Keyword

- There are a couple things you need to understand about functions before understanding what's going on under the hood with the new Keyword
  - AKA _constructor call_ (it just a creates an object when placed in front of any function)
  - Functions are actually just objects
    - If you have a function stored in global memory under the label `myFunc` you can write `myFunc.firstName = 'Ryan'`
      - And if you log that out you will actually see `firstName` as a key on `myFunc`
      - The **actual functionality of the function** when you call it with parens is under the `call` property of the function definition which is located within the `__proto__` property
      - Note that this is not standard practice to use functions as an object, but good to know that in their essence they are actually an object

<p data-height="300" data-theme-id="31719" data-slug-hash="gzWpwQ" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Functions As Objects" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/gzWpwQ/">JS Functions As Objects</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

- **The Four Things** That Happens When Putting the `new` Keyword in Front of a Function Call:

1.  It creates a brand new empty objects
2.  The newly created object gets linked to another object
3.  The newly created object gets passed in as the `this` context to the function call
4.  If that function does not already return its own object, it will return `this`

- When we call the constructor function with new in front we automate 2 things:
  - Create a new user object: `this = Object.create(userCreator)`
    - This creates the `__proto__` property which references the prototype object methods
  - return the new user object: `return this`

<p data-height="300" data-theme-id="31719" data-slug-hash="deWWjK" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS New Keyword" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/deWWjK/">JS New Keyword</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

</article>

<article id="4">

## The Class 'Syntactic Sugar'

- It is doing the same thing under the hood as the `new` keyword

<p data-height="300" data-theme-id="31719" data-slug-hash="RyVVmd" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Class Sugar For new Keyword" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/RyVVmd/">JS Class Sugar For new Keyword</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

</article>

<article id="5">

## Prototypes

> Objects are built by constructor calls where a constructor makes an object linked to its own prototype

- `Object.prototype` is the most important object in JS
- C++ & Java implements classes very differently than JS
  - When a class inherits from another class it **copies** that class's methods
  - If you alter the parent class's methods after the child inherits them, the inherited methods on the child are NOT changed
  - _IE: If I break my leg and my son is a biological copy of me to a degree, you would not expect his leg to be broken_
- JS on the other hand has "**Retroactive Inheritance**"
  - If you alter the parent class's methods after the child inherits them, the inherited methods on the child ARE changed

<p data-height="300" data-theme-id="31719" data-slug-hash="ERVBqa" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="JS Prototypes" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/ERVBqa/">JS Prototypes</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

- calling `child.constructor` tells you where the child came from, in this case the parent
- `child.constructor.prototype` & `child.__proto__` give you the prototype of Parent

<img src="images/prototype.png" alt="prototype">

</article>

<article id="6">

## Object ES6/ES6 Enhancements

## Enhanced Object Literal

![](images/enhanced-object-literal.png)
_Provided by [Mike.Works](https://mike.works/)_

### Destructured Assignment

- A cleaner way to pluck one or more deep properties off of an object

```js
let person = {
  name: {
    first: 'Mike',
    last: 'North',
  },
  languages: {
    backend: {
      elixir: {
        experience: '3 years',
      },
    },
  },
}

let {
  name: { first },
  languages: { backend: serverSkills },
} = person

console.log(`${first} - ${Object.keys(serverSkills)}`) // Mike - elixir
```

### Object - Rest & Spread Properties

- **Rest** - sugar for "and the rest go here" when destructuring

```js
let data = { x: 34, y: 21, z: 0.1 }
let { x, ...others } = data
console.log(others) // { y: 21, z: 0.1 }
```

- **Spread** - sugar for, "and all the properties on this object" when defining a `{}`

```js
let values = { ...others, a: 99, b: 77 }
console.log(values) // { y: 21, z: 0.1, a: 99, b:77 }
```

</article>

<article id="7">

## Quiz

1.  How do you “borrow” a function and implicitly set this?
2.  How do you explicitly set this for the function call?
3.  How can you lock a specific this to a function?

- Why do that? Why not?

4.  How do you create a new this for the function call?

</article>
