---
title: 'Node.js'
description: 'Node.js nuff said'
author: 'Ryan Garant'
---

#### Note: A large part of this content has been distilled from [Scott Mosse's online course] unless otherwise noted(https://frontendmasters.com/workshops/api-design-node-v3/#player):

<article id="1">

## HTTP API

> tldr; a server than creates an HTTP interface for interacting with some data

### REST

> tldr; most popular API design pattern, but is not the silver bullet. Very blurry definition

-   combines:

    -   DB resources
    -   route paths
    -   HTTP verbs

-   made popular when SaaS products started offering APIs for integrations
-   hard to scale with complex data models and client requirements like graph dbs
-   **good for flat data models** that don't depend on each other

### Node.js and APIs

-   Node.js not the best for CPU intensive tasks
    -   data crunching
    -   ML
    -   big math
-   Try to keep everything async so it can handle many concurrent requests

### Express

-   the standard API framework for Node.js
-   Does:
    -   manages sockets
    -   route matching
    -   error handling
-   Most api plugins are compatible with express

### MongoDB

-   go-to non-relational DB, works like a dream in Node.js
-   tons of hosting solutions
-   **Mongoose: ORM / ODM** and other libs are some of the best for any DB

#### Middleware

> a list of functions that run in roder before your controllers

-   This is not unique to node or express but is a software design pattern
-   intention is not to respond to requests although they can
-   examples
    -   morgan: logs
    -   body: get the body of response
    -   cors: set up cors
-   `next()` will call the next middleware

#### Routes

-   Express allows you to abstract to use a router
    -   similar to what app can do as it relates to verb combos
    -   then you can mount it to app the same way as middleware
    -   Best practice to abstract lots of routes out into different files

```js
router.get('/me', (req, res) => {
    res.send({ me: 'Ryan' });
});

app.use('/api', router);
```

</article>

<article id="2">

## Data Modeling with Mongo

-   Schemas for _schemaless_ db? yes!
    -   MongoDB is a Schemaless document store
    -   you will go cray cray if you don't use schemas though

### Schemas

-   Schemas define the instructions for the model
-   They include
    -   validations
    -   hooks
    -   default values
    -   operations like trimming
    -   indexes
-   Schemas create models which allow us to interact with MongoDB

### Routes & Controllers

> Controllers are just middleware with the intent to return data

-   Think of `res.send` as your return statement
    -   Don't write code after that for the most part
    -   Webhooks would be one of the only reasons to do this
        -   send a response immediately and then go process the webhook
-   Controllers implement logic to interact with DB
-   Can generalize controllers for different routes
    -   getOne
    -   getMany
    -   updateOne
    -   createOne
    -   removeOne

### Using models inside

#### CRUD

-   **C**: `model.create({})`, `new model()`
-   **R**: `model.find()`, `model.findOne()`, `model.findById()`
-   **U**: `model.update()`, `model.findByIdAndUpdate()`
-   **D**: `model.remove()`, `model.findByIdAndRemove()`

### Authentication

> You can never really truly protect an api, but requiring auth can make it safer

-   **Authentication** controls if a request can proceed or not
-   **Authorization** controls if authenticated request has the correct permissions to access a resource
-   **Identification** determines who the requester is

#### JWT Auth

> Tokens passed on every request--it's stateless

-   traditional methods of auth are stateful in that they keep track of sessions in redis or something
-   a type of **bearer tokens**
    -   api key is another type
-   Created by a **combo of secret and payload** like a user object
    -   api verifies token was created with expected secrets
    -   then return token that can be used for authorization and identification

</article>

<article id="3">

## GraphQL

### GraphQL vs REST

-   GraphQL only has one URL whereas REST has a resource url + verb combo
    -   you also don't have to version the urls anymore either
-   In REST, the **shape and size of the data** resource determined by the server
    -   with gql it's determined by the **query**(request)
    -   So REST data is hardcoded, in gql it is dynamically determined at runtime
-   In REST a single request will execute on one controller on the server
    -   In gql a request could potentially hit several resolvers (which are like controllers)
-   In REST multiple calls to get related data whereas you can

### DB Schema vs GQL Schema

-   DB schema is for keeping data consistent when adding data to db
-   GQL schema is for defvining what resources are available for querying, how they relate and how you can query them
-   Both schemas can be the same or not.
    -   DB schema is a **good starting point** for your GQL schema
-   GQL schema sits in front of your DB queries
    -   it validates incoming request queries
-   Some GraphQL tools create GQL APIs based off of your DB schemas and visa versa

### Creating schemas with SDL

-   Schema Definition Language (SDL)
-   Instead of using functions to create a schema, use a verbose, string based syntax for your schemas
    -   later you can consume it as an AST and do whatever you want with it

### Scalar and Object Types

-   Everything boils down to these values
-   Built in **primitives**
    -   String
    -   Int
    -   Float
    -   Boolean
    -   ID (no validation; just a unique string)

### Resolvers

> tldr; Are like controllers but instead resolve types all the way down

-   Resposible for **retrieving data**
-   Every query and mutation your schema has, must have a resolver that returns the specified type
-   types and fields on types often have resolvers as well
-   Incoming query dictates which resolvers run and in which **order**
    </article>
