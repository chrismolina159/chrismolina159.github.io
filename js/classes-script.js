$(document).ready(function(){
	let numShowing =  0;

	function displayAll(){
		setTimeout(function(){
			if(!($("#webdesign-content").hasClass("show")) ){
				document.getElementById("webdesign-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("webdesign-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#discrete-content").hasClass("show")) ){
				document.getElementById("discrete-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("discrete-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#datastructs-content").hasClass("show")) ){
				document.getElementById("datastructs-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("datastructs-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#cso-content").hasClass("show")) ){
				document.getElementById("cso-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("cso-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#os-content").hasClass("show")) ){
				document.getElementById("os-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("os-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#algos-content").hasClass("show")) ){
				document.getElementById("algos-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("algos-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#linear-content").hasClass("show")) ){
				document.getElementById("linear-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("linear-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#interactive-content").hasClass("show")) ){
				document.getElementById("interactive-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("interactive-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#parallel-content").hasClass("show")) ){
				document.getElementById("parallel-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("parallel-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#artificial-content").hasClass("show")) ){
				document.getElementById("artificial-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("artificial-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#networks-content").hasClass("show")) ){
				document.getElementById("networks-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("networks-content").classList.toggle("show");
				numShowing++;
			}
			else if(!($("#devops-content").hasClass("show")) ){
				document.getElementById("devops-btn").style.backgroundColor = "rgba(101,10,142,1.0)";
				document.getElementById("devops-content").classList.toggle("show");
				numShowing++;
			}
			else{
				//this gets hit when the user clicks the button and everything is showing
				;
			}
			if(numShowing < 12){
				displayAll();
			}
		}, 300);
	}

	function hideAll(){
		setTimeout(function(){
			if($("#webdesign-content").hasClass("show")){
				document.getElementById("webdesign-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("webdesign-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#discrete-content").hasClass("show")){
				document.getElementById("discrete-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("discrete-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#datastructs-content").hasClass("show")){
				document.getElementById("datastructs-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("datastructs-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#cso-content").hasClass("show")){
				document.getElementById("cso-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("cso-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#os-content").hasClass("show")){
				document.getElementById("os-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("os-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#algos-content").hasClass("show")){
				document.getElementById("algos-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("algos-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#linear-content").hasClass("show")){
				document.getElementById("linear-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("linear-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#interactive-content").hasClass("show")){
				document.getElementById("interactive-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("interactive-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#parallel-content").hasClass("show")){
				document.getElementById("parallel-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("parallel-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#artificial-content").hasClass("show")){
				document.getElementById("artificial-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("artificial-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#networks-content").hasClass("show")){
				document.getElementById("networks-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("networks-content").classList.toggle("show");
				numShowing--;
			}
			else if($("#devops-content").hasClass("show")){
				document.getElementById("devops-btn").style.backgroundColor = "rgba(152, 7, 235, 0.82)";
				document.getElementById("devops-content").classList.toggle("show");
				numShowing--;
			}
			else{
				//this gets hit when the user clicks the button and everything is not showing
				;
			}
			if(numShowing > 0){
				hideAll();
			}
		}, 300);
	}

	$(".dropbtn").hover(
		function(){
			$(this).css("background-color", "rgba(101,10,142,1.0)");
		},
		function(){
			let id = this.id;
			let slice = id.slice(0,id.indexOf("-"));
			slice = slice.concat("-content");
			
			// console.log($("#"+slice).hasClass("show"));
			// console.log($(slice).hasClass("show"));

			if($("#"+slice).hasClass("show"))
				;
			else
				$(this).css("background-color","rgba(152,7,235,.82)");
		}
	);
	$(".dropbtn").click(function(){
		let id = this.id;
		switch(id){
			case "webdesign-btn":
				if(document.getElementById("webdesign-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "discrete-btn":
				if(document.getElementById("discrete-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "datastructs-btn":
				if(document.getElementById("datastructs-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "algos-btn":
				if(document.getElementById("algos-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "cso-btn":
				if(document.getElementById("cso-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "os-btn":
				if(document.getElementById("os-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "linear-btn":
				if(document.getElementById("linear-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "parallel-btn":
				if(document.getElementById("parallel-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "artificial-btn":
				if(document.getElementById("artificial-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "networks-btn":
				if(document.getElementById("networks-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "interactive-btn":
				if(document.getElementById("interactive-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			case "devops-btn":
				if(document.getElementById("devops-content").classList.toggle("show")){
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
					numShowing++;
				}
				else{
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
					numShowing--;
				}
				break;
			default:
				break;
		}
	});
	$("#display-all-btn").click(function(){
		displayAll();
	});
	$("#hide-all-btn").click(function(){
		hideAll();
	});
});