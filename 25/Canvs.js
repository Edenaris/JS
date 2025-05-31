const canva = document.querySelector('.Canv');
const ctx = canva.getContext('2d');
ctx.fillRect(40, 40, 100, 50);
ctx.fillRect(100, 60, 100, 50);
ctx.fillRect(190, 80, 100, 50);

const canvaT = document.querySelector('.CanvT');
const ctxT = canvaT.getContext('2d');
function fillCanvasWithGradient(color1, color2) {
    const gtx = ctxT.createLinearGradient(0,0,300,0);
    gtx.addColorStop(0, color1);    
    gtx.addColorStop(1, color2);
    ctxT.fillStyle = gtx;
    ctxT.fillRect(0, 0, 300, 300);   
}
fillCanvasWithGradient('red', 'blue');

const canvaTh = document.querySelector('.CanvTh');
const ctxTh = canvaTh.getContext('2d');
function drawLine(x1,y1,x2,y2){
    ctxTh.moveTo(x1, y1);
    ctxTh.lineTo(x2, y2);
    ctxTh.stroke();
}
drawLine(10, 10, 200, 200);

const svgContainer = document.querySelector('.svgCont');
const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svg.setAttribute('width', '300');
svg.setAttribute('height', '300');
svgContainer.appendChild(svg);

function createSVGLine(x1, y1, x2, y2, color, thickness) {
    const line = document.createElementNS("http://www.w3.org/2000/svg", "line");
    line.setAttribute("x1", x1);
    line.setAttribute("y1", y1);
    line.setAttribute("x2", x2);
    line.setAttribute("y2", y2);
    line.setAttribute("stroke", color);
    line.setAttribute("stroke-width", thickness);
    
    svg.appendChild(line);
}
createSVGLine(10, 10, 200, 200, 'red', 1);

const svgContainerFTr = document.querySelector('.svgContforTringl');
const svgFTr = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
svgFTr.setAttribute('width', '300');
svgFTr.setAttribute('height', '300');
svgContainerFTr.appendChild(svgFTr);

function createSVGTriangle(x1, y1, width, height, stroke, fill, strokeWidth = 2) {
    const triangle = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    triangle.setAttribute("x", x1);
    triangle.setAttribute("y", y1);
    triangle.setAttribute("width", width);
    triangle.setAttribute("height", height);
    triangle.setAttribute("stroke", stroke);
    triangle.setAttribute("stroke-width", strokeWidth);
    triangle.setAttribute("fill", fill);
    svgFTr.appendChild(triangle);
}
createSVGTriangle(10, 10, 100, 100, 'red','purple', 5);