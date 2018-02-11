/**
 * Created by Ag Ibrahim Mohamed Ali on 07/02/2018.
 */
/**
 * Created by Ag Ibrahim Mohamed Ali on 07/02/2018.
 */
self.onInit = function() {
    self.ctx.$scope.datasources = self.ctx.defaultSubscription
        .datasources;
    self.ctx.$scope.data = self.ctx.defaultSubscription
        .data;

    self.ctx.$scope.datasourceData = [];

    var currentDatasource = null;
    var currentDatasourceIndex = -1;

    for (var i = 0; i < self.ctx.$scope.data.length; i++) {
        var dataKeyData = self.ctx.$scope.data[i];
        if (dataKeyData.datasource != currentDatasource) {
            currentDatasource = dataKeyData.datasource
            currentDatasourceIndex++;
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex] = [];

        }
        try {
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex].push(
                dataKeyData.data[0][1]);
        } catch (e) {
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex].push(0);
        }
    }
    createView();
}
self.onDataUpdated = function() {
    self.ctx.$scope.datasources = self.ctx.defaultSubscription
        .datasources;
    self.ctx.$scope.data = self.ctx.defaultSubscription
        .data;

    self.ctx.$scope.datasourceData = [];

    var currentDatasource = null;
    var currentDatasourceIndex = -1;

    for (var i = 0; i < self.ctx.$scope.data.length; i++) {
        var dataKeyData = self.ctx.$scope.data[i];
        if (dataKeyData.datasource != currentDatasource) {
            currentDatasource = dataKeyData.datasource
            currentDatasourceIndex++;
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex] = [];

        }
        try {
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex].push(
                dataKeyData.data[0][1]);
        } catch (e) {
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex].push(0);
        }
    }
    console.log("Data: ", self.ctx.$scope.datasourceData[
        0]);
    createChart();
}
self.onResize = function() {
    console.log("Data: ", self.ctx.$scope.datasourceData[
        0]);
    var myNode = document.getElementById(
        "BatteryCellsView");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    createView();
    createChart();
}
createBackground = function(width, height) {
    var g = document.createElementNS(
        "http://www.w3.org/2000/svg", "g");
    var rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect1.setAttributeNS(null, "x", (width * 172 / 475));
    rect1.setAttributeNS(null, "y", height * 2 / 415);
    rect1.setAttributeNS(null, "width", width * 130 /
        475);
    rect1.setAttributeNS(null, "height", height * 71 /
        415);
    rect1.setAttributeNS(null, "rx", width * 10.65 /
        475);
    rect1.setAttributeNS(null, "ry", height * 10.65 /
        415);
    rect1.setAttributeNS(null, "fill", "#ED7F10");
    rect1.setAttributeNS(null, "stroke", "black");
    rect1.setAttributeNS(null, "stroke-width", height *
        5 / 415);
    rect1.setAttributeNS(null, "pointer-events", "none");
    var rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect2.setAttributeNS(null, "x", width * 2 / 475);
    rect2.setAttributeNS(null, "y", height * 32 / 415);
    rect2.setAttributeNS(null, "width", width * 470 /
        475);
    rect2.setAttributeNS(null, "height", height * 380 /
        415);
    rect2.setAttributeNS(null, "rx", width * 57 / 475);
    rect2.setAttributeNS(null, "ry", height * 57 / 415);
    rect2.setAttributeNS(null, "fill", "#ED7F10");
    rect2.setAttributeNS(null, "stroke", "#ED7F10");
    rect2.setAttributeNS(null, "stroke-width", height *
        5 / 415);
    rect2.setAttributeNS(null, "pointer-events", "none");
    var rect3 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect3.setAttributeNS(null, "x", width * 175 / 475);
    rect3.setAttributeNS(null, "y", height * 22 / 415);
    rect3.setAttributeNS(null, "width", width * 124 /
        475);
    rect3.setAttributeNS(null, "height", height * 40 /
        415);
    rect3.setAttributeNS(null, "fill", "#ED7F10");
    rect3.setAttributeNS(null, "stroke", "none");
    rect3.setAttributeNS(null, "pointer-events", "none");
    g.append(rect1);
    g.append(rect2);
    g.append(rect3);
    return g;
}
createChart = function() {
    var width = self.ctx.width * 450 / 650;
    var backheight = self.ctx.height - 6;
    var height = backheight - backheight * 120 / 520,
        green = "#7FDD4C",
        red = "#BB0B0B";
    var y = d3.scaleLinear()
        .range([height, height / 2]);
    // y.domain([0, d3.max(self.ctx.$scope.datasourceData[0], function(d) {
    //     return d;
    // })]);
    y.domain([0, 2]);
    var chart = d3.select("#chart")
        .attr("y", backheight * 70 / 520)
        .attr("width", width)
        .attr("height", backheight);
    var barWidth = (width - width * 100 / 650) / self.ctx
        .$scope.datasourceData[0].length;
    var bar = chart.selectAll("g")
        .data(self.ctx.$scope.datasourceData[0])
        .enter()
        .append("g")
        .attr("height", height)
        .attr("transform", function(d, i) {
            return "translate(" + (i * barWidth +
                width * 60 / 650) + ", 0)";
        });
    bar.append("rect")
        .attr("y", 0)
        .attr("rx", width * 4 / 650)
        .attr("ry", backheight * 4 / 520)
        .attr("fill", "#fff2dd")
        .attr("height", height)
        .attr("width", barWidth - width * 20 / 650);
    bar.append("rect")
        .attr("class", "cell")
        .attr("fill", (d) => d >= 0 ? green : red)
        .attr("y", function(d) {
            return d > 0 ? y(Math.abs(d)) - height /
                2 : height / 2;
        })
        .attr("height", function(d) {
            return d === 0 ? 0 : height - y(Math.abs(
                d));
        })
        .attr("width", barWidth - width * 20 / 650)
        .attr("rx", width * 4 / 650)
        .attr("ry", backheight * 4 / 520);
    chart.append("line")
        .attr("stroke", "black")
        .attr("x1", 0)
        .attr("y1", height / 2)
        .attr("x2", width)
        .attr("y2", height / 2)
        .attr("stroke-width", backheight * 3 / 520);
    let i = -2;
    while (i <= 2) {
        if(i!==0){
          chart.append("line")
            .attr("stroke", "white")
            .attr("x1", width * 15 / 650)
            .attr("y1", i === 0 ? height / 2 : i > 0 ?
                y(
                    i) - height / 2 : height - y(-i) +
                height / 2)
            .attr("x2", width - width * 15 / 650)
            .attr("y2", i === 0 ? height / 2 : i > 0 ?
                y(
                    i) - height / 2 : height - y(-i) +
                height / 2)
            .attr("stroke-width", backheight * 1 / 520);
        }
        chart.append("text")
            .attr("x", width * 30 / 650)
            .attr("y", (i === 0 ? height / 2  : i > 0 ?
                y(
                    i) - height / 2 : height - y(-i) +
                height / 2) + backheight * 10 / 520)
            .attr("dy", ".25em")
            .attr("fill", "white")
            .attr("font-weight", "bolder")
            .attr("font-size", width * 14 / 650)
            .text(Math.abs(i) + "A");
        i = i + 0.25; 
    }
    bar.append("text")
        .attr("class", "cellValue")
        .attr("font-weight", "bolder")
        .attr("fill", (d) => d===0 ? "black" : "white")
        .attr("x", (barWidth - width * 20 / 650) / 2)
        .attr("y", function(d) {
            return d === 0 ? height / 2 -
                backheight *
                20 / 520 : d > 0 ?
                y(d) + backheight * 4 / 520 -
                height / 2 : height - y(-
                    d) + height / 2 - backheight *
                15 /
                520;
        })
        .attr("dy", ".75em")
        .attr("font-size", width * 14 / 650)
        .text(function(d) {
            return d !== 0 ? Math.abs(d) + " A" :
                "0 A";
        });
    bar.append("text")
        .attr("x", (barWidth - width * 20 / 650) / 2)
        .attr("y", height + backheight * 20 / 520)
        .attr("dy", ".75em")
        .attr("fill", "white")
        .attr("font-size", width * 12 / 650)
        .text((d, i) => "C°" + (i + 1));

    chart.selectAll('.cell')
        .data(self.ctx.$scope.datasourceData[
            0])
        .exit()
        .transition()
            .duration(900)
        .remove();

    chart.selectAll('.cell')
        .data(self.ctx.$scope.datasourceData[0])
        .transition()
            .duration(900)
        .attr("fill", (d) => d >= 0 ? green : red)
        .attr("y", function(d) {
            return d > 0 ? y(Math.abs(d)) - height /
                2 : height / 2;
        })
        .attr("height", function(d) {
            return d === 0 ? 0 : height - y(Math.abs(
                d));
        })

    chart.selectAll('.cellValue')
        .data(self.ctx.$scope.datasourceData[0])
        .transition()
            .duration(900)
        .attr("fill", (d) => d===0 ? "black" : "white")
        .attr("x", (barWidth - width * 20 / 650) / 2)
        .attr("y", function(d) {
            return d === 0 ? height / 2 -
                backheight *
                20 / 520 : d > 0 ?
                y(d) + backheight * 4 / 520 -
                height / 2 : height - y(-
                    d) + height / 2 - backheight *
                15 /
                520;
        })
        .text(function(d) {
            return d !== 0 ? Math.abs(d) + " A" :
                "0 A";
        });
}
createView = function() {
    var width = self.ctx.width * 450 / 650;
    var height = self.ctx.height - 6;
    var svg = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", width);
    svg.setAttributeNS(null, "height", height);
    svg.setAttributeNS(null, "style",
        "background-color: rgb(255, 255, 255);display: block;margin: auto"
    );
    var g = createBackground(width, height);
    svg.append(g);
    var container = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg");
    container.setAttributeNS(null, "id", "chart");
    g.append(container);
    document.getElementById("BatteryCellsView").append(
        svg);
}
