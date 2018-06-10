var timer = document.getElementById("timer");

var count= 0
var timeLeft = 300;
var min = 0;
var sec = 0;
var interval = setInterval(function(){countdown()}, 1000);


function convert(s) {
	var min = Math.floor(s / 60);
	var sec = s % 60;
		if (sec < 10 && sec.length != 2) {
			return "0" + min + " : " + "0" + sec
	}else{
			return "0" + min + " : " + sec;
		}	
}

function countdown() {
		count ++;
		result = timeLeft - count;
		timer.innerHTML= convert(result);
		if (timeLeft == count) {
		clearInterval(interval);
		count = 0;
		}
}