---
title: Information
layout: home
nav_order: 1
last_modified_date: 2024-01-29T16:22:00
---



## General information


- [Official course description AI505](https://odinlister.sdu.dk/fagbesk/internkode/AI505/)
- [Official course description AI801](https://odinlister.sdu.dk/fagbesk/internkode/AI801/)

- [ItsLearning](https://sdu.itslearning.com/main.aspx?CourseID=47194)




## Teacher

{% assign instructors = site.staffers | where: 'role', 'Instructor' %}
{% for staffer in instructors %}
{{ staffer }}
{% endfor %}

{% assign teaching_assistants = site.staffers | where: 'role', 'Teaching Assistant' %}
{% assign num_teaching_assistants = teaching_assistants | size %}
{% if num_teaching_assistants != 0 %}


## Instructor

{% for staffer in teaching_assistants %}
{{ staffer }}
{% endfor %}
{% endif %}





