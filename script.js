let canvas = document.getElementById('canvas');
//  Xác định điểm X, Y
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
// tạo ra bút để vẽ
let ctx = canvas.getContext('2d');
// Xác định gốc trục tọa độ 0
let mouse = {
    x: window.innerWidth / 2,
    y: window.innerHeight / 2
}
let colors = [
    '#2ecc71',
    '#c0392b',
    '#8e44ad',
    '#f1c40f',
    '#ecf0f1',
    '#D980FA',
    '#5758BB',
    '#C4E538',
]
let mouseIn = true;
window.addEventListener('mousemove', function(e){
    mouse.x = e.x;
    mouse.y = e.y;
    mouseIn = true;
})
window.addEventListener('mouseout', function(){
    mouseIn = false;

})
console.log(colors.length);
let circleArray = [];
function Circle(x,y,r,rx,ry){
    this.x = x;
    this.y = y;
    this.r = r;
    this.color = colors[(Math.floor(Math.random()*colors.length))];
    this.draw = function(){
        ctx.beginPath()
        ctx.arc(this.x,this.y,this.r,0,Math.PI*2);
        ctx.fill()
        ctx.fillStyle = this.color
    }
    this.update = function(){
        this.x = this.x + rx;
        this.y = this.y + ry;
        this.draw();
        // if(this.r < 30){
        //     this.r+=1
        // } 
        
        
    }
}

function beginApp(){
    requestAnimationFrame(beginApp);
    ctx.clearRect(0,0,canvas.width, canvas.height);
    if(mouseIn == true){
        let x = mouse.x;
        let y = mouse.y;
        let r = 10;
        let rx = (Math.random() - 0.5) * 5;
        let ry = (Math.random() - 0.5) * 5;
        circleArray.push(new Circle(x,y,r,rx,ry));
    }
    for(let i = 0; i< circleArray.length; i++){
        circleArray[i].update();
    }
    // console.log(circleArray);
}
beginApp();

console.log(window.innerWidth / 2);
