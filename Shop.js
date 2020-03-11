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

//Buy items

function buyRation(){
    var x = parseInt(localStorage.getItem("Rations"));
    var xx = x + 1;
    localStorage.setItem("Rations", xx);
    document.getElementById("RationsP").innerHTML = (xx);

    var gold = parseInt(localStorage.getItem("Gold"));
    var newGold = gold - 5;
    localStorage.setItem("Gold", newGold);
    document.getElementById("GoldP").innerHTML = (newGold);

    var gold1 = parseInt(localStorage.getItem("Gold"));
    var pskl = parseInt(localStorage.getItem("Skill"));
    var rope1 = parseInt(localStorage.getItem("Rope"));
    var sword1 = parseInt(localStorage.getItem("ISword"));
    var armour1 = parseInt(localStorage.getItem("IArmour"));

    if(gold1 >= 5){
        document.getElementById("buyration").disabled = false;
    }
    else{
       document.getElementById("buyration").disabled = true; 
    }

    if(rope1 == 1){
        document.getElementById("buyrope").disabled = true;
    }
    else {
        if(gold1 >= 5){
            document.getElementById("buyrope").disabled = false;
        }
        else{
           document.getElementById("buyrope").disabled = true; 
        }
    }

    if (gold1 >= 10){
        document.getElementById("buypotion").disabled = false;
    }
    else{
        document.getElementById("buypotion").disabled = true;
    }

    if(sword1 == 1){
        document.getElementById("buysword").disabled = true;
    }
    else{
        if(pskl >= 3){
            if (gold1 >= 20){
                document.getElementById("buysword").disabled = false;
            }
            else{
                document.getElementById("buysword").disabled = true;
            }
        }
        else{
            document.getElementById("buysword").disabled = true;
        }
    }

    if(armour1 == 1){
        document.getElementById("buyarmour").disabled = true;
    }
    else {
        if (gold1 >= 30){
            document.getElementById("buyarmour").disabled = false;
        }
        else{
            document.getElementById("buyarmour").disabled = true;
        }
    }
    
}

function buyPotion(){
    var x = parseInt(localStorage.getItem("Potions"));
    var xx = x + 1;
    localStorage.setItem("Potions", xx);
    document.getElementById("PotionsP").innerHTML = (xx);

    var gold = parseInt(localStorage.getItem("Gold"));
    var newGold = gold - 10;
    localStorage.setItem("Gold", newGold);
    document.getElementById("GoldP").innerHTML = (newGold);

    var gold1 = parseInt(localStorage.getItem("Gold"));
    var pskl = parseInt(localStorage.getItem("Skill"));
    var rope1 = parseInt(localStorage.getItem("Rope"));
    var sword1 = parseInt(localStorage.getItem("ISword"));
    var armour1 = parseInt(localStorage.getItem("IArmour"));


    if(gold1 >= 5){
        document.getElementById("buyration").disabled = false;
    }
    else{
       document.getElementById("buyration").disabled = true; 
    }

    if(rope1 == 1){
        document.getElementById("buyrope").disabled = true;
    }
    else {
        if(gold1 >= 5){
            document.getElementById("buyrope").disabled = false;
        }
        else{
           document.getElementById("buyrope").disabled = true; 
        }
    }

    if (gold1 >= 10){
        document.getElementById("buypotion").disabled = false;
    }
    else{
        document.getElementById("buypotion").disabled = true;
    }

    if(sword1 == 1){
        document.getElementById("buysword").disabled = true;
    }
    else{
        if(pskl >= 3){
            if (gold1 >= 20){
                document.getElementById("buysword").disabled = false;
            }
            else{
                document.getElementById("buysword").disabled = true;
            }
        }
        else{
            document.getElementById("buysword").disabled = true;
        }
    }

    if(armour1 == 1){
        document.getElementById("buyarmour").disabled = true;
    }
    else {
        if (gold1 >= 30){
            document.getElementById("buyarmour").disabled = false;
        }
        else{
            document.getElementById("buyarmour").disabled = true;
        }
    }
    
}

function buyISword(){
	var x = 1;
    localStorage.setItem("ISword", (x));

    var attack = parseInt(localStorage.getItem("Attack"));
    var newAttack = attack + 1;
    localStorage.setItem("Attack", newAttack);
    document.getElementById("attackStat").innerHTML = (newAttack);

    var gold = parseInt(localStorage.getItem("Gold"));
    var newGold = gold - 20;
    localStorage.setItem("Gold", newGold);
    document.getElementById("GoldP").innerHTML = (newGold);

    var gold1 = parseInt(localStorage.getItem("Gold"));
    var pskl = parseInt(localStorage.getItem("Skill"));
    var rope1 = parseInt(localStorage.getItem("Rope"));
    var sword1 = parseInt(localStorage.getItem("ISword"));
    var armour1 = parseInt(localStorage.getItem("IArmour"));
    document.getElementById("buysword").disabled = true;


    if(gold1 >= 5){
        document.getElementById("buyration").disabled = false;
    }
    else{
       document.getElementById("buyration").disabled = true;
    }

    if(rope1 == 1){
        document.getElementById("buyrope").disabled = true;
    }
    else {
        if(gold1 >= 5){
            document.getElementById("buyrope").disabled = false;
        }
        else{
           document.getElementById("buyrope").disabled = true; 
        }
    }

    if (gold1 >= 10){
        document.getElementById("buypotion").disabled = false;
    }
    else{
        document.getElementById("buypotion").disabled = true;
    }

    if(pskl >= 3){
        if (gold1 >= 20){
            document.getElementById("buysword").disabled = false;
        }
        else{
            document.getElementById("buysword").disabled = true;
        }
    }
    else{
        document.getElementById("buysword").disabled = true;
    }

    if(armour1 == 1){
        document.getElementById("buyarmour").disabled = true;
    }
    else {
        if (gold1 >= 30){
            document.getElementById("buyarmour").disabled = false;
        }
        else{
            document.getElementById("buyarmour").disabled = true;
        }
    }
    
}

function buyRope(){
	var x = 1;
    localStorage.setItem("Rope", (x));

    var gold = parseInt(localStorage.getItem("Gold"));
    var newGold = gold - 5;
    localStorage.setItem("Gold", newGold);
    document.getElementById("GoldP").innerHTML = (newGold);

    var gold1 = parseInt(localStorage.getItem("Gold"));
    var pskl = parseInt(localStorage.getItem("Skill"));
    var rope1 = parseInt(localStorage.getItem("Rope"));
    var sword1 = parseInt(localStorage.getItem("ISword"));
    var armour1 = parseInt(localStorage.getItem("IArmour"));
    document.getElementById("buyrope").disabled = true;


    if(gold1 >= 5){
        document.getElementById("buyration").disabled = false;
    }
    else{
       document.getElementById("buyration").disabled = true; 
       
    }


    if (gold1 >= 10){
        document.getElementById("buypotion").disabled = false;
    }
    else{
        document.getElementById("buypotion").disabled = true;
    }

    if(sword1 == 1){
        document.getElementById("buysword").disabled = true;
    }
    else{
        if(pskl >= 3){
            if (gold1 >= 20){
                document.getElementById("buysword").disabled = false;
            }
            else{
                document.getElementById("buysword").disabled = true;
            }
        }
        else{
            document.getElementById("buysword").disabled = true;
        }
    }

    if(armour1 == 1){
        document.getElementById("buyarmour").disabled = true;
    }
    else {
        if (gold1 >= 30){
            document.getElementById("buyarmour").disabled = false;
        }
        else{
            document.getElementById("buyarmour").disabled = true;
        }
    }
    
}

function buyIArmour(){
	var x = 1;
    localStorage.setItem("IArmour", (x));

    var gold = parseInt(localStorage.getItem("Gold"));
    var newGold = gold - 30;
    localStorage.setItem("Gold", newGold);
    document.getElementById("GoldP").innerHTML = (newGold);

    var gold1 = parseInt(localStorage.getItem("Gold"));
    var pskl = parseInt(localStorage.getItem("Skill"));
    var rope1 = parseInt(localStorage.getItem("Rope"));
    var sword1 = parseInt(localStorage.getItem("ISword"));
    var armour1 = parseInt(localStorage.getItem("IArmour"));
    document.getElementById("buyarmour").disabled = true;
    

    if(gold1 >= 5){
        document.getElementById("buyration").disabled = false;
    }
    else{
       document.getElementById("buyration").disabled = true;
    }

    if(rope1 == 1){
        document.getElementById("buyrope").disabled = true;
    }
    else {
        if(gold1 >= 5){
            document.getElementById("buyrope").disabled = false;
        }
        else{
           document.getElementById("buyrope").disabled = true; 
        }
    }

    if (gold1 >= 10){
        document.getElementById("buypotion").disabled = false;
    }
    else{
        document.getElementById("buypotion").disabled = true;
    }

    if(sword1 == 1){
        document.getElementById("buysword").disabled = true;
    }
    else{
        if(pskl >= 3){
            if (gold1 >= 20){
                document.getElementById("buysword").disabled = false;
            }
            else{
                document.getElementById("buysword").disabled = true;
            }
        }
        else{
            document.getElementById("buysword").disabled = true;
        }
    }

    if (gold1 >= 30){
        document.getElementById("buyarmour").disabled = false;
    }
    else{
        document.getElementById("buyarmour").disabled = true;
    }
    
}

//savegame
function saveShop1(){
    var saveInfo = "Shop1";
    localStorage.setItem("Save", saveInfo);
    window.open("StartGame.html");
    window.close("Shop_1.html");
}