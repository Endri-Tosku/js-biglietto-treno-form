// SETTAGGIO PARTE INNIZIALE

// SELEZIONE DEI CAMPI
const fieldName = document.getElementById('name');
const fieldKm = document.getElementById('km')
const fieldEta = document.getElementById('eta')
const button = document.querySelector('button');


button.addEventListener('click', () => {
    let nomeUser = fieldName.value;
    let kmUser = fieldKm.value
    let etaUser = fieldEta.value
    console.log(nomeUser, kmUser, etaUser);

})





/////////// DEBUG O CALCOLO DEL PREZZO DA NON CONTARE /////////////

// DATI DEI KM, ETà E PREZZO
const userAge = 20;
const prezzoKm = 0.21;
const km = 100;
console.log(userAge);



if (userAge < 18) { // utente minorenne
    console.log("l'utente è minorenne");
    price -= price * 0.2;

} else if (userAge >= 65) { //utente senior
    console.log("l'utente è senior");
    price -= price * 0.4;

} else {
    console.log("l'utebte è maggiorenne ma non senior");
}

//calcolo prezzo finale
let price = km * prezzoKm;
console.log(`price: ${price}€`);