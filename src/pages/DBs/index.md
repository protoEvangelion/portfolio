---
title: "DBs"
description: "Fundamentals of SQL DBs like SQLite, Postgres & MySQL"
author: Jay Gatsby
icon: "hammer"
weight: 1
---

<article id="1">

## General Intro Knowledge

> A DB is simply an organized set of data that typically persists

* Different DBs serve different purposes and are better for particular use cases
  * Relational Stores
    * SQlite
      * Operates off of a file like an Excel workbook
    * Postgres
    * MySql
    * Google Spanner
  * Key-Value Stores
    * Redis
    * Dynamo DB
  * Column Stores
    * Cassandra
    * Apache HBASE
  * Graph Databases
    * neo4j
    * graphQL
  * Document Databases
    * Mongo DB

</article>


<article id="2">

## Relational Algebra & Codds Relational Model

* Edward Codd in 1969 developed "Codd's Relational Model"
  * It is a way of organizing data like an Excel worksheet
    * A relation (table) is a set of tuples (rows)
    * Each element (cell value) in a tuple is a member of a data domain (set of allowed values)
    * These elements are called attribute values and are associated with an attribute (column name + type)
  * The important idea that comes from this is "schemas"

### Schemas

> Schemas come from the Greek word for shape...like the shape of your data

* Does not involve the values themselves but the shape
* Tables, column names, types and constraints
* Connected to your "data domain"

### Relational Algebra vs Relational Calculus

* Codd's theorum states that for every relational calculus we can come up with, there exists a relational algebra way of getting there

* To find the moves that Jeff Goldblum is in the:
  * Relational algebra way (imperative)
    * Join Movie and Actor over actorId
    * Filter the results to include those that include Jeff Goldblum
    * Select the movieTitle and year columns
  * Relational Calculus way (declarative)
    * Get movieTitle and year for Movie so that there exists an Actor A who was in the movie and is Jeff Goldblum

</article>

<article id="3">

## Structured Query Language (SQL)

* Direct extension from Codd's work
* Declarative
* Used in Relational Database Management System (RDBMS)
* Can be procedural as well like functions and control flow statements


### SQL Language Elements

1. SELECT clause `SELECT * FROM Employee`
2. WHERE clause `WHERE id = 123 AND is_admin = 'true'`
  * All the code after `WHERE` is called the Predicate
  * the `'true'` piece is known as the Expression
  * Both of these come together to form the Statement
    * A Statement is a complete sentence
    * Clauses are phrases of the sentence

### Command Line SQL

* You can run sql queries from the command line
* You can create dbs from cli
* you can delete dbs from cli

</article>


<article id="4">

## Quotes & Aliases

### Quotes

* Usually table names, column names and keywords are case insensitive
* 'Single quotes' are used for string literals
* "Double quotes" or `backticks` (MySQL only) for words that conflict with SQL keywords, or when case sensitivity is desired 
* Quotes can have a drastic impact on what you receive

### Aliases

* The `AS` keyword can be used to give a table or column an alias
* Only impacts the current query

<img alt="Aliases" src="images/alias.png">

</article>


<article id="5">

## Simple SELECT Queries

* Returns a result set
* FROM allows one or more elements to be returned from a relation

```sql
SELECT * FROM Employee
```
<img alt="Select Statement" src="images/simple-select.png">

* SELECT grabs all records from Employee table

* Choosing elements
  * elements are returned in the order that you ask for them
  * It's good to be explicit so that:
    * You minimize the amount of data that you are sending over the wire
    * developer intent is clear
    * less I/O
    * Future schema changes will not affect results

```sql
SELECT id, firstname, lastname FROM Employee
```

</article>


<article id="6">

## Logic & Control Flow

### WHERE

* used to filter a result set with a condition
* Make sure to use single quotes! unless you have a special use case or special characters

### Conditions

* >, <, >=, <=, =
* Not equal: <> or !=
* Within a range: `temperature BETWEEN 68 AND 75`
* Member of a set: `companyname IN ('Microsoft', 'LinkedIn')`
* String ends with: `email LIKE '%.gov'`
* String includes: `summary LIKE '%siracha%'`
* String length: `email LIKE '__'`

### AND, OR, NOT

* Boolean logic operators
* Parens for clarity

<img alt="Boolean" src="images/boolean.png">

</article>


<article id="7">

## Core Functions

* Each db has a slightly different set of core functions
* Some are the same like:
  * lower
  * max
  * min
  * count
  * substr
* You can use them in comparisons
  * `SELECT lower(title) AS name FROM Product`

### Debugging Conditions

* Conditions can be evaluated directly with a SELECT statement

```sql
SELECT 'mike@example.com' LIKE '%@example.com'; -- TRUE
SELECT 'mike@gmail.com' LIKE '%@example.com'; -- FALSE
```

</article>


<article id="8">

## Sorting & Pagination

### Sorting

* `ORDER BY` clause declares the desired sorting of the result set
* Sort Direction as `ASC` to `DESC`

<img alt="Sorting" src="images/sorting.png">

### Limiting

* Useful when dealing with large sets
* Can have good performance benefits when it comes to sending less data over the wire
* Doesn't help necessarily with making your DB do less work
* Performance gain could be huge if the DB doesn't have to sort the entire set
* Limiting should be your last clause (order matters!)

<img alt="Limiting" src="images/limiting.png">

### Offsetting

* Offset means to start with Nth result
* Combining this with LIMIT gives us the ability to paginate

<img alt="Offsetting" src="images/offsetting.png">

</article>


<article id="9">

## Joining Tables

### Relationships

* Not where the term "relational" comes from
* It actually comes from the the concept of relational algebra
* EX: 1 customer can have MANY orders

### JOIN

* Assemble tables together
* Joining can only be performed on a related column between two tables
* Whatever comes after the `FROM` is the left table and whatever comes after `JOIN` is the right table

```sql
SELECT *
FROM CustomerOrder AS o
LEFT JOIN Customer AS c
  ON c.id = o.customerid
```

* Four types of join:
  1. INNER JOIN
    * Will bring two tables together and will only give you things that exist in both tables
    * Will exclude non matches from left and right tables
    * Like if a customer exists in the customers table but doesn't have an order yet you wanna handle that case
  2. LEFT JOIN
    * Will ensure everything from the left table will be included but exclude non matches from the right table
    * Say you have Orders table on left and you want to add customername which is in the Customers table
      * LEFT JOIN would probably be the best fit because you want to include an order even if there is not a customer name match
  3. RIGHT JOIN
    * The opposite of LEFT JOIN
    * Some DBs don't support this like SQlite
  4. FULL JOIN
    * Will include non matches in both tables

* LEFT, RIGHT & FULL JOIN are known as OUTER JOINs
  * So OUTER JOINs allow for one or more rows to be partially empty because it doesn't have a corresponding match in anther table

#### JOIN Selecting Columns

* SELECT * is typically a bad idea because it can lead to duplicate columns like `id` which exists as a column usually in every table
* So it is better to SELECT only the columns you want using aliasing

</article>


<article id="10">

## Aggregate Functions

* Allows you to performa a calculation an entire result set and arrive at a single value
  * SUM
  * COUNT
  * MIN/MAX
  * AVG
* There are different aggregate functions from DB to DB

### Aggregate Functions and GROUP BY
  * Instead of taking an entire table and squashing it into one table you can do calcs on a 
    * These kinds of operations are great to do in the DB rather than on the frontend
  * If you use GROUP BY you can add something to select if you are not using it in GROUP BY

```sql
SELECT c.id, c.name, sum(o.amount)
FROM CustomerOrder AS o
INNER JOIN Customer AS c
  ON o.customerid = c.id
GROUP BY c.id
```

<img alt="Aggregate Month" src="images/aggregate-month.png">
<img alt="Aggregate Multiple" src="images/aggregate-multiple.png">

* The solution for using a WHERE clause on grouped results is the HAVING clause

<img alt="having" src="images/having.png">
</article>
