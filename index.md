---
layout: page
title: Announcements
nav_exclude: false
nav_order: 0
description: A feed containing all of the class announcements.
---



# Optimization

<br>



{% assign units = site.modules %}
{% for unit in units %}
[{{ unit.title | escape }}]({{unit.url | relative_url }})
{% endfor %}


[**All slides in one file**]({{ "/assets/ai505-main.pdf" | absolute_url }})

# Announcements

<!-- Announcements are stored in the `_announcements` directory and rendered according to the layout file, `_layouts/announcement.html`. -->

{% assign announcements = site.announcements | reverse %}
{% for announcement in announcements %}
{{ announcement }}
{% endfor %}


