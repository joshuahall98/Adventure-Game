function random(){
	document.getElementById("number").innerHTML = Math.floor(Math.random() * 6) +1;
	document.getElementById("b").disabled = true;
}

function random2(){
	document.getElementById("number2").innerHTML = Math.floor(Math.random() * 6) +1;
	document.getElementById("b2").disabled = true;
}

function reset(){
	document.getElementById("number").innerHTML = "";
	document.getElementById("number2").innerHTML = "";
	document.getElementById("b").disabled = false;
	document.getElementById("b2").disabled = false;
}

function isInputNumber(evt){

	var ch = String.fromCharCode(evt.which);

	if(!(/[0-9]/.test(ch))){
		evt.preventDefault();
	}
}

// var x;
// var xx;
// var y;
// var yy;
// var yyy;
// var z;
// var zz;
// var w;
// var ww;
// var www;

function setAttack(){
	var x = parseInt(document.getElementById("PATK").value);
	var xx = 6 + x;
	document.getElementById("message").innerHTML = xx;
	document.getElementById("PATK").disabled = true;
	
	localStorage.setItem("Attack", xx);

}



 


function setHealth(){
	var y = parseInt(document.getElementById("PHP").value);
	var yy = parseInt(document.getElementById("PHP2").value);
	var yyy = 12 + y + yy;
	document.getElementById("message2").innerHTML = (yyy);
	document.getElementById("PHP").disabled = true;
	document.getElementById("PHP2").disabled = true;

	localStorage.setItem("Health", yyy);

}

function setLuck(){
	var z = parseInt(document.getElementById("PLCK").value);
	var zz = z + 6;
	document.getElementById("message3").innerHTML = (zz);
	document.getElementById("PLCK").disabled = true;

	localStorage.setItem("Luck", zz);

}

function setSkill(){
	var w = parseInt(document.getElementById("PSKL").value);
	var ww = parseInt(document.getElementById("PSKL2").value);
	var www = w + ww;
	document.getElementById("message4").innerHTML = (www);
	document.getElementById("PSKL").disabled = true;
	document.getElementById("PSKL2").disabled = true;

	localStorage.setItem("Skill", www);
}


function stats(){
	var patk = localStorage.getItem("Attack");
	document.getElementById("message1.1").innerHTML = (patk);
	var php = localStorage.getItem("Health");
	document.getElementById("message2.1").innerHTML = (php);
	var plck = localStorage.getItem("Luck");
	document.getElementById("message3.1").innerHTML = (plck);
	var pskl = localStorage.getItem("Skill");
	document.getElementById("message4.1").innerHTML = (pskl);

}
window.onload=stats;



function npdata(){
	var np = localStorage.getItem("Edit");
	document.getElementById("writing").innerHTML = np;

	
}
window.onload=npdata;

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

function resetForm(){
	document.getElementById("npadForm").reset();
}


function newgame(){
	localStorage.clear();
	var empty = " ";
	localStorage.setItem("Edit", empty);
}