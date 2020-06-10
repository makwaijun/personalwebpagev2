---
title: "The lifestack project"
date: 2020-06-04T22:34:13+08:00
draft: false
tags: ["website"]
---

# [Scope] Web Project 1: My "Lifestack"

One of the projects I intended to host on this website was a visual representation of my intellectual (?) progress. This is in line with my first post, which spoke of the need to better understand my learning journey that has brought me here today.

It is meta-project that addresses its very conception.

## Originating the Idea

I studied sustainability, which got me interested into system dynamics and complexity science.

At work, I had the opportunity to dive deeper into complexity science, as applied to economics (i.e. [Economic Complexity](https://atlas.cid.harvard.edu/) by Hausmann and Hidalgo).

It was through this that i explored the tools to make such visualisations. R, using the igraph library. Looked into the networkD3 package for R more recently as well.

If there is something i've learnt - complexity

Along the  I have been fascinated with networks and the interconnections between intangible things. Even though I get the sense that it may not *always* assist decision making. Given the non linear nature, it is better suited to describe correlations rather than causation. 

But in anycase, what better way to represent and plot my life's knowledge on a map? 

A painting that can highlight the skills, projects and interests that has led me to where I am today.

A project that comments on itself. A representation of inter/multi-disciplinaries. A tool for polymaths.

## Approach

Originally, I thought this would take a long time to do. Learning backend. Javascript. Json(?) Both of which are entirely foreign to me at the moment. I had envisioned this to be a web development project. 

But today I managed to find a potential resource to kick it off! 

This [guy](https://www.youtube.com/watch?v=tc8DU14qX6I) reminded me that APIs can directly be embedded into HTML. Hopefully I won't need to extensively learn any backend. While he used Chart.JS, i am strongly reminded that D3 is also a popular Javascript package as well. It contains network visualisations in its library. And thus the plan is formed:

### Steps to take

1. Build a static page on Hugo
2. Write my data into csv form
3. Call the D3.JS api, placing the csv file in a content folder
4. Visualise! (unsure if this should be force-directed or not)

### Data parameters:

1. Cluster (for colour)
2. Type: project vs skill/interest (for shape)
3. Adjacent nodes
4. Year

Of course, this will take a considerable amount of tinkering with D3. Oh well - I learn best with a clear goal in mind and existing examples to work off from.

## Taking Inspiration

It is past midnight on a workday, but I am permitting myself to feel a little inspired. Reading through the blogs of two incredible data visualisers: [Shirley wu]("https://www.visualcinnamon.com/2017/03/my-journey-into-dataviz") and [Nadieh Bremer](https://www.visualcinnamon.com/2017/03/my-journey-into-dataviz). On a sweeter note: i observed that Nadieh's site is developed on Hugo and deployed on Netlify. This sounds awfully familiar :) .

## Features to consider

1) Link the map it onto topics I like to blog about. Something like a meta-map, where my thoughts on a topic can be linked to a node.

---

Looks like this is the project for the weekend.