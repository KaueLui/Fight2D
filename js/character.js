const gravity = 0.9


class Character{
    constructor({position, velocity, dimensions}){
        this.position = position
        this.velocity = velocity
        this.width = dimensions.width
        this.height = dimensions.height
    }

    draw() {
        ctx.fillStyle = "white"
        ctx.fillRect(this.position.x, this.position.y, this.width, this.height)
    
        if(this.isAttacking) {
            ctx.fillStyle = "red"
            ctx.fillRect(this.attackBox.position.x, this.attackBox.position.y, this.attackBox.width, this.attackBox.height)
        }
    }

    update() {
        if (Math.ceil(this.position.y+this.height >= canvas.height)) {
            this.onGround = true
        } else {
            this.onGround = false
        }
       
       
        if (this.position.y+this.height > canvas.height) {
            this.position.y = canvas.height-this.height
            this.velocity.y = 0
        } else{
            if (!this.onGround) this.velocity.y += gravity
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.attackBox.position.x = this.position.x
        this.attackBox.position.y = this.position.y

        this.draw()
    }

    attack() {
        if(this.onAttackCooldown) return
        
        this.isAttacking = true
        this.onAttackCooldown = true

        setTimeout(() => {
            this.isAttacking = false
        }, 100)

        setTimeout(() => {
            this.onAttackCooldown = false
        }, this.attackCooldown)
        
    }


    jump() {
        if (!this.onGround) return
        this.velocity.y = -16
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

        //Ataque
        this.attackBox = {
            position:{
                x: this.position.x,
                y: this.position.y
            },
            width: 125,
            height: 50
        }

        this.isAttacking
        this.attackCooldown = 500
        this.onAttackCooldown

        //Movimentação
        this.lastKeyPressed
        this.onGround

        
    }

}





// Jogador
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