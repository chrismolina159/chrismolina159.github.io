$(document).ready(function(){
	$(".dropbtn").hover(
		function(){
			$(this).css("background-color", "rgba(101,10,142,1.0)");
		},
		function(){
			let id = this.id;
			let slice = id.slice(0,id.indexOf("-"));
			slice = slice.concat("-content");
			if($("#"+slice).hasClass("show"))
				;
			else
				$(this).css("background-color","rgba(152,7,235,.82)");
		});
	$("button").click(function(){
		let id = this.id;
		switch(id){
			case "webdesign-btn":
				if(document.getElementById("webdesign-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			case "discrete-btn":
				if(document.getElementById("discrete-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			case "datastructs-btn":
				if(document.getElementById("datastructs-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			case "algos-btn":
				if(document.getElementById("algos-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			case "cso-btn":
				if(document.getElementById("cso-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			case "os-btn":
				if(document.getElementById("os-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			case "linear-btn":
				if(document.getElementById("linear-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			case "parallel-btn":
				if(document.getElementById("parallel-content").classList.toggle("show"))
					document.getElementById(id).style.backgroundColor = "rgba(101,10,142,1.0)";
				else
					document.getElementById(id).style.backgroundColor = "rgba(152,7,235,.82)";
				break;
			default:
				break;
		}
	})
})