const canvas = document.getElementById('art');
const ctx = canvas.getContext('2d');
const lineWidth = document.querySelector(".stroke-width");
const lineColor = document.querySelector(".stroke-color");

canvas.height = window.innerHeight -100;
canvas.width = window.innerWidth;
ctx.strokeStyle = 'white';
ctx.lineCap = 'round';
ctx.lineJoin = 'round';
ctx.lineWidth = 5;
let start = undefined;
let end = undefined;
let draw = false;


function drawOnCanvas(e){
if(!draw) return;

ctx.beginPath();
ctx.moveTo(start, end);
ctx.lineTo(e.offsetX, e.offsetY);
ctx.closePath();
ctx.stroke();
[start, end]=[e.offsetX, e.offsetY];
}
function newDraw(){
    draw = false;
    [start, end]=[undefined, undefined];
}

lineWidth.addEventListener('change', ()=>{
    ctx.lineWidth = lineWidth.value;
})
lineColor.addEventListener('change', ()=>{
    ctx.strokeStyle =  lineColor.value;
});
canvas.addEventListener('mousedown', ()=> draw = true);
canvas.addEventListener('mouseout', ()=> draw = false);
canvas.addEventListener('mouseup', newDraw);
canvas.addEventListener('mousemove', drawOnCanvas);
