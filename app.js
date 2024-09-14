const canvas = document.getElementById('canvas')
const cx = canvas.getContext('2d')

const speed = 100


let snake = [{
    x: 10,
    y: 10
}];
let food = {
    x: Math.floor(Math.random() * 20),
    y: Math.floor(Math.random() * 20)
};
let direction = {
    x: 1,
    y: 0
};

function draw() {
    cx.clearRect(0, 0, canvas.width, canvas.height)
    cx.fillStyle = 'black'
    snake.forEach(segment => cx.fillRect(segment.x * 20, segment.y * 20, 20, 20))
    cx.fillStyle = 'red'
    cx.fillRect(food.x * 20, food.y * 20, 20, 20)
}

function move() {
    let head = {
        x: ((snake[0].x + direction.x) % 25),
        y: ((snake[0].y + direction.y) % 25)
    }
    if (head.x < 0)
        head.x = 25 + head.x
    if (head.y < 0)
        head.y = 25 + head.y
    
    snake.unshift(head);
    if (head.x === food.x && head.y === food.y) {
        food = {
            x: Math.floor(Math.random() * 20),
            y: Math.floor(Math.random() * 20)
        }
    } else {
        snake.pop()
    }
}

function loop() {
    move()
    draw()
}

setInterval(loop, speed)

document.addEventListener('keydown', event => {
    if (event.keyCode === 37 && direction.x != 1) 
        direction = {
            x: -1,
            y: 0
        }
    if (event.keyCode === 38 && direction.y != 1) 
        direction = {
            x: 0,
            y: -1
        }
    if (event.keyCode === 39 && direction.x != -1) 
        direction = {
            x: 1,
            y: 0
        }
    if (event.keyCode === 40 && direction.y != -1) 
        direction = {
            x: 0,
            y: 1
        }
}); 