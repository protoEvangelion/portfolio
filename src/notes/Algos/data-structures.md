---
title: "Data Structures"
description: "Computer science data structure interfaces"
author: "Ryan Garant"
---

<article id="1">

## Data Structures - Interfaces:

> Interfaces deal with the outside of the black box--the buttons on it

### Stacks

> Programming itself is a stack--think recursion

![stack](https://btholt.github.io/four-semesters-of-cs/img/stack.png)

![stack](https://www.tutorialspoint.com/data_structures_algorithms/images/stack_representation.jpg)

- **LIFO**: The **Last** item added **Into** the stack will be the **First** one taken **Out** of the stack \* The idea of
  the "call stack" goes along with this concept
- Most programming languages are based on a stack
- Arrays have a stack interface but they are not a pure stack
  - Because with a pure stack you push on top and pop
  from top
  - You can't get to anything beneath the top node

<p data-height="300" data-theme-id="31719" data-slug-hash="KxgNYb" data-default-tab="js" data-user="RyanGarant" data-pen-title="Naive JS Stack Data Structure" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/KxgNYb/">Naive JS Stack Data Structure</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Queue

![Queue](https://btholt.github.io/four-semesters-of-cs/img/queue.png)

- **FIFO**
- All stacks need to have the methods enqueue (add/push) and dequeue (remove/pop)
- There are priority queues like for streaming video \* Items that have a higher priority get queued or dequeued first

<p data-height="300" data-theme-id="31719" data-slug-hash="PdbbzN" data-default-tab="js" data-user="RyanGarant" data-pen-title="Naive es6 Queue" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/PdbbzN/">Naive es6 Queue</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Linked List

- Interactive linked list: https://visualgo.net/en/list

- Comes up often in interview question
- each node has a next property that points to the **next** item in the list
  - This is where **pointers** come up
  - You can only look at the value or the next value
- Is a type of **graph**
- Good for creating a **cache**
- A doubly linked list has a previous pointer as well

#### Big O

- Beats arrays when **adding to or removing from head**
  - O(1) whereas `array.unshift` or `array.shift` is O(n)
- **Finding** an Item in both arrays & linked lists
  - O(n)
- **Deleting** an Item in both arrays & linked lists
  - O(n)


### Hash Table

> Bad at sorting, amazing at lookups

- Organizes data for quick look up on values for a given key

| Pros          | Cons                       |
| ------------- | -------------------------- |
| Fast lookups  | Slow worst-case lookups    |
| Flexible keys | Unordered                  |
|               | Single directional lookups |

- Implementation in JS is a map with keys that can be functions
- We need a way to translate keys into a memory address
- For the same string you want to get the same result every time
- We interact with a hash table the same way we do with an object
- For a Hash Table to be efficient it has to have a *good hashing function* that doesn't produce a lot of **collisions**
  - collisions happen when the hashing function returns the same integer for two different inputs
- Make sure to **initialize** the size of your hash table to something that is reasonable for the expected size of your data set
  - otherwise you are going to have to **resize** the table which is not a big deal unless you have to do it a lot

Example of initializing size of hash table

```ts
class HashTable {
  public storage = []
  private tableSize = 25
}
```

#### Separate Chaining

- For collisions, we use a technique called separate chaining
- We store collisions in a list

```js
  set(x, y) {
    let i = hash(x)

    if (!this.list[i]) {
      this.list[i] = []
    }

    this.list[i].push([x, y])
  }
```

#### Open Addressing

- Another technique to deal with collisions

- **process** [1]:
  - at each index of our list we store one and one only key-value pair
  - when trying to store a pair at index x, if there’s already a key-value pair, try to store our new pair at x + 1
  - if x + 1 is taken, try x + 2 and so on…
  - when **retrieving** an element, hash the key and see if the element at that position (x) matches our key
  - if not, try to access the element at position x + 1
  - rinse and repeat until you get to the end of the list, or when you find an empty index — that means our element is not in the hash table


#### Benefits

- Lookups are O(1) in best case & average case scenarios
- O(n) in worst case scenarios
  - this is for hashing functions that return a lot of collisions
  - it there are a lot of collisions it will tend towards O(n)

#### es6 Sets & Maps

- keys can be a number, or string, or function
- **insertion** and **retrieval** are all constant time
- Under the hood they are implemented with **hash tables**

##### Sets

> Good use case is for adding users

- A set is like an amorphous cloud that does: 1. Adds 2. Removes 3. Contains

```javascript
set
  .add(5)
  .add(7)
  .add(7)
```

- Only 5 and 7 will be added once

- No duplicates
- No guarantee of order
- ES6 has native sets along with weakSets

##### Maps

- Similar to JS objects (key value sets)
- they don't have prototypes, inheritance or methods
- No concept of order
- No dupe keys but you can have dupe values
- ES6 has native maps along with weakMaps

##### Array

| Pros         | Cons         |
| ------------ | ------------ |
| Fast Lookups | Slow Inserts |
| Fast appends | Slow deletes |

</article>

<article id="2">

## Data Structures - Implementations:

##### Implementations deal with that is happening under the hood--what is going on in the blackbox

### Implementing Arrays

#### Array Lists

##### Primary lesson is to learn to make decisions based on the problem you are getting at

- BIGO:

  - Gets: O(1)
    - You have to loop through the list until you find the right node
  - Adds / Deletes: O(n)

- **Analytical Q's to ask yourself:**
  - _Will this problem require a lot of gets?_
  - _Will it require a lot of deletes?_
    - For Array lists if you want to do **a lot of gets **this is a great solution
    - But not so much for the case where you want to do **a lot of deletes**

![Array List](https://btholt.github.io/four-semesters-of-cs/img/array.png)

- We are going to fake these in JS but really we are borrowing from Java
  - These concepts are really important in non garbage collected languages like Java (or Jakarta ;)
- One annoying thing in ArrayLists is you have to collapse the array if you deleted an item
- [a,b,c,d,e,f,g]

  - -> delete index 3
  - -> array is [a,b,c,(blank),e,f,g]
  - -> shift elements 4,5,6 back one index
  - -> array is [a,b,c,e,f,g]
  - -> decrement length

- Tradeoff: This optimizes **gets** and deoptimizes **deletes** and **insertIntos**

Exercise:

<p data-height="300" data-theme-id="31719" data-slug-hash="wmYoJG" data-default-tab="js,result" data-user="RyanGarant" data-embed-version="2" data-pen-title="Visualized Data Structures: Array List Exercise" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/wmYoJG/">Visualized Data Structures: Array List Exercise</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

- BIGO:
  - Gets: 0(n)
    - You have to loop through the list until you find the right node
  - Adds / Deletes: 0(1)



##### Constructor Function

- **Storage**: using a string instead of an array so we can feel what it is like to build in that functionality ;)

##### Methods

```javascript
push(value) // adds value to the front & returns size of stack
pop() //removes value from front, returns value
size() //returns size of stack as an integer
```

<p data-height="300" data-theme-id="31719" data-slug-hash="vWLpYe" data-default-tab="js" data-user="RyanGarant" data-embed-version="2" data-pen-title="Stack" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/vWLpYe/">Stack</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

```javascript
const Stack = function() {
  this.storage = ''
}

Stack.prototype.push = function(val) {
  this.storage = `${this.storage},${val}`
}

Stack.prototype.pop = function() {
  const lastValIndex = this.storage.lastIndexOf(',')
  this.storage = this.storage.substring(0, lastValIndex)
}

Stack.prototype.size = function() {
  console.log((this.storage.match(/,/g) || []).length)
}

const myWeeklyMenu = new Stack()

myWeeklyMenu.push('redBeans')
myWeeklyMenu.push('blueBeans')
myWeeklyMenu.push('yellowBeans')

myWeeklyMenu.pop()

myWeeklyMenu.size()

console.log(myWeeklyMenu.storage)
```

## Queues

![](images/queues.png)

<p data-height="300" data-theme-id="31719" data-slug-hash="wPEyRg" data-default-tab="js" data-user="RyanGarant" data-embed-version="2" data-pen-title="Queue Data Structure" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/wPEyRg/">Queue Data Structure</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>
</article>

[1]: https://odino.org/this-is-how-a-dumb-hashtable-works/

