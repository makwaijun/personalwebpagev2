
var margin = {top: 10, right: 30, bottom: 30, left: 40},
  width = 600 - margin.left - margin.right,
  height = 600 - margin.top - margin.bottom;

// append the svg object to the body of the page
var svg = d3.select("#lesmis")
.append("svg")
  .attr("width", width + margin.left + margin.right)
  .attr("height", height + margin.top + margin.bottom)
.append("g")
  .attr("transform",
        "translate(" + margin.left + "," + margin.top + ")");

var color = d3.scaleOrdinal(d3.schemeCategory20);

var simulation = d3.forceSimulation()
    .force("link", d3.forceLink().id(function(d) { return d.id; })) //tells the function to look at ID to define nodes
    .force("charge", d3.forceManyBody().strength(-20)) //negative charge, so they repel one another
    .force("center", d3.forceCenter(width / 2, height / 2));//balance around middle

d3.json("https://raw.githubusercontent.com/makwaijun/personalwebpage/master/miserables.json", function(error, graph) {
  if (error) throw error;

  var link = svg.append("g")
      .attr("class", "links")
    .selectAll("line")
    .data(graph.links)
    .enter().append("line") //add a line for each data pt
      .attr("stroke-width", function(d) { return Math.sqrt(d.value); }); //adds thickness. sqrt added so that lines are not too think

  var node = svg.append("g")
      .attr("class", "nodes")
    .selectAll("g")
    .data(graph.nodes)
    .enter().append("g")
    
	//set radius to 5, colour depending on grp number (preassigned). nodes are draggable
  var circles = node.append("circle")
      .attr("r", 5)
      .attr("fill", function(d) { return color(d.group); })
      .call(d3.drag()
          .on("start", dragstarted)
          .on("drag", dragged)
          .on("end", dragended));
  // append text, depennding on ID, set relative to X and Y coords
  var lables = node.append("text")
      .text(function(d) {
        return d.id;
      })
      .attr('x', 6)
      .attr('y', 3);

// title that appears on mouse over - tooltips
 node.append("title")
     .text(function(d) { return d.id; });

  simulation
      .nodes(graph.nodes)
      .on("tick", ticked); //update on every tick of force simulation

      //simulate based on links
  simulation.force("link")
      .links(graph.links);

 //mapping the connections of sources and target - will execute repeatedly. different positional attribute
  function ticked() {
    link
        .attr("x1", function(d) { return d.source.x; })
        .attr("y1", function(d) { return d.source.y; })
        .attr("x2", function(d) { return d.target.x; })
        .attr("y2", function(d) { return d.target.y; });

    node
        .attr("transform", function(d) {
          return "translate(" + d.x + "," + d.y + ")";
        })
  }
});

function dragstarted(d) {
  if (!d3.event.active) simulation.alphaTarget(0.7).restart(); //restarts simulation everyime something is dragged
  d.fx = d.x;
  d.fy = d.y;
}

function dragged(d) {
  d.fx = d3.event.x;
  d.fy = d3.event.y;
}

function dragended(d) {
  if (!d3.event.active) simulation.alphaTarget(0);
  d.fx = null;
  d.fy = null;
}

