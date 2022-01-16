var room = "surface";






function draw() {
    var ctx = backgroundCanvas.getContext("2d");

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);
    if (room = "surface") {
        ctx.beginPath();
        ctx.strokeStyle = "brown";
        ctx.fillStyle = "brown"
        ctx.fillRect(0, 2 * backgroundCanvas.height / 3, backgroundCanvas.width, backgroundCanvas.height / 3);
        ctx.stroke();
    }

    window.requestAnimationFrame(draw);
}
draw();
