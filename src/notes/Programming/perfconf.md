---
title: 'Gleanings From 2019 Perf Conf'
description: 'Tips on optimizing standing & sitting to reduce pain, increase productivity, & improve quality of life'
author: 'Ryan Garant'
date: 'April, 29 2019'
---

https://perfmattersconf.com/2019.perfmattersconf.com/

Use this outline to below to topics of interest. They are self contained modules that make sense on their own.

-   Intro
    -   Guiding principles
    -   Vision for company wide perf culture
    -   Dozens of practical tips you can apply today
-   Building a company wide performance culture
    -   Culture of happy users
    -   Obtaining buy in from executive sponsorship, product teams, marketing team, and developers
    -   Setting Performance Budgets connected to business value
-   Practical ideas to apply
    -   SVG
    -   Fonts
    -   JS
    -   Images
    -   Network
    -   3rd party

**Todo**:

-   start with the problem
-   Tie in the idea that it is significantly more costly to undue systemic performance, than it is to integrate at ideation stages & daily developer workflows
-   make sure that it is clear you are speaking about site performance
-   stick to gleaning metaphor not thread
-   make sure you are not communicating this as the end all be all or as a replacement for the Gospel
-   Discuss how this is an aggregate of ideas
-   Highlight practical tips somehow?

## Big Ideas

The overarching principle gleaned from the 2019 Perf Matters conf, was how to weave a productivity mindset from throughout company teams leading to delighted users & increasing bottom lines. Before diving into how to build a company wide performance culture & practical tips on improving performance, so as to not exclude those who are not familiar with the idea of gleaning. In ancient Israel, God commanded the Jews to only pass over their crops once during the harvest, so that those who had financial difficulties like widows and orphans could have something to eat. (TODO: bring in quote). Being fairly new in this ocean of web performance, I see myself as one gleaning from the years of labor from the greats like Steve Souders & Addy Osmani. The gleanings I will share with you today can be placed into two categories: theoretical & practical. The first being ideas revolving on how to progress your company towards a holistic performance culture & the latter being a wide range of practical tips you can start applying today. It is exciting to know that by applying these ideas, we can push the boundaries of what is considered acceptable perf standards, providing products that can benefit the lives of people groups in every nation.

## Building a company wide performance Culture

If performance is not included at the ideation & design stages, the problem that can easily result is systemic inefficiency at every layer of the product. Though tools & techniques can band-aid performance to an acceptable level, they will not fix the heart of the problem. If the culture of the company isn't behind your performance efforts, it will be near impossible to affect lasting changes.

### Who To Get Involved In Pef Culture

So how do you attain buy in from various groups within your company? The recommendations given involve first getting product teams on board, then moving to gain executive sponsorship, involving marketing stakeholders, and finally the implementing developer teams.

#### Product Teams

The challenge of selling product teams on investing in performance, is their goal ship features faster. They can see performance as mutually exclusive to features. The way to overcome this, is to communicate that focusing on performance first will reduce time to deliver features faster in the long run because of less **rework**. On top of that, you can demonstrate to them that performance itself, though intangible, is a feature that will lead to a better UX & thus more delighted users.

#### Executives

Selling executives on investing in this area can be achieved through performance budgets by showing a clear correlation between how improving a performance metric leads to achieving business outcomes. One practical way of doing this is first identifying a "hero" metric like conversion rate. You can then plot this metric against performance metrics to identify correlations. The specific technique mentioned was using random forest classifiers to show which perf metric most correlates with the hero metric. TODO: link to talk. You can then derive a perf budget from the incremental business improvements to the hero metric. Finally make this into a visual, and publicize it strategically internal company social networks where executives are watching.

#### Marketing

Why include marketing in gaining momentum on building a perf culture? If marketing knows that perf is important for company success, they will be more likely to include devs in the vendor selection process because they know devs understand underlying performance considerations in more depth. The technique for this group, is to surface a few critical performance metrics through dashboards. The goal here is to make dashboards consistently visible at the very least on a monthly or quarterly basis. In doing so, it will keep performance top of mind and continue moving the conversation forward. They will also be encouaraged as they are seeing the needle of performance move forward, giving them addition confidence that they company is moving in a positive direction!

#### Developers

Selling the implementing developer teams (especially if you are on one), is much easier since the language and benefits of performance comes much more naturally. Most developers I have interacted with really care about making their tools, processes, and work fast, but they often feel pressured to deliver features fast, so they have the time to ensure their work is performant. That is why it is so important to build a culture of performance at the higher levels first so that developers have the sponsorship to include a performance mindset in their daily workflows. Some practical ideas to help integrate a perf mindset in a developer team's daily workflow is abstracting common patterns that require perf optimizations. One area you can abstract is delaying image loading. Instead of leaving each developer of a component that includes an image on their own to figure out how to lazy load load it, if all they had to do was add an attribute to the image, that would save time and improve implementation consistency. Chrome has recently announced that it is working on abstracting image lazy loading to the browser level. https://addyosmani.com/blog/lazy-loading/

A few more practical ideas discussed are:

-   Display a competitor dashboard for your team to rally behind
-   Setup a rotating perf team, of a couple people (junior to senior), that take ownership for perf success for a given sprint
-   Make public your perf dashboard easily accessible for every one on a given team
-   Surface perf regression alerts as a through RUM or synthetic reporting service like Dynatrace and/or SpeedCurve

### Applying Perf Optimizations

Overall, the idea of getting your company onboard with a performance mindset, involves at its root starting a conversation around performance, and continuing that conversation through timely posts & dashboards. As you gain buy-in from groups within your company, it will free up developer teams to spend time on actually improving performance. As a developer, the below content are the ideas that I am passionate about and truly excite me. So let's now turn our attention to the nitty gritty performance optimization.

#### JS Optimizations

My wife & I have recently binged the infamous "Tidying Up" Netflix show leading to a revolution in our house of donating bags of clothes, reducing drawer space, and making it faster to find clothes we want to wear and even optimize the speed it takes to launder our entire wardrobe! Addy Osmani connected the KonMari Method™ with in promoting, "If JS doesn't bring you joy, thank it and throw it away." Though intended as tongue and cheek, every method of optimization I have seen comes down to either throwing code away, or deferring when you run load or run code.

I had high expectations of Addy with his guru status, to which he delivered more than expected. Most of the JS optimizations discussed below come from his post: https://medium.com/@addyosmani/the-cost-of-javascript-in-2018-7d8950fbb5d4.

His main argument is that the cost of JS is shifting from compiling to executing. Because JS is CPU bound, this can have serious implications depending on the power of a mobile device. Since, the amount of JS we are shipping is increasing year over year, we need to focus our attention on ways to improve the CPU bottleneck.
[](https://www.notion.so/29206c2c66e546e98bde28442511e41a#d4100851f0664641b8e43e805172c66e) [https://speedcurve.com/blog/javascript-growth/](https://speedcurve.com/blog/javascript-growth/)

##### Reducing Work the Main Thread

When JS blocks the main thread, it blocks all other tasks on the main thread, even native things like clicking on a checkbox. The best thing you can do here is to not do stuff at all! One way, is to remove code that is not even executed using [Chrome's coverage feature](https://developers.google.com/web/updates/2017/04/devtools-release-notes#coverage). This works for css files as well!

By using [Chrome devtools](https://developers.google.com/web/updates/2019/03/devtools#longtasks) or the [Long Tasks Browser API](https://developer.mozilla.org/en-US/docs/Web/API/Long_Tasks_API), you can identify JS bottlenecks blocking the main thread and thus slowing down your metrics.

If you can't remove work off the main thread, the next approach you can take is deferring work. By, using `async` & `defer` attributes on script tags, you cannot not only move parsing to a separate background thread, but also load JS at a later phase in the load lifecyle. You can also, defer by loading JS on visibility or upon a specific user interaction using the [intersection observer API](https://developer.mozilla.org/en-US/docs/Web/API/Intersection_Observer_API).

##### Automating Dev Workflows

In order to hold the line on perf budgets, you can integrate them at the **CI level** and fail builds or send an alert if the metric regresses beyond an acceptable point. You could also leverage ESLint (which is probably already in your project), by using it's `no-restricted-imports` rule in order to [disallow large imports from your JS projects](https://addyosmani.com/blog/disallow-imports/).

##### Achieving "Hot Runs"

The final tip to reduce work on the main thread, is to skip compilation by transcending into the "hot run" code caching ether. Though the implementation might change, v8 handles code caching through cold, warm, & hot runs. Hot runs are the fastest as you can completely skip the step of compilation. [](https://www.notion.so/29206c2c66e546e98bde28442511e41a#724d70bd58864e55a398541a4caedd41) [https://v8.dev/blog/code-caching-for-devs](https://v8.dev/blog/code-caching-for-devs). On the third time a resource is loaded, Chrome hands the file & its metadata from the cache to v8 which then deserializes the data & skips compilation. In order to get into a hot run, there are a few things we can do:

-   Don't change code
-   Don't change urls
-   Don't change execution behavior
-   Split out stable files like 3rd party libraries
-   Group smaller files together (<1kb will not be cached)
-   Avoid inline scripts
-   Use service worker caches which will lead to a hot run on the 2nd load instead of 3rd

In order to test if your files are being hot cached, you can use chrome://tracing and starting Chrome with `google-chrome --user-data-dir="$(mktemp -d)"`. You can get more instructions on the internals of v8 code caching and testing if files are "hot" [here on the v8 blog](https://v8.dev/blog/code-caching-for-devs#tracing).

#### SVG

Sarah Drasner did a fantastic job push the boundaries of the areas that SVG can affect performance positively. Not only are SVGs beloved for their sharpness, ease of color control, ability to animate, accessibility improvements, and better semantics, but they can be more efficient than images in many cases. The two primary axes (todo plural?) of optimization for svg are in sending less data, and sending less http requests. Another cool thing that I haven't thought of in using SVG, is in [React page transitions](https://codepen.io/sdras/pen/gWWQgb)! (TODO: convert to gif: https://s3.amazonaws.com/media-p.slid.es/videos/75854/VdJG5cQD/reactpagetransitions.mp4) Overall, speed and rich user experiences are not always mutually exclusive--you can have the best of both worlds.

#### Variable Fonts

Another area where you can have your cake and eat it too, is by using variable fonts. As a sidenote, Cloudflare discusses how to further optimize Google Fonts by using [cloudflare workers](https://blog.cloudflare.com/fast-google-fonts-with-cloudflare-workers/). One variable fonts allow you to use any weight, width, or custom axis. The implication of this is that you can finally achieve smooth animations between weights & sizes. Variable fonts can be optimized like regular fonts as well through woff2 compression & Filament Group's [subsetting tool](https://github.com/filamentgroup/glyphhanger). Variable fonts reduce the amount of requests & most of the time reduce the total file size as well!

#### Fast Network

Delivered by the guy who created the infamous WebPageTest tool, [Patrick Meenan](https://www.slideshare.net/patrickmeenan/resource-loading-prioritization-http2-oh-my) gave us tons of info on how to improve upon the network bottleneck. The main recommendation is to optimally order resources for the user. Some other gleanings were:

-   Use CDNs that don't have [broken http/2 implementations](https://github.com/andydavies/http2-prioritization-issues#cdns--cloud-hosting-services)
-   Stop [sharding](https://www.cloudflare.com/website-optimization/http2/what-is-http2/) domains
-   Use priority hint attributes like `importance="low"` and `rel="preload"`
-   Hide non-critical resources like images using lazy loading techniques
-   Minimize 3rd-party resources early in load

#### Minimizing 3rd Party Impact

> Third party script execution is the majority chunk of the web today ~ Patrick Hulce, Lighthouse

These days, the main bottleneck is JS which is increasing at a rapid rate every year.

JS 3rd party size Image: https://speedcurve.com/blog/javascript-growth/

[Ryan Townsend](twnsnd.com/perfmatters) did a phenomenal job in describing the ways in which he has successfully corraled 3rd parties and minimize the surface area of potential havok they can create. He defines 3rd parties as any infra or service on a separate origin that you don't control. He cautions that though we may find many offending 3rd parties, we should be careful of forcing our weight around to remove them:

> You don't make friends by taking toys away ~ Ryan Townsend

#### Questions To Optimize 3rd Parties

Townsend offers these questions to clarify how to deal with a given 3rd party script:

1. When & where do you need to load the script?
2. How critical is the script?
3. Do we need ALL of it?
4. Can you load it asynchronously or defer it?
5. Can you self-host?
6. Can you preconnect or preload?

Answering the question of self-hosting is quite critical. If possible, you can benefit from:

-   no DNS lookup
-   no Connection Setup
-   no SSL negotiation
-   better http/2 prioritization
-   use far-future expiry through control fingerprints
-   plays nice with CSPs

An area to look to apply the optimization of self-hosting is tag managers like GTM. When dealing with tag managers, he recommends to migrate long term scripts from your tag manager to the core site.

#### Tools to Help

To easily see where JS is coming from, use the Chrome devtools Network tab and group by domain. To get a visual of how 3rd parties fan out on your site you can use [requestmap.webperf.tools](http://requestmap.webperf.tools/render/190429_YT_172b9846c7eec3a5d121f865be7501ab). In order to rate your 3rd parties in either the vendor selection process or just to understand how they fair, you can use the jsmanners.com tool.
