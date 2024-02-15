//alert("Hi");

function shake() {
    var fortune = getFortune();
    displayFortune(fortune);
}

function displayFortune(fortune) {
    document.getElementById("fortune-display").innerHTML = fortune;
}

function getFortune() {
    var listOfFortunes = getListOfFortune();
    var randomNumber = Math.floor(Math.random() * listOfFortunes.length);
    return listOfFortunes[randomNumber]
}

function getListOfFortune() {
    return ["yes", "no", "maybe", "ask again later", "of course", "what?", "OK", "unsure", "if you say so", "no way", "probably not"];
}