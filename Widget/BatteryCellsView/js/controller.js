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
    try {
        for (var i = 0; i < self.ctx.$scope.data.length; i++) {
            var dataKeyData = self.ctx.$scope.data[i];
            if (dataKeyData.datasource !=
                currentDatasource) {
                currentDatasource = dataKeyData.datasource
                currentDatasourceIndex++;
                self.ctx.$scope.datasourceData[
                    currentDatasourceIndex] = [];
            }
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex].push(
                dataKeyData);
        }
        createView(self.ctx.width, self.ctx.height - 6);
        console.log(self.ctx.$scope.datasourceData[
                0]);
    } catch (e) {}
}
update = function(dataSource) {
    try {
        if (dataSource()[0].data[1]) {
            document.getElementById("BatteryCellsView")
                .style["border"] = "3px solid green";
        } else {
            document.getElementById("BatteryCellsView")
                .style["border"] = "3px solid red";
        }
        var cellData = [];
        for (let i = 1; i < dataSource().length; i++) {
            cellData.push(dataSource()[i].data[1]);
        }
        return cellData;
    } catch (e) {
        console.log(e);
        return null;
    }
}
self.onDataUpdated = function() {
    self.ctx.$scope.datasources = self.ctx.defaultSubscription
        .datasources;
    self.ctx.$scope.data = self.ctx.defaultSubscription
        .data;

    self.ctx.$scope.datasourceData = [];

    var currentDatasource = null;
    var currentDatasourceIndex = -1;
    try {
        for (var i = 0; i < self.ctx.$scope.data.length; i++) {
            var dataKeyData = self.ctx.$scope.data[i];
            if (dataKeyData.datasource !=
                currentDatasource) {
                currentDatasource = dataKeyData.datasource
                currentDatasourceIndex++;
                self.ctx.$scope.datasourceData[
                    currentDatasourceIndex] = [];
            }
            self.ctx.$scope.datasourceData[
                currentDatasourceIndex].push(
                dataKeyData);
        }
        console.log(self.ctx.$scope.datasourceData[0]);
        var ok=update(() => {return self.ctx.$scope.datasourceData[0];});
        console.log(ok);
    } catch (e) {}
}
self.onResize = function() {
    var myNode = document.getElementById(
        "BatteryCellsView");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    createView(self.ctx.width, self.ctx.height - 6);
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
    rect1.setAttributeNS(null, "fill", "#adaaa8");
    rect1.setAttributeNS(null, "stroke", "#ff8000");
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
    rect2.setAttributeNS(null, "fill", "#adaaa8");
    rect2.setAttributeNS(null, "stroke", "#ff8000");
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
    rect3.setAttributeNS(null, "fill", "#adaaa8");
    rect3.setAttributeNS(null, "stroke", "none");
    rect3.setAttributeNS(null, "pointer-events", "none");
    g.append(rect1);
    g.append(rect2);
    g.append(rect3);
    return g;
}
createChart = function(width, backheight) {
    var height = backheight - backheight * 120 / 520,
        green = "rgb(47, 191, 59)",
        red = "#ea445f",
        data = [63, -100, -61, 41, 27, -12, 0, 4, 100];
    var y = d3.scaleLinear()
        .range([height, height / 2]);
    var container = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg");
    container.setAttributeNS(null, "class", "chart");
    var chart = d3.select(container)
        .attr("y", backheight * 70 / 520)
        .attr("width", width)
        .attr("height", backheight);
    y.domain([0, d3.max(data, function(d) {
        return d;
    })]);
    var barWidth = (width - width * 100 / 650) / data.length;
    var bar = chart.selectAll("g")
        .data(data)
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
        .attr("fill", "#ccc9c7")
        .attr("height", height)
        .attr("width", barWidth - width * 20 / 650);
    bar.append("rect")
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
        .attr("stroke", "rgb(255, 120, 48)")
        .attr("x1", 0)
        .attr("y1", height / 2)
        .attr("x2", width)
        .attr("y2", height / 2)
        .attr("stroke-width", backheight * 3 / 520);
    let i = -100;
    while (i <= 100) {
        chart.append("line")
            .attr("stroke", "rgb(255, 120, 48)")
            .attr("x1", width * 15 / 650)
            .attr("stroke-dasharray", "5,5")
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
        chart.append("text")
            .attr("x", width * 40 / 650)
            .attr("y", (i === 0 ? height / 2 : i > 0 ?
                y(
                    i) - height / 2 : height - y(-i) +
                height / 2) + backheight * 10 / 520)
            .attr("dy", ".25em")
            .attr("fill", "rgb(255, 120, 48)")
            .attr("font-weight", "bold")
            .attr("font-size", width * 12 / 650)
            .text(Math.abs(i) + "A");
        i = i + 20;
    }
    bar.append("text")
        .attr("font-weight", "bolder")
        .attr("fill", "white")
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
                "0A";
        });
    bar.append("text")
        .attr("x", (barWidth - width * 20 / 650) / 2)
        .attr("y", height + backheight * 20 / 520)
        .attr("dy", ".75em")
        .attr("fill", "white")
        .attr("font-size", width * 12 / 650)
        .text((d) => "C°" + (data.indexOf(d) + 1));
    return container;
}
createView = function(backwidth, height) {
    var width = backwidth * 450 / 650;
    var svg = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", width);
    svg.setAttributeNS(null, "height", height);
    svg.setAttributeNS(null, "style",
        "background-color: rgb(255, 255, 255);display: block;margin: auto"
    );
    var g = createBackground(width, height);
    svg.append(g);
    g.append(createChart(width, height));
    document.getElementById("BatteryCellsView").append(
        svg);
}
