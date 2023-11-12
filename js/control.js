const keys = {
    a: {
        pressed:false
    },
    d: {
        pressed:false
    },
    w: {
        pressed:false
    },
    space: {
        pressed:false
    },
}


window.addEventListener("keydown", e => {
    let key = e.key

    switch(key) {

        case "a":
            keys.a.pressed = true
            player.lastKeyPressed = key
            break
        case "d": 
            keys.d.pressed = true
            player.lastKeyPressed = key
            break
        case "w": 
            keys.w.pressed = true
            break       
        case " ": 
            keys.space.pressed = true
            break 
    }
  
})

window.addEventListener("keyup", e => {
    let key = e.key

    switch(key) {

        case "a":
            keys.a.pressed = false
            break
        case "d": 
            keys.d.pressed = false
            break
        case "w": 
            keys.w.pressed = false
            break
    }
  
})

function handleControls() {
    movement()

    function movement() {
         player.velocity.x = 0

         if(keys.a.pressed && ["a"].includes(player.lastKeyPressed)) {
            player.velocity.x = -1.5 *3.4

         }

         if(keys.d.pressed && ["d"].includes(player.lastKeyPressed)) {
            player.velocity.x = 1.5 *3.4

         }

         if(keys.w.pressed) {
            player.velocity.y = -4

         }


    }
}