var sets = [
    {sets:["Sust"], label: "Sustainability", desc: "-", size: 6},
    {sets:["Strategy"], label: "Strategy", desc: "-", size: 8},
    {sets: ["Sust", "Strategy"], label: "-" , desc: "Developed framing and set up of new Sustainability team", size: 2},
    {sets:["Digital"], label: "Digital", desc: "-", size: 3},
    {sets:["Running"], label: "Running", desc: "-", size: 1},
    {sets:["Music"], label: "Music", desc: "-", size: 1},
    {sets:["Cooking"], label: "Cooking", desc: "-", size: 1},
    {sets:["Cycling"], label: "Cycling", desc: "-", size: 1}
    ];

    var chart = venn.VennDiagram()
          .width(500)
          .height(400)
      
    var div = d3.select("#venn_one").datum(sets).call(chart);
    div.selectAll("text").style("fill", "white");
          div.selectAll(".venn-circle path")
                  .style("fill-opacity", .85)
                  .style("stroke-width", 4)
                  .style("stroke-opacity", 3)
                  .style("stroke", "fff");
    
    var tooltip = d3.select("#venn_one").append("div")
          .attr("class", "venntooltip")

      div.selectAll("g")
          .on("mouseover", function(d, i) {
              // sort all the areas relative to the current item
              venn.sortAreas(div, d);

              // Display a tooltip with the current size
              tooltip.transition().duration(40).style("opacity", 1);
              tooltip.text(d.desc);
              // highlight the current path
              var selection = d3.select(this).transition("tooltip").duration(400);
              selection.select("path")
                  .style("stroke-width", 3)
                  .style("fill-opacity", d.sets.length == 1 ? .8 : 0)
                  .style("stroke-opacity", 1);
          })
          .on("mousemove", function() {
              tooltip.style("left", (d3.event.pageX) + "px")
                     .style("top", (d3.event.pageY - 28) + "px");
          })

          .on("mouseout", function(d, i) {
              tooltip.transition().duration(2000).style("opacity", 0);
              var selection = d3.select(this).transition("tooltip").duration(400);
              selection.select("path")
                  .style("stroke-width", 3)
                  .style("fill-opacity", d.sets.length == 1 ? .8 : 0)
                  .style("stroke-opacity", 1);
          })