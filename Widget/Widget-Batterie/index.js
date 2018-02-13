self.onInit = function() {
    updateData();
    createView();
    createLevel();
}

self.onDataUpdated = function() {
    updateData();
    updateLevel();
}

self.onResize = function() {
    var myNode = document.getElementById(
        "BatteryStateControl");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    createView();
    createLevel();
}

self.onDestroy = function() {}
createBackground = function(width, height) {
    var w = 304,
        h = 464;
    var g = document.createElementNS(
        "http://www.w3.org/2000/svg", "g");
    // <rect x="22" y="68" width="260" height="57" rx="13.11" ry="13.11" fill="#cccccc" stroke="none" pointer-events="none"/>
    var rect1 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect1.setAttributeNS(null, "x", width *
        22 / w);
    rect1.setAttributeNS(null, "y", height *
        68 / h);
    rect1.setAttributeNS(null, "width",
        width * 260 / w);
    rect1.setAttributeNS(null, "height",
        height * 57 / h);
    rect1.setAttributeNS(null, "rx", width * 13.11 / w);
    rect1.setAttributeNS(null, "ry", height * 13.11 / h);
    rect1.setAttributeNS(null, "fill", "#cccccc");

    //<rect x="22" y="128" width="260" height="57" rx="13.11" ry="13.11" fill="#cccccc" stroke="none" pointer-events="none"/>
    var rect2 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect2.setAttributeNS(null, "x", width * 22 / w);
    rect2.setAttributeNS(null, "y", height * 128 /
        h);
    rect2.setAttributeNS(null, "width", width * 260 /
        w);
    rect2.setAttributeNS(null, "height", height * 57 /
        h);
    rect2.setAttributeNS(null, "rx", width * 13.11 / w);
    rect2.setAttributeNS(null, "ry", height * 13.11 / h);
    rect2.setAttributeNS(null, "fill", "#cccccc");

    //<rect x="42" y="18" width="80" height="60" rx="9" ry="9" fill="#bb0b0b" stroke="#f45a2f" stroke-width="4" pointer-events="none"/>
    var rect3 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect3.setAttributeNS(null, "x", width * 42 / w);
    rect3.setAttributeNS(null, "y", width * 18 / h);
    rect3.setAttributeNS(null, "width", width * 80 /
        w);
    rect3.setAttributeNS(null, "height", height * 60 /
        h);
    rect3.setAttributeNS(null, "rx", width * 9 / w);
    rect3.setAttributeNS(null, "ry", height * 9 / h);
    rect3.setAttributeNS(null, "fill", "#bb0b0b");
    rect3.setAttributeNS(null, "stroke", "#f45a2f");
    rect3.setAttributeNS(null, "stroke-width", width *
        4 / w);

    //<rect x="182" y="18" width="80" height="60" rx="9" ry="9" fill="#bb0b0b" stroke="#f45a2f" stroke-width="4" pointer-events="none"/>
    var rect4 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect4.setAttributeNS(null, "x", width * 182 / w);
    rect4.setAttributeNS(null, "y", height * 18 / h);
    rect4.setAttributeNS(null, "width", width * 80 /
        w);
    rect4.setAttributeNS(null, "height", height * 60 /
        h);
    rect4.setAttributeNS(null, "rx", width * 9 / w);
    rect4.setAttributeNS(null, "ry", height * 9 / h);
    rect4.setAttributeNS(null, "fill", "#bb0b0b");
    rect4.setAttributeNS(null, "stroke", "#f45a2f");
    rect4.setAttributeNS(null, "stroke-width", width *
        4 / w);

    //<rect x="2" y="48" width="300" height="410" rx="27" ry="27" fill="#bb0b0b" stroke="#f45a2f" stroke-width="4" pointer-events="none"/>
    var rect5 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect5.setAttributeNS(null, "x", width * 2 / w);
    rect5.setAttributeNS(null, "y", height * 48 / h);
    rect5.setAttributeNS(null, "width", width * 300 /
        w);
    rect5.setAttributeNS(null, "height", height * 410 /
        h);
    rect5.setAttributeNS(null, "rx", width * 27 / w);
    rect5.setAttributeNS(null, "ry", height * 27 / h);
    rect5.setAttributeNS(null, "fill", "#bb0b0b");
    rect5.setAttributeNS(null, "stroke", "#f45a2f");
    rect5.setAttributeNS(null, "stroke-width", width *
        4 / w);

    //<rect x="44" y="44" width="76" height="21" fill="#bb0b0b" stroke="none" pointer-events="none"/>
    var rect6 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect6.setAttributeNS(null, "x", width * 44 / w);
    rect6.setAttributeNS(null, "y", height * 44 / h);
    rect6.setAttributeNS(null, "width", width * 76 /
        w);
    rect6.setAttributeNS(null, "height", height * 21 /
        h);
    rect6.setAttributeNS(null, "fill", "#bb0b0b");

    //<rect x="184" y="40" width="76" height="21" fill="#bb0b0b" stroke="none" pointer-events="none"/>
    var rect7 = document.createElementNS(
        "http://www.w3.org/2000/svg", "rect");
    rect7.setAttributeNS(null, "x", width * 184 / w);
    rect7.setAttributeNS(null, "y", height * 40 / h);
    rect7.setAttributeNS(null, "width", width * 76 /
        w);
    rect7.setAttributeNS(null, "height", height * 21 /
        h);
    rect7.setAttributeNS(null, "fill", "#bb0b0b");
    g.append(rect1);
    g.append(rect2);
    g.append(rect3);
    g.append(rect4);
    g.append(rect5);
    g.append(rect6);
    g.append(rect7);
    return g;
}
createLevel = function() {
    var w = 304,
        h = 464;
    var data = self.ctx.$scope.datasourceData[0] ? self
        .ctx.$scope.datasourceData[0] : [];
    var width = self.ctx.width * w / h;
    var height = self.ctx.height;
    var ySOH = d3.scaleLinear()
        .range([(height * 410 /
            h) - (height * 16 / h), 0])
        .domain([0, 100])
        .nice();
    var ySOC = d3.scaleLinear()
        .range([ySOH(100 - data[0]), 0])
        .domain([0, 100])
        .nice();
    var chart = d3.select("#chart")
        .attr("y", 0)
        .attr("width", width)
        .attr("height", height);
    d3.select("#chart").append("rect")
        .attr("id", "empty")
        .attr("x", (width * 8 / w) + width * 2 / w)
        .attr("y", (height * 8 / h) + height * 48 / h)
        .attr("width", (width * 300 /
            w) - (width * 16 / w))
        .attr("height", (height * 410 /
            h) - (height * 16 / h))
        .attr("rx", width * 25 / w)
        .attr("ry", height * 25 / h)
        .attr("fill", "grey");
    var bar = chart.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("height", height);
    bar.append("rect")
        .attr("class", "cell")
        .attr("x", (width * 8 / w) + width * 2 / w)
        .attr("y", (d, i) => i == 0 ? ((height * 8 / h) +
                height * 48 / h) +
            ySOH(data[i]) : ((height * 8 / h) + height *
                48 / h) +
            ySOH(data[i - 1]) + ySOC(data[i]))
        .attr("width", (width * 300 /
            w) - (width * 16 / w))
        .attr("height", (d, i) => i == 0 ? ySOH(100 -
            data[i]) : ySOC(100 - data[i]))
        .attr("rx", width * 25 / w)
        .attr("ry", height * 25 / h)
        .attr("fill", (d, i) => i == 0 ? "green" :
            "yellow");
    bar.append("text")
        .attr("class", "cellValue")
        .attr("x", width / 2)
        .attr("y", (d, i) => i == 0 ? (8 + height * 48 /
                h) + ySOH(data[i]) : ((height * 8 / h) +
                height * 48 / h) +
            ySOH(data[i - 1]) + ySOC(data[i]) + ySOC(
                100 -
                data[i]) / 2)
        .attr("dy", ".75em")
        .attr("fill", "black")
        .attr("font-weight", "bolder")
        .attr("font-size", width * 25 / w)
        .text((d, i) => i == 0 ? `S.O.H ${data[i]}%` :
            `S.O.C ${data[i]}%`);
}
updateLevel = function() {
    var w = 304,
        h = 464;
    var width = self.ctx.width * w / h;
    var height = self.ctx.height;
    var data = self
        .ctx.$scope.datasourceData[0];
    var ySOH = d3.scaleLinear()
        .range([(height * 410 /
            h) - (height * 16 / h), 0])
        .domain([0, 100])
        .nice();
    var ySOC = d3.scaleLinear()
        .range([ySOH(100 - data[0]), 0])
        .domain([0, 100])
        .nice();
    var chart = d3.select("#chart");
    chart.selectAll('.cell')
        .data(data)
        .exit()
        .transition()
        .duration(900)
        .remove();
    chart.selectAll('.cell')
        .data(data)
        .transition()
        .duration(900)
        .attr("y", (d, i) => i == 0 ? ((height * 8 / h) +
                height * 48 / h) +
            ySOH(data[i]) : ((height * 8 / h) + height *
                48 / h) +
            ySOH(data[i - 1]) + ySOC(data[i]))
        .attr("height", (d, i) => i == 0 ? ySOH(100 -
            data[i]) : ySOC(100 - data[i]))
    chart.selectAll('.cellValue')
        .data(data)
        .transition()
        .duration(900)
        .attr("y", (d, i) => i == 0 ? (8 + height * 48 /
                h) + ySOH(data[i]) : ((height * 8 / h) +
                height * 48 / h) +
            ySOH(data[i - 1]) + ySOC(data[i]) + ySOC(
                100 -
                data[i]) / 2)
        .text((d, i) => i == 0 ? `S.O.H ${data[i]}%` :
            `S.O.C ${data[i]}%`);
}
createView = function() {
    var width = self.ctx.width * 304 / 464;
    var height = self.ctx.height;
    var svg = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg");
    svg.setAttributeNS(null, "width", width);
    svg.setAttributeNS(null, "height", height);
    svg.setAttributeNS(null, "style",
        "background-color: rgb(255, 255, 255);display: block;margin: auto"
    );
    var g = createBackground(width, height);
    var container = document.createElementNS(
        "http://www.w3.org/2000/svg", "svg");
    container.setAttributeNS(null, "id", "chart");
    g.append(container);
    svg.append(g);
    document.getElementById("BatteryStateControl").append(
        svg);
}
updateData = function() {
    self.ctx.$scope.datasources = self.ctx.defaultSubscription
        .datasources;
    self.ctx.$scope.data = self.ctx.defaultSubscription
        .data;
    console.log(self.ctx.defaultSubscription
        .data);
    self.ctx.$scope.datasourceData = [];

    var currentDatasource = null;
    var currentDatasourceIndex = -1;

    for (var i = 0; i < self.ctx.$scope.data.length; i++) {
        var dataKeyData = self.ctx.$scope.data[i];
        if (dataKeyData.datasource !=
            currentDatasource) {
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
}
