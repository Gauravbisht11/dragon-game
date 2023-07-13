
let score=0;
let cross=true;
let gameOverAudio=new Audio("gameover.mp3");
let audio=new Audio("music.mp3");
setTimeout(() => {
    audio.play();
}, 1000);
document.onkeydown=((e)=>{
// console.log("hello",e.keyCode)
if(e.keyCode==38){
    let dino=document.querySelector(".dino")
    dino.classList.add("animateDino")
    setTimeout(() => {
        dino.classList.remove("animateDino");
    }, 900);
}
if(e.keyCode==39)
{
    dino=document.querySelector(".dino");
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dino.style.left=dinox+112+"px"
}
if(e.keyCode==37){
    dino=document.querySelector(".dino");
    dinox=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dino.style.left=(dinox-112)+"px"
    
}
})
setInterval(() => {
    dino=document.querySelector(".dino")
    gameOver=document.querySelector(".gameOver")
    obstacle=document.querySelector(".obstacle")
    dx=parseInt(window.getComputedStyle(dino,null).getPropertyValue("left"))
    dy=parseInt(window.getComputedStyle(dino,null).getPropertyValue("top"))
    //  console.log(dx)
    // console.log(dy)
    ox=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("left"))
    oy=parseInt(window.getComputedStyle(obstacle,null).getPropertyValue("top"))
    offsetx=Math.abs(dx-ox)
    offsety=Math.abs(dy-oy)
    // console.log(offsetx)
    // console.log(offsety)
    if(offsetx<200 && offsety<30)
    {
        gameOver.style.visibility="visible"
        obstacle.classList.remove("obstacleAni")
        gameOverAudio.play();
        
        setTimeout(() => {
            gameOverAudio.pause();
            audio.pause();
        }, 1000);
        dino=document.querySelector(".dino");
        dino.classList.add("dinodie")

    }
    else if(offsetx<130 && cross){
        score+=1;
        updatescore(score);
        cross=false;
        setTimeout(() => {
            cross=true;
        }, 1000);
       let anidur=parseFloat(window.getComputedStyle(obstacle,null).getPropertyValue("animation-duration"))
        anidur=anidur-0.01;
        document.querySelector(".obstacle").style.animationDuration=anidur+"s";
        
    }

}, 100);
updatescore=()=>{
            document.getElementById("score").innerHTML="Your Score: "+score;
}


