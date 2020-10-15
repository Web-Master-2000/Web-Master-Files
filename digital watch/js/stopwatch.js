//Stopwatch JS codes
let ms = 0 ,s =0 , m=0;
let timer;

let Stopwatch = document.querySelector(".stopwatch");
let laps = document.getElementsByClassName("laps");


function start(){
    if(!timer){
        timer = setInterval(run,10);
    };


}
function run(){
Stopwatch.textContent = (m < 10 ? "0" + m: m) + ":" + (s<10 ? "0" + s:s) 
 +":"+ (ms< 10 ? "0" + ms : ms);
ms++;
if(ms == 100){
    ms = 0;
    s++;
}if(s == 60 ){
    s=0;
    m++
}

}
function pause(){
    clearInterval(timer);
    timer = false
}

function stop(){
    clearInterval(timer);
    timer = false;
    m=0;
    s=0;
    ms=0;
    Stopwatch.textContent = (m < 10 ? "0" + m: m) + ":" + (s<10 ? "0" + s:s) 
 +":"+ (ms< 10 ? "0" + ms : ms);

}
function resart(){
    stop();
  

}
 




