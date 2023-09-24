import OffScreenWorker from './worker?worker'

document.addEventListener("DOMContentLoaded", () => {
    const num = document.querySelector('#num');
    const button = document.querySelector("button");
    const canvas = document.getElementById("canvas");
    const offscreen = canvas.transferControlToOffscreen();
    let sleepTime = 2000;

    if (!window.Worker) {
        console.error("Worker thread not support!");
        return;
    }
    const worker = new OffScreenWorker();
    worker.postMessage({ canvas: offscreen }, [offscreen]);

    const sleep = (ms) => {
        let time = new Date();
        while ((new Date()) - time <= ms) { }
    }

    num.addEventListener("input", (e) => {
        sleepTime = num.valueAsNumber;
    });
    button.addEventListener("click", () => {
        sleep(sleepTime);
    });
});