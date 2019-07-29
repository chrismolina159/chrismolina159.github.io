var i = 0;
var str1 = "Home Page";				//9
var str2 = "Resume";				//6
var str3 = "Classes Taken"; 		//13
var str4 = "Github";				//6
var str5 = "LinkedIn";				//8
var str6 = "About Me";				//8
var str7 = "Quotes";				//6
var headerSpeed = 400;

var typewriter = document.getElementById("typewriter");
var resume = document.getElementById("res");
var classes = document.getElementById("cla");
var github = document.getElementById("git");
var linkedin = document.getElementById("lin");
var about = document.getElementById("abt");
var quotes = document.getElementById("quo");

//Possibly add margin line for extra typewriting effect
function typeWrite(){

	if(i < str3.length){
		classes.innerHTML += str3.charAt(i);
		if(i < 6){
			typewriter.innerHTML += str1.charAt(i);
			resume.innerHTML += str2.charAt(i);
			github.innerHTML += str4.charAt(i);
			linkedin.innerHTML += str5.charAt(i);
			about.innerHTML += str6.charAt(i);
			quotes.innerHTML += str7.charAt(i);
		}
		else if(i < 8){
			typewriter.innerHTML += str1.charAt(i);
			linkedin.innerHTML += str5.charAt(i);
			about.innerHTML += str6.charAt(i);
		}
		else if(i < 9){
			typewriter.innerHTML += str1.charAt(i);
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