const worker = self;

worker.addEventListener('message', (e) => {
    const canvas = e.data.canvas;
    const ctx = canvas.getContext('2d');
    let x = canvas.width / 2;
    let y = canvas.height / 2;
    let angle = 0;

    function render(currentTime) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        angle = currentTime / 10;
        ctx.setTransform(1, 0, 0, 1, x, y);
        ctx.rotate(angle * Math.PI / 180);
        ctx.fillStyle = "green";
        ctx.fillRect(10, 10, 100, 100);
        ctx.setTransform(1, 0, 0, 1, 0, 0);

        requestAnimationFrame(render);
    }
    requestAnimationFrame(render);
});