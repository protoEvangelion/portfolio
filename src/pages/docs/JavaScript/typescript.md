---
title: "Typescript"
description: "Typescript Fundamentals based on https://github.com/mike-works/typescript-fundamentals"
layout: "guide"
weight: 7
---

###### {$page.description}

<article id="1">

## Primitives

1. null
2. undefined
3. boolean
4. number
5. string
6. symbol

* Every thing else extends from Objects
* Primitives are immutable

### Auto-Boxing

* When primitives are wrapped in identically-named Objects
	* `new Boolean(true)` actually creates an object
	* auto boxing like this is almost always a mistake

### Why Add Types

* move common errors to **compile** time from **runtime**
* great docs for fellow devs
* clever abstractions are safer to use
* JS does some unintuitive things like converting primitive types
* Modern JS runtimes are written in typed langs like C++
	* As soon as you break types you get out of "Hot mode"

</article>

<article id="2">

## Typing

* Important note: Typescript provides out of the box for core JS functionality & the DOM api

### Implicit

* Typescript is good at guessing

```javascript
let teacherAge = 43
teacherAge = '5' // Error
```

### Explicit

#### Annotations

```javascript
let teacherAge: number = 34;
```

#### Casting

```javascript
let input = document.querySelector('input#name_field') as HTMLInputElement;
```

#### Function Params & Return

```javascript
function login(username: string, password: string): User {
}

const login = (username: string, password: string): User => {
}
```

</article>

<article id="2">

## Object Shapes

```javascript
let myCar: { make: string, model: string, year: number };

myCar = {
make: 'Honda',
model: 'Accord',
year: 1992
};
```


</article>

