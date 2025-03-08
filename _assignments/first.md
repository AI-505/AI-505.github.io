---
layout: assignment_plain
title:  "Assignment 1"
date: 2025-03-08 11:00:00 +0100
date_show: 2025-03-08 08:27:19 +0100
mathjax: true
week: 10
sol_url: ""
comments: true
categories: assignments
---


# Obligatory Assignment 1

## Preface

- This assignment will be graded and will contribute to your final
  assessment in DM872. Overall there will be two assignments.

- This assignment must be carried out individually.

- To complete the assignment you have to submit in ItsLearning a `.tgz` or `.zip` archive
  named `asg1.tgz` or `asg1.zip` that decompress in the same structure as the
  `asg1` directory in this repository:

  ```{shell}
  asg1/
  ├── README.md
  ├── data
  ├── src
  └── tex
      └── main.pdf
  ```
  - `data` contains the problem instances

  - `tex` contains your report in pdf format as concise as possible (by no way more than 10
    pages) with the answers to the tasks. The report should be written
    in Latex using this [template](tex/template.tex).

  - `src` must contain the Python code for the calculations you carried out.

- **Deadline: Thursday, April 11, 2025, at 23:59**

- Questions and answers about this assignment cannot be addressed to the
  teachers but must be posted as issues in the github page
  [Issues](https://github.com/DM872/Resources/issues). Start the title with
  `[asg1]`. In this way, the communication will be visible to the others class
  members as well.

- Changes to this document after publication on March 9 can be tracked using the
  History link on the top right side of this page.

- You are recommended to read the Guide on the use of Generative AI at SDU
  [https://mitsdu.dk/AIatSDU](https://mitsdu.dk/en/mit_studie/kandidat/matematik-oekonomi_kandidat/vejledning-og-support/aipaasdu).
  In this assignment, you can use chatbots to help you resolving coding issues
  but you are not allowed to use them to directly solve the tasks or to write
  the text of the report. As setting clear boundaries is not an easy task, if
  you use chatbots you must share the chat and provide the link in the report.
  The chat can be left anonymous and always ensure you are not sharing sensitive
  or personal information. If the chatbot does not support chat sharing, then
  you can manually share the content by 1. copying the text from the chat; 2.
  pasting it into a note/document (e.g., Google Docs, Notes, Word); 3.
  generating a shareable link via that platform (if supported). Alternatively,
  you can paste the chat in an appendix of the report beyond the page limit. The
  content of the communication will not be used to determine whether you have
  been cheating but rather as an indication of how much help you needed to solve
  the assignment.



# Tasks:

    Line Search and Bracketing (Theory + Implementation)
    a) Describe the purpose of line search in optimization.
    b) Implement the Golden Section Search or Bisection Method to bracket a minimum along a search direction.
    c) Apply this method to a 1D quadratic function.

    Gradient-Based Methods (First and Second Order)
    a) Implement Gradient Descent with exact and inexact line search (e.g., Armijo rule or Wolfe conditions).
    b) Implement Newton’s Method with backtracking line search.
    c) Compare the convergence rate of both methods on convex functions like Rosenbrock’s function.

    Derivative-Free Methods
    a) Implement the Nelder-Mead Simplex method or Powell’s Method for functions where gradients are not available.
    b) Test the method on non-smooth or noisy functions.

    Discussion
        Analyze the performance of the methods on different objective functions.
        Discuss the impact of line search choices on convergence.
        Reflect on when derivative-free methods are preferable.

Bonus Task:

Implement a hybrid method combining derivative-free methods with gradient-based techniques.




Derivatives

- Derivatives in Multiple Dimensions
- Numerical Differentiation
- Automatic Differentiation

Bracketing

- Finding an Initial Bracket
- Fibonacci Search
- Golden Section Search
- Quadratic Fit Search
- Bisection Method

Descent Direction Iteration

Line Search

- Line Search
- Approximate Line Search:
  - Backtracking line search (Armijo line search)
  - Strong backtracking line search (bracketing + zoom)
  - Trust Region Methods
- Termination Conditions

First-Order Methods

- Gradient Descent
- Conjugate Gradient
- Momentum:
  - Nesterov Momentum
  - Adagrad
  - RMSProp
  - Adadelta
  - Adam
  - Hypergradient Descent

Second-Order Methods:

- Newton’s Method
- Secant Method
- Quasi-Newton Methods:
  - DFP
  - BFGS
  - L-BFGS

Direct Methods:

- Cyclic Coordinate Search
- Powell's Method
- Hooke-Jeeves
- Generalized Pattern Search
- Nelder-Mead Simplex Method
- (Divided Rectangles)
