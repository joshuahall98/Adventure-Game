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


    //take potions
    function drinkPotion(){
        var potion = parseInt(localStorage.getItem("Potions"));
        var newPotion = (potion - 1);
        localStorage.setItem("Potions", newPotion);
        document.getElementById("PotionsP").innerHTML = (newPotion);

        var health = parseInt(localStorage.getItem("CHealth"));
        var newHealth = (health + 5);
        localStorage.setItem("CHealth", newHealth);

        var maxhealth = parseInt(localStorage.getItem("Health"));
        var chealth = parseInt(localStorage.getItem("CHealth"));

        if(chealth > maxhealth){
            chealth = maxhealth;
            localStorage.setItem("CHealth", chealth);
            document.getElementById("chealthstat").innerHTML = (chealth);
        }
        else{
            document.getElementById("chealthstat").innerHTML = (chealth);
        }

    }

    function potionButton(){
        var health = parseInt(localStorage.getItem("Health"));
        var chealth = parseInt(localStorage.getItem("CHealth"));

        if(health > chealth){
            document.getElementById("potionB").disabled = false;
        }
    }

    //Combat 
    function setPAttack(){
        var x = parseInt(document.getElementById("PA").value);
        var xx = parseInt(document.getElementById("PA2").value);
        var xxx = parseInt(localStorage.getItem("Attack"));
        var xxxx = (x + xx + xxx)
        document.getElementById("PAstat").innerHTML = (xxxx);

        localStorage.setItem("PCombatAttack", xxxx);
    }

    function setEAttack(){
        var x = parseInt(document.getElementById("EA").value);
        var xx = parseInt(document.getElementById("EA2").value);
        var xxx = parseInt(localStorage.getItem("BoyAttack"));
        var xxxx = (x + xx + xxx)
        document.getElementById("EAstat").innerHTML = (xxxx);

        localStorage.setItem("ECombatAttack", xxxx);
    }

    function combat(){
        var x = parseInt(localStorage.getItem("PCombatAttack"));
        var xx = parseInt(localStorage.getItem("ECombatAttack"));

        if(x > xx){
            var z = parseInt(localStorage.getItem("BoyHealth"));
            var zz = (z - 2);
            localStorage.setItem("BoyHealth", zz);
            document.getElementById("boyHealth").innerHTML = (zz);
            document.getElementById("winner").innerHTML = ("Jan'kin attacks");
        }
        else if(xx > x){
            var y = parseInt(localStorage.getItem("CHealth"));
            var yy = (y - 2);
            localStorage.setItem("CHealth", yy);
            document.getElementById("chealthstat").innerHTML = (yy);
            document.getElementById("winner").innerHTML = ("The Boy attacks");
        }
        else if(x = xx){
            var xy = parseInt(localStorage.getItem("CHealth"));
            var xyy = (xy - 2);
            localStorage.setItem("CHealth", xyy);
            document.getElementById("chealthstat").innerHTML = (xyy);

            var xz = parseInt(localStorage.getItem("BoyHealth"));
            var xzz = (xz - 2);
            localStorage.setItem("BoyHealth", xzz);
            document.getElementById("boyHealth").innerHTML = (xzz);

            document.getElementById("winner").innerHTML = ("Both players take damage");
        }

        var enemyhealth = parseInt(localStorage.getItem("BoyHealth"));
        var playerhealth = parseInt(localStorage.getItem("CHealth"));
        var battleend = 0;

        if(battleend >= enemyhealth){
            document.getElementById("PA").disabled = true;
            document.getElementById("PA2").disabled = true;
            document.getElementById("EA").disabled = true;
            document.getElementById("EA2").disabled = true;
            document.getElementById("continue").disabled = false;
            var pName = localStorage.getItem("PlayerName");
            document.getElementById("winner").innerHTML = (pName+"wins");
        }
        else if(battleend >= playerhealth){
            var saveInfo = " ";
            localStorage.setItem("Save", saveInfo);
            window.open("StartGame.html");
            window.close("Combat_1.html");
        }
    }

    

    function isInputNumber(evt){

        var ch = String.fromCharCode(evt.which);

        if(!(/[0-9]/.test(ch))){
            evt.preventDefault();
        }
    }

    

    function resetForm(){
        document.getElementById("bpadForm").reset();
    }

    //save game
    function saveCombat1(){
        var saveInfo = "Combat1";
        localStorage.setItem("Save", saveInfo);
        window.open("StartGame.html");
        window.close("Combat_1.html");
    }