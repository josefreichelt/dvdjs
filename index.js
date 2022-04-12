const logo = document.getElementById('dvdlogo');
const container = document.getElementById('drive');

const speed = 2;
let width = container.clientWidth;
let height = container.clientHeight;
let velocityX = speed;
let velocityY = speed;
let frameId = 0;

function update() {
    if (!logo) {
        cancelAnimationFrame(frameId)
    }

    const logoBox = logo.getBoundingClientRect()

    if (logoBox.x + logoBox.width + speed >= width) {
        velocityX = -speed;
        pickColor(logo);
    } else if (logoBox.x - speed <= 0) {
        velocityX = speed;
        pickColor(logo);
    }
    if (logoBox.y + logoBox.height + speed >= height) {
        velocityY = -speed;
        pickColor(logo);
    } else if (logoBox.y - speed <= 0) {
        velocityY = speed;
        pickColor(logo);
    }

    logo.style.left = `${logoBox.x + velocityX}px`;
    logo.style.top = `${logoBox.y + velocityY}px`;

    frameId = requestAnimationFrame(update)
}

function handleResize() {
    width = container.clientWidth;
    height = container.clientHeight;
}

function pickColor(logoElement) {
    const randomHue = Math.random() * 360;
    logoElement.style.fill = `hsl(${randomHue},85%,60%)`;
}

function setRandomPosition() {
    logo.style.left = `${Math.max(0, Math.min(Math.random() * width - logo.clientWidth, width))}px`;
    logo.style.top = `${Math.max(0, Math.min(Math.random() * height - logo.clientHeight, height))}px`;
}

pickColor(logo);
setRandomPosition();
window.addEventListener('resize', handleResize);
frameId = requestAnimationFrame(update)