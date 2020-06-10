---
title: "Coding the Lifestack Project"
date: 2020-06-08T19:27:17+08:00
draft: false
tags: ["website"]
---

#### Opening Thoughts

Slept late last night - cracking my head over the issues below. Not a terribly productive day, but I had been somewhat looking forward to continuing on the project. Ended up reading a light book on military history before bed, delaying bedtime that little bit more...

## Cracked Heads and  Eye Bags

Ran into several issues while doing this.

1. d3.js library was initially not working with some demo code. Resolution: setting the right version of d3. As it turns out, there were major changes in how data is imported between version 4 and version 5.
2. Unsure of how to navigate the hugo structure and host data files statically. Resolution: host the static dataset on github. Call it in the raw format in javascript. Saves the cost having to host it on netlify too (every bit counts!).

### Sources and links

Code blocks: 

- http://bl.ocks.org/jose187/4973286
- http://bl.ocks.org/jose187/4733747
- https://codepen.io/smlo/pen/JdMOej
- https://bl.ocks.org/heybignick/3faf257bbbbc7743bb72310d03b86ee8

Literature:

- https://medium.com/ninjaconcept/interactive-dynamic-force-directed-graphs-with-d3-da720c6d7811
- http://coppelia.io/2014/07/an-a-to-z-of-extra-features-for-the-d3-force-layout/
- https://livebook.manning.com/book/d3js-in-action-second-edition/chapter-7/





