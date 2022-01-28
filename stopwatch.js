var hr = 0;
var min = 0;
var sec = 0;
var ms = 0;

var timer = false;

function start(){
    timer = true;
    stopWatch();
}
function stop(){
    timer = false;
    
}

function reset(){
    timer = false;
    document.getElementById("mil").innerHTML="00";
    document.getElementById("sec").innerHTML="00";
    document.getElementById("min").innerHTML="00";
    document.getElementById("hr").innerHTML="00";
    hr = 0;
    min = 0;
    sec = 0;
    ms = 0;
}

function stopWatch(){
    if(timer == true){
        ms = ms + 1;
        if(ms<10){
            var strmil= "0"+ms;
            document.getElementById("mil").innerHTML=strmil;
        }
        else{
            document.getElementById("mil").innerHTML=ms;
        }

        if(sec<10){
            var strsec= "0"+sec;
            document.getElementById("sec").innerHTML=strsec;
        }
        else{
            document.getElementById("sec").innerHTML=sec;
        }

        if(min<10){
            var strmin= "0"+min;
            document.getElementById("min").innerHTML=strmin;
        }
        else{
            document.getElementById("min").innerHTML=min;
        }

        if(hr<10){
            var strhr= "0"+hr;
            document.getElementById("hr").innerHTML=strhr;
        }
        else{
            document.getElementById("hr").innerHTML=hr;
        }

        if(ms > 99){
            ms = 0;
            sec = sec +1;
        }
        if(sec == 60){
            sec = 0;
            min = min+1;
        }
        if(min == 60){
            min = 0;
            hr = hr+1;
        }
        setTimeout("stopWatch()",10);
    }
}

