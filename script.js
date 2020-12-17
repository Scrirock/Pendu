let letter = document.getElementById("lettre");
let arrayLetter = [];
let flag;
let word;
let dico = [
    "farde", "clavier",
    "canette", "garde",
    "bateau", "oiseau",
    "poulet", "chat",
    "maison", "parapluie",
    "tracteur", "assiette",
    "fourchette", "couteau",
    "verre", "ocean",
    "ecran", "pantalon",
    "local", "formation",
    "table", "chaise",
    "tabouret", "pomme",
    "orange", "decembre",
    "truite", "dauphin",
    "koala", "bureau",
    "monsieur", "madame",
    "souris", "herisson",
    "vache", "velo",
    "girouette", "ustensile",
    "bouteille", "belgique"
]

let badLetter = 1;
let check;
let history = document.createElement("p");
document.getElementById("historiqueL").append(history);
function restart(){
    word = dico[Math.trunc(Math.random()*dico.length)]
    document.getElementById("tiret").innerHTML = ""
    for (let i of word){
        document.getElementById("tiret").innerHTML += "-";
    }
    letter.value = "";
    document.getElementById("message").innerHTML = "";
    history.innerHTML = "";
    document.getElementById("pendu").src = "pendu_1.png";
    badLetter = 1;
    check = Array.from(document.getElementById("tiret").innerHTML);
    arrayLetter = [];
}
restart();
document.getElementById("sendLetter").addEventListener("click", function (){
    if (letter.value.length > 1){
        flag = false;
        letter.value = "";
        document.getElementById("message").innerHTML = "n'entrez qu'une lettre";
    }
    else {
        flag = !arrayLetter.includes(letter.value);
        arrayLetter.push(letter.value);
    }
    if (flag){
        game();
    }
    else {
        letter.value = "";
        document.getElementById("message").innerHTML = "Vous avez deja entré cette lettre";
    }
});


function game(){
    history.innerHTML += "- " + letter.value + "<br>";
    if (word.includes(letter.value)) {
        for (let i = 0; i < word.length; i++) {
            if (letter.value === word[i]){
                check[i] = letter.value;
            }

        }
        document.getElementById("tiret").innerHTML = check.toString().replace(/,/gi, " ");
        document.getElementById("message").innerHTML = "La lettre à été placée";
        if(check.toString().replace(/,/gi, "") === word){
            document.getElementById("message").innerHTML = "Vous avez gagné";
            restart();
        }
    }
    else{
        if (badLetter<6) {
            badLetter++;
            document.getElementById("message").innerHTML = "Mauvaise lettre";
            document.getElementById("pendu").src = "pendu_" + badLetter + ".png";
        }
        else{
            restart()
        }
    }

    letter.value = "";
}