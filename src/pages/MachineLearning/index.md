---
title: "Machine Learning"
description: "Intro to Machine Learning (primarily based on https://www.coursera.org/learn/machine-learning)"
author: "Ryan Garant"
icon: "hammer"
weight: 1
---

<article id="1">

## Intro

- Grew out of AI due to a bunch of problems that could only be realistically be solved if the computer learned how to solve it
- **Practical Problems**
  - _Database mining_
    - biology
    - web click
    - medical records
    - engineering
  - _Applications can't program by hand_
    - Autonomous helicopter
    - Handwriting recognition
    - Natural Language Processing (NLP)
    - Computer Vision
  - _Self-customizing programs_
    - Amazon & Netflix recommendations
      - It customizes itself to your preferences
  - _Understanding the human brain_

### What is Machine Learning

- **Definitions**:

> Field of study that gives computers the ability to learn without being explicitly programmed ~Arthur Samuel

> (PET - Learns from Experience Performing a Task): Well-posed Learning Problem: A computer pgogram is said to learn from **experience E** with respect to some **task T** and some performance measure P, if its performance on T, as **measured by P**, improves with experience E ~Tom Mitchell

- Example: playing checkers

```
E = the experience of playing many games of checkers

T = the task of playing checkers.

P = the probability that the program will win the next game.
```

In general, any machine learning problem can be assigned to one of two broad classifications:

**Supervised** learning and **Unsupervised** learning.

- There is also reinforcement learning & recommender systems

### Types of machine learning algos

1.  Supervised Learning (Right answers given)
2.  Unsupervised Learning

#### Supervised Learning (Here are the right answers)

- Two types of Supervised:

1.  **Regression**

- Trying to predict results in a continuous output
- Mapping inputs to a continuous function
- IE:
  - predicting price based on house sizes (input)
  - predicting age based on picture of a person (input)

2.  **Classification**

- Predicting results in a discrete output
- Map inputs into discrete categories (can be more than 2)
- IE:
  - Predict whether the house sells for more or less than the asking price
  - Predict if breast cancer tumor is malignant or benign
    - Discrete value of output (0 or 1)

![](images/supervised.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

#### Unsupervised Learning (Machine figures it out the right answers)

- Given an algo a data set and ask it to find some structure in the data
- You don't give the algo the right answer
- IE

  - Google News uses a "clustering algo" mine a huge data set of stories and group multiple related website story links under one heading like the story title

- Two Types of Unsupervised:

1.  **Clustering**: Take a collection of 1,000,000 different genes, and find a way to automatically group these genes into groups that are somehow similar or related by different variables, such as lifespan, location, roles, and so on
2.  **Non-clustering**: The "Cocktail Party Algorithm", allows you to find structure in a chaotic environment. (i.e. identifying individual voices and music from a mesh of sounds at a cocktail party).

- Cocktail party algo:

```
[W,s,v] = svd((repmat(sum(x.*x,1),size(x,1),1).*x)*
x');
```

- Different areas of practical use:

![](images/unsupervised.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

</article>

<article id="2">

## Model & Cost Function

- Dataset is called a **training set**

### **Notation**

```
hϴ(x) = ϴ0 + ϴ1x
```

- m = number of training examples
- x's = **input** variable or features
- y's = **output** variable or target variable
- ϴi's = are **parameters**
- (x,y) = one training example
- (x <sup>(i)</sup>,y <sup>(i)</sup>) = ith training example which is just an index (1 indexed not 0) into the table

### Model Representation

![](images/linear-model.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- `h` is the the function which is knows as the **hypothesis**
- Our goal is, given a training set, to learn a `function h : X → Y` so that `h(x)` is a “good” predictor for the corresponding value of y

### Cost Function

- Typically you have an **optimization** objective like minimizing or maximizing
- AKA "Squared error function" or "Mean squared error"
- A [cost function is a measure of **how wrong the model is**](https://towardsdatascience.com/machine-learning-fundamentals-via-linear-regression-41a5d11f5220) in terms of its ability to estimate the relationship between X and y

  - The **objective** of a ML model, therefore, is to find parameters, weights or a structure that minimises the cost function
  - models **learn by minimizing** a cost function
  - _sum of the squared differences between **predicted** y and **actual** y_

- Formal Definition:

![](images/cost-func.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- `hθ​(xi​)−yi​` is the difference between the predicted value and the actual value
- Why use square?
  - It's a convenience in helping compute the slope because it cancels out the `1/2`

![](images/slope.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

#### Relationship between the cost function and the hypothesis function

![](images/cost-to-hypothesis.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- On left actual data is the red x's
- Our goal is to minimize `J(θ1)`
- So when `θ1 = 1` we minimize the amount of errors and get the **closest line** that fits the actual data (red x's)
  - Shown by the teal line on the left
- On the left the distance between the slope line (hypothesis) & the red X's is known as the **error**
  - **So intuitively our goal is to minimize the sum of the squared errors**
    - In ML we want an efficient algo to automatically find this minimum point

![](images/3d-cost.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- 3d graph above should help you intuitively see what the cost function looks like

#### Contour Graph

![](images/contour.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- A contour plot is a graph that contains many contour lines
- The **closer you get to the center** the **less errors you will have** between the hypothesis line and the actual data
- The graph above **minimizes** the cost function as much as possible
- And the result of θ1​ and θ0​ tend to be around 0.12 and 250 respectively
- Plotting those values on our graph to the right seems to put our point in the center of the inner most 'circle'

#### Gradient Descent

- AKA "Batch" Gradient Descent
  - We are looking at the entire batch of training examples to make decisions
- Gradient descent can be **applied to many ML models** like the cost function
- Is an [efficient optimization algorithm][1] that attempts to find a **local or global minima of a function**
  - enables a model to **learn the gradient or direction** that the model should take in order to **reduce errors**
    - As the model iterates, it gradually converges towards a minimum where further tweaks to the parameters produce little or zero changes in the loss — also referred to as convergence
    - enables the learning process to **make corrective updates** to the learned estimates that move the model toward an _optimal combination of parameters_
    - We can now **use the learned values** of b0 and b1 stored in theta **to predict** values y for new values of X

![](https://cdn-images-1.medium.com/max/800/1*UUHvSixG7rX2EfNFTtqBDA.gif) _Provided by [conrmcdonald](https://towardsdatascience.com/@conrmcdonald)_

![](https://cdn-images-1.medium.com/max/600/1*imhEKEpzX24CC_LIIureBw.gif) _Provided by [conrmcdonald](https://towardsdatascience.com/@conrmcdonald)_

- For cost function
  - You have your hypothesis function and you can measure how well it fits into the data
  - But now you need a way to estimate the **parameters** of the hypothesis function
  - Process
    - Keep changing them until you end up with a minimum
    - So you start at one point (θ1 & θ2)
    - look 360 degrees around and determine the baby step that will lead you down the hill faster
    - Iterate until you get to the minimal location
      - Red arrow in image below shows the minimal location
  - **The point of all this is that if we start with a guess for our hypothesis and then repeatedly apply these gradient descent equations, our hypothesis will become more and more accurate**

![](images/gradient-descent.png)
_Provided by [Andrew Ng](http://www.andrewng.org/about/)_

![](images/gradient-algo.png)
_Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- The formal algo
  - Quick note on syntax
    - `:=` means assignment to a variable just like `=` in JS
    - `=` is a truth assertion
    - `j=0,1` represents the feature index number
    - `α` The size of each step AKA Learning Rate
      - If α is too small the algo will take a long time
      - If α is too large the algo can over shoot the target which can fail to converge
  - The direction in which the step is taken is determined by the partial derivative of `J(θ0,θ1)`
    - All the _derivative_ actually is, is a **line tangent to a point** on the cost function graph
    - So for instance if you are at a local minimum the tangent is a horizontal line with a slope of 0 so θ1 doesn't change
      - `θ1​:=θ1​−α∗0`
    - The derivative gets smaller and smaller because gradients naturally have decreasing slope
      - So as we approach the **local minimum gradient descent will automatically take smaller steps**
  - Depending on where one starts on the graph, one could end up at different points

![](images/gradient-update.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- You should update simultaneously because `θ1​` uses `θ0`

![](images/gradient-linear.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- This is the new equation when you plug in the linear algebra quadratic function
  - The linear function only has one global minimum not multiple local minimums
    - So this makes it a great fit for the Gradient descent algo

</article>

<article id="3">

## Linear algebra

### Matrices & Vectors

#### Matrix

- It goes rows x columns (2x4)
- $ith$ rows
- $jth$ column
- Usually use uppercase notation

$$
\begin{bmatrix}
a & b \\
c & d \\
e & f \\
g & h \\
\end{bmatrix}
$$

#### Vector

- A matrix with one column
- ith rows
- sometimes vectors are 1 or 0 indexed
- usually use lowercase notation

##### Notation and terms

- $A\scriptscriptstyle ij$ refers to the element in the ith row and jth column of matrix A
- $\mathbb{R}$ refers to the set of scalar real numbers
- $\mathbb{R^n}$ refers to the set of n-dimensional vectors of real numbers

- $v_i$​ refers to the element in the ith row of the vector
- Matrices usually denoted by uppercase names while vectors are lowercase.
- "**Scalar**" means that an object is a single value, not a vector or matrix.
- A vector with 'n' rows is referred to as an 'n'-dimensional vector
- In general, all our vectors and matrices will be **1-indexed**

#### Matrix Math with Scalar Values

- Adding Matrices

  - You can only add 2 matrices of the same size
  - add each el to corresponding el

- Multiplying Matrix by constant

  - When multiplying a matrix by a constant like 2, just multiply each el by constant

- Multiplying Matrix by Vector
  - When multiplying two matrices together the the # of columns of one matrix have to match the # of rows of the other matrix

![](images/multiply-matrix.png) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

![](images/multiply-prediction.jpg) _Provided by [Andrew Ng](http://www.andrewng.org/about/) Matrix Prediction_

- Multiply Matrix by Matrix
  - The # of columns in the 1st matrix must match the # of rows in the 2nd matrix
  - Convert 2nd matrix in to separate vectors by column
  - Then add up results
  - **Properties**:
  - Matrices are not commutative: $A \times B \neq B \times A$
  - Matrices are associative: $(A \times B) \times C = A \times(B \times C)$

![](images/matrix-x-matrix.jpg) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

![](images/identity-matrix.jpg) _Provided by [Andrew Ng](http://www.andrewng.org/about/)_

- Dividing Matrices

  - Just dived each el by divisor

- Combining operations
  - Just use order of ops

#### Inverse & Transpose

- $A^{-1}$: multiply a matrix by its **inverse** results in the identity matrix
  - Does not apply to non square matrix
  - Almost no one computes the inverse of matrix by hand they use software
  - Some matrices don't have an inverse
- $A^T$ **Transposing**
  - rotate $90^0$
  - flip it
  - $A\scriptscriptstyle ij$ = $B\scriptscriptstyle ij$

</article>

[1]: https://towardsdatascience.com/machine-learning-fundamentals-via-linear-regression-41a5d11f5220
[2]: https://www.coursera.org/learn/machine-learning
