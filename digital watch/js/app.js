// started function
function showTime(){
    
    let data = new Date();
     let hour = data.getHours(); // 0-23 hours
     let minute = data.getMinutes(); // 0-60 minute
     let secount = data.getSeconds();  // 0-60 secounds
     let am_or_pm = "AM";
    
    
    //some checking 

    if(hour == 0){
        hour = 12;
    }else if(hour > 12){
        hour = hour-12;
        am_or_pm = "PM"
    }else if(hour < 10){
        hour = "0"+hour;
    }
    
    //settings minute
    if(minute == 60){
        minute =0;
    }else if(minute <10){
        minute = "0"+ minute
    }
    //settings secound
    if(secount < 10){
        secount = "0"+secount;
    }


    
  //
  //you can access all variables    let time = hour + ":"+ minute + ":" + secount +" "+ am_or_pm;

  
  document.getElementById("hour").innerHTML = hour;
  document.getElementById("minute").innerHTML = minute;
  document.getElementById("secount").innerHTML = secount;
  document.getElementById("am_or_pm").innerHTML = am_or_pm;
    
    setInterval(showTime, 1000);
    
    
}

showTime();



