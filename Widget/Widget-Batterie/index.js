self.switchCharge = true;
self.switchDischarge = true;
self.locked = false;
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
createLevel = function() {
    var y = 137.5,
        x = 190.5,
        width = 279,
        height = 339;
    var data = self.ctx.$scope.datasourceData[0] ? self
        .ctx.$scope.datasourceData[0] : [];
    var ySOH = d3.scaleLinear()
        .range([height, 0])
        .domain([0, 100])
        .nice();
    var ySOC = d3.scaleLinear()
        .range([ySOH(100 - data[0]), 0])
        .domain([0, 100])
        .nice();
    var chart = d3.select("#chart")
        .attr("y", y)
        .attr("width", width)
        .attr("height", height);
    var bar = chart.selectAll("g")
        .data(data)
        .enter()
        .append("g")
        .attr("height", height);
    bar.append("rect")
        .attr("class", "cell")
        .attr("x", x)
        .attr("y", (d, i) => i == 0 ? y +
            ySOH(data[i]) : y +
            ySOH(data[i - 1]) + ySOC(data[i]))
        .attr("width", width)
        .attr("height", (d, i) => i == 0 ? ySOH(100 -
            data[i]) : ySOC(100 - data[i]))
        .attr("rx", 5)
        .attr("ry", 5)
        .attr("fill", (d, i) => i == 0 ? "green" :
            "yellow");
    bar.append("text")
        .attr("class", "cellValue")
        .attr("x", x + width / 2)
        .attr("y", (d, i) => i == 0 ? y + ySOH(data[i]) +
            5 :
            ySOH(data[i - 1]) + ySOC(data[i]) + ySOC(
                100 -
                data[i]) / 2)
        .attr("dy", ".75em")
        .attr("fill", "black")
        .attr("font-weight", "bolder")
        .attr("font-size", 25)
        .text((d, i) => i == 0 ? `S.O.H ${data[i]}%` :
            `S.O.C ${data[i]}%`);
}
updateLevel = function() {
    var y = 137.5,
        x = 190.5,
        width = 279,
        height = 339;
    var data = self.ctx.$scope.datasourceData[0] ? self
        .ctx.$scope.datasourceData[0] : [];
    var ySOH = d3.scaleLinear()
        .range([height, 0])
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
        .attr("y", (d, i) => i == 0 ? y +
            ySOH(data[i]) : y +
            ySOH(data[i - 1]) + ySOC(data[i]))
        .attr("height", (d, i) => i == 0 ? ySOH(100 -
            data[i]) : ySOC(100 - data[i]))
    chart.selectAll('.cellValue')
        .data(data)
        .transition()
        .duration(900)
        .attr("y", (d, i) => i == 0 ? y + ySOH(data[i]) +
            5 :
            y +
            ySOH(data[i - 1]) + ySOC(data[i]) + ySOC(
                100 -
                data[i]) / 2)
        .text((d, i) => i == 0 ? `S.O.H ${data[i]}%` :
            `S.O.C ${data[i]}%`);
}
createView = function() {
    if (!self.background) {
        self.background = document.getElementById(
            "backgroundSVG");
        document.getElementById("backgroundSVG").remove();
    }
    self.background.setAttributeNS(null, "width", self.ctx
        .width);
    self.background.setAttributeNS(null, "height", self
        .ctx.height)
    document.getElementById("BatteryStateControl").append(
        self.background);
    document.getElementById("switcherCharge").addEventListener(
        "click", () => {
            console.log("Click switcherCharge");
            if (self.switchCharge) {
                document.getElementById(
                    "switchCharge").setAttribute(
                    "style",
                    "transform:scale(0,-1)");
            } else {
                document.getElementById(
                    "switchCharge").setAttribute(
                    "style",
                    "transform:scale(1, 1)");
            }
            self.switchCharge = !self.switchCharge;
        });
    document.getElementById("switcherDischarge").addEventListener(
        "click", () => {
            console.log("Click switcherDischarge");
            if (self.switchDischarge) {
                document.getElementById(
                    "switchDischarge").setAttribute(
                    "style",
                    "transform:scale(0,-1)");
            } else {
                document.getElementById(
                    "switchDischarge").setAttribute(
                    "style",
                    "transform:scale(1, 1)");
            }
            self.switchDischarge = !self.switchDischarge;
        });
        document.getElementById("locker").addEventListener(
        "click", () => {
            console.log("Click Lock");
            if (self.locked) {
                    d3.select("#locker").selectAll("path").attr("fill","red");
            } else {
                    d3.select("#locker").selectAll("path").attr("fill","green");
            }
            self.locked = !self.locked;
        });
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
