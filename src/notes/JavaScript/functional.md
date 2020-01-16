---
title: 'Functional JS'
description: 'Functional Programming in JS'
author: 'Ryan Garant'
---

<article id="1">

#### Note: A large part of this content has been distilled from [Kyle Simpson's online FP course] unless otherwise noted(https://frontendmasters.com/courses/functional-javascript-v2/pure-functions-and-side-effects):

## Functional Programming

> FP is not all about the function keyword, it is however all about using functions to model your programs

-   The most prominent paradigm in the past 25 years is object oriented programming
-   This is an alternative paradaigm

### Imperative vs Declarative

### Imperative:

-   Focuses on **how** something to happen
-   JS itself is an imperative language [1]
-   computers are better at this
-   Imperative & Declarative is a continuum not one or the other
-   1's & 0's on a punch card is the pure example of imperative code

### Declarative

-   Focuses on **what** you want to happen
-   Purely declarative is if you were like "computer analyze this"
-   Functional programming is considered a subset of declarative programming [1]

-   As soon as we add things like assembly language, we are moving slightly away from imperative code
-   The languages like JS & frameworks like JS make it more declarative

### Learning Curve (where people give up)

![](images/fp-learning-curve.jpg)
_Provided by [Kyle Simpson](https://frontendmasters.com/courses/functional-javascript-v2/)_

### Provable

-   Pure functional code is **more trustworthy than code backed by unit tests**
    -   The reasoning for this is pure functional code is based on proven mathematical methods
    -   These methods have been proven for 100s of years by mathemiticians & implemented by computer scientists for decades
    -   Provable code is code that you can more easily understand & therefore **trust**
-   Provable code is also more readable
    -   This is because our brains don't have to think about all the details
-   **Example**: _Think about a trained mountain climber_
    -   He doesn't have to think about his carabiner at ever step, or how his rope mechanisms work
        -   He trusts his tools and thinks about the bigger picture...getting to the top of the mountain
        -   Likewise, a FP programmer trusts his tools and focuses on the bigger picture like business and overarching logic

### Abstraction

> ... abstraction is a process by which the programmer associates a name with a potentially complicated program fragment, which can then be thought of in terms of its purpose of function, rather than in terms of how that function is achieved. By hiding irrelevant details, abstraction reduces conceptual complexity, making it possible for the programmer to focus on a manageable subset of the program text at any particular time. [3]

-   **We're not abstracting to hide details; we're separating details to improve focus**
-   The point is to make a semantic boundary between the **what** and the **how**
-   **NOT Ecapsulation** which is hiding details away in something like a class implementation
-   Comes from the root word **complex**:
    -   _latin_: complect or complected
        -   _word picture_: strands of a rope tightly braided together
        -   the word simple is the opposite of this
    -   As it relates to programming then, it is the teasing out the strands of the program from the braid and separating them with a semantic boundary
        -   Not so that we don't have to think about it
        -   But so that we can sit comfortably on one side of the line and think about that chunk in it's entirety without having to think about another strand
        -   It therefore allows us to reason independantly about & prove pieces of our program

#### Classic characteristics of functional programming

-   Functions are **first class citizens**
-   **Pure functions**: no side effects (_you don't change/mutate your program_)
    -   It's only consequence is the return value of the function
-   Immutable

#### How to do it?

-   **Driver**: One person is saying psuedocode
-   **Navigator**: One person is interpreting & typing psuedocode
    -   The navigator never tells the driver how to turn the psuedocode into the code specifically
    -   This greatly helps with technical communication

#### Generalizing Functions

Refactoring the previous example to be more DRY & General:

```js
function copyArrayAndManipulate(array, instructions) {
    let output = [];
    for (let i = 0; i < array.length; i++) {
        output.push(instructions(array[i]));
    }
    return;
    output;
}
function multiplyBy2(input) {
    return;
    input * 2;
}
let result = copyArrayAndManipulate([1, 2, 3], multiplyBy2);
```

#### First Class Objects:

-   They can co-exist with and can be treated like any other js object
    -   The only bonus thing of an object is that it can be executed/run

#### Higher Order Functions vs. Callbacks

-   **HOCs** are simply functions that return other functions
-   **Callbacks** are the function that is passed into the HOC
-   They simplify your code and help keep it **DRY**

##### Line By Line example

```js
function instructionGenerator() {
    function mulitplyBy2(num) {
        return num * 2;
    }

    return multiplyBy2;
}

let generatedFunc = instructionGenerator();

let result = generatedFunc(3);
```

-   The key line that throws seasoned devs off is `let generatedFunc = instructionGenerator()`
    -   Because instruction generator doesn't actually call multiplyBy2, it returns the function definition of multiplyBy2

</article>

<article id="2">

## Purity

### Pure Functions

-   Take and input and return an output
-   From a FP point of view, just because you use a `function` keyword, doesn't make it a function
-   Haskell is a language that only let's your write pure functions
    -   though there is an escape hatch to do some side effects
-   **Doesn't have access to variables outside itself**
-   No matter how many times you call a pure function, if you give it the same inputs it will always return the same outputs
    -   If a function _can_ produce a different output each time it's given the same inputs, it is impure
-   Purity is not a binary characteristic
    -   You cannot say with 100% confidence in a mutable system like js, that a function is pure
-   If you pass an impure function into a pure function that pure function will become impure

```js
const PI = 3.141592;

function circleArea(radius) {
    return PI * radius * radius;
}

function cylinderVolume(radius, height) {
    return height * circleArea(radius);
}
```

-   Both of these functions are pure
-   They can referece free variables (variables outside itself) if those variables are not side causes (the are reassigned)
    -   closure also falls under this allowance

### Side Effects

> The goal of a FP programmer is to minimize side effects and collect side effects in a specific location

-   **The problems**:
    -   Functional programmers detest these sorts of side cause/effect bugs because of how much it hurts our ability to read, reason about, validate, and ultimately **trust** the code
    -   **The readability of a side effecting function is worse** because it requires more reading to understand the program
        -   Furthermore, your choice to write code (potentially) with side effects in one or more of those function calls means that you've burdened the reader with having to mentally execute your program in its entirety up to a certain line, for them to read and understand that line
    -   More potential bugs
        -   race conditions async or not
        -   the data (state) _might_ now be out of sync
-   **The solution**:
    -   Essentially, we're not really eliminating side causes/effects, but rather containing and limiting them, so that more of our code is verifiable and reliable
        -   If we later run into program bugs, we know that the parts of our code still using side causes/effects are the most likely culprits
        -   Just moving side effects _into their own buckets_ is extremely helpful when debugging
        -   **React & Redux is an embodiment of this principle**
            -   For the data transfer & transformation step, make that pure and the DOM manipulation (side effects) to a render function
                -   this is bad because it could be silently broken
        -   **Concrete Example**: Think of your program like a basketball
            -   The air within the basketball (the core of your program) should be pure & side effect free
            -   The outer shell is where we put side effects so they are really easy to find
        -   Practically, one idea is to label with a comment or other semantic boundary like a function, where you group your side Effects

*   **Examples**:
    -   Printing to console
    -   Writing to file
    -   Making a request
    -   Random numbers
    -   Time stamps
    -   Reading a variable outside its scope that can be reassigned
    -   Browser events like click & resize

```js
function f() {
    y = 2 * x;
}

var x = 4;
```

-   In this example, there is no direct input therefore it is a **side cause**
-   There is no direct output therefore there is a **side effect**
-   As programmers, our natural state of thinking is to use side effects
    -   One reason for this is it is a lot easier to write it
    -   _Why do we optimize for writing code rather than readability?_
-   FP suggests that this is bad because it forces the reader of the code, to execute the entire program in their head before they can accurately understand what a particular section does
-   _Can a program be observed if it is completely side-effect free?_
    -   NO
    -   Even the heat that the cpu generates when it runs your program is an indirect side-effect

#### When you need side effects

-   Where you locate your side effects, make that section idempotent
    -   **Idempotent**: the result of calling `f(x)` subsequent times after the first call doesn't change anything
    -   Pure functions are idempotent
-   each idempotent operation (like `obj.count = 2`) could be repeated multiple times and not change the program state beyond the first update
    -   The non-idempotent operations change the state each time

```js
// idempotent:
obj.count = 2;
a[a.length - 1] = 42;
person.name = upper(person.name);

// non-idempotent:
obj.count++;
a[a.length] = 42;
person.lastUpdated = Date.now();
```

#### Preventing observability of side causes/effects

```js
var specialNumber = (function memoization() {
    var cache = [];

    return function specialNumber(n) {
        // if we've already calculated this special number,
        // skip the work and just return it from the cache
        if (cache[n] !== undefined) {
            return cache[n];
        }

        var x = 1,
            y = 1;

        for (let i = 1; i <= n; i++) {
            x += i % 2;
            y += i % 3;
        }

        cache[n] = (x * y) / (n + 1);

        return cache[n];
    };
})();
```

-   Technically changing reading from the cache is a side cause & writing to the cache is a side effect
    -   But pragmatically, they are not side effects because nothing else in the program can read or change them
-   We've contained the `cache` side causes/effects of `specialNumber(..)` inside the scope of the `memoization()` IIFE, so now we're sure that no other parts of the program _can_ observe them, not just that they _don't_ observe them
-   A program with side causes/effects that _just happen_ to not be observed is not nearly as effective in this goal as a program that _cannot_ observe them

### How can we purify a function

**Solution 1**: encapsulate impurity in a function:

-   If the outer observation of a function is that it is pure, even if the function wraps a function that is impure, it is still considered pure
    -   A use case of this is if you have a library and want to contain its side effects
        -   You could wrap it in a function

**Solution 2**: reset side-effects at the end of function

-   if you there is a function that say sets global variables, you can reset those variables at the end of that function's life

### Unary & Binary Functions

-   **Unary**: takes one argument
-   **Binary**: takes two arguments
-   **Nary**: takes 3 or more arguments

-   Typically you want to **only use unary & binary functions**
    -   The reason for this is it is easier to work with you you have less arguments
    -   A common utility in a functional programming library is a function that converts a given function into a unary function
        -   there are also utilities to flip or reverse args

**Solution 3**: move side-effects out of impure functions closer to the call site

</article>

<article id="3">

## Point-Free Style

-   Points refer to unnecessary params
-   Intended to reduce the verbosity of your code
-   This helps us be more declarative

```js
function isOdd(v) {
    return v % 2 == 1;
}

function isEven(v) {
    return !isOdd(v);
}

isEven(4);
```

-   The `isEven` function unnecessarily takes an argument & maps it to the call of another function
-   A common solution for this is to have a `not` or `negation` function
-   The intent is not about having completely point-free code but abstracting the point mapping into provable readable utility functions

```js
function not(fn) {
    return function negated(...args) {
        return !fn(...args);
    };
}

function isOdd(v) {
    return v % 2 == 1;
}

var isEven = not(isOdd);

isEven(4);
```

-   Though the code above is not point-free, it limits the amount of points in our program by using a utility function that handles the argument mapping for us

-   Pros for point-free Style [1]
    -   It makes programs simpler and more concise
        -   This isn’t always a good thing, but it can be
    -   It makes algorithms clearer
        -   By focusing only on the functions being combined, we get a better sense of what’s going on without the data arguments getting in the way
    -   It forces us to think more about the **transformation being done** than about the data being transformed
    -   It helps us think about our functions as generic building blocks that can work with different kinds of data, rather than thinking about them as operations on a particular kind of data
        -   By giving the data a name, we’re anchoring our thoughts about where we can use our functions. By leaving the data argument out, it allows us to be more creative

</article>

<article id="4">

## Curry

-   Is the **pattern** of returning a function if all the expected args are not provided
-   **Unwinds a single higher-arity function** into a series of chained unary functions
-   This also enables partial application or partially building functions
    -   Using currying over partial application could be better when you don't know ahead of time you have a function to be adapted but you don't know what your data is going to be
    -   Currying is similar to partial application in that each successive curried call partially applies another argument to the original function, until all arguments have been passed
    -   **The main difference** is that the curried function will return a function that expects **only the next argument** `data`, not like a partially applied function that can receive all the rest of the arguments
    -   Also, in currying you don't specify args up front but in partial application you do

### Benefits

-   You **don't need to provide all the args** up front
-   It is easier to **compose** unary functions
-   Specialization of generalized functions improves **readability** of code

#### Curry utility example

```js
function curry(fn, arity = fn.length) {
    return (function nextCurried(prevArgs) {
        return function curried(nextArg) {
            var args = [...prevArgs, nextArg];

            if (args.length >= arity) {
                return fn(...args);
            } else {
                return nextCurried(args);
            }
        };
    })([]);
}
```

</article>

<article id="5">

## Argument Order

> Configuration first data last

```js
const publishedInYear = curry((year, book) => book.year === year);

const titlesForYear = (books, year) => {
    const selected = filter(publishedInYear(year), books);

    return map(book => book.title, selected);
};
```

-   `year` param comes first because it is used to configure the function
-   `book` param comes second because it is the data operated on

-   If you have a function that you don't control or need it in a certain order for another reason, you can use utility function like `flip`

```js
const publishedInYear = curry((book, year) => book.year === year);

const titlesForYear = (books, year) => {
    const selected = filter(flip(publishedInYear)(year), books);

    return map(book => book.title, selected);
};
```

-   Or you can use placeholders `__`

```js
const threeArgs = curry((a, b, c) => {
    /* ... */
});

const middleArgumentLater = threeArgs('value for a', __, 'value for c');
```

OR

```js
const threeArgs = curry((a, b, c) => {
    /* ... */
});

const middleArgumentOnly = threeArgs(__, 'value for b', __);
```

</article>

<article id="5">

## Composition

> ... everything else in FP would collapse without composition

-   Composition is how an FPer **models the flow of data** through the program
-   most foundational concept in all of FP, because without it, you can't declaratively model data and state changes
-   Taking the ouput of one function and making it the input of another function
-   The purpose of functional programming is to declaratively state in our code the **path of data transformation**
    -   we want to make the steps along this path as obvious as possible
    -   composition is at the heart of this
-   Piping is a way to compose (think candy making factory)
    -   It's a lot easier to compose unary functions

#### the `compose` utility itself is a declarative abstraction

```js
// imperative
function shorterWords(text) {
    return skipLongWords(unique(words(text)));
}

// declarative
var shorterWords = compose(skipLongWords, unique, words);
```

-   `compose` handles the **how** allowing you to focus on the **what**
-   then the call site of shorterWords will be very declarative

```js
//imperative
skipLongWords(unique(words(text)));

// declarative
shorterWords(text);
```

### Higher Order Function

-   _Takes one or more functions as inputs AND/OR makes a function as an output_
-   It is a machine making machine going along with the candy making metaphor
-   HOCs are at the heart of everything
-   `compose`
    -   allows you to compose functions
    -   reads right to left because that is the way you would write them
-   `pipe`
    -   also allows you to compose functions
    -   reads left to right which may be better in some cases because it can be easier to read it in the order in which it executes

</article>

<article id="6">

## Immutability

-   Value immutability means that _when_ we need to change the state in our program, we must create and track a new value rather than mutate an existing value
    -   we are not talking about variable immutability like with `const`
-   Treating values as immutable drastically reduces the surface area of surprise, making our programs easier to read, reason about, and ultimately trust
    -   treat all received values as immutable whether they are or not
-   Only **arrays & objects** are mutable
    -   **strings & numbers** are immutable
    -   also boolean, null, undefined, symbol

```js
function addValue(arr) {
    var newArr = [...arr, 4];
    return newArr;
}

addValue([1, 2, 3]); // [1,2,3,4]
```

```js
function updateLastLogin(user) {
    var newUserRecord = Object.assign({}, user);
    newUserRecord.lastLogin = Date.now();
    return newUserRecord;
}

var user = {
    // ..
};

user = updateLastLogin(user);
```

### Preventing referential mutation

-   if you pass a non primative value to a function as an arg, it can be mutated
    -   the param copies the reference, not the value

```js
var arr = [1, 2, 3];

foo([...arr]); // ha! a copy!

console.log(arr[0]); // 1
```

-   trick to avoid a referential copy and this potential mutation

### Creating immutable objects/arrays

-   `Object.freeze` does a shallow freeze on objects or arrays
    -   walks props & changes them to read only & non-reconfigurable
    -   also makes object/array non-extensible (no new props can be added)
    -   only the top level though!
    -   if you need a deep freeze you have to manually iterate over each value and freeze them as well

```js
var x = Object.freeze([2, 3, [4, 5]]);

// not allowed:
x[0] = 42;

// oops, still allowed:
x[2][0] = 42;
```

### Performance

-   If you have state changes that are going to occur frequently, or specifically happen in a _critical path_ of your application, then performance -- consider both performance and memory! -- is a totally valid concern
-   A powerful library like **Immutable.js** employs sophisticated performance optimizations

    -   Handling all the details and corner-cases manually without such a library would be quite difficult
    -   They do a lot of perf optimizations under the covers
    -   Git does not copy all the files after a new commit and only copies the diff
        -   Immutable.js works similarly in that it only writes the diff, it doesn't do a full on copy

-   When changes to a value are few or infrequent and performance is less of a concern, I'd recommend the lighter-weight solution, sticking with built-in `Object.freeze(..)` as discussed earlier
-   If you need to increase perf, it is ok to use methods that mutate as long as you are not mutating a param

</article>

<article id="7">

## Object vs Closure

-   Note for purposes of this sections, when we are thinking about objects, arrays fall under that category
-   Objects and closures are isomorphic to each other, which means that they can be used somewhat interchangeably to represent state and behavior in your program
-   Representation as a closure has certain benefits, like granular change control and automatic privacy
-   Representation as an object has other benefits, like easier cloning of state

The critically thinking FPer should be able to conceive any segment of state and behavior in the program with either representation, and pick the representation that's most appropriate for the task at hand.

1.  A programming language without closures can simulate them with objects instead
2.  A programming language without objects can simulate them with closures instead

-   a **closure associates a single function** with a set of state, whereas an object holding the same state can have **any number of functions** to operate on that state
-   use cases for an object or closure
    -   In places where I want to **allow reassignment** but restrict its surface area, closures are a more convenient and flexible form than objects
    -   In places where I want no reassignment, a frozen object is a lot more convenient than repeating `const` declarations all over my function
    -   Many FPers take a hard-line stance on **reassignment**: it shouldn't be used
        -   They will tend to use `const` to make all closure variables read-only, and they'll use `Object.freeze(..)` or full immutable data structures to prevent property reassignment
        -   Kyle argues that **variable reassignment can be quite useful**, and when used appropriately, quite readable in its explicitness
        -   And that it's been his experience that debugging is a lot easier when you can insert a `debugger` or breakpoint, or track a watch expression

### Similarity

-   Objects & closure are similar in:
    -   state
    -   behavior
    -   value immutability
    -   isomorphic
-   Put simply, closures and objects are **isomorphic representations of state** (and its associated functionality)
-   The next time you hear someone say "X is isomorphic to Y", what they mean is, "X and Y _can be converted from either one to the other in either direction_, and not lose information

### Disimilarity

-   Objects & closure are disimilar in:
    -   structural mutability
    -   privacy
    -   cloning state (much easier with objects)
    -   performance
        -   usually objects are faster but at a miniscule level which may be more important if the operation happens hundreds of times

#### State Example representing an object as a closure

```js
var point = {
    x: 10,
    y: 12,
    z: 14,
};
```

```js
function outer() {
    var x = 10;
    var y = 12;
    var z = 14;

    return function inner() {
        return [x, y, z];
    };
}

var point = outer();
```

#### Behavior Example exposing multiple methods with a single closure interface

```js
var person = {
    firstName: 'Kyle',
    lastName: 'Simpson',
    first() {
        return this.firstName;
    },
    last() {
        return this.lastName;
    },
};

person.first() + ' ' + person.last();
// Kyle Simpson
```

```js
function createPerson(firstName, lastName) {
    return API;

    // ********************

    function API(methodName) {
        switch (methodName) {
            case 'first':
                return first();
                break;
            case 'last':
                return last();
                break;
        }
    }

    function first() {
        return firstName;
    }

    function last() {
        return lastName;
    }
}

var person = createPerson('Kyle', 'Simpson');

person('first') + ' ' + person('last');
// Kyle Simpson
```

#### Immutability Example

```js
function outer() {
    var x = 1;
    var y = [2, 3];

    return function inner() {
        return [x, y[0], y[1]];
    };
}

var xyPublic = {
    x: 1,
    y: [2, 3],
};
```

-   The values themselves are immuntable because **primatives are immutable**
-   Whether you represent this state with nested objects, or with nested closures, the **values being held are all immutable**

</article>

[1]: http://randycoulman.com/blog/2016/06/14/thinking-in-ramda-declarative-programming/
[2]: http://randycoulman.com/blog/2016/06/21/thinking-in-ramda-pointfree-style/

[3]: Scott, Michael L. “Chapter 3: Names, Scopes, and Bindings.” Programming Language Pragmatics, 4th ed., Morgan Kaufmann, 2015, pp. 115.
