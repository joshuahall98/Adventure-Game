function bpupdate(){
	// Get the existing data
	var existing = localStorage.getItem('bpEdit');

	var bpup = document.getElementById("bpad").value;

	// If no existing data, use the value by itself
	// Otherwise, add the new value to it
	var data = existing ? existing + ('*')+bpup+('<br/>') : '';

	// Save back to localStorage
	localStorage.setItem('bpEdit', data);

	var bppup = localStorage.getItem("bpEdit");

	document.getElementById("writing").innerHTML = (bppup)

}

function bpdata(){
	var bp = localStorage.getItem("bpEdit");
	document.getElementById("writing").innerHTML = (bp);
		
}
window.onload=bpdata;



function resetForm(){
	document.getElementById("bpadForm").reset();
}