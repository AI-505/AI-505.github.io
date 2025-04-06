---
layout: assignment_plain
title:  "Assignment 2"
date: 2025-04-06 11:00:00 +0100
date_show: 2025-04-06 08:27:19 +0100
mathjax: true
math: mathjax3
week: 15
sol_url: ""
comments: true
script: "
categories: assignments
---

<!-- https://pdmosses.github.io/just-the-docs-tests-old/docs/math/mathjax3/ -->

# Obligatory Assignment 2

- Read the [preface]({{ "/assignments/preface/" | absolute_url }})

- **Deadline:** Wednesday, April 30, 2025, at 23:59

## Optimization for Machine Learning

The [script](./fashionMNIST.py) is taken from AI506 and implements a
convolutional neural network (CNN), specifically
[LeNet5](https://en.wikipedia.org/wiki/LeNet), for the task of image
classification.  

The fashion data set consists of 70,000 images divided into 60,000 training and
10,000 testing samples. Each image is a 28x28 grayscale image associated with
one of 10 classes. These classes include T-shirt/top, Trouser, Pullover, Dress,
Coat, Sandal, Shirt, Sneaker, Bag, and Ankle boot.

The script is explained in the [Pytorch optimization
tutorial](https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html).
Before carrying out the tasks below you are recommended to read also the
documentation of the [pytorch optimization
package](https://pytorch.org/docs/stable/optim.html).  

## Your Tasks

Your task is to design and implement the best optimizer for the training task on
the given data and assess the results on the test data.  You can experiment with
different versions of stochastic gradient descent: basic, mini-batch and batch
including noise reduction methods, second order methods and other popular
methods such as those based on momentum.

You are not allowed to change the LeNet-5 model. Instead, you must include
experiments with three alternative loss functions:

- cross entropy as implemented in the starting code
- regularized cross entropy (see the `weight_decay` parameter to the optimization algorithms)
- cross entropy with the constraint that only 60% of the parameters of the
  layers `fc1` and `fc2` can get a value different from zero.

You are free to design other improving modifications to make the network thinner
(that is, having more parameters set to zero).

For the assessment part you shall use the average loss or the accuracy in
percentage of correct classifications on the test data. You are not allowed to
split the given data in other ways than the one implemented in the starting
code. While the stochastic gradient with mini-batch implemented in the
starting code yields a test accuracy of 61.5%, an accuracy of 89.38% is easily
achievable in 10 epochs. Your goal is to do at least better than this result.

You are free to use as many epochs and computation as you wish. However, good
results with less computation are clearly preferable.

<!--
Test set: Average loss: 0.01783597499728203, Accuracy: 6155/10000 (61.54999923706055%)

Test set: Average loss: 0.004488257503509521, Accuracy: 8938/10000 (89.37999725341797%)

Test set: Average loss: 0.00469727886095643, Accuracy: 8926/10000
(89.26000213623047%)
-->

In the report (that must not exceed 10 pages), you must give account of the
methods tried and details of the method you finally indicated as the best.
Include evidence for the conclusions you reach.




```python
{% include_relative {{ page.script }} %}
```
