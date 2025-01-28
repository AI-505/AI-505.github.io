---
title: Information
layout: home
nav_order: 1
last_modified_date: 2024-01-29T16:22:00
---



## General information


- [Official course description](https://odinlister.sdu.dk/fagbesk/internkode/AI505/)

x- [ItsLearning](https://sdu.itslearning.com/main.aspx?CourseID=39556)




## Teacher

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}

<!--

## Instructors

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}

-->




