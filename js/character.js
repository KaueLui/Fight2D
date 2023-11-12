const gravity = 0.1


class Character{
    constructor({position, velocity, dimensions}){
        this.position = position
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height
    }

    draw(){
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    }

    update() {
        if (this.position.y+this.height > canvas.height) {
            this.position.y = canvas.height-this.height
            this.velocity.y = 0
        } else{
            this.velocity.y += gravity
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.draw()
    }
}

class Fight extends Character {
    constructor({
        position,
        velocity,
        dimensions
    }) {
        super({
            position,
            velocity,
            dimensions
        })

        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height

        this.lastKeyPressed

        
    }

}






// Jogador 1
const player = new Fight({
    position: {
        x: 100,
        y: 100
    },
    velocity:{
        x: 0,
        y: 0
    },
    dimensions:{
        width: 50,
        height: 150
    }
})

//Jogador 2
const player2 = new Fight({
    position: {
        x: 500,
        y: 150
    },
    velocity:{
        x: 0,
        y: 0
    },
    dimensions:{
        width: 100,
        height: 150
    }
})