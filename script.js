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

function setAttack(){
	var x;
	x = parseInt(document.getElementById("PATK").value);
	document.getElementById("message").innerHTML = (x+6);
	document.getElementById("PATK").disabled = true;

	localStorage.setItem("name", x);
}

function setHealth(){
	var yy = 0;
	var y = 0;
	y = parseInt(document.getElementById("PHP").value);
	yy = parseInt(document.getElementById("PHP2").value);
	document.getElementById("message2").innerHTML = (y+yy+12);
	document.getElementById("PHP").disabled = true;
	document.getElementById("PHP2").disabled = true;


}

function setLuck(){
	var z;
	z = parseInt(document.getElementById("PLCK").value);
	document.getElementById("message3").innerHTML = (z+6);
	document.getElementById("PLCK").disabled = true;
}

function setSkill(){
	var w;
	w = parseInt(document.getElementById("PSKL").value);
	document.getElementById("message4").innerHTML = (w+6);
	document.getElementById("PSKL").disabled = true;
}











