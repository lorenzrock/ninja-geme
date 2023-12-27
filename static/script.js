// add items 

var start_1v1 = document.getElementById("btn-play1v1");
var canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");

canvas.width = 1024
canvas.height = 576

// add eventlistener
start_1v1.addEventListener("click", start1v1Game);

const gravity = 0.7
let lastkey
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

window.addEventListener("keydown", (e) => {
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
        case " ":
            player1.attack();
            break;
        // player 2 keys
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
        case "ArrowDown":
            player2.attack();
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

class Sprite {
    constructor({position, velocity, color = "red", offset}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastkey
        this.speed = 5
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset,
            with: 100,
            height: 50
        }
        this.color = color
        this.isAttacking
    }
    draw() {
        // Player
        c.fillStyle = this.color
        c.fillRect(this.position.x, this.position.y, this.width, this.height)

        // attackBox
        if (this.isAttacking) {
            c.fillStyle = "green"
            c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.with, this.attackBox.height)       
        }
    }
    update() {
        this.draw()
        this.attackBox.position.x = this.position.x + this.attackBox.offset.x
        this.attackBox.position.y = this.position.y

        this.position.x += this.velocity.x;
        this.position.y += this.velocity.y;
        if (this.position.y + this.height + this.velocity.y >= canvas.height) {
            this.velocity.y = 0;
        } else {
            this.velocity.y += gravity;            
        }
    }
    attack(){
        this.isAttacking = true
        setTimeout(() => {
            this.isAttacking = false
        }, 100);
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
    offset: {
        x: 0,
        y: 0
    }
})
const player2 = new Sprite({
    position: {
        x: 400,
        y: 100
    },
    velocity: {
        x: 0,
        y: 1
    },
    offset: {
        x: -50,
        y: 0
    },
    color: "blue"
})



function rectangularCollision({ rectangle1, rectangle2 }) {
    return (
        rectangle1.attackBox.position.x + rectangle1.attackBox.with >= rectangle2.position.x && 
        rectangle1.attackBox.position.x <= rectangle2.position.x + rectangle2.width &&
        rectangle1.attackBox.position.y + rectangle1.attackBox.height >= rectangle2.position.y &&
        rectangle1.attackBox.position.y <= rectangle2.position.y + rectangle2.height &&
        rectangle1.isAttacking
    )
    
}

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

    // detect for collision
    if (
        rectangularCollision({
            rectangle1: player1,
            rectangle2: player2
    })) {
        console.log("player")
        player1.isAttacking = false
    }
    if (
        rectangularCollision({
            rectangle1: player2,
            rectangle2: player1
    })) {
        console.log("enemy")
        player2.isAttacking = false
    }
/////////////////////// rectangle1.isAttacking
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