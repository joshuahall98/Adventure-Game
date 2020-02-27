
//Rolling dice function
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

//Setting stats on rules page

function isInputNumber(evt){

	var ch = String.fromCharCode(evt.which);

	if(!(/[0-9]/.test(ch))){
		evt.preventDefault();
	}
}



function setAttack(){
	var x = parseInt(document.getElementById("PATK").value);
	var xx = 6 + x;
	document.getElementById("attackStat").innerHTML = xx;
	document.getElementById("PATK").disabled = true;
	
	localStorage.setItem("Attack", xx);

}



function setHealth(){
	var y = parseInt(document.getElementById("PHP").value);
	var yy = parseInt(document.getElementById("PHP2").value);
	var yyy = 12 + y + yy;
	document.getElementById("healthStat").innerHTML = (yyy);
	document.getElementById("PHP").disabled = true;
	document.getElementById("PHP2").disabled = true;

	localStorage.setItem("Health", yyy);

}

function setLuck(){
	var z = parseInt(document.getElementById("PLCK").value);
	var zz = z + 6;
	document.getElementById("luckStat").innerHTML = (zz);
	document.getElementById("PLCK").disabled = true;

	localStorage.setItem("Luck", zz);

}

function setSkill(){
	var w = parseInt(document.getElementById("PSKL").value);
	var ww = parseInt(document.getElementById("PSKL2").value);
	var www = w + ww;
	document.getElementById("skillStat").innerHTML = (www);
	document.getElementById("PSKL").disabled = true;
	document.getElementById("PSKL2").disabled = true;

	localStorage.setItem("Skill", www);
}


//viewing stats and actives

function stats(){
	var patk = localStorage.getItem("Attack");
	document.getElementById("attackStat").innerHTML = (patk);
	var php = localStorage.getItem("Health");
	document.getElementById("healthStat").innerHTML = (php);
	var plck = localStorage.getItem("Luck");
	document.getElementById("luckStat").innerHTML = (plck);
	var pskl = localStorage.getItem("Skill");
	document.getElementById("skillStat").innerHTML = (pskl);
	var rations1 = localStorage.getItem("Rations");
    document.getElementById("RationsP").innerHTML = (rations1);
    var potions1 = localStorage.getItem("Potions");
    document.getElementById("PotionsP").innerHTML = (potions1);
    var gold1 = localStorage.getItem("Gold");
    document.getElementById("GoldP").innerHTML = (gold1);
}
window.onload=stats;

//stocking rations and potions and gold

function stockR1(){
	var rations1 = 5;
    localStorage.setItem("Rations", rations1);
    document.getElementById("RationsP").innerHTML = (rations1);
}

function storeGold1(){
	var gold1 = 30;
	localStorage.setItem("Gold", gold1);
	document.getElementById("GoldP").innerHTML = (gold1);
}

//Eat ration button
function eatRation(){
	var ration = parseInt(localStorage.getItem("Rations"));
	var newRation = (ration - 1);
	localStorage.setItem("Rations", newRation);
	document.getElementById("RationsP").innerHTML = (newRation);

	var health = parseInt(localStorage.getItem("Health"));
	var newHealth = (health + 2);
	localStorage.setItem("Health", newHealth);
	document.getElementById("healthStat").innerHTML = (newHealth);
}


//save game function
function saveGame1(){
	var saveInfo = "Page1";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_1.html");
}

function saveGame2(){
	var saveInfo = "Page2";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_2.html");
}



