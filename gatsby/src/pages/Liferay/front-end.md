---
title: "DXP Front End Golden Nuggets"
description: "Gleanings from the DXP Front End Training Course"
author: Jay Gatsby
weight: 2
---

<article id="1">

## Overview of New Tools

#### Yeoman Generator

* You can use yeoman [liferay theme generator](https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/themes-generator) or [Blade](https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/installing-blade-cli)
* When generating the theme you can choose from
	* **Styled** (includes Lexicon)
	* **Unstyled** (doesn't include Lexicon)

#### [Lexicon](https://lexicondesign.io/)

> **Lexicon** is a design system that describes how you should develop the UI

* Like [grids should be designed with 8px as the base unit](https://lexicondesign.io/docs/designPrinciples/grid.html)
* Or [alerts should should for only 10 secons if actions are associated](https://lexicondesign.io/docs/patterns/alerts.html)
* So it's really a set of guidelines to foster a **consistent user experience**
* Extends Bootstrap 4 (breaking changes with Bootstrap 3) and built with SASS
* The goals is to provide a **unified & consistent** user experience
* The BIG BENEFIT to devs is that it provides **reusable patterns** that can be leveraged into components which speeds up development...*and is more fun* ;)

#### [Clay](https://claycss.com)

> **Clay** is essentially the design principles of Lexicon **coded out**

* Clay is not in DXP yet (currently Lexicon is the experience and implementation)
	* It is on master now though
* Extension of Bootstrap 3
* Built with SASS
* Consists of components like **Cards and Dropdowns**
* Has reusable patterns built in
* We start with Clay Base when we generate a theme
* You can get access to clay by doing:

```sass
@import "aui/lexicon/atlas";
```

#### Templates

* Web Content Templates
* Application Display Templates (how you want to display)
	* Helpful because themes don't help with layout of apps on page
* Soy/JSX Templates (In book appendix)

#### Javascript

* You can use Jquery, AlloyUI & Metal JS
	* **Alloy** is supported but not recommended for new development
	* you can use **ES6**! Wahoo!!!

</article>

<article id="2">

## Generating Your Theme

* What has changed in DXP on the front end?
	* **Liferay theme generator**
	* **Themelets**
		* mini UI components
	* [Bourbon](http://bourbon.io/) sass utils
		* Process css3 features
		* provides mixins
		* Bourbon is deprecating vendor prefix mixins
			* [They recommend using autoprefixer](https://github.com/thoughtbot/bourbon/issues/702)
	* **Theme Contributors**
		* allows you to override default theme things like the **nav, menu or dockbar**
		* You need `Blade CLI` to do this
		* Requires some backend knowledge OSGI modules
		* If you’d like to package UI resources independent of a specific theme and include them on all pages, Theme Contributors are the right tool

	* **Importing Resources**
		* Resources importer allows you to deploy theme with predefined content
		* So you can create new sites with a predefined look and feel

This command will generate the base theme into your CWD
* `cd` into `modules/apps` from liferay root and run:

```shell
yo liferay-theme
```

* Verify that your `theme folder` was generated in `portal-folder/modules/apps`
	* `cd` into it and then run:

```shell
gulp deploy
```

* Then you can go to `localhost` and check
	* Other gulp tasks are available [here](https://github.com/liferay/liferay-theme-tasks)
	* Then change to your theme by clicking configure like below

<img src="/images/liferay/set-theme.png" alt="Set Theme">

</article>

<article id="3">

## Using the Build Folder

* You can pull in resources from the **build** folder
	* There are a lot of *good examples* in there all the way from templates to sass modules that will serve as a helpful guide
	* So let's saty you want a **component**, go into `build` and copy that component into `src dir`
		* Make sure to ***mirror folder structure***

</article>

<article id="4">

## Templates

### Macros

* [Here is the list of available freemarker macros](https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/freemarker-macros#product-macros) that you can use out of the box

* Example of navigation macro

```htmlmixed
<@liferay.navigation_menu
	instance_id="footer_navigation_menu"
	default_preferences="${freeMarkerPortletPreferences}"
/>
```

### Theme Settings

#### Example of getting a theme setting in freemarker

```htmlmixed
<#assign show_header_search = getterUtil.getBoolean(themeDisplay.getThemeSetting("show-header-search")) />
```
</article>

<article id="5">

## Application Decorators

### Default Options
* Barebone
* Borderless
* Decorate

#### Example of changing existing app decorators

```sass
.portlet-decorate .portlet-content {
	background: $portlet-topper-color;
	border: 1px solid #DEEEEE;
}

.portlet-barebone .portlet-content {
	padding: 0;
}
```

* Then in `liferay-look-and-feel.xml` do (na)
* **id** saves in DB and **name** shows up on platform

```xml
<portlet-decorator id="trending" name="Trending">
	<portlet-decorator-css-class>portlet-trending</portlet-decorator-css-class>
</portlet-decorator>
```

</article>


<article id="6">

## Javascript

* To use ES6 file endings must be `file.es.js`
* To get access to use es6 run this in root of your theme:

```shell
npm i -S liferay-theme-es2015-hook
```

* If you want to use metal do:

```shell
npm i -S metal metal-dom metal-state
```

* We can require js modules in our `main.js` like so:

```javascript
(function() {
	AUI().ready(
		'liferay-sign-in-modal',
		function(A) {
			var signIn = A.one('.sign-in > a');

			if (signIn && signIn.getData('redirect') !== 'true') {
				signIn.plug(Liferay.SignInModal);
			}
		}
	);

	require(
		'space-theme/js/top_search.es',
		function(TopSearch) {
			new TopSearch.default();
		}
	);
})();
```

* And then do cool stuff like:

```javascript
import async from 'metal/src/async/async';
import core from 'metal/src/core';
import dom from 'metal-dom/src/dom';
import State from 'metal-state/src/State';

class MyComponent extends State {
	constructor() {
			console.log('Hello, World!');
	}
	// ...more cool stuff
}

export default MyComponent;
```

* When you are done run:

```shell
gulp deploy

or

gulp watch
```

#### Class Syntax

```javascript
class Car {
	constructor(make) { //constructors!
		this.currentSpeed = 25;
	}
	printCurrentSpeed() {
		console.log('current speed: ' + this.currentSpeed + ' mph.');
	}
}

class RaceCar extends Car { //inheritance
	constructor(make, topSpeed) {
		super(make);
		this.topSpeed = topSpeed;
	}
	goFast(){
		this.currentSpeed = this.topSpeed;
	}
}
```

#### Arrow Functions!

```javascript
var materials = [
  'Hydrogen',
  'Helium',
  'Lithium',
  'Beryllium'
];

materials.map(function(material) { 
  return material.length; 
}); // [8, 6, 7, 9]

materials.map((material) => {
  return material.length;
}); // [8, 6, 7, 9]

materials.map(material => material.length); // [8, 6, 7, 9]

// arrow functions don't bind this keyword to the function either! Wahoo :)
```

#### Semantically helpful `let` and `const` block-scoped declarations

```javascript
//let
function letTest() {
	let x = 1; // let declares a frame scope local variable

	if (true) {
		let x = 2; // different variable
		console.log(x); // 2
	}

	console.log(x); // 1
}

//const
const ALWAYS_SEVEN = 7;
// this will throw an error
ALWAYS_SEVEN = 8;

// You can mutate but not reassign
```

</article>


<article id="7">

## Layout Templates

> Controls how portlets and web content layout on the page

* If you want a custom layout, you can create these in the `layouttpl/custom` folder
	* File: `layouttpl/custom/porygon_50_50_width_limited.tpl`

```htmlmixed
<div class="columns-2 container-fluid-1280" id="main-content" role="main">
	<div class="portlet-layout row">
		<div class="col-md-6 portlet-column portlet-column-first" id="column-1">
			$processor.processColumn("column-1", "portlet-column-content portlet-column-content-first")
		</div>

		<div class="col-md-6 portlet-column portlet-column-last" id="column-2">
			$processor.processColumn("column-2", "portlet-column-content portlet-column-content-last")
		</div>
	</div>
</div>
```

* You can also add an image in that same folder that will show up on the platform (Example below)

<img src="/images/liferay/custom-layout.png" alt="Layout" style="max-width: 400px;">


* Then in `liferay-look-and-feel.xml` do

```xml
<layout-templates>
	<custom>
		<layout-template id="porygon_70_30_width_limited" name="Porygon 2 Columns (70/30) width limited">
			<template-path>/layouttpl/custom/porygon_70_30_width_limited.tpl</template-path>
			<thumbnail-path>/layouttpl/custom/porygon_70_30_width_limited.png</thumbnail-path>
		</layout-template>
	</custom>
</layout-templates>
```

</article>


<article id="8">

## Themelets

> Themelets are small reusable pieces of code that you can leverage in themes

* They can exist as **npm packages** (super dope)
* Small ui components that you can plugin to your themes
* Beneficial because there are **npm themelets** that have already been developed that you can consume
	* https://www.npmjs.com/search?q=themelets
	* https://dev.liferay.com/develop/tutorials/-/knowledge_base/7-0/themelets
	* Themelet JS gets injected here in portal normal:

```
<!-- inject:js -->
<!-- endinject -->
```

### Example

#### This installs it on the same level as your theme

<img src="/images/liferay/themelet.png" alt="Themelet">

* then cd into your new themelet directory and run:

```shell
npm link
```

* then to plug it in, navigate back to your theme folder and run

```shell
gulp extend
```

<img src="/images/liferay/consume-themelet.png" alt="Themelet">

* then `gulp-deploy`

Or you can do: `gulp extend` and search for a themelet on npm


</article>


<article id="9">

## Resources Importer

* You can add assets like:
	* web content (articles, structures, templates)
	* documents
	* Really only beneficial if you want to package your theme for other people to reuse

<img src="/images/liferay/resources-importer.png" alt="Resources Importer" style="max-width: 400px;">


### Embedding Apps

##### Using the Portlet Name Attribute

```htmlmixed
<@liferay_portlet["runtime"]
	portletName="CLASS_NAME"
/>
```

##### Using the Class Name Attribute

```htmlmixed
<@liferay_portlet["runtime"]
	portletProviderAction=portletProviderAction.ACTION
	portletProviderClassName="CLASS.NAME"
/>
```

</article>


<article id="10">

## Generating Layout Templates

* Based on Bootstrap

<img src="/images/liferay/layout-generator.png" alt="Layout Generator">


#### Generates something like this

```htmlmixed
<div class="space-1-2-columns-50-50-limited" id="main-content" role="main">
	<div class="portlet-layout row">
		<div class="col-md-12 portlet-column portlet-column-only" id="column-1">
			$processor.processColumn("column-1", "portlet-column-content portlet-column-content-only")
		</div>
	</div>
	<div class="portlet-layout row">
		<div class="col-md-2 portlet-column portlet-column-first" id="column-2">
			$processor.processColumn("column-2", "portlet-column-content portlet-column-content-first")
		</div>
		<div class="col-md-4 portlet-column" id="column-3">
			$processor.processColumn("column-3", "portlet-column-content")
		</div>
		<div class="col-md-4 portlet-column" id="column-4">
			$processor.processColumn("column-4", "portlet-column-content")
		</div>
		<div class="col-md-2 portlet-column portlet-column-last" id="column-5">
			$processor.processColumn("column-5", "portlet-column-content portlet-column-content-last")
		</div>
	</div>
</div>
```

</article>
