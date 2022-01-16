function draw() {
    var ctx = backgroundCanvas.getContext("2d");
    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "blue";
    ctx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    draw();
}
draw();
