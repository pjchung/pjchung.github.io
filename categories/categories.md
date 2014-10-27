---
layout: categories
title: Categories
permalink: /categories/
---

{% assign sorted_categories = (site.categories | sort:0) %}
{% for category in sorted_categories %}
#### {{category[0] | capitalize }}

{% assign sorted_catposts = (category[1] | sort: 'title', 'last') %}
{% for catpost in sorted_catposts %}

* [{{catpost.title}}]({{catpost.url}})
{% endfor %}
{% endfor %}
