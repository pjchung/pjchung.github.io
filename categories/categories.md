---
layout: categories
title: Categories
permalink: /categories/
---

<table style="table-layout:fixed; width:100%">
  <tbody>
    <thead>
      <tr>
        <td style="width:30%">Categories</td>
        <td style="width:70%">Title</td>
      </tr>
    </thead>
    <tr ng-repeat="item in search | filter: searchbox">
      <td>{( item.category )}</td>
      <td><a ng-href="{( item.href )}">{( item.title )}</a></td>
    </tr>
  </tbody>
</table>
