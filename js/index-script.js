var i = 0;
var str1 = "Welcome to my website";
var str2 = "Resume";				//6
var str3 = "Classes Taken"; 		//13
var str4 = "Github";				//6
var str5 = "LinkedIn";				//8
var str6 = "About Me";				//8
var str7 = "Quotes";				//6
var headerSpeed = 400;

//Possibly add margin line for extra typewriting effect
//add media for tablet and phone
function typeWrite(){

	if(i < str1.length){
		document.getElementById("typewriter").innerHTML += str1.charAt(i);
		if(i < 6){
			document.getElementById("res").innerHTML += str2.charAt(i);
			document.getElementById("cla").innerHTML += str3.charAt(i);
			document.getElementById("git").innerHTML += str4.charAt(i);
			document.getElementById("lin").innerHTML += str5.charAt(i);
			document.getElementById("abt").innerHTML += str6.charAt(i);
			document.getElementById("quo").innerHTML += str7.charAt(i);
		}
		else if(i < 8){
			document.getElementById("cla").innerHTML += str3.charAt(i);
			document.getElementById("lin").innerHTML += str5.charAt(i);
			document.getElementById("abt").innerHTML += str6.charAt(i);
		}
		else if(i < 13){
			document.getElementById("cla").innerHTML += str3.charAt(i);
		}
		i++;
		setTimeout(typeWrite, headerSpeed);
	}
}

$(document).ready(function(){
	
	typeWrite();

	// $("#resume-btn").click(function(){
	// 	$("#cube").css("animation","test");
	// 	$("#cube").css("animation-duration","2.5s");
	// 	$("#cube").css("animation-timing-function","linear");
	// 	$("#cube").css("animation-iteration-count", "2");
	// });
});