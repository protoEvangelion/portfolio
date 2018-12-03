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

- combines:

  - DB resources
  - route paths
  - HTTP verbs

- made popular when SaaS products started offering APIs for integrations
- hard to scale with complex data models and client requirements like graph dbs
- **good for flat data models** that don't depend on each other

### Node.js and APIs

- Node.js not the best for CPU intensive tasks
  - data crunching
  - ML
  - big math
- Try to keep everything async so it can handle many concurrent requests

### Express

- the standard API framework for Node.js
- Does:
  - manages sockets
  - route matching
  - error handling
- Most api plugins are compatible with express

### MongoDB

- go-to non-relational DB, works like a dream in Node.js
- tons of hosting solutions
- **Mongoose: ORM / ODM** and other libs are some of the best for any DB

#### Middleware

> a list of functions that run in roder before your controllers

- This is not unique to node or express but is a software design pattern
- intention is not to respond to requests although they can
- examples
  - morgan: logs
  - body: get the body of response
  - cors: set up cors
- `next()` will call the next middleware

</article>
