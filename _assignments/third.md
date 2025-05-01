---
layout: assignment_plain
title:  "Assignment 3"
date: 2025-04-27 11:00:00 +0100
date_show: 2025-04-27 08:27:19 +0100
mathjax: true
math: mathjax3
week: 15
sol_url: ""
comments: true
script: "none.py"
categories: assignments
---

<!-- https://pdmosses.github.io/just-the-docs-tests-old/docs/math/mathjax3/ -->

# Obligatory Assignment 3

- Read the instructions in the [preface]({{ "/assignments/preface/" | absolute_url }})

- Groups can differ from those in asg1 and asg2. Experimenting to work with different
  persons can be instructive.

- **Deadline:** Saturday, May 10, 2025, at 23:59

## Linear Programming Modelling and Solving

The goal of this assignment is to make experience with modelling and solving,
using Python, linear programming problems for decision making tasks.

Two opponents, say Antigonus and Brasidas, are fighting a battle over three mountain
passes. Each of them commands seven legions. The one who sends more legions
to a pass occupies it, but when the same number of legions meet, there will be
a draw. Finally, the one who occupies more passes than the other wins the
battle, with a draw occurring if both occupy the same number of passes.  

They must simultaneously decide how to allocate their legions over the passes
without knowing what the other will do. The goal is to win the most passes (or
maximize some payoff based on the passes won). It makes sense to randomize the
allocations to avoid being predictable. By randomized allocations, we mean that
Antigonus is making his choices at random according to some probability
distribution. Of course, the same applies to Brasidas. The problem is that they
must decide on the probability distributions for their allocations. The
probability distributions are defined over the set of all possible allocations
of legions to the three passes. 

(You can rethink the problem in the context of election or marketing
competitions, if you like.)

## Your Tasks

1. Determine how many different allocations each opponent has.

2. Build the payoff matrix for Antigonus' allocations on the rows and Brasidas'
   allocations on the columns. Each element of the matrix gets 1 if
  Antigonus'allocation wins, -1 if Brasidas' allocation wins and 0 otherwise.

3. Model the problem of finding the optimal strategy for Antigonus as a linear
  programming problem. Assume that Antigonous, when playing some randomized
  allocation, expects Brasidas to play a best response against this allocation.
  The goal of Antigonus is to maximize the worst-case expected payoff, say $$v$$.
  In this way, by adopting his optimal strategy, he can assure himself of
  winning $$v$$ on average.

4. Solve the linear programming problem with the tools from the Python module
  `scipy.optimize` and highlight the optimal strategy found for Antigonus and
  the optimal value, that is, the expected payoff (expected win for Antigonus). 

5. Try changing the number of legions. Instead of seven, try with other numbers,
  say five, six, eight, nine. Do you find a case in which the optimal allocation
  strategy is deterministic, that is, a pure unique allocation?  

6. Model the problem from the point of view of Brasidas, assuming that he also
   uses a randomized strategy. Use the same payoff matrix constructed for
  Antigonus. What is the expected payoff for him? Does the result make sense?

Collect evidence of your work in a short written report.
