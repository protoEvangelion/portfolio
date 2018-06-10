---
title: "Component Architecture"
description: "How we can leverage a reusable Atomic Design component model"
author: "Ryan Garant"

---

<article id="1">

## Building out a component based design

* So I have two ideas here on 
  * This is a solution where components could be consumed at the **web content level** and at the **theme level**
  * Definitely use **Lexicon/Clay** either route we go
  1. Use **Freemarker macros** to encapsulate clay components
  2. Use **Soy templates** to encapsulate clay components
    * Soy templates can be called from within a freemarker template
    * There is currently a [soy-metal-clay library available](https://github.com/metal/metal-clay-components) that is in development
    * [Soy cheatsheet](https://github.com/liferay/soy-cheat-sheet#miscellaneous)

##### Here is an example of how Travis Cory calls soy templates by using a tag lib in web content and in the theme context

```htmlmixed
From web content

<#assign liferay_soy = taglibLiferayHash["/META-INF/resources/soy.tld"] />

From theme

<#assign liferay_soy = PortletJspTagLibs["/META-INF/resources/soy.tld"] />


<#assign context = {"id": "chips", "chips": ["test1", "test2"]} />

<@liferay_soy["template-renderer"]
    componentId="chips"
    context=context
    templateNamespace= "MaterialChips.render"
/>
```

</article>

<article id="2">

## Integrating Metal

*It is recommended to integrate metal at the *OSGI* level although you could do it from a theme level and potentially a web content level

* In relation to that keep an eye on **page fragments** that Jorge Ferrer is working on which may facilitate this

* **Loop Faro** are good examples for microsites
* Metal is only really helpful when you have **dynamic content**
  * For static content it is not useful

* Soy is only possibly on **server side**; better for **SEO**
  * At this point it is not ideal to render JSX on Java server or have like Node servlets rendering and passing it on to Java

* Talk to Travis about **workspaces**
* Use **generator cli** rather than building things out in Liferay context
</article>
