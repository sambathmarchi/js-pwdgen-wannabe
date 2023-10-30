const userName = prompt("Scrivi il tuo nome");
const userSurname = prompt("Scrivi il tuo cognome");
const userFavColor = prompt("Scrivi il tuo colore preferito")

let genPassword = userName + userSurname + userFavColor + "#23";

document.getElementById("Welcome").innerHTML = "Benvenuto, " + userName;
document.getElementById("Password").innerHTML = "La tua password generata é " + genPassword;