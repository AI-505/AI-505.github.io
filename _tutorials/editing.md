---
layout: default
math: mathjax3
title:  Preparation for Take-Home Assignments 
date:   2021-01-31 09:33:19 +0100
categories: notes
---

# Preparation for Take-Home Assignments 


## Aiding tools

<!-- -->

-   Digital pens and scanners.


-   [Python for matrix operations](https://github.com/DM871/dm871.github.io/blob/main/notebooks/Tutorial4Exam.ipynb) (modules "numpy" and "fractions")

<!-- -->

-   Alternatives to Python for matrix calculations: R, MATLAB,
    Maple, etc.

-   [WC] Stefan Waner and Steven R. Costenoble. [Simplex Method tool](https://www.zweigmedia.com/simplex/simplex.php?lang=en)

-   Tools for plotting graphs: [LP
    Grapher](https://www.zweigmedia.com/utilities/lpg/index.html?lang=en),
    grapher in Mac, [graph.tk](http://graph.tk), tikz in Latex.


-   Text editor in VERBATIM mode (Unix: EMACS + ORG mode; Win:
    Gusek, etc)


-  To include source code in Latex you can use the package listing.
```  
  \usepackage{listing}
  \lstinputlisting[language=Python, firstline=1, lastline=8]{solution.py}
```

- To include output of source code in Latex you can use:
```
\begin{verbatim}
...
\end{verbatim}
```
there is also a package called `Verbatim` to customize the verbatim output.


- In Word to include code choose a monospace font like Courier.


## Templates
 
<!--

- The submissions at the assignments is digital. To digitalize handwritten text, formulas and graphs you can use a digital pen or a scanner.

-->

-   Recommended answer templates: 
    - [Latex](/assets/Templates/template_answers.tex) ([PDF](/assets/Templates/template_answers.pdf))
    - [Word](/assets/Templates/Template_Wordformat.docx) 
    - [OpenDocument](/assets/Templates/Template_Writerformat.odt)





## LaTeX

-   Mathematical formulas, if not handwritten, are best encoded
    in LaTeX. Typesetting them in Word takes too long.

    -   [Latex symbol classifier](http://detexify.kirelabs.org/classify.html)

<!-- [Syntax Highlight Code In Word Documents](http://www.planetb.ca/syntax-highlight-word) -->


-   To write ILP models in Latex you can use one of the following
    templates:


```
\begin{align}
 \label{ob} \max \; \quad & \sum_{j=1}^nc_jx_j  \\
 \label{c1} \mbox{s.t.}\quad &\sum\limits_{j=1}^n a_{ij}x_j\geq b_i, \quad i=1,\ldots,m \\
 \label{c2} &x_j \geq 0, \quad j=1,\ldots,n   
\end{align}
```

$$\begin{align}
   \label{ob} \max \; \quad & \sum_{j=1}^nc_jx_j  \\
   \label{c1} \mbox{s.t.} \quad &\sum\limits_{j=1}^n a_{ij}x_j\geq b_i, \quad i=1,\ldots,m \\
   \label{c2} &x_j \geq 0, \quad j=1,\ldots,n   
\end{align}
$$



```
\begin{equation}
 \begin{array}{lrll}
  \max & \sum\limits_{j=1}^nc_jx_j\\
      & \sum\limits_{j=1}^n a_{ij}x_j & \leq b_i,& i=1,\ldots,m\\
      & x_j&\geq 0, & j=1,\ldots,n
 \end{array}
\end{equation}
```

$$
\begin{array}{lrll}
    \max & \sum\limits_{j=1}^nc_jx_j\\
    &\sum\limits_{j=1}^n a_{ij}x_j&\leq b_i,& i=1,\ldots,m\\
    &x_j&\geq 0,& j=1,\ldots,n
\end{array}
$$


```
\begin{equation}
    \label{ob}
    \max  \sum_{j=1}^nc_jx_j\\
\end{equation}
\begin{equation}
    \label{c1}
    \sum_{j=1}^n a_{ij}x_j\leq b_i, i=1,\ldots,m\\
\end{equation}
\begin{equation}
    \label{c2}
    x_j\geq 0, j=1,\ldots,n
\end{equation}
```

$$\max  \sum_{j=1}^nc_jx_j$$

$$\sum_{j=1}^n a_{ij}x_j\leq b_i, i=1,\ldots,m$$

$$x_j\geq 0, j=1,\ldots,n$$






## Instructions on the front page of the test


[The following instructions will appear in the first assignment.]


This is the first of two tests that constitute the exam of the course.
The test consists of a number of tasks subdivided into subtasks. The
answers must be collected in a unique PDF document and are to be handed
in electronically in ItsLearning.

-   **The test is individual. You are not allowed to collaborate by any
    means with other persons or with chatbots.**

-   Keep your answers anonymous but make sure that you specify your
    **SDU username** (the part in your SDU email address before the @
    symbol). Use the Latex or Word templates provided in the external
    web page to see where to specify the SDU username (Tutorials
    $\rightarrow$ Preparation for the Take-Home Assignments).

-   Your answers will be assessed by the teacher and an internal censor.
    Moreover, the answers will be grouped by subtasks by an automated
    parser tool. Therefore, it is very important that you follow the
    instructions below.

-   **In the PDF document make sure that you start a new page for every
    SUBTASK and you write a section title that includes the word
    "Subtask", specifying which SUBTASK you are addressing. See the
    examples in the Latex and Word templates provided in the external
    web page.**

-   You can write your answers in Danish or in English.

-   *Remember to justify all your statements!* It is not sufficient to
    present an answer, you must also show briefly how you found it. You
    may refer to results from the lecture notes, the slides or the books
    listed at the course web page. References to other books (outside
    the course material) or to internet links are not accepted as valid
    answers to a task.

-   You are allowed to use tools such as Python to assist you in the
    calculations. If you report source code in Python or other
    languages, you must also report the output it produces when
    executed.

-   Make sure you take security copies of your documents while the test
    is in progress. It is your own responsibility in case of technical
    issues.

-   Tools and tutorials for typesetting your answers are available from
    the Public Web Page: Tutorials $\rightarrow$ Preparation for the
    Take-Home Assignments.

-   The contribution of each subtask to the final evaluation is not
    given but tasks are sorted by non-increasing impact on the final
    grade.

-   The test consists of tasks distributed on pages.


