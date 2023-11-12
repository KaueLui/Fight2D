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

    update(){

        //this.velocity.y += gravity

        if( this.position.y+this.height >= canvas.height){
            this.velocity.y = canvas.height - (this.position.y+this.height)
        } else{
            this.velocity.y += gravity
        }

        this.position.x += this.velocity.x
        this.position.y += this.velocity.y

        this.draw()
    }
}

const player = new Character({
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