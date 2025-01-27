---
layout: page
title: Announcements
nav_exclude: false
nav_order: 0
description: A feed containing all of the class announcements.
---



# Linear and Integer Programming

<br>

{% assign units = site.modules %}
{% for unit in units %}
[{{ unit.title | escape }}]({{unit.url | relative_url }})
{% endfor %}


# Announcements


<!-- Announcements are stored in the `_announcements` directory and rendered according to the layout file, `_layouts/announcement.html`. -->



{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}


