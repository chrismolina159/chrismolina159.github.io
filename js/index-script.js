$(document).ready(function(){

	let i = 0
	const str1 = "Home Page"				//9
	const str2 = "Resume"					//6
	const str3 = "Classes Taken" 			//13
	const str4 = "Github"					//6
	const str5 = "LinkedIn"					//8
	const str6 = "About Me"					//8
	const str7 = "Quotes"					//6
	const headerSpeed = 400

	const typewriter = document.getElementById("typewriter")
	const resume = document.getElementById("res")
	const classes = document.getElementById("cla")
	const github = document.getElementById("git")
	const linkedin = document.getElementById("lin")
	const about = document.getElementById("abt")
	const quotes = document.getElementById("quo")
	const reveal = document.getElementById("reveal-wrapper")

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

	function rain(){
		let increment = 0;
		let drops = "";
		let backDrops = "";

		while (increment < 100) {
			let randomPosition = (Math.floor(Math.random() * (96) + 3));
			let randomIncAmt = (Math.floor(Math.random() * (5) + 5));
			// console.log("randomPosition:",randomPosition,"|| randomIncAmt:",randomIncAmt,"|| increment:", increment)

			increment += randomIncAmt;
			drops += `<div class="drop" style="left: ${increment}%; bottom: ${(2*randomIncAmt+99)}%; animation-delay: 0.${randomPosition}s; animation-duration: 0.5${randomPosition}s;"><div class="stem" style="animation-delay: 0.${randomPosition}s; animation-duration: 0.5${randomPosition}s;"></div><div class="splat" style="animation-delay: 0.${randomPosition}s; animation-duration: 0.5${randomPosition}s;"></div></div>`;
			backDrops += `<div class="drop" style="right: ${increment}%; bottom: ${(2*randomIncAmt+99)}%; animation-delay: 0.${randomPosition}s; animation-duration: 0.5${randomPosition}s;"><div class="stem" style="animation-delay: 0.${randomPosition}s; animation-duration: 0.5${randomPosition}s;"></div><div class="splat" style="animation-delay: 0.${randomPosition}s; animation-duration: 0.5${randomPosition}s;"></div></div>`;
		}

		$('.front-row').append(drops);
		$('.back-row').append(backDrops);
	}

	rain()
	typeWrite();

	$("a").click((evt)=>{
		let buttonEle = evt.target.parentElement.parentElement
		let color = window.getComputedStyle(buttonEle, null).getPropertyValue("background-color")
		let buttonId = buttonEle.id
		let splitId = buttonId.split("-")
		let revealText = ""
		let linkLocation = evt.target.parentElement.href

		switch(splitId[0]){
			case "resume":
				reveal.firstElementChild.innerHTML = "Loading Resume page"
				break
			case "classes":
				reveal.firstElementChild.innerHTML = "Loading Classes page"
				break
			case "github":
				reveal.firstElementChild.innerHTML = "Heading to Github profile"
				break
			case "linkedin":
				reveal.firstElementChild.innerHTML = "Heading to LinkedIn profile"
				break
			case "about":
				reveal.firstElementChild.innerHTML = "Loading About page"
				break
			case "quotes":
				reveal.firstElementChild.innerHTML = "Loading Quotes page"
				break
			default:
				// console.log("No matches there is an error")
		}
		reveal.style.backgroundColor = color
		reveal.style.opacity = "1"
		reveal.style.width = "100%"
		reveal.style.left = "0"

		setTimeout(function(){
			window.location.href = linkLocation
		}, 2000)

		return false
	})
});