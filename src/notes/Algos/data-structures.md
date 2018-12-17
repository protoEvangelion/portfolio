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
- Must be **idempotent**
  - Does not change state no matter if called a billion times with the same input (more on that here: [2])

| Pros          | Cons                       |
| ------------- | -------------------------- |
| Fast lookups  | Slow worst-case lookups    |
| Flexible keys | Unordered                  |
|               | Single directional lookups |

#### Used by:
  - JS
  - Databases
  - Caches

#### Great when:
  - If we have the key, we know where to look in memory
  - Constant time looksups, adds, deletes on average

#### Tradeoff:
  - Memory footprint (need a sufficiently large amount of space for the hashing algo)
  - If you are using a hashing algo like `sha256` you are defeating the purpose of a hash table which is high perf

#### Implementation

- Implementation in JS is a map with keys that can be functions
- We need a way to translate keys into a memory address (that's where a hashing algo comes in)
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

##### Separate Chaining

- For **collisions**, we use a technique called separate chaining
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

##### Open Addressing

- Another technique to deal with **collisions**

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

### Trees

> Great for when you have ordered data and need super fast lookups (log n)

#### Binary Search Trees

![](images/bst.jpg)
_Provided by [Brian Holt](http://btholt.github.io/four-semesters-of-cs/)_

- smaller nodes on left, larger nodes on right
- Nodes that have no children are **leaves**
- A node has 0, 1, or 2 subtrees
- for `add` you compare the node in hand to the node you want to add and say
  - is my node I want to add greater than the node in hand?
    - yes => go left
    - no => go right
  - Once you get to a null node, stick your node there
- BSTs don't perform well if you add a sorted list to it

<p data-height="300" data-theme-id="31719" data-slug-hash="LJXXee" data-default-tab="js,result" data-user="RyanGarant" data-pen-title="Visualized Data Structure: Binary Tree Exercise" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/LJXXee/">Visualized Data Structure: Binary Tree Exercise</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>

#### AVL Tree

> AVL search trees help maintain fast lookups which is the main strength of BSTs

- Are **specialty BSTs**
- The logic of going left & right is the same as in BSTs
- The difference is when you come out of recursion, you check if the tree is in balance
  - If the difference in **heights of sibling trees is > 1** the tree is out of balance
- Worst case is `O(log n)`

##### Problem it solves

- Fix the unbalance of a normal BST
- Unbalance increases space/time complexity
- The whole point of an AVL tree is to mitigate the worst case scenario of a binary search tree

<p data-height="300" data-theme-id="31719" data-slug-hash="rxLOOp" data-default-tab="js,result" data-user="btholt" data-pen-title="Visualized Data Structure: AVL Tree" class="codepen">See the Pen <a href="https://codepen.io/btholt/pen/rxLOOp/">Visualized Data Structure: AVL Tree</a> by Brian Holt (<a href="https://codepen.io/btholt">@btholt</a>) on <a href="https://codepen.io">CodePen</a>.</p>

### Bloom Filters

- Is a **collection** data structure
- It **tells you if something is NOT in a set**
  - Very fast
- However it cannot tell you definitely if something is in a set (false positive)
  - To reduce false positives you have to increase the collection size at the cost of > mem footprint
- The hashing algos they use are not crypto functions because it is designed to be ultra fast

#### Use case

- Medium uses Bloom Filters for their recommendation engine: https://blog.medium.com/what-are-bloom-filters-1ec2a50c68ff
- Bitcoin uses Bloom filters to speed up wallet sync [3]
- Chrome used to use a Bloom filter to identify malicious URLs [3]

#### How it works

- Essentially is an array of 0's
- Uses a couple different hashing functions
- Each hashing function returns an index
- Then we take that index and flip the 0 to a 1 signifying that whatever we passed to the hashing function lives in our collection
- If there is a collision you have to accept the tradeoff of the false positive
- In Medium's case, if their bloom filter gives them a false positive, they will just not show that article

<p data-height="300" data-theme-id="31719" data-slug-hash="rZRQGg" data-default-tab="js,result" data-user="RyanGarant" data-pen-title="Bloom Filter es6" class="codepen">See the Pen <a href="https://codepen.io/RyanGarant/pen/rZRQGg/">Bloom Filter es6</a> by Ryan Garant (<a href="https://codepen.io/RyanGarant">@RyanGarant</a>) on <a href="https://codepen.io">CodePen</a>.</p>


### Tree Taversal

> The way that you access nodes on a tree data structure

#### Depth First

You have 3 options of how you want to process the nodes

1. **preorder**
   - Most intuitive
2. **inorder**
   - Allows you to get a sorted list
3. **postorder**
   - Process left tree then right tree then itself

#### Breadth First

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
[2]: https://github.com/getify/Functional-Light-JS/blob/13a3bdafb4edb83207db76212312472aab20d06a/manuscript/ch5.md#once-is-enough-thanks
[3]: https://en.wikipedia.org/wiki/Bloom_filter#Examples