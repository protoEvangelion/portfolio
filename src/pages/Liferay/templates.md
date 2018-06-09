---
title: "DXP Templating"
description: "Describes the 3 options when it comes to templates"
 author: Ryan Garant
weight: 3
---

<article id="1">

## Overview

### Application Display Templates (ADTs)

- **Assets** like web content and Dynamic Data Lists (DDLs)
- **Applications** like Asset Publisher or custom Navigation
- **Custom Applications** developed in Java
- **Email Notifications**

- You can also use Soy Templates and JSX templates

### Freemarker

- **Tag libs** are baller
  - Taglibs are a tool to create consistent, responsive, accessible UI
    components for use in development

```htmlmixed
<%@ taglib uri="http://java.sun.com/jsp/jstl/core" prefix="c" %>
<%@ taglib uri="http://java.sun.com/portlet_2_0" prefix="portlet" %>
<%@ taglib uri="http://liferay.com/tld/aui" prefix="aui" %>
<%@ taglib uri="http://liferay.com/tld/portlet" prefix="liferay-portlet" %>

<PREFIX:{tag-name} [TAG-ATTRIBUTES] />
```

- You can drop a **web content** field on structure while in the UI
- You can **inject Database information** (no longer need to use resource locator)

  - New module called "**Context Contributors**" that allow you to access resources more securely than the resource locator
    - Because to use the resource locator, you have to give unrestricted access
    - Two Types of context contributors
      - **TYPE_GLOBAL**: variables available globally
      - **TYPE_THEME**: variables available only within themes

- **Breaking Changes** in freemarker for DXP
  - https://dev.liferay.com/develop/reference/-/knowledge_base/7-0/breaking-changes

### Clay components and elements

- You can use [Clay components](https://claycss.com/) in your templates
  - Gives you lego type functionality
  - You can compose components

### Generic Templates

- **Standalone** templates not associated to a structure that can be imported into other templates

```htmlmixed
<#include "${full_templates_path}/navigation.ftl" />
```

### Embeddable Apps

- You can **embed portlets** in freemarker

</article>

<article id="2">

## Workflow notifications

- If backend developers create a Kaleo workflow for content manangement front end devs can provide **notification templates**

```htmlmixed
<#assign comments = taskComments!"">
    <!-- email body -->
    <#assign journalArticleLocalService = serviceLocator.findService("com.liferay.journal.service.JournalArticleLocalService") />

    <#assign article = journalArticleLocalService.getArticleByUrlTitle(36823, "header-web-content") />

    <#if article??>
      ${article.getContent()?replace("]>", "")}
    </#if>

    <p>
      Your assignment, ${entryType}, has been graded by the instructor.
    <#if comments != "" >
      <br />Here are the comments included: <strong>${comments}</strong>
    </#if>
    </p>

<p>Sincerely,<br /><strong>S.P.A.C.E. Instructor</strong></p>
```

- Note is that using journal service has to be set to unrestricted which brings up security vulnerabilities like accessing the db
  - You can minimize this by following the **principle of least permissions**
  - Or use a context contributor so you can inject web content without exposing the entire journal service

</article>

<article id="3">

## Application Display Templates

> Main difference from normal templates is using the **asset renderer**

</article>
