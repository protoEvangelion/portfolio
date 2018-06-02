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

> Field of study that gives computers the ability to learn without being explicitly programmed ~Arthur Samuel

> (PET - Learns from Experience Performing a Task): Well-posed Learning Problem: A computer pgogram is said to learn from **experience E** with respect to some **task T** and some performance measure P, if its performance on T, as **measured by P**, improves with experience E ~Tom Mitchell

* Example: playing checkers

E = the experience of playing many games of checkers

T = the task of playing checkers.

P = the probability that the program will win the next game.

In general, any machine learning problem can be assigned to one of two broad classifications:

**Supervised** learning and **Unsupervised** learning.

* There is also reinforcement learning & recommender systems

### Types of machine learning algos

1. Supervised Learning (Right answers given)
2. Unsupervised Learning

#### Supervised Learning (Here are the right answers)

* Two types of Supervised:

1. **Regression**
	* Trying to predict results in a continuous output
	* Mapping inputs to a continuous function
	* IE:
		* predicting price based on house sizes (input)
		* predicting age based on picture of a person (input)
2. **Classification**
	* Predicting results in a discrete output
	* Map inputs into discrete categories (can be more than 2)
	* IE:
		* Predict whether the house sells for more or less than the asking price
		* Predict if breast cancer tumor is malignant or benign
			* Discrete value of output (0 or 1)

<img alt="Supervised Learning" src="/images/ml/supervised.png">

#### Unsupervised Learning (Machine figures it out the right answers)

* Given an algo a data set and ask it to find some structure in the data
* You don't give the algo the right answer
* IE
	* Google News uses a "clustering algo" mine a huge data set of stories and group multiple related website story links under one heading like the story title

* Two Types of Unsupervised:
1. **Clustering**: Take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles, and so on
2. **Non-clustering**: The "Cocktail Party Algorithm", allows you to find structure in a chaotic environment. (i.e. identifying individual voices and music from a mesh of sounds at a cocktail party).

*	Cocktail party algo:
```
[W,s,v] = svd((repmat(sum(x.*x,1),size(x,1),1).*x)*
x');
```

* Different areas of practical use:

<img alt="Unsupervised Learning" src="/images/ml/unsupervised.png">

</article>

<article id="2">

## Model & Cost Function

* Dataset is called a **training set**

### **Notation**
	* m = number of training examples
	* x's = **input** variable or features
	* y's = **output** variable or target variable
	* ϴi's = are **parameters**
	* (x,y) = one training example
	* (x <sup>(i)</sup>,y <sup>(i)</sup>) = ith training example which is just an index (1 indexed not 0) into the table

### Model Representation

<img alt="Linear function model" src="/images/ml/linear-model.png">

* `h` is the the function which is knows as the **hypothesis**
* Our goal is, given a training set, to learn a `function h : X → Y` so that `h(x)` is a “good” predictor for the corresponding value of y


### Cost Function 

* Typically you have an **optimization** objective like minimizing or maximizing
* AKA "Squared error function" or "Mean squared error"
* Formal Definition:

<img alt="Cost Func" src="/images/ml/cost-func.png">

* `hθ​(xi​)−yi​` is the difference between the predicted value and the actual value
* Why use square?
	* It's a convenience in helping compute the slope because it cancels out the `1/2`

<img alt="Slope" src="/images/ml/slope.png">

#### Relationship between the cost function and the hypothesis function

<img alt="Cost to Hypothesis Relationship" src="/images/ml/cost-to-hypothesis.png">

* On left actual data is the red x's
* Our goal is to minimize `J(θ1)`
* So when `θ1 = 1` we minimize the amount of errors and get the **closest line** that fits the actual data (red x's)
	* Shown by the teal line on the left
* On the left the distance between the slope line (hypothesis) & the red X's is known as the **error**
	* **So intuitively our goal is to minimize the sum of the squared errors**
		* In ML we want an efficient algo to automatically find this minimum point

<img alt="3d Graph" src="/images/ml/3d-cost.png">

* 3d graph above should help you intuitively see what the cost function looks like

#### Contour Graph

<img alt="Contour Graph" src="/images/ml/contour.png">

* A contour plot is a graph that contains many contour lines
* The **closer you get to the center** the **less errors you will have** between the hypothesis line and the actual data
* The graph above **minimizes** the cost function as much as possible
* And the result of θ1​ and θ0​ tend to be around 0.12 and 250 respectively
* Plotting those values on our graph to the right seems to put our point in the center of the inner most 'circle'

</article>
