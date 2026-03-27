---
layout: assignment_plain
title:  "Assignment 1"
date: 2026-03-06 11:00:00 +0100
date_show: 2026-03-06 08:27:19 +0100
mathjax: true
math: mathjax3
week: 14
sol_url: ""
comments: true
script: "fashionMNIST.py"
categories: assignments
---





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

Your goal is to **improve the optimization** in training the given model and
evaluating performance on test data. You will experiment with various
**stochastic gradient descent (SGD) variants**, including:

- Basic SGD

- Mini-batch and batch SGD

- Noise reduction techniques

- Second-order methods

- Momentum-based optimization methods.

You are also free to experiment with other algorithms from the course.

## Scenarios

You **must not modify the LeNet-5 architecture**. Instead, your task is to
attain the best accuracy on the test set in the three scenarios:

1. **Standard Cross-Entropy Loss**

    Use the loss function as implemented in the provided starter code.

2. **Regularized Cross-Entropy Loss**

    Introduce $$L_2$$ regularization using the weight_decay parameter in the optimization algorithms.

<!--
3. **Sparse Weight Constraint**

    Optimize the model under the constraint that at most **60% of the weights** in
    layers fc1 and fc2 (out of 30,720 + 10,080 total parameters) can be nonzero.
    You may include bias terms in the sparsity constraint, if desired.

You are welcome to explore additional modifications that make the network
**thinner** (i.e., increase sparsity by setting more parameters to zero).
However, keep **these modifications as separate scenarios**, as the focus of
AI505 is on optimization rather than architectural changes.  
-->

## Evaluation Criteria

For model assessment, you will use:

- **Average loss** on test data, and

- **Test accuracy** (percentage of correctly classified samples).

You **must not modify the data split** beyond what is implemented in the starter code.

## Performance Expectations

Run the **mini-batch SGD implementation** from the code handed out. Its result will be your baseline. Your goal is to **outperform this result**.

## Computational Considerations

You may use as many **epochs and computational resources** as needed. However,
achieving **strong results with fewer computations** is highly desirable.


<!--
Test set: Average loss: 0.01783597499728203, Accuracy: 6155/10000 (61.54999923706055%)

Test set: Average loss: 0.004488257503509521, Accuracy: 8938/10000 (89.37999725341797%)

Test set: Average loss: 0.00469727886095643, Accuracy: 8926/10000
(89.26000213623047%)
-->

<!--
## Reporting

In the report (that must not exceed 10 pages), you must give account of the
methods tried and details of the method you finally indicated as the best.
Include evidence for the conclusions you reach.
-->

## Discussion

Assess the baseline in your own computational environment.

In other terms, as first thing, run the script provided without changing
anything on the machine you will use for the assignment and write in the report:
- the final test accuracy and average loss found and
- the output of these lines:
```
# Hardware
device = torch.accelerator.current_accelerator().type if torch.accelerator.is_available() else "cpu"
print(f"Using {device} device")
```


There are considerable differences in performance among machines. In particular,
using GPU improves run time performance considerably (and it seems also in
accuracy, although I have not figured out why yet). In order to make testing
feasible for everybody, each group will have access to a machine in U-Cloud with
GPU resources. You will be provided a link to a project in you cloud from the
Excel spreadsheet that we use to form and report groups in ItsLearning. A brief
intro to U-Cloud will be provided in the first class after Easter.


A few hints on making results reproducible in pytorch can be found here:
https://pytorch.org/docs/stable/notes/randomness.html#reproducibility
They have been included in the script.


## Starter Code


```python
{% include_relative {{ page.script }} %}
```


