class Car {
    constructor({image, position, sprites}, x, y, width, height) {
        this.position = position;
        this.image = image;
        this.sprites = sprites;
        this.direction = 'up';
        this.speed = 1;
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

    }

    draw() {
        c.clearRect(0, 0, canvas.width, canvas.height)
        if (this.direction === 'up') {
            this.image = this.sprites.up
        } else if (this.direction === 'down') {
            this.image = this.sprites.down
        } else if (this.direction === 'left') {
            this.image = this.sprites.left
        } else if (this.direction === 'right') {
            this.image = this.sprites.right
        }
        c.drawImage(this.image, this.position.x - this.image.width / 2, this.position.y - this.image.height / 2);
    }


    move() {
        this.isCollid = false;
        if (keys.left) {
            console.log(keys.left)
            if (this.direction !== 'right')
                this.moveLeft();
        } else if (keys.right) {
            if (this.direction !== 'left')
                this.moveRight();
        } else if (keys.up) {
            if (this.direction !== 'down')
                this.moveUp();
        } else if (keys.down) {
            if (this.direction !== 'up')
                this.moveDown();
        }
    }

    moveLeft() {
        this.direction = 'left';
        if(checkCollision(rect1) || checkCollision(rect2)) {
            this.isCollid = true;
        }
        if(!this.isCollid)
            this.position.x -= 3 * this.speed;
    }

    moveRight() {
        console.log(this.isCollid)
        this.direction = 'right';
        if(checkCollision(rect1) || checkCollision(rect2)) {
            this.isCollid = true;
        }
        if(!this.isCollid)
            this.position.x += 3 * this.speed;
    }

    moveUp() {
        this.direction = 'up';
        if(checkCollision(rect1) || checkCollision(rect2)) {
            this.isCollid = true;
        }
        if(!this.isCollid)
            this.position.y -= 3 * this.speed;
    }

    moveDown() {
        this.direction = 'down';
        if(checkCollision(rect1) || checkCollision(rect2)) {
            this.isCollid = true;
        }
        if(!this.isCollid)
            this.position.y += 3 * this.speed;
    }
}