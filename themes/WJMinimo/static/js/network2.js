var dataSet=[10,12,13,74,100]

// setting the height and width of the
// svg where it will be drawn
var h=100;
var w=500;

// start d3 and tell it to make a svg
// with the above attributes (height and width)
var svg=d3.select("#theSVG").append("svg")
			.attr("width",w)
			.attr("height",h);

// create the bars for the bar chart.
svg.selectAll("rect")
	// get the data from aboce
	.data(dataSet)
	// will repeat for each entry in data
	.enter()
	// and create a rectangle for each entry
	.append("rect")
	// set the height of the rectangle
	.attr("y",function(d){
		return h-d;
	})
	// set width of rectagles
	.attr("width",20)
	// draw each rectangle 21px to the right.
	.attr("x",function(d,i){
		return i*21;
	})
	// now we use the data to se the height
	.attr("height",function(d){
		return d;	
	})
	;