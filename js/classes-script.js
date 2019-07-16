//maybe try to use jquery for this?
//also add an else so that you can close the dropdown by clicking the button again
//closes all of the dropdowns need to change
window.onclick = function(event) {
	if (!event.target.matches('.dropbtn')) {
	    var dropdowns = document.getElementsByClassName("dropdown-content");
	    var i;
	    for (i = 0; i < dropdowns.length; i++) {
		    var openDropdown = dropdowns[i];
		    if (openDropdown.classList.contains('show')) {
		        openDropdown.classList.remove('show');
		    }
	    }
	}
}

$("button").click(function(){
	var id = this.id;
	switch(id){
		case "webdesign-btn":
			document.getElementById("webdesign-content").classList.toggle("show");
			break;
		case "discrete-btn":
			document.getElementById("discrete-content").classList.toggle("show");
			break;
		case "data-struct-btn":
			document.getElementById("data-structs-content").classList.toggle("show");
			break;
		case "algos-btn":
			document.getElementById("algos-content").classList.toggle("show");
			break;
		case "cso-btn":
			document.getElementById("cso-content").classList.toggle("show");
			break;
		case "os-btn":
			document.getElementById("os-content").classList.toggle("show");
			break;
		case "linear-btn":
			document.getElementById("linear-content").classList.toggle("show");
			break;
		case "parallel-btn":
			document.getElementById("parallel-content").classList.toggle("show");
			break;
		default:
			break;
	}
})