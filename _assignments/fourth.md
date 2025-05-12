---
layout: assignment_plain
title:  "Assignment 4"
date: 2025-05-11 11:00:00 +0100
date_show: 2025-05-11 08:27:19 +0100
mathjax: true
math: mathjax3
week: 20
sol_url: ""
comments: true
script: "none.py"
categories: assignments
---

<!-- https://pdmosses.github.io/just-the-docs-tests-old/docs/math/mathjax3/ -->

# Obligatory Assignment 4

- Read the instructions in the [preface]({{ "/assignments/preface/" | absolute_url }})

- Groups can differ from those in the previous assignments. 

- **Deadline:** Saturday, May 31, 2025, at 23:59


## Candle Race

The following problem was posed by Carlos Fonseca at the SIGEVO Summer School 2024.

In a race, there is a set of villages to be visited, $$V$$, and there is a candle in
each village. Villages and the corresponding candles are identified by an index,
$$i = 1, \ldots , n$$, and different candles may have different properties. In particular,
each candle $$i$$ has a length, $$h_i$$, and a burning rate, $$b_i$$. For each minute that passes,
the length $$h_i$$ is reduced by $$b_i$$, until it eventually reaches $$0$$. There is also a village
with index $$0$$ where the race starts. This village has no candle.
At the beginning of the race, the candles are lit. The goal is to visit each village
and blow out the candles. When a candle is blown out, the player scores points
equal to the remaining length of the candle. Given the properties of each candle,
and the minimum travelling time between the villages, the problem consists in
finding a route that maximizes the player's score.

### Input

The first line of the input contains an integer $$n$$ denoting the number of villages.
The following line contains two integers denoting the $$x$$ and $$y$$ coordinates of the
starting village.
The following $$n - 1$$ lines each give four space-separated integers corresponding
to the information pertaining to each village:

- $$x$$ coordinate
- $$y$$ coordinate
- Initial candle height, $$h_i$$
- Burning rate per unit of time, $$b_i$$

The time in minutes between two villages is given by the Manhattan distance.

### Output

Print the indices of the villages in the order that they should be visited (excluding
the starting village), one index per line. It is assumed that, once the player arrives
at a village, they immediately blow out the candle (there is no point in waiting
after all).

Note: The player does **not** need to visit every village.

### Example

Input:

```text
5
0 0
16 25 464 2
10 34 696 6
28 17 302 5
19 57 523 10
```

Output (Score 502):

```text
1
3
2
4
```

### Problem Instances

Three instances of the problem are available in this [archive]({{
"/assets/candle-race_data.tgz" | absolute_url }}).


### Remarks

- The assignment is about Randomized Optimization Heuristics and you must follow
  the ROAR specification. An implementation thereof for the TSP has been made
  availabe in Unit 7.

- In the report you must provide information about your specific implementation
  of the problem modeling operations. In case of need to show algorithm
  sketches, use pseudo-code rather than Python snippets.

- For the algorithms implemented (ie, metaheuristics) specify whether the
  implementation is yours or whether you used the handed out template.

- If you have compared different algorithms give account of this in the report.

- Use a time limit of 60 seconds per run. Report the results of your best
  algorithm on each instance in a table.
  
- The quality of the final solution has an impact on the grade of this
  assignment.