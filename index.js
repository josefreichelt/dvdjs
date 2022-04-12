const logo = document.getElementById('dvdlogo');
const container = document.getElementById('drive');

let width = container.clientWidth;
let height = container.clientHeight;
const speed = 5;
let velocityX = speed;
let velocityY = speed;
let frameId = 0;

function update(){
    if(!logo) {
        cancelAnimationFrame(frameId)
    }
    const logoBox = logo.getBoundingClientRect()
    if(logoBox.x + logoBox.width + speed >= width){
        velocityX = -speed;
    }else if(logoBox.x - speed <= 0){
        velocityX = speed;
    }
    if(logoBox.y + logoBox.height + speed >= height){
        velocityY = -speed;
    }else if(logoBox.y - speed <= 0){
        velocityY = speed;
    }

    logo.style.left = `${logoBox.x + velocityX}px`;
    logo.style.top = `${logoBox.y + velocityY}px`;

    frameId = requestAnimationFrame(update)
}


function handleResize(e){
    width = container.clientWidth;
    height = container.clientHeight;
}



window.addEventListener('resize',handleResize);
frameId = requestAnimationFrame(update)