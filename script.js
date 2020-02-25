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
	x = parseInt(document.getElementById("PATK").value);
	xx = 6 + x;
	document.getElementById("message").innerHTML = xx;
	document.getElementById("PATK").disabled = true;
	
	localStorage.setItem("Attack", xx);

	
	return xx;

}



 


function setHealth(){
	y = parseInt(document.getElementById("PHP").value);
	yy = parseInt(document.getElementById("PHP2").value);
	yyy = 12 + y + yy;
	document.getElementById("message2").innerHTML = (yyy);
	document.getElementById("PHP").disabled = true;
	document.getElementById("PHP2").disabled = true;

	localStorage.setItem("Health", yyy);

	return y;
	return yy;
	return yyy;
}

function setLuck(){
	z = parseInt(document.getElementById("PLCK").value);
	zz = z + 6;
	document.getElementById("message3").innerHTML = (zz);
	document.getElementById("PLCK").disabled = true;

	localStorage.setItem("Luck", zz);

	return z;
	return zz;
}

function setSkill(){
	w = parseInt(document.getElementById("PSKL").value);
	ww = parseInt(document.getElementById("PSKL2").value);
	www = w + ww;
	document.getElementById("message4").innerHTML = (www);
	document.getElementById("PSKL").disabled = true;
	document.getElementById("PSKL2").disabled = true;

	localStorage.setItem("Skill", www);

	return w;
	return ww;
	return www;
}


function test(){
	patk = localStorage.getItem("Attack");
	document.getElementById("message1.1").innerHTML = (patk);
	php = localStorage.getItem("Health");
	document.getElementById("message2.1").innerHTML = (php);
	plck = localStorage.getItem("Luck");
	document.getElementById("message3.1").innerHTML = (plck);
	pskl = localStorage.getItem("Skill");
	document.getElementById("message4.1").innerHTML = (pskl);

}
window.onload=test;







