---
title: "Machine Learning"
description: "Intro to Machine Learning (based on https://www.coursera.org/learn/machine-learning)"
layout: "guide"
icon: "hammer"
weight: 1
---

###### {$page.description}

<article id="1">

## Intro

* Grew out of AI due to a bunch of problems that could only be realistically be solved if the computer learned how to solve it
* **Practical Problems**
	* *Database mining*
		* biology
		* web click
		* medical records
		* engineering
	* *Applications can't program by hand*
		* Autonomous helicopter
		* Handwriting recognition
		* Natural Language Processing (NLP)
		* Computer Vision
	* *Self-customizing programs*
		* Amazon & Netflix recommendations
			*	It customizes itself to your preferences
	* *Understanding the human brain*

### What is Machine Learning

* **Definitions**:
	* Field of study that gives computers the ability to learn without being explicitly programmed ~Arthur Samuel
	* Well-posed Learning Problem: A computer pgogram is said to learn from **experience E** with respect to some **task T** and some performance measure P, if its performance on T, as **measured by P**, improves with experience E ~Tom Mitchell

* Example: playing checkers

E = the experience of playing many games of checkers

T = the task of playing checkers.

P = the probability that the program will win the next game.

In general, any machine learning problem can be assigned to one of two broad classifications:

Supervised learning and Unsupervised learning.


### Types of machine learning algos

1. Supervised Learning (Right answers given)
2. Unsupervised Learning

#### Supervised Learning

* Two types of Supervised:

1. Regression
	* Trying to predict results in a continuous output
	* Mapping inputs to a continuous function
	* IE:
		* predicting price based on house sizes (input)
		* predicting age based on picture of a person (input)
1. Classification
	* Predicting results in a discrete output
	* Map inputs into discrete categories
	* IE:
		* Predict whether the house sells for more or less than the asking price
		* Predict if breast cancer tumor is malignant or benign
			* Discrete value of output (0 or 1)

<img alt="Supervised Learning" src="/images/ml/supervised.png">

#### Unsupervised Learning

* Given an algo a data set and ask it to find some structure in the data
* You don't give the algo the right answer
* IE
	* Google News uses a "clustering algo" mine a huge data set of stories and group multiple related website story links under one heading like the story title

* Two Types of Unsupervised:
1. **Clustering**: Take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles, and so on
2. **Non-clustering**: The "Cocktail Party Algorithm", allows you to find structure in a chaotic environment. (i.e. identifying individual voices and music from a mesh of sounds at a cocktail party).


<img alt="Supervised Learning" src="/images/ml/unsupervised.png">

</article>
