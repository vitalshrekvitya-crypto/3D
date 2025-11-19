const cube = document.getElementById('player-cube');
const status = document.getElementById('status');

let isDragging = false;
let prevX = 0;
let rotationY = 0;
const targetRotationY = 90;
const margin = 20; // forgiving margin

cube.addEventListener('mousedown', e => {
    isDragging = true;
    prevX = e.clientX;
});

window.addEventListener('mouseup', () => isDragging = false);

window.addEventListener('mousemove', e => {
    if(!isDragging) return;

    const deltaX = e.clientX - prevX;
    rotationY += deltaX * 0.3; // slower rotation
    cube.style.transform = `translate(-50%,-50%) rotateY(${rotationY}deg)`;
    prevX = e.clientX;

    // check match
    let diff = Math.abs((rotationY % 360) - targetRotationY);
    if (diff > 180) diff = 360 - diff; // handle wrap-around

    if(diff <= margin){
        status.textContent = "🎉 Perfect Match!";
        cube.style.boxShadow = "0 0 30px lime";
    } else {
        status.textContent = "Keep rotating...";
        cube.style.boxShadow = "0 0 10px cyan";
    }
});
