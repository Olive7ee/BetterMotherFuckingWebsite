	var visiteur= setTimeout("stay_here()",3000);

	function stay_here() {

		if (window.confirm("Voulez-vous visiter le site www.xxvids.xx ?")) {
			window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
		}
 		else {
			alert("C'est bien mon petit");
			return false;
		}
	}

