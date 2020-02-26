function npupdate(){
	// Get the existing data
	var existing = localStorage.getItem('Edit');

	var npup = document.getElementById("npad").value;

	// If no existing data, use the value by itself
	// Otherwise, add the new value to it
	var data = existing ? existing + (' /// ')+npup : '';

	// Save back to localStorage
	localStorage.setItem('Edit', data);

	var nppup = localStorage.getItem("Edit");

	document.getElementById("writing").innerHTML = (nppup)

}

function npdata(){
	var np = localStorage.getItem("Edit");
	document.getElementById("writing").innerHTML = (np);
		
}
window.onload=npdata;



function resetForm(){
	document.getElementById("npadForm").reset();
}



