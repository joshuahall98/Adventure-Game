
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



//Obtaining and losing items
function stock1(){
	var rations1 = 5;
    localStorage.setItem("Rations", rations1);
    document.getElementById("RationsP").innerHTML = (rations1);

    var gold1 = 30;
	localStorage.setItem("Gold", gold1);
	document.getElementById("GoldP").innerHTML = (gold1);

	var waxe = 1;
	localStorage.setItem("WAxe", waxe);

	var flint = 1;
	localStorage.setItem("Flint", flint);
}

function storeGold1(){
	var gold = parseInt(localStorage.getItem("Gold"));
	var newGold = (gold + 1);
	localStorage.setItem("Gold", newGold);
	document.getElementById("GoldP").innerHTML = (newGold)
}

function loseGold1(){
	var gold = parseInt(localStorage.getItem("Gold"));
	var newGold = (gold - 5);
	localStorage.setItem("Gold", newGold);
	document.getElementById("GoldP").innerHTML = (newGold)
}

function loseGold2(){
	var gold = parseInt(localStorage.getItem("Gold"));
	var newGold = (gold - 10);
	localStorage.setItem("Gold", newGold);
	document.getElementById("GoldP").innerHTML = (newGold)
}



function loseItems1(){
	var gold = 0;
	localStorage.setItem("Gold", gold);
	document.getElementById("GoldP").innerHTML = (gold);

	var health = parseInt(localStorage.getItem("CHealth"));
	var newHealth = health - 1;
	localStorage.setItem("CHealth", newHealth);
	document.getElementById("chealthstat").innerHTML = (newHealth);
}


	

//Eat ration button
function eatRation(){
	var ration = parseInt(localStorage.getItem("Rations"));
	var newRation = (ration - 1);
	localStorage.setItem("Rations", newRation);
	document.getElementById("RationsP").innerHTML = (newRation);

	var health = parseInt(localStorage.getItem("CHealth"));
	var newHealth = (health + 2);
	localStorage.setItem("CHealth", newHealth);
	

	var maxhealth = parseInt(localStorage.getItem("Health"));
	var chealth = parseInt(localStorage.getItem("CHealth"));
	var empty = 1;
	

	if(chealth > maxhealth){
		chealth = maxhealth;
		localStorage.setItem("CHealth", chealth);
		document.getElementById("chealthstat").innerHTML = (chealth);
	}
	else{
		document.getElementById("chealthstat").innerHTML = (chealth);
	}

	if(empty >= ration){
    	document.getElementById("rationB").disabled = true;
    }	

    if(chealth == maxhealth){
    	document.getElementById("rationB").disabled = true;
    }
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

function saveGame3(){
	var saveInfo = "Page3";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_3.html");
}

function saveGame4(){
	var saveInfo = "Page4";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_4.html");
}

function saveGame5(){
	var saveInfo = "Page5";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_5.html");
}

function saveGame6(){
	var saveInfo = "Page6";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_6.html");
}

function saveGame7(){
	var saveInfo = "Page7";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_7.html");
}

function saveGame8(){
	var saveInfo = "Page8";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_8.html");
}

function saveGame9(){
	var saveInfo = "Page9";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_9.html");
}

function saveGame10(){
	var saveInfo = "Page10";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_10.html");
}

function saveGame11(){
	var saveInfo = "Page11";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_11.html");
}

function saveGame12(){
	var saveInfo = "Page12";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_12.html");
}

function saveGame13(){
	var saveInfo = "Page13";
	localStorage.setItem("Save", saveInfo);
	window.open("StartGame.html");
	window.close("Page_13.html");
}