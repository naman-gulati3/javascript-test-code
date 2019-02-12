
function currentTime(){
    var timer= new Date();
var hour = timer.getHours();
var min = timer.getMinutes();
var seconds = timer.getSeconds();
if(min < 10){
    min = "0"+min;
}if(seconds < 10){
    seconds = "0" +seconds;
}else if(hour<10){
hour = "0"+ hour;
}
setInterval(currentTime,1000);
console.log('Time is: ' + hour +":"+ min + ":" +seconds );
}
currentTime();