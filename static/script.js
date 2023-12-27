// add items 

var start_1v1 = document.getElementById("btn-play1v1");
var canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024
canvas.height = 576


// add eventlistener
start_1v1.addEventListener("click", start1v1Game);



const keys = {
    a: {
        pressed: false
    },
    d: {
        pressed: false
    },
    w: {
        pressed: false
    },
    ArrowRight: {
        pressed: false
    },
    ArrowLeft: {
        pressed: false
    },
    ArrowUp: {
        pressed: false
    }
}
let lastkey


window.addEventListener("keydown", (e) => {
    console.log(e.key);
    switch (e.key) {
        case "d":
            keys.d.pressed = true;
            player1.lastkey = "d";
            break;
        case "a":
            keys.a.pressed = true;
            player1.lastkey = "a";
            break;
        case "w":
            player1.velocity.y = -20;
            break;
        case "ArrowRight":
            keys.ArrowRight.pressed = true;
            player2.lastkey = "ArrowRight";
            break;
        case "ArrowLeft":
            keys.ArrowLeft.pressed = true;
            player2.lastkey = "ArrowLeft";
            break;
        case "ArrowUp":
            player2.velocity.y = -20;
            break;
        default:
            break;
    }
})
window.addEventListener("keyup", (e) => {
    switch (e.key) {
        case "d":
            keys.d.pressed = false;
            break;
        case "a":
            keys.a.pressed = false;
            break;
        case "w":
            keys.w.pressed = false;
            lastkey = "w";
            break;
    // player 2 keys
        case "ArrowRight":
            keys.ArrowRight.pressed = false;
            break;
        case "ArrowLeft":
            keys.ArrowLeft.pressed = false;
            break;
        default:
            break;
    }
})











const gravity = 0.7
class Sprite {
    constructor({position, velocity, height}) {
        this.position = position
        this.velocity = velocity
        this.height = 150
        this.lastkey
        this.speed = 5
    }
    draw() {
        c.fillStyle = "red"
        c.fillRect(this.position.x, this.position.y, 50, this.height)
    }
    update() {
        this.draw()



        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;            
        }
    }
}
const player1 = new Sprite({
    position: {
        x: 0,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
})
const player2 = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 1
    }
})

function animate() {
    window.requestAnimationFrame(animate)
    c.clearRect(0,0,canvas.width,canvas.height)
    player1.update()
    player2.update()

    // player1 movement
    player1.velocity.x = 0;
    if (keys.a.pressed && player1.lastkey === "a") {
        player1.velocity.x = -player1.speed;
    } else if (keys.d.pressed && player1.lastkey === "d") {
        player1.velocity.x = player1.speed;
    }
    // player2 movement
    player2.velocity.x = 0;
    if (keys.ArrowLeft.pressed && player2.lastkey === "ArrowLeft") {
        player2.velocity.x = -player2.speed;
    } else if (keys.ArrowRight.pressed && player2.lastkey === "ArrowRight") {
        player2.velocity.x = player2.speed;
    }
}

function start1v1Game() {
    if (start_1v1.style.display = "block") {
        start_1v1.style.display = "none";    
        canvas.style.display = "block";
    } else {
        start_1v1.style.display = "block";    
        canvas.style.display = "none";
    }
    animate();
}