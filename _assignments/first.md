---
layout: assignment_plain
title:  "Assignment 1"
date: 2025-03-08 11:00:00 +0100
date_show: 2025-03-08 08:27:19 +0100
mathjax: true
math: mathjax3
week: 10
sol_url: ""
comments: true
categories: assignments
---

<!-- https://pdmosses.github.io/just-the-docs-tests-old/docs/math/mathjax3/ -->

# Obligatory Assignment 1

- Read the [preface]({{ "/assignments/preface/" | absolute_url }})

- **Deadline:** <s>Monday, March 31, 2025, at 23:59</s> **Friday, April 4, 2025, at 23:59**

## Task 1 -- Differentiation 

### Subtask 1.a -- Analytical Differentiation

Consider the following functions:

- $$ f_1(x) = x^3 - 2x^2 + 3x - 5 $$
- $$ f_2(x) = e^x \sin(x) $$
- $$ f_3(x) = \frac{1}{1 + x^2} $$

Write the analytical expressions for their derivatives.

### Subtask 1.b -- Numerical Differentiation

Implement finite difference methods in Python:

- Forward difference:  $$ f'(x) \approx \frac{f(x+h) - f(x)}{h} $$
- Central difference:  $$ f'(x) \approx \frac{f(x+h) - f(x-h)}{2h} $$
- Backward difference: $$ f'(x) \approx \frac{f(x) - f(x-h)}{h} $$
  
Use a small step size $$ h = 10^{-5} $$ and compute numerical derivatives at $$
x = 1 $$ for each function.  Compare the results with the analytical derivatives
at the same point.  In case, analyze how different values of $$ h $$ affect the
error.

### Subtask 1.c -- Automatic Differentiation

Using an automatic differentiation (AD) library such as
   [nanograd](https://github.com/rasmusbergpalm/nanograd/tree/main) (the
preferred choice) or [autograd](https://autograd.readthedocs.io/en/latest/),
compute the derivatives for the given functions at $$ x = 1 $$. Compare the
results with both the analytical and numerical derivatives.

### Subtask 1.d -- Multivariate and Higher-Order Differentiation

Consider the following function:

$$
f_4(x, y) = x^2 y + e^x \sin(y)
$$

1. Compute the gradient of the function analytically.
2. Compute the gradient of the function by automatic differentiation using
   nanograd or autograd at $$x=3$$ and $$y=5$$.
3. Compare the analytical and automatic differentiation results.
4. Compute the second derivative (Hessian) matrix analytically.

## Task 2 -- Positive Definite Matrices 

### Subtask 2.a

Give an example of a matrix $$2 \times 2$$ that is not positive definite
despite having all positive entries.

### Subtask 2.b

If $$A$$ is a positive definite matrix, must its diagonal elements all be
positive? Explain.

### Subtask 2.c

For a matrix $$A$$ of size $$2\times 2$$ that is not positive definite:

- plot the quadratic function $$f(\vec x)=\frac{1}{2} \vec x A \vec x$$, 
- describe the surface of $$f$$ and 
- conclude whether it is convex or not. What kind of point is $$\vec x$$ if it
  satisfies $$\nabla f(\vec x)=0$$?

## Task 3 -- Descent Direction Iteration Methods

Compare, experimentally, different iterative descent methods on the `bbob`
function suite of the [COCO test platform](https://coco-platform.org/).

The methods must be selected among those treated in the course and listed in
this [page]({{ "/assignments/contents/" | absolute_url }}).

A high level classification of the methods with a few examples can be the
following:

- Gradient-Based Methods (First and Second Order)
  - Gradient Descent with exact and inexact line search
  - Newton's Method with backtracking line search.
- Derivative-Free Methods
  - Powell’s Method or Nelder-Mead Simplex method

It is important that you test algorithms from both these two classes. You can
implement your own versions of algorithms, use those from libraries:
`scipy.optimization`, `autograd`, etc. or use the results archived in COCO. You
can also construct your own hybrid algorithms putting together different
elements.

Remarks:

- It is important that you provide a description of the algorithms you have
  tested. The description should not leave space to misinterpretations and
  unspecified parts but can refer to components studied in the course without
  having to give the details about them. For example, it is sufficient to refer
  to a strong backtracking line search to describe which approximated line
  search has been used.

- You can use the COCO platform to run the experiments and create the analysis.
  Beside the web page of the platform, you find examples on how to do this also
  in the course web page in the solutions of exercise sheet 3. Note that letting
  you explore the COCO platform and learn how to carry out tests and analysis
  is one of the primary goals of this Task.

- In the report, you must include a few meaningful visualization of the results.
  Further, you must explain and reflect on the results you gathered and draw
  conclusions. In particular, it is interesting observing differences in
  algorithm performance under different conditions (functions, dimensions,
  parameters) possibly putting in relation characteristics of the functions with
  the performance of the algorithms (eg, non-smooth functions or noisy
  functions).

- The number of algorithms to include in the comparison should be greater than
  two but should not be too large that the plots become cluttered.
