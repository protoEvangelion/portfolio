---
title: "Typescript"
description: "Typescript Fundamentals based on https://github.com/mike-works/typescript-fundamentals"
author: "Ryan Garant"
---

<article id="1">

## Primitives

1.  null
2.  undefined
3.  boolean
4.  number
5.  string
6.  symbol

- Every thing else extends from Objects
- Primitives are immutable

### Auto-Boxing

- When primitives are wrapped in identically-named Objects
  - `new Boolean(true)` actually creates an object
  - auto boxing like this is almost always a mistake

### Why Add Types

- move common errors to **compile** time from **runtime**
- great docs for fellow devs
- clever abstractions are safer to use
- JS does some unintuitive things like converting primitive types
- Modern JS runtimes are written in typed langs like C++
  - As soon as you break types you get out of "Hot mode"

</article>

<article id="2">

## Typing

- Important note: Typescript provides out of the box for core JS functionality & the DOM api

### Implicit

- Typescript is good at guessing

```js
let teacherAge = 43
teacherAge = '5' // Error
```

### Explicit

#### Annotations

```js
let teacherAge: number = 34
```

#### Casting

```js
let input = document.querySelector('input#name_field') as HTMLInputElement;
```

#### Function Params & Return

```js
function login(username: string, password: string): User {}

const login = (username: string, password: string): User => {}
```

#### The Any Type

- This is essentially the JS world with TS
- allows for a value of any kind
- useful to migrate code from JS to TS
- The goal is to get to using actual types instead of any
- Start with making all anys explicit, and then squash as many as possible

#### Never Type

- something that you would want in unreachable sections of code
- compile time equivalent of a throw
- it's for scenarios you are trying to avoid
- `let hi: never = 'hello'` //error

</article>

<article id="2">

## Object Shapes

```js
let myCar: { make: string, model: string, year: number }

myCar = {
  make: 'Honda',
  model: 'Accord',
  year: 1992,
}
```

### Interfaces

- Solve the problem of manually defining the shape of each new object which can get very verbose
- Same as **Java Interfaces** & C abstract classes
- They don't transpile to any JS they are for the TS compiler only
- Only describe structure
- DRY type definition allows for easy refactoring later
- Can be **extended**

```js
interface Car {
  make: string;
  model: string;
  year: number;
}

let myCar: Car = { make: 'Honda', model: 'Accord', year: 1992 }
let lisasCar: Car = { make: 'Ford', model: 'Monster Truck', year: 2016 }
```

### Tuples

- Array of fixed length

</article>

<article id="3">

## Functions

### Function Types

- This is useful if you want to resuse a function's argument signature

![](images/function-types.jpg)
_Provided by [Mike.Works](https://mike.works/)_

- You can accomplish the same thing with interfaces
- This will ensure that your functions are called with the correct types

```js
interface ClickListener {
  (this: Window, e: MouseEvent): void
}

const myListener: ClickListener = e => {
  console.log('mouse clicked!', e);
}

addEventListener('click', myListener); // Good

myListener(new MouseEvent('click')); // Error
```

### Required Params

- TypeScript assumes required unless you specify otherwise

```js
function createTwitterPost(body: string, username: string, imageUrl: URL) {
  //...
}
```

### Optional Params

```js
function createTwitterPost(body: string, username: string, imageUrl?: URL) {
  //...
}
```

### Default Param Values

```js
function createTwitterPost(body: string, username: string = 'Ryan Garant', imageUrl?: URL) {
  //...
}
```

### Rest Params

```js
function orderSandwich(bread: string, name: string, ...toppings: string[]) {
  // ...
}

orderSandwich('Bagel', 'Ham & Cheese')
orderSandwich('Wheat', 'Turkey Club', 'Mustard', 'Sprouts')
```

</article>
