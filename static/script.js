// add items 

var start_1v1 = document.getElementById("btn-play1v1");
var canvas = document.getElementById("canvas");
const c = canvas.getContext("2d");
var player_status_bar = document.getElementById("player_status")

// add game interface
var player1_health = document.getElementById("player1_health")
var player2_health = document.getElementById("player2_health")
var game_time = document.getElementById("game_time")

end_game_btn = document.getElementById("end-game-btn")
end_game_div = document.getElementById("end-game-div")

canvas.width = 1024
canvas.height = 576
let timerId
let timer = 60

player_selection = document.getElementById("player-selection")



// add eventlistener
start_1v1.addEventListener("click", start1v1Game);
end_game_btn.addEventListener("click", reset_game);





spirit_src_list = ["/static/assets/ninja_green.png", "/static/assets/ninja_red.png", "/static/assets/badman.png", "/static/assets/spidy.png"]
// 0 green ninja, 1 red ninja, 2 badman, 3 spidy

// Set default
player1_selected_spirit = spirit_src_list[0]
player2_selected_spirit = spirit_src_list[1]

// could i use Case?
green_ninja_png_p1 = document.getElementById("green_ninja_png_p1")
green_ninja_png_p1.addEventListener("click",() => {
    player1.img.src = spirit_src_list[0]
    console.log(player1_selected_spirit)
    set_outline(green_ninja_png_p1)
})
red_ninja_png_p1 = document.getElementById("red_ninja_png_p1")
red_ninja_png_p1.addEventListener("click",() => {
    player1.img.src = spirit_src_list[1]
    console.log(player1_selected_spirit)
    set_outline(red_ninja_png_p1)
})
badman_ninja_png_p1 = document.getElementById("badman_ninja_png_p1")
badman_ninja_png_p1.addEventListener("click",() => {
    player1.img.src = spirit_src_list[2]
    console.log(player1_selected_spirit)
    set_outline(badman_ninja_png_p1)
})
spidy_png_p1 = document.getElementById("spidy_png_p1")
spidy_png_p1.addEventListener("click",() => {
    player1.img.src = spirit_src_list[3]
    console.log(player1_selected_spirit)
    set_outline(spidy_png_p1)
})


green_ninja_png_p2 = document.getElementById("green_ninja_png_p2")
green_ninja_png_p2.addEventListener("click",() => {
    player2.img.src = spirit_src_list[0]
    console.log(player2_selected_spirit)
    set_outline(green_ninja_png_p2)
})
red_ninja_png_p2 = document.getElementById("red_ninja_png_p2")
red_ninja_png_p2.addEventListener("click",() => {
    player2.img.src = spirit_src_list[1]
    console.log(player2_selected_spirit)
    set_outline(red_ninja_png_p2)
})
badman_ninja_png_p2 = document.getElementById("badman_ninja_png_p2")
badman_ninja_png_p2.addEventListener("click",() => {
    player2.img.src = spirit_src_list[2]
    console.log(player2_selected_spirit)
    set_outline(badman_ninja_png_p2)
})
spidy_png_p2 = document.getElementById("spidy_png_p2")
spidy_png_p2.addEventListener("click",() => {
    player2.img.src = spirit_src_list[3]
    console.log(player2_selected_spirit)
    set_outline(spidy_png_p2)
})


weapon_src_list = ["static/assets/weapons/1.png", "static/assets/weapons/2.png", "static/assets/weapons/3.png", "static/assets/weapons/4.png"]

// set deafult weapon
player1_selected_weapon = weapon_src_list[0]
player2_selected_weapon = weapon_src_list[1]


weapon_1_p1 = document.getElementById("weapon_1_p1")
weapon_1_p1.addEventListener("click",() => {
    player1.weapon_img.src = weapon_src_list[0]
    console.log(weapon_src_list[0])
    set_outline(weapon_1_p1)
})
weapon_2_p1 = document.getElementById("weapon_2_p1")
weapon_2_p1.addEventListener("click",() => {
    player1.weapon_img.src = weapon_src_list[1]
    console.log(weapon_src_list[1])
    set_outline(weapon_2_p1)
})
weapon_3_p1 = document.getElementById("weapon_3_p1")
weapon_3_p1.addEventListener("click",() => {
    player1.weapon_img.src = weapon_src_list[2]
    console.log(weapon_src_list[2])
    set_outline(weapon_3_p1)
})
weapon_4_p1 = document.getElementById("weapon_4_p1")
weapon_4_p1.addEventListener("click",() => {
    player1.weapon_img.src = weapon_src_list[3]
    console.log(weapon_src_list[3])
    set_outline(weapon_4_p1)
})



weapon_1_p2 = document.getElementById("weapon_1_p2")
weapon_1_p2.addEventListener("click",() => {
    player2.weapon_img.src = weapon_src_list[0]
    console.log(weapon_src_list[0])
    set_outline(weapon_1_p2)
})
weapon_2_p2 = document.getElementById("weapon_2_p2")
weapon_2_p2.addEventListener("click",() => {
    player2.weapon_img.src = weapon_src_list[1]
    console.log(weapon_src_list[1])
    set_outline(weapon_2_p2)
})
weapon_3_p2 = document.getElementById("weapon_3_p2")
weapon_3_p2.addEventListener("click",() => {
    player2.weapon_img.src = weapon_src_list[2]
    console.log(weapon_src_list[2])
    set_outline(weapon_3_p2)
})
weapon_4_p2 = document.getElementById("weapon_4_p2")
weapon_4_p2.addEventListener("click",() => {
    player2.weapon_img.src = weapon_src_list[3]
    console.log(weapon_src_list[3])
    set_outline(weapon_4_p2)
})

function set_outline(image) {
    if (image.style.outlineStyle == "solid") {
        image.style.outlineStyle = "none"
        image.style.outlineColor = "rgb(46, 46, 46)"
    } else {
        image.style.outlineStyle = "solid"
        image.style.outlineColor = "rgb(46, 46, 46)"
    }
    
}













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
    constructor({position, velocity, color = "red", offset, img, weapon_img}) {
        this.position = position
        this.velocity = velocity
        this.width = 50
        this.height = 150
        this.lastkey
        this.speed = 5
        this.health = 100
        this.attackBox = {
            position: {
                x: this.position.x,
                y: this.position.y
            },
            offset,
            with: 100,
            height: 100
        }
        this.color = color
        this.isAttacking
        this.img = img
        this.weapon_img = weapon_img
    }
    draw() {
        // Player
        c.fillStyle = this.color
        // c.fillRect(this.position.x, this.position.y, this.width, this.height)
        c.drawImage(this.img, this.position.x, this.position.y, this.width, this.height)
        // attackBox
        if (this.isAttacking) {
            // c.fillStyle = "green"
            // c.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.with, this.attackBox.height)
            c.drawImage(this.weapon_img, this.attackBox.position.x, this.attackBox.position.y, this.attackBox.with, this.attackBox.height)
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
        }, 500);  
    }
}

const player1 = new Sprite({
    position: {
        x: 20,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    offset: {
        x: 0,
        y: 0
    },
    img: new Image(),
    weapon_img: new Image()
    
})
player1.img.src = player1_selected_spirit
player1.weapon_img.src = player1_selected_weapon
const player2 = new Sprite({
    position: {
        x: 950,
        y: 0
    },
    velocity: {
        x: 0,
        y: 10
    },
    offset: {
        x: -50,
        y: 0
    },
    color: "blue",
    img: new Image(),
    weapon_img: new Image()
})
player2.img.src = player2_selected_spirit
player2.weapon_img.src = player2_selected_weapon
// Important change agording do player postion
function settplyer2Offset() { // this is for so the attackbox positions to face the player
    if (
        player1.width/2 + player1.position.x > player2.position.x + player2.width/2
    ) {
        player1.attackBox.offset.x = -50
        player2.attackBox.offset.x = 0

        mirrored_img_src = player1.weapon_img.src.slice(0,45) + "_mirrored.png"
        player1.weapon_img.src = mirrored_img_src
        
        mirrored_img_src = player2.weapon_img.src.slice(0,45) + ".png"
        player2.weapon_img.src = mirrored_img_src

    } else {
        player1.attackBox.offset.x = 0
        player2.attackBox.offset.x = -50

        mirrored_img_src = player1.weapon_img.src.slice(0,45) + ".png"
        player1.weapon_img.src = mirrored_img_src

        mirrored_img_src = player2.weapon_img.src.slice(0,45) + "_mirrored.png"
        player2.weapon_img.src = mirrored_img_src
    }
}

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

    settplyer2Offset()

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
        player1.isAttacking = false
        player2.health -= 10
        player2_health.style.width = player2.health + "%"
    }
    if (
        rectangularCollision({
            rectangle1: player2,
            rectangle2: player1
    })) {
        player2.isAttacking = false
        player1.health -= 10
        player1_health.style.width = player1.health + "%"
    }
    if (player1.health <= 0 || player2.health <= 0) {


        player1.position.x = 20
        player2.position.x = 950
        player1.speed = 0
        player2.speed = 0

        determineWinner({player1, player2, timerId})   
    }
///////////////////////////////////////////////////////////// rectangle1.isAttacking
}



function determineWinner({player1, player2, timerId}) {
    clearTimeout(timerId)
    
    end_game_div.style.display = "flex"

    if (player1.health === player2.health) {
        end_game_btn.innerHTML = "Time out"
    } else if (player1.health > player2.health) {
        end_game_btn.innerHTML = "Playe 1 Wins"
    } else if (player1.health < player2.health){
        end_game_btn.innerHTML = "Playe 2 Wins"
    }
    
    player1.health = 100
    player2.health = 100
    change_to_reset_btn()
}

function change_to_reset_btn() {
    setTimeout(() => {
        end_game_btn.innerHTML = "Restart"
    }, 2000)
}




function decreaseTimer() {
    timerId = setTimeout(decreaseTimer, 1000)
    if (timer > 0) {
        timer--
        game_time.innerHTML = timer
    }
    if (timer === 0) {
        determineWinner({player1, player2, timerId})
    }
}




function reset_game() {
    

    player1.speed = 5
    player2.speed = 5


    player1_health.style.width = player1.health + "%"
    player2_health.style.width = player2.health + "%"


    timer = 60
    timerId = setTimeout(decreaseTimer, 1000)
    game_time.innerHTML = timer

    end_game_div.style.display = "none"


}






function start1v1Game() {
    if (start_1v1.style.display = "block") {
        start_1v1.style.display = "none";    
        canvas.style.display = "block";
    } else {
        start_1v1.style.display = "block";    
        canvas.style.display = "none";
    }
    player_selection.style.display = "none";


    animate();
    player_status_bar.style.display = "flex";
    decreaseTimer()
}