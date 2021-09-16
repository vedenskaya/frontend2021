'use strict';

const y = x => Math.pow(3*x, 2) + 2;
let scale = 20;
let step = 1;
let cnvs = document.getElementById('canvas');
let ctx = cnvs.getContext('2d');

ctx.lineWidth = 0.5;

for (var i = step*scale; i < cnvs.width; i += step*scale) { //вертикальные
  polyline('#7a7979', [[i, 0], [i, cnvs.height]]);
}

for (var i = step*scale; i < cnvs.height; i += step*scale) { //Горизонтальные
  polyline('#7a7979', [[0, i], [cnvs.width, i]]);
}

ctx.lineWidth = 2;
let pts = [];
for(let x = -cnvs.width/2; x<cnvs.width/2; x+=5) {
    pts.push([cnvs.width/2+x, cnvs.height/2 - y(x/scale)*scale]);
}
polyline('blue', pts);

//Ось X 
polyline('red', [[0, cnvs.height / 2], [cnvs.width, cnvs.height / 2]]);

// ось Y
polyline('green', [[cnvs.width / 2, 0], [cnvs.width / 2, cnvs.height]]);

function polyline(color, pts) {
  ctx.strokeStyle = color;
  ctx.beginPath();
  pts.forEach((p, i) => i ? ctx.lineTo(...p) : ctx.moveTo(...p));
  ctx.stroke();
}
