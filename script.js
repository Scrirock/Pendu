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
    "tracteur", "asiette",
    "fourchette", "couteau",
    "verre", "ocean",
    "ecran", "pantalon",
    "local", "formation",
    "table", "chaise",
    "tabouret", "pomme",
    "orange", "decembre",
    "truite", "dauphin",
    "koala", "bureau",
    "monsieur", "madamme",
    "souris", "herisson",
    "vache", "velo",
    "girouette", "ustensile",
    "bouteille", "belgique"
]

function restart(){
    word = dico[Math.trunc(Math.random()*dico.length)]
    console.log(word)
    for (let i of word){
        document.getElementById("tiret").innerHTML += "-";
    }
    letter.value = "";
    document.getElementById("message").innerHTML = "";
    history.innerHTML = "";
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

let check =  Array.from(document.getElementById("tiret").innerHTML);

function game(){
    let history = document.createElement("p");
    history.innerHTML = "- " + letter.value;
    document.getElementById("historiqueL").append(history);

    if (word.includes(letter.value)) {
        for (let i = 0; i < word.length; i++) {
            if (letter.value === word[i]){
                check[i] = letter.value;
            }

        }
        document.getElementById("tiret").innerHTML = check.toString().replace(/,/gi, " ");
        document.getElementById("message").innerHTML = "La lettre à été placée";
    }
    else{
        document.FAIT DES TRUC DEMAIN
    }

    letter.value = "";
}