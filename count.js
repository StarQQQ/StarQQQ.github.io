       // type="text/javascript"
       function cdtd(){
        var xmas = new Date("Jan 01, 2021 00:00:00");
        var now = new Date();
        var timeDiff = xmas.getTime() - now.getTime();
        
        if(timeDiff <= 0){
            clearTimeout(timer);
            document.write("Today is our final day");
        }
        
        var seconds = Math.floor(timeDiff/1000);
        var minutes = Math.floor(seconds/60);
        var hours = Math.floor(minutes/60);
        var days = Math.floor(hours/24);
        
        hours %= 24;
        minutes %= 60;
        seconds %= 60;
        
        document.getElementById("daysBox").innerHTML = days;
        document.getElementById("hourBox").innerHTML = hours;
        document.getElementById("minsBox").innerHTML = minutes;
        document.getElementById("secsBox").innerHTML = seconds;
        var timer = setTimeout('cdtd()', 1000);
        
    }