createBackground = function(width, height) {
  var w = width / 304,
  h = height / 464;
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");

  // <rect x="22" y="68" width="260" height="57" rx="13.11" ry="13.11" fill="#cccccc" stroke="none" pointer-events="none"/>
  var rect1 = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect1.setAttributeNS("null","x",22*w);
  rect1.setAttributeNS("null","y",68*h);
  rect1.setAttributeNS("null","width",260*w);
  rect1.setAttributeNS("null","height",57*h);
  rect1.setAttributeNS("null","rx",13.11*w);
  rect1.setAttributeNS("null","ry",13.11*h);
  rect1.setAttributeNS("null","fill","#cccccc");

  //<rect x="22" y="128" width="260" height="57" rx="13.11" ry="13.11" fill="#cccccc" stroke="none" pointer-events="none"/>
  var rect2 = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect2.setAttributeNS("null","x",22*w);
  rect2.setAttributeNS("null","y",128*h);
  rect2.setAttributeNS("null","width",260*w);
  rect2.setAttributeNS("null","height",57*h);
  rect2.setAttributeNS("null","rx",13.11*w);
  rect2.setAttributeNS("null","ry",13.11*h);
  rect2.setAttributeNS("null","fill","#cccccc");

  //<rect x="42" y="18" width="80" height="60" rx="9" ry="9" fill="#bb0b0b" stroke="#f45a2f" stroke-width="4" pointer-events="none"/>
  var rect3 = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect3.setAttributeNS("null","x",48*w);
  rect3.setAttributeNS("null","y",18*h);
  rect3.setAttributeNS("null","width",80*w);
  rect3.setAttributeNS("null","height",60*h);
  rect3.setAttributeNS("null","rx",9*w);
  rect3.setAttributeNS("null","ry",9*h);
  rect3.setAttributeNS("null","fill","#bb0b0b");
  rect3.setAttributeNS("null","stroke","#f45a2f");
  rect3.setAttributeNS("null","stroke-width","4");

  //<rect x="182" y="18" width="80" height="60" rx="9" ry="9" fill="#bb0b0b" stroke="#f45a2f" stroke-width="4" pointer-events="none"/>
  var rect4 = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect4.setAttributeNS("null","x",182*w);
  rect4.setAttributeNS("null","y",18*h);
  rect4.setAttributeNS("null","width",80*w);
  rect4.setAttributeNS("null","height",60*h);
  rect4.setAttributeNS("null","rx",9*w);
  rect4.setAttributeNS("null","ry",9*h);
  rect4.setAttributeNS("null","fill","#bb0b0b");
  rect4.setAttributeNS("null","stroke","#f45a2f");
  rect4.setAttributeNS("null","stroke-width","4");

  //<rect x="2" y="48" width="300" height="410" rx="27" ry="27" fill="#bb0b0b" stroke="#f45a2f" stroke-width="4" pointer-events="none"/>
  var rect5 = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect5.setAttributeNS("null","x",2*w);
  rect5.setAttributeNS("null","y",48*h);
  rect5.setAttributeNS("null","width",300*w);
  rect5.setAttributeNS("null","height",410*h);
  rect5.setAttributeNS("null","rx",27*w);
  rect5.setAttributeNS("null","ry",27*h);
  rect5.setAttributeNS("null","fill","#bb0b0b");
  rect5.setAttributeNS("null","stroke","#f45a2f");
  rect5.setAttributeNS("null","stroke-width","4");

  //<rect x="44" y="44" width="76" height="21" fill="#bb0b0b" stroke="none" pointer-events="none"/>
  var rect6 = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect6.setAttributeNS("null","x",44*w);
  rect6.setAttributeNS("null","y",44*h);
  rect6.setAttributeNS("null","width",76*w);
  rect6.setAttributeNS("null","height",21*h);
  rect6.setAttributeNS("null","fill","#bb0b0b");

  //<rect x="184" y="40" width="76" height="21" fill="#bb0b0b" stroke="none" pointer-events="none"/>
  var rect7 = document.createElementNS("http://www.w3.org/2000/svg","rect");
  rect7.setAttributeNS("null","x",184*w);
  rect7.setAttributeNS("null","y",40*h);
  rect7.setAttributeNS("null","width",76*w);
  rect7.setAttributeNS("null","height",21*h);
  rect7.setAttributeNS("null","fill","#bb0b0b");

  g.append(rect1);
  g.append(rect2);
  g.append(rect3);
  g.append(rect4);
  g.append(rect5);
  g.append(rect6);
  g.append(rect7);

  return g;
}

createLevel = function (width,height, soc, soh) {
  var g = document.createElementNS("http://www.w3.org/2000/svg", "g");
  var empty = document.createElementNS("http://www.w3.org/2000/svg", "rect");

  var y = d3.scale.linear().range([0,height]);
  y.domain([0,100]);

  empty.setAttributeNS("null","rx",width * 20);
  empty.setAttributeNS("null","ry",width * 20);
  empty.setAttributeNS("null","fill","darkgray");
  empty.setAttributeNS("null","x",0);
  empty.setAttributeNS("null","y",y(0));
  empty.setAttributeNS("null","width",width*0.9);
  empty.setAttributeNS("null","height",height*0.8);
  //
  // chart.append("rect")
  //   // .attr("rx",20)
  //   // .attr("ry",20)
  //   .attr("x",0)
  //   .attr("width",width*0.9)
  //   .attr("height",height*0.8 - y(soc))
  //   .attr("fill","blue")
  //   .attr("y",y(soc));
  //
  //   chart.append("rect")
  //     .attr("rx",20)
  //     .attr("ry",20)
  //     .attr("x",0)
  //     .attr("width",width*0.9)
  //     .attr("height",height*0.8 - y(soh))
  //     .attr("fill","green")
  //     .attr("y",y(soh));
  g.append(empty);
  return g;
}

createView = function(width,height) {
  var svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
  svg.setAttributeNS(null, "width", width);
  svg.setAttributeNS(null, "height", height);
  svg.setAttributeNS(null, "style","background-color: rgb(255, 255, 255);");
  var g = createBackground(width, height);
  svg.append(g);
  g.append(createLevel(width, height,0,0));
  document.getElementById("BateryStateView").append(svg);
}

self.onInit = function () {
    createView(self.ctx.width, self.ctx.height);
};

self.onDataUpdated = function () {

};

self.onResize = function () {
    var myNode = document.getElementById("BateryStateView");
    while (myNode.firstChild) {
        myNode.removeChild(myNode.firstChild);
    }
    createView(self.ctx.width, self.ctx.height);
};

self.onDestroy = function () {

};
