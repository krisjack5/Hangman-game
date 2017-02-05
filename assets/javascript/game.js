var wordbox = ["seinfeld", "cheers", "alf", "friends", "wings", "ateam",];
var random;
var used = [];
var guess;
var answer = [];
var already;
var left;


function start() {
	
	random = wordbox[Math.floor(Math.random() * wordbox.length)];
	answer = random.split("");
	
	document.getElementById('fun').innerHTML = "";
	
	for (var i=0; i < answer.length; i++) {
		var field = $("<span>");
		field.html("_ ");
		$("#fun").append(field);
	}
	
	document.getElementById("hang").innerHTML = "12";
	document.getElementById("game").innerHTML = "";
	used = [];
}

function winner() {
	
	var count = Number(document.getElementById("winning").innerHTML);
	count += 1;
	document.getElementById("winning").innerHTML = count;
	start();
}

function checkUsed() {
   
    if (used.length == 0) {
       
        already = false;
    }   else {
        for (i = 0; i < used.length; i++) {
            if (guess === used[i]) {
                already = true;
                return true;
            } else {
                already = false;
                
            }
        }
    }
}

function check() {
	
	for (var i=0; i < answer.length; i++) {
		if (guess === answer[i]) {
			var select = document.getElementById('fun').childNodes;
			select[i].innerHTML = guess;
		}
	}
	
	var str = String(document.getElementById('fun').innerHTML);
	var n = str.includes("_");

	if (n === false) {
		alert("winner winner chicken dinner");
		winner();
	}
}

window.onkeydown = function(event) {
	if (event.keyCode >= 65 && event.keyCode <= 90) {
		guess = String.fromCharCode(event.keyCode).toLowerCase();
		
		checkUsed();
		
		if (already === false) {
			used.push(guess);
			
			left = Number(document.getElementById("hang").innerHTML);
			left -= 1
			document.getElementById("hang").innerHTML = left;
			document.getElementById("game").innerHTML += guess + ", ";

			check();
		}
	}

	if (left === 0) {
		alert("sorry loser");
		start();
	}
}

start();