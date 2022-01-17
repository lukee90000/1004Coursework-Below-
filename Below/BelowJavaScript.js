var room = "surface";
var inventoryOpen = true;





function drawScene() {
    var ctx = backgroundCanvas.getContext("2d");

    ctx.canvas.width = window.innerWidth;
    ctx.canvas.height = window.innerHeight;
    ctx.fillStyle = "black";
    ctx.fillRect(0, 0, backgroundCanvas.width, backgroundCanvas.height);


    if (room == "surface") {
        ctx.beginPath();
        ctx.strokeStyle = "#472D03";
        ctx.fillStyle = "#472D03"
        ctx.fillRect(0, 2 * backgroundCanvas.height / 3, backgroundCanvas.width, backgroundCanvas.height / 3);
        ctx.stroke();
    }

    if (inventoryOpen == false) {
        ctx.beginPath();
        ctx.strokeStyle = "grey";
        ctx.fillStyle = "grey";
        ctx.fillRect(0, 0, 200, 100);
        ctx.fillStyle = "black";
        ctx.font = "18px Arial"
        ctx.fillText("Inventory", 65, 52);
        ctx.stroke();

    } else {
        ctx.beginPath();
        ctx.strokeStyle = "grey";
        ctx.fillStyle = "grey";
        ctx.globalAlpha = 0.7;
        ctx.fillRect(backgroundCanvas.width / 10, backgroundCanvas.height / 10, 8 * backgroundCanvas.width / 10, 8 * backgroundCanvas.height / 10);
        ctx.globalAlpha = 1;
        ctx.fillStyle = "black";
        ctx.font = "18px Arial"
        ctx.fillText("Inventory", 65, 52);
        ctx.stroke();
        ctx.beginPath();
        ctx.strokeStyle = "red";
        ctx.moveTo((backgroundCanvas.width / 10) * 9 - 5, (backgroundCanvas.height / 10) + 5);
        ctx.lineTo((backgroundCanvas.width / 10) * 9 - 25, (backgroundCanvas.height / 10) + 25);
        ctx.moveTo((backgroundCanvas.width / 10) * 9 - 25, (backgroundCanvas.height / 10) + 5);
        ctx.lineTo((backgroundCanvas.width / 10) * 9 - 5, (backgroundCanvas.height / 10) + 25);
        ctx.stroke();
    }
    window.requestAnimationFrame(drawScene);
}
    backgroundCanvas.addEventListener("click", function (evt) {
        var mousePos = getMousePos(backgroundCanvas, evt);
        if (inventoryOpen) {
            if (mousePos.x < (backgroundCanvas.width / 10) * 9 - 5 && mousePos.x > (backgroundCanvas.width / 10) * 9 - 25) {
                if (mousePos.y > (backgroundCanvas.height / 10) + 5 && mousePos.y < (backgroundCanvas.height / 10) + 25) {
                    inventoryOpen = false;
                }
            }
        }
    }, false);

    function getMousePos(canvas, evt) {
        var rect = backgroundCanvas.getBoundingClientRect();
        return {
            x: evt.clientX - rect.left,
            y: evt.clientY - rect.top
        };
    }

drawScene();
