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
script: "fashionMNIST.py"
categories: assignments
---

<!-- https://pdmosses.github.io/just-the-docs-tests-old/docs/math/mathjax3/ -->

# Obligatory Assignment 2

- Read the instructions in the [preface]({{ "/assignments/preface/" | absolute_url }})

- Groups can differ from those in asg1. Experimenting to work with different
  persons can be instructive.

- **Deadline:** Wednesday, April 30, 2025, at 23:59

## Optimization for Machine Learning

The [script fashionMNIST]({{ "/assignments/fashionMNIST.py" | absolute_url }})
(also reported below) is taken from AI506 and implements a convolutional neural
network (CNN), specifically [LeNet5](https://en.wikipedia.org/wiki/LeNet), for
the task of image classification.  

The fashion data set consists of 70,000 images divided into 60,000 training and
10,000 testing samples. Each image is a 28x28 grayscale image associated with
one of 10 classes. These classes include T-shirt/top, Trouser, Pullover, Dress,
Coat, Sandal, Shirt, Sneaker, Bag, and Ankle boot.

The script is explained in the [Pytorch optimization
tutorial](https://pytorch.org/tutorials/beginner/basics/optimization_tutorial.html).
Before carrying out the tasks below you are recommended to read also the
documentation of the [pytorch optimization
package](https://pytorch.org/docs/stable/optim.html).  

## Your Task

Your goal is to **design and implement an effective optimizer** for training the
given model and evaluating its performance on test data. You will experiment
with various **stochastic gradient descent (SGD) variants**, including:

- Basic SGD

- Mini-batch and batch SGD

- Noise reduction techniques

- Second-order methods

- Momentum-based optimization methods


## Scenarios

You **must not modify the LeNet-5 architecture**. Instead, your task is to
optimize training within the following three scenarios:

1. **Standard Cross-Entropy Loss**

    Use the loss function as implemented in the provided starter code.

2. **Regularized Cross-Entropy Loss**

    Introduce $$L_2$$ regularization using the weight_decay parameter in the optimization algorithms.

3. **Sparse Weight Constraint**

    Optimize the model under the constraint that at most **60% of the weights** in
    layers fc1 and fc2 (out of 30,720 + 10,080 total parameters) can be nonzero.
    You may include bias terms in the sparsity constraint, if desired.

You are encouraged to explore additional modifications that make the network
**thinner** (i.e., increase sparsity by setting more parameters to zero).
However, keep **these modifications as separate scenarios**, as the focus of
AI505 is on optimization rather than architectural changes.  

## Evaluation Criteria

For model assessment, you will use:

- **Average loss** on test data, and

- **Test accuracy** (percentage of correctly classified samples).

You **must not modify the data split** beyond what is implemented in the starter code.

## Performance Expectations

- The **baseline mini-batch SGD implementation** in the starter code achieves **61.5% test accuracy**.

- An accuracy of **89.38% is easily achievable in 10 epochs**.

- Your goal is to **outperform this result**.

## Computational Considerations

You may use as many **epochs and computational resources** as needed. However,
achieving **strong results with fewer computations** is highly desirable.


<!--
Test set: Average loss: 0.01783597499728203, Accuracy: 6155/10000 (61.54999923706055%)

Test set: Average loss: 0.004488257503509521, Accuracy: 8938/10000 (89.37999725341797%)

Test set: Average loss: 0.00469727886095643, Accuracy: 8926/10000
(89.26000213623047%)
-->

## Reporting

In the report (that must not exceed 10 pages), you must give account of the
methods tried and details of the method you finally indicated as the best.
Include evidence for the conclusions you reach.

## Starter Code

```python
{% include_relative {{ page.script }} %}
```