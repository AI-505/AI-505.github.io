---
# You don't need to edit this file, it's empty on purpose.
# Edit theme's home layout instead if you wanna make some changes
# See: https://jekyllrb.com/docs/themes/#overriding-theme-defaults
layout: default
mathjax: true
---


## General information

- [Official course description](https://odinlister.sdu.dk/fagbesk/internkode/AI505/).

- [Room in ItsLearning](https://sdu.itslearning.com/main.aspx?CourseID=39556)

- Teacher: [Marco Chiarandini](https://imada.sdu.dk/u/marco)

- Teacher assistants: [Bonnie Liefting](mailto:bliefting@imada.sdu.dk) (AI505: H1)


## Schedule

- <a href="https://skemaplan.sdu.dk/N400005101/f25">MitSDU</a>

<!-- <a href="https://mitsdu.sdu.dk/skema/activity/N330069101/e24">DM587</a> -->

<!-- <a href="https://mitsdu.sdu.dk/skema/activity/N330064101/e24">AI511</a> -->

<!--
- Alternative view: <a href="https://vis.aida.imada.sdu.dk/public/e23draft2/DM587">DM587</a>, <a href="https://vis.aida.imada.sdu.dk/public/e23draft2/DM579">DM579</a>
-->

- Semester overview: <button onclick="myFunction('ai505h1')" class="w3-btn w3-cell w3-left-align"> AI505: H1 <i class="fa fa-caret-down"></i></button>
  
<div id="ai505h1" class="w3-container w3-hide">
<div class="w3-responsive">
<div w3-include-html="./assets/ai505_h1.html"></div>
<script>
w3.includeHTML();
</script>
</div>
</div>




## Contents

### Introductory Classes




| Week | Topics and Slides | Resources |
|------+-------------------+-----------|
|    6 |                   |           |
|      |                   |           |
|    7 |                   |           |
|      |                   |           |
|------+-------------------+-----------|
|    8 |                   |           |
|      |                   |           |
|    9 |                   |           |
|------+-------------------+-----------|
|      |                   |           |
|   10 |                   |           |
|      |                   |           |
|------+-------------------+-----------|
|   11 |                   |           |
|      |                   |           |
|   12 |                   |           |
|------+-------------------+-----------|
|      |                   |           |
|   13 |                   |           |
|      |                   |           |
|------+-------------------+-----------|
|   14 |                   |           |
|      |                   |           |
|   15 |                   |           |
|------+-------------------+-----------|
|      |                   |           |
|   18 |                   |           |
|      |                   |           |
|------+-------------------+-----------|
|   19 |                   |           |
|------+-------------------+-----------|






<table>
<thead>
<tr>
<th width="5%">Week</th>
<th width="7%">Date</th>
<th width="43%">Topics and Slides</th>
<th width="44%">Suggested reading</th>
</tr>
</thead>
{% for lecture in site.data.lectures %}
{% assign date_format = site.minima.date_format | default: "%b %-d" %}
<tbody>
<tr>
<td>{{ lecture.week }}</td>
<td>{{ lecture.date | date: date_format }}</td>
<td>
{% if lecture.turl %}
<a class="post-link" href="{{ lecture.turl | absolute_url }}">{{ lecture.topics | escape }}</a>
{% else %}
{{ lecture.topics | escape }}
{% endif %}
</td>
<td>{{ lecture.sug_reading }}</td>
</tr>
</tbody>
{% endfor %}
</table>



### Exercises and Assignments



| Week | Sheet                      | Topic  	           | Solutions     | Assignments        |
|------+----------------------------+---------------------------+---------------+--------------------|
|   43 | [colab1][40]; [sheet0][30]; [sheet1][31]  | Python, Part 1           | [sheet0][300]; [sheet1][311]| [asg 0][50] |
|------+----------------------------+---------------------------+---------------+--------------------|
|   44 | [sheet2][32]              | Python, Part 2 and 3          |    [sheet2][833]        |   [asg 1][51]      |
|------+----------------------------+---------------------------+---------------+--------------------|
|   45 |       [sheet3][33]          | Least Squares             |  [sheet3][84]   | [asg 2][52]   |
|------+----------------------------+---------------------------+---------------+--------------------|
|   46 |  [sheet4][34]   |  Graph Theory                         |   [sheet4][344]         | [asg 3][53]    |
|------+----------------------------+---------------------------+---------------+--------------------|
|   47 |       [sheet5][35]          | From Random Polygon to Ellipse |  [sheet5][85]  |   [asg 4][54]     |
|------+----------------------------+---------------------------+---------------+--------------------|
|   48 |     [sheet6][36]         | Page Rank                 |    [sheet6][87]       |     [asg 5][55]           |
|------+----------------------------+---------------------------+---------------+--------------------|
|   49 |     [sheet7][37]      | Eigenfaces / PCA               |    [sheet7][377]           |   [asg 6][56]  |
|------+----------------------------+---------------------------+---------------+--------------------|
|   50 |    [sheet8][38]          | Linear Programming               |  [sheet8][388]              |             |
|------+----------------------------+---------------------------+---------------+--------------------|



<!-- 
 
-->

<!--
|------+----------------------------+---------------------------+---------------+--------------------|
|   43 | [colab1][40]; [sheet1][31] | Python, Part 1            | [sheet1][83]  | [asg0][50]         |
|------+----------------------------+---------------------------+---------------+--------------------|
|   44 | [sheet2][32]               | Python, Part 2            |               | [asg1][51]         |
|      | [sheet3][33]               | Python, Part 3 - plotting | [sheet3][833] |                    |
|------+----------------------------+---------------------------+---------------+--------------------|
|   45 | [sheet4][34]               | Least Squares             | [sheet4][84]  | [asg2][52]         |
|------+----------------------------+---------------------------+---------------+--------------------|
|   46 | [sheet5][35]            | Page Rank                 |   [sheet5][87]            |                    |
|      |                            |                           |               | [asg_pagerank][55] |
|------+----------------------------+---------------------------+---------------+--------------------|
|   47 | [sheet6][36]    |  Graph Theory                         |   [sheet6][85]            |                    |
|      |                            |                           |               |     [asg_graphs][54]               |
|------+----------------------------+---------------------------+---------------+--------------------|
|   48 | [sheet7][37]               | From Random Polygon to Ellipse | [sheet7][86]   |             |
|      |                            |                                |  | [asg_wienerpolygon][53]              |
|------+----------------------------+---------------------------+---------------+--------------------|
|   49 | [sheet8][38]               | Eigenfaces / PCA               |               |             |
|      |                            |                                |               | [asg_eigenfaces][56]  |
|------+----------------------------+---------------------------+---------------+--------------------|
|   50 | [sheet9][39]               | Linear Programming               |               |             |
|------+----------------------------+---------------------------+---------------+--------------------|



|------+----------------------------+--------------------------------+---------------+-------------|
|   43 | [colab1][40]; [sheet1][31] | Python, Part 1                 | [sheet1][83]  | [asg0][50]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   44 | [sheet2][32]               | Python, Part 2                 |               | [asg1][51]  |
|      | [sheet3][33]               | Python, Part 3 - plotting      | [sheet3][833] |             |
|------+----------------------------+--------------------------------+---------------+-------------|
|   45 | [sheet4][34]               | Least Squares                  | [sheet4][84]  | [asg2][52]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   46 | [sheet5][35]               | Graph Theory                   | [sheet5][85]  |             |
|      |                            |                                |               | [asg3][53]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   47 | [sheet6][36]               | From Random Polygon to Ellipse | [sheet6][86]  |             |
|      |                            |                                |               | [asg4][54]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   48 | [sheet7][37]               | Page Rank                      | [sheet7][87]  |             |
|      |                            |                                |               | [asg5][55]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   49 | [sheet8][38]               | Eigenfaces / PCA               |               |             |
|      |                            |                                |               | [asg6][56]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   50 | [sheet9][39]               | Linear Programming               |               |             |
|------+----------------------------+--------------------------------+---------------+-------------|

-->


<!--

| Week | Sheet                      | Topic  	                | Solutions     | Assignments |
|------+----------------------------+--------------------------------+---------------+-------------|
|   44 | [colab1][40]; [sheet1][31] | Python, Part 1                 | [sheet1][83]  | [asg0][50]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   45 | [sheet2][32]               | Python, Part 2                 |               | [asg1][51]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   46 | [sheet3][33]               | Python, Part 3 - plotting      | [sheet3][833]  |             |
|      | [sheet4][34]               | Least Squares                  | [sheet4][84]  | [asg2][52]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   47 | [sheet5][35]               | Graph Theory                   | [sheet5][85]  |             |
|      |                            |                                |               | [asg3][53]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   48 | [sheet6][36]               | From Random Polygon to Ellipse | [sheet6][86]  |             |
|      |                            |                                |               | [asg4][54]  |
|------+----------------------------+--------------------------------+---------------+-------------|
|   49 | [sheet7][37]               | Page Rank                      | [sheet7][87]  | [asg5][55]  |
|      |                            |                                |               |             |
|------+----------------------------+--------------------------------+---------------+-------------|
|   50 | [sheet8][38]               | Eigenfaces / PCA               |  [sheet8][88]       |             |
|      |                            |                                |               | [asg6][56]  |
|------+----------------------------+--------------------------------+---------------+-------------|

-->


<!--


| Week | Type | Sheet        | Topic  	                | Solutions     | Assignments |
|------+------+--------------+--------------------------------+---------------+-------------|
|   44 | L    | [colab1][40] [sheet1][31] | Python                         |               | [asg0][50]  |
|------+------+--------------+--------------------------------+---------------+-------------|
|   45 | L    |              |                                |               |  |
|------+------+--------------+--------------------------------+---------------+-------------|
|   46 | L    | [sheet2][32] | Python                         |               |             |
|      | L    | [sheet3][33] | Python - plotting              |               | [asg2][52]  |
|------+------+--------------+--------------------------------+---------------+-------------|
|   47 | L    | 
|      | L    |              |                                |               | [asg3][53]  |
|------+------+--------------+--------------------------------+---------------+-------------|
|   48 | L    | [sheet5][35] | Graph Theory                   |               |             |
|      | L    |              |                                |               | [asg4][54]  |
|------+------+--------------+--------------------------------+---------------+-------------|
|   49 | L    | [sheet6][37] | From Random Polygon to Ellipse |               |             |
|      | L    |              |                                |               |
|------+------+--------------+--------------------------------+---------------+-------------|
|   50 | L    |
|      | L    |              |                                |               | [asg6][56]        |
|------+------+--------------+--------------------------------+---------------+-------------|
|   51 | L    | [sheet8][38] | Eigenfaces                     |               |             |
|------+------+--------------+--------------------------------+---------------+-------------|


-->









## References

#### Recommended book:

- [] https://algorithmsbook.com/optimization/files/optimization.pdf



#### Other References:



[1]: {{ "/assets/PythonEssentials.pdf" | absolute_url }}

[10]: {{ "https://www.cs.cornell.edu/cv/ResearchPDF/EllipsePoly.pdf" |absolute_url }}
[11]: {{"https://www.pathlms.com/siam/courses/8265/sections/12047" |absolute_url}}
[12]: {{ "assets/ullmann.pdf" | absolute_url }}
[13]: {{ "assets/linreg-notes.pdf" | absolute_url }}
[14]: {{ "/assets/dm561-lec3.pdf" | absolute_url }}
[15]: {{ "/assets/dm561-linreg.pdf" | absolute_url }}
[18]: {{ "/assets/sheet5.html" | absolute_url }}
[19]: {{ "/assets/sheet6.html" | absolute_url }}
[21]: {{ "https://arxiv.org/abs/1404.1100" | absolute_url}}
[22]: {{ "https://github.com/Foundations-of-Applied-Mathematics/Labs/raw/master/docs/Volume1.pdf" | absolute_url }}
[23]: {{ "http://setosa.io/ev/principal-component-analysis/" | absolute_url }}
[24]: {{ "https://sebastianraschka.com/Articles/2015_pca_in_3_steps.html" | absolute_url }}
[25]: {{ "https://www.learnopencv.com/eigenface-using-opencv-c-python/" | absolute_url }}
[26]: {{ "https://github.com/Foundations-of-Applied-Mathematics/Labs/raw/master/docs/Volume1.pdf" | absolute_url }}



[40]: {{ "https://colab.research.google.com/github/DM561/dm561.github.io/blob/master/assets/Python_in_a_Nutshell.ipynb" | absolute_url }}


[30]: {{ "/assets/sheet0_python.pdf" | absolute_url }}
[300]: {{ "/assets/sheet0_python_sol.pdf" | absolute_url }}

{% capture page_link %}{% post_url 2020-10-28-sheet1 %}{% endcapture %}
[31]: {{ page_link | absolute_url }}

[31]: {{ "exercises/sheet_01.html" | absolut_url }}
[311]: {{ "/solutions/python_rasmus.html" | absolute_url }}

[32]: {{ site.baseurl }}{% post_url 2020-11-05-sheet2 %}
[32]: {{ "exercises/sheet_02.html" | absolut_url }}

[33]: {{ site.baseurl }}{% post_url 2021-11-03-sheet3 %}
[33]: {{ "exercises/sheet_03.html" | absolut_url }}
[833]: {{ "/solutions/python_plot_rasmus.html" | absolute_url }}
[84]: {{ "/solutions/linreg.html" | absolute_url }}

[34]: {{ "/assets/dm587-sheet4.pdf" | absolute_url }}
[344]: {{ "/assets/sheet4_sol.html" | absolute_url }}
[344]: {{ "/solutions/graphs_casper.html" | absolute_url }}


{% capture page_link %}{% post_url 2022-11-15-sheet5 %}{% endcapture %}
[35]: {{ page_link | absolute_url }}
[35]: {{ "exercises/sheet_05.html" | absolute_url }}
[85]: {{ "/solutions/wienerpolygon/main.pdf" }}


[36]: {{ "exercises/sheet_06.html" | absolut_url }}
[86]: {{ "https://roras18.github.io/dm561-TA-2020/sheet6_sol.pdf" }}
[87]: {{ "/solutions/pagerank.html" | absolute_url }}

[37]: {{ "/assets/ex-week48-2022.pdf" | absolute_url }}
[37]: {{ "exercises/sheet_07.html" | absolute_url }}
[377]: {{ "exercises/sheet_07_sol.html" | absolute_url }}

[38]: {{ "/assets/ex-week49-2022.pdf" | absolute_url }}
[38]: {{ "exercises/sheet_08.html" | absolute_url }}
[388]: {{ "exercises/sheet_08_sol.html" | absolute_url }}


[39]: {{ site.baseurl }}{% post_url 2021-12-14-sheet9 %}
[39]: {{ "exercises/sheet_09.html" | absolute_url }}
[88]: {{ "https://roras18.github.io/dm561-TA-2020/sheet8_sol.pdf" }}


[50]: {{ "/assignments/asg-tryout.html" | absolute_url }}
[51]: {{ "/assignments/asg-vecmat.html" | absolute_url }}
[52]: {{ "/assets/asg-linreg.pdf" | absolute_url }}
[53]: {{ "/assignments/asg-graphs.html" | absolute_url }}
[54]: {{ "/assignments/asg-polygon.html" | absolute_url }}
[55]: {{ "/assignments/asg-pagerank.html" | absolute_url }}
[56]: {{ "/assignments/asg-eigenfaces.html" | absolute_url }}
