---
title: 'Hiring Process & Tips'
description: 'Tips on the hiring process'
author: 'Ryan Garant'
---

<article id="1">

> Most of this material is derived from this Frontend Masters Course [1]

## Process

#### 1. Resume

- Get a recommendation
- Make sure experience is relevant

#### 2. Coding Challenge

- Clean, correct code
- Don't miss details

#### 3. Recruiter Phone Screen

- Read the company's engineering blog
- Learn about the company
- Ask engaging questions
- Have highlights ready
- Have notes up

#### 4. Technical Phone Screen

- Sometimes it will be a simple algo to check if you can code
- Shorter than onsite interview (around 45 min)
- Be able to discuss previous projects in depth
- Have a good balance of conversational and formal tone

#### 5. Onsite Interview

- Little longer
- Communicate clearer
- Have CS fundamentals
- Learn the fundamentals of algos, don't have to get into the weeds
- Talk through your thought process especially when you hit a speed bump
- Questions can range from Comp Sci, to Language specific, to Frameworks, to math

</article>

<article id="2">

## Pro Tips

### algos

1.  Don't aim to memorize just understand the higher level
2.  Find themes and don't jump to conclusions
3.  Practice with a timer, speed matters
4.  Actually practice, reading doesn't count
5.  If you ever do in-place algos, you have mutable side effects
    - save space but can have unintended side effects
    - discuss with interviewer

### resources

- InterviewBit
- LeetCode or Hacker Rank (excersizes)
- Interviewing.io or Pramp (real interviews)
- Geeks for Geeks
- github.com/jwasham/coding-interview-university
- Cracking the coding interview (js solutions online)

</article>

<article id="3">

## Common Interview Q's

### Stack & Queue

- Use an array to implement 3 stacks
- Implement a getMin() or getMax() method on your stack
- Create a queue using 2 stacks
  - So you have to make 2 stacks behave like a queue
- Sort a stack with the min values in order, on top. You can use another stack as a buffer
- Write a function that returns true if a string of brackets is valid/balanced
  - string bracket validator

### Linked List

- Delete the following:
  - a node in the middle of the linked List
  - a node with only a variable pointing at that node
  - a duplicate (is it already sorted?)
    - if not you would have to sort (n log n)
- Partition a linked list around a value
- Write a function for reversing a linked list
  - Can you do it in place?
- Check if a linked list contains a cycle
- Find the kth to the last node

### Hash Table

- Count the number of occurences of all characters or words in a body of text or string
- Delete duplicates in a list
- Find a unique value in a list
- Find if two integers in a list add up to k

### Array / string

- Rotate a matrix, string, or an array
- Given an m x n bollean matrix, if an element is 0, set its entire row and column to 0
- Search foa value
- Write a function encodes a string by turning all spaces in `%20`
- Merge two sorted lists into one list
  </article>

[1]: https://frontendmasters.com/courses/data-structures-interviews/
