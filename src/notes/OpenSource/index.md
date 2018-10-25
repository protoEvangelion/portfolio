---
title: 'Security'
description: 'Web Security'
author: 'Ryan Garant'
---

<article id="1">

## Office of Open Source MGMT

### What do they do?

- Tracks consumption of open source projects
- tooling
  - [CLA assitant](https://cla-assistant.io)
  - [Microsoft's Open Source Portal](https://github.com/Microsoft/opensource-portal)
  - [GHTorrent](ghtorrent.org)
  - [GHCrawler](github.commicrosoft/ghcrawler)
- guides & docs
  - often what is most missing
  - license 101s
  - contributing 101s
- mangages license usage
  - what licenses should projects use?
  - answer questions
- provides structure for contribs
  - they will identify basic path to follow

### How they do it at other orgs

- align open source goals with biz goals
- create compan wide policy that encourages open source contribution

### Tools to manage open source dependencies

- GitHub Marketplace (github.com/marketplace/category/dependency-management)
  - depfu
  - myget
  - greenkeeper
  - sonatype depshield
  - renovate
  - dependabot
  - snyk
- fossa

### Typical Hurdles

- Resources
  - doesn't require a lot of resources
    - Google has 45,000 devs and their Open Source MGMT office is 17 people
- Who will manage it?
- How to organize it?

### Your plan

- What open source projects are being consumed?
- What open source technologies are fundamental to achieving business objectives?
- What does our current open source contributions look like?
- How are new open source projects used?
- How else can be we utilizing open source projects?
- Are you going to document the journey?
- How will you share success and failure?

### Measure Inches Not Feet

- Lofty goals, reasonable expectations
- create a dashboard that collects and displays pertinent data for this initiative

#### Metric Examples

- Number of submitted, open ,and accepted issues and pull requests Age of open issues and pull requests
- Contributions to consumed projects
  - Not necessarily lines of code or commits, but contributions that have been merged
  - Code or monetary
- Do you have formalized processes?
- Are people using said processes?
- Adoption
  - downloads
  - forks
- Social Engagement
  - amount of meetups
  - conferences

### Creative Use of Mechanics

### How else can open source help

- Code challenges
- Collaborator to coworker
- Snipe-IT (https:/snipeitapp.com)
  - asset management & software license tool
  - can management licenses across org
- Can help you identify potential new hires

#### Extra Links

- https:/todogroup.org
- https:/github.com/todogroup/job-descriptions

</article>

<article id="2">

## Creating a workflow for your team

### Branching with git

- integral to workflow discussions
- it's cheap
  - doesn't create a copy of files
  - just creates a pointer to a point in history
- it's simple (small api)
  - only a couple of merge strategies
  - when conflicts occur git doesn't try to be smart
    - it lets us resolve it
- disposable
  - branches are designed to be disposable
  - its good to delete branches because after you merge a branch, you don't need a pointer telling you that a branch used to exist
- why is there a push back on branching?
  - general feeling is that it is more work
  - some feel it complicates the process
  - so many unpruned branches can cause confusion
- benefits of branching
  - safe to mess up
  - easy to deploy and test

#### What is a branch

- a commit is a complete snapshot of the repo at that point in time
- the underlying data structure is kinda like a linked list
- one commit references its parent
- HEAD:
  - the lens by which you are looking at the branch
  - an alias to pointer of currently checked out branch
- Rebasing good for people who like a linear history
  - can also make merging conflicts easier
- Merge is a simpler construct to understand for some people
- Besides master, all branches are pretty much equal
  - terminology like topic, feature, short-lived, long-running are just human constructions to describe what's going on but not necessarily true
- Branching is not the solution...it's part of the larger strategy of managing software

### Strategies

#### Trunk Based Development

- everything is based off of the trunk and everything gets merged back into the trunk
- it means that the master branch is deploy ready
- it's important that CI is involved to ensure each commit is tested before making it into master

#### GitHub Flow

- master is still deployment ready
- still base work off of master and merge back into master
- this strategy allows for deploying off branches directly like for testing
  - production or staging
- this allows branching to be decoupled from its environment

#### GitHub Flow + Releases

- git tags allow you to do this
  - allows you to have one source of truth
- tags are stationary (feature of git)
- the benefit of tagging a branch is it allows you to keep a branches work in history
  - it's a references point to the commit
  - it's a human readable name to that shaw
- GitHub recognizes tags and allows you to upload things alongside it like executables

#### A Two-Branch Workflow

- master & develop
- you only merge things into the master branch when you are ready to create a release
- master is deploy ready

#### Git Flow

- also a model of two long running branches
- gives you a structure to create new branches
  - **feature**
    - allows dev to continue working even if things are being deved in parallel
  - **release**
    - gets everything nice and tidy for release
    - naming convention is typically: `release-...`
  - **hotfix**
    - naming `hotfix-...`
    - merge into master
    - then merge into develop
- work is more structured

### Bigger picture

- designing a workflow
  - start with a branching strategy as your basis
  - incorporate existing toolset like Jira (GitHub just released a new integration)
  - explore integrations that put you where you want to be
  - iterate
- Do exercises @ bottom: https://github.com/universeworkshops/workflow

</article>

<article id="3">

## Designing Open Source Strategies

- Having some sort of standards clearly set up from the begininning
- Get an open source policy in place (_helpful for hiring and retention_)
- Look into having a "super maintainer"
- have guidelines on whether or not you can contribute to an open source project at work
  - and if so should it be on your companies repo?
- [Report on different strategies by Mozilla](https://blog.mozilla.org/blog/2018/05/15/whats-your-open-source-strategy-here-are-10-answers/)

### Inner Source Software

> Inner source is the use of open source software development best practices and the establishment of an open source-like culture within organizations ~ Wikipedia

- come up with an open source **policy** of guidlines for how people can partipate to open source
  - this helps mitigate possible negative publicity

### Framework

1. Start **contributing** to open source projects
2. **Ecosystem**:
   - Don't try to stick to what you know. Challenge yourself to use what the large community is using
   - like if React goes out of favor and Vue usurps it, try to use that on your projects
3. Resource Plannig
   - have a good idea of what resources you are willing to dedicate
   - if it takes you a while to get back to a new issue that could cause people to not use the product
   - if you are not making constant improvements & innovating that can also be a problem
   - getting time to do open source is difficult if the direct impact to business is not immediate
4. Automation
   - CI is the start of this
   - Documentation (a sign of quality)
   - Guidelines
     - like GitHub templates for opening new issues
   - Bots
     - helpful if you have a lot of traction
     - not essential at the beginning
5. Quality
   - have a good blog and website
   - high quality documentation
   - modularity
   - if your software is modular it makes it easier for someone to just jump into the code and solve a problem they care about rather than trying to understand the whole codebase
6. Communication Infrastructure
   - you could use Discourse for answering questions (also gives you an SEO boost)
   - and reserve GitHub only for bugs & feature requests
7. License
   - tldrlegal.com
   - fossa.io

### The Three Pillars

1. **Engage Quickly**

- this can have an amazing effect on perception of your open source project
  - especially if they are using support for another project that takes days for the to respond

2. **Motivate**

- rather than say just send a PR, give them some ideas about how to approach
- explain where to start in the codebase
- High PR request velocity is very important as it relates to motivation (a good KPI as well)

3. **Lead**

- have a clear vision and stick with that vision
- it's OK to say no if you don't think it fits with your technology vision
  - you can say hey this feature request is so specific that it doesn't meet the broader user base needs
- if an argument gets toxic it is important to step in and try to resolve the manner

</article>

<article id="4">

## Metrics That Matter

- The goal of a dashboard should be to **help a dev grow**
  - a bad metric would be like avg lines of code per dev
    - dont use it as a leaderboard type thing because you don't want to create a culture of competition
- though sometimes high level KPIs can be beneficial like:
  - bugs per app
- If you click on the insights tab a lot of the metrics are already there

### Metrics for Dev managers

- # of active PRs over time
- # of currently open PRs
- # of commits over time
- how long it takes avg to close a PR
- how log it takes avg to review a PR

### Metrics for Developers

- see if I'm constantly adding code to, or rewriting code, in the same files or the same conceptual area
- type of files I'm commiting the most
  - more JS than C#?
  - you should play on those strengths
- see # of open PRs that require my approval
- see # of stale issues assigned to me or created by me

</article>

<article id="5">

## Keynote Day 1

### Conf Atmosphere Notes

- lots of lights
- music transitions for speakers
- smoke machine
- lanyards with different colors distinguishing who is who like a speaker from an attendee

### Keynote random thoughts

- Pay attention to the idea of [inner source]()
- suggested changes in PR reviews
- New [github lab](https://lab.github.com/) basic to advanced training (like building github apps)
- security vulnerability checks for js, ruby, java, python, c
- token scanning for public repos if you accidentally upload an api token or key
  - you can also get securityadvisories through grapql queries
- GitHub actions
  - a new feature that provides events that you can listen for and then perform a particular action for your workflow

</article>

<article id="6">

## Integrating continuous integration and deployment with GitHub’s API

- Brian Douglas, Developer Advocate (GitHub)

- Continuous Integration (CI) is a software practice that requires frequently committing code to a shared repository
- When you commit code more often, it can raise errors much sooner
- Checks API alongside your CI:
  - to improve your development workflow
  - reduce the amount of cognitive load code a developer needs for debugging to find the source of the error
- Overview
- source control --> build --> deploy to uat --> deploy to production

### Build Step

- you can have your CI check if any PRs include jQuery
  - if so they can send you
- Checks API
  - sophisticated feedback
  - is a new tab
  - share more about your build from within GitHub
  - GitHub apps can use this (Travis CI is making this really amazing)
- You can check linting or language issues

### Deploy Step

- Netlify hooks into the deployments api and can handle multiple staging environments
  - check out their GitHub app
- Provides annotations based on successes and failures
- There is a deployment dashboard as well

### Getting Started Links

- developer.github.com
- developer.github.com/apps/building your first GitHub app
- github.com/DEGoodmanWilson/checks-api-ruby-demo
- github.com/bdougie/loglify
- github.com/bdougie/now-dogs
- probot.github.io
- developer.github.com/program
- github.community (for support)

</article>

<article id="7">

## Baking security into GitHub workflows without slowing you down

~ David Habusha, VP of Product (WhiteSource)

- Open source security management, licensing compliance, and quality assessment, are becoming essential for developers working to build software faster
- Developers are required to:
  - validate the security of open source components they use
  - prioritize how they handle actual security vulnerabilities, enabling a significant reduction of security vulnerability risk while maintaining productivity
- On average, more than **80 percent** of reported security vulnerabilities in open source libraries are not referenced by the developers
- Checking at push time bridges the dev & ops gap

- When developer pushes to a dev branch you can start scanning for vulnerabilities at that step
  - The checks API (only available on GitHub apps) will start that this step as a result of the push webhook
  - it is async so it won't stop the push
  - if there is a security vulnerability, it will report it on a PR or an issue
  - you can fail the build based on the result of the checks api

</article>

<article id="8">

## State of the Octoverse

- CI: Source Control System Quality Checks are done on every commit

- fastest growing countries:

  1. HK 1.8
  2. Singapore 1.7
  3. Egype 1.7
  4. Nigeria 1.7
  5. Bangladesh 1.7
  6. Greece 1.6
  7. Italy 1.6
  8. Turkey 1.6
  9. Malaysia 1.6
  10. portugal 1.6

- **Kotlin (2.6x), HCL(2.2x) & TypeScript(1.9x)** are the fastest growing languages
- **JavaScript** is the largest programming community
- **VS Code** is the largest OSS project

- Top OSS Contributors
  - Microsoft
  - Google
  - Red Hat
  - UC Berkeley
  - Intel

octoverse.github.com

</article>

<article id="9">

## professional services meeting

- look into Github Flow
- look into status checks
  - every time you commit code
  - code coverage

* look into actions
* look into GitHub apps for ideas

</article>

<article id="10">

## GraphQL Schema Stitching

- writing a graphql schema
- 50% of apps today use 1-2 APIs
- you need to know
  - which API holds which data
  - how to auth against each api
  - which fields indicate a ref to another api
- you can use `graphql-tools` to stitch schemas
- what happens if you have a type with the same name from two data sources?
  - you have to transform the schema
- Seems to be limited to graphQL apis`

</article>

<article id="11">

## High Performing Teams

> Lots of red builds & flaky tests leads to slower delivery

- look into NVS (Net Value Score)

</article>

<article id="12">

## Airbnb Monorail to Monorepo

- a journey of unraveling their Ruby app

### Monotrail PR life

- code review & CI
  - pre-merge in GitHub
  - Inner loop
  - code review
  - linting
  - unit tests
  - code coverage
- merged into `master`
  - all of ci is ran again
- Deployed to `next` (like uat)
  - staging environment
  - engineers manually test changes
- Deployed to Prod
  - live and visible to all end-users
  - gated behind feature flags

### Democratic Deploys

- deploy infra deploys tools, but does not deploy code for engineers
- every engineer can deploy into production
- every engineer owns, tesst, and ships their change
- no release team
  - every engineer is also a release manager

### Deploy Board

- their internal tool that shows CI & internal commits into master branch
- 10-12 commits a day
- shows everything that is going on

### Monorail to Monorepo

#### Hyperloop (frontend monorepo)

- SSR Node.js
- shared React codebase
- Based on Hypernova
- JSON over HTTP
- many smaller loops
  - packaged with an independent renderer
  - frontend code split by business unit
  - independent deploys
- Common logic is handled by shared (middleware) services
  - Hunter2 (auth)
  - Memeto (sessionns)
  - Kraken (API gateway)

#### Treehouse (Java monorepo)

- moving to Java from Ruby
  - c++ perf
- allows cross-language comms
- inter-service communication
  - message quque
    - reliable
    - replayable
    - can scale consumers and producers independently

### Service Configuration

- all config lives with service
- config as config changes are source-controlled
- our tooling picks up the config

### Infrastructure as code

- using kubernetes & terraform
- hardware layer is abstracted
- no more server management for product engineers
- lives in app config
- kubernetes hosts the applications
  - containerized
  - sidecar containers for shared logic

### Monitoring Tools

- Watchpoint (helps wrangle all the logging and monitoring tools)
  - observability tool
  - SLO viz
  - cross service tracing
  - log viz (Kibana)
  - aggregates data from
    - datadog
    - new relic
    - upshot (airbnb internal)

### Deploy pipelines

-stage

- deploy
- steps
  - deploy in default
  - shrink cluster
  - disable cluser
    - tasks
      - determine health providers
      - disable cluser
      - onitor disable cluster
      - force cache refresh
      - wait for disable
  - scale down

### Spinnaker for Continuous Delivery

- tool open sourced by Netflix
- helps dev pipelines to deliver faster

</article>

<article id="13">

## GraphQL perspective by Apollo

- The community around graph QL is growing tremendously
- developers LOVE using it
- graph QL is just a spec
  - you can use any DB, any server side language, and any data fetching mechanism
  - it is simply opinionated about the shape and connection of data
- opens up doors like schema stiching where you can have multiple apis stictched together and consumed as if it is one
  - this makes it an ideal place to collaborate across teams

### Three key components of collaboration

- **Centrality**: automatic mapping between client & server code
- **Universality**: you can talk about data in the same way that is language agnostic
- **Language**: out of the box (it's a language in itself which enables collaboration)

> Building up workflows is key to collaboration

### Collaboration workflow

1. open a GitHub issue

- request a modification to the GraphQL schema (contract that says what capabilities data has)

2. Implement the resolvers for the new schema

- bonus: clients can work against a mocked-out schema

3. Test your schema changes against current clients

- you can easily test changes because you are no longer vomitting up huge globs of data like with a REST API
- you can also hook your server up with GitHub checks

</article>
