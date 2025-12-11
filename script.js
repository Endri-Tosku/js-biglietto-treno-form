// SETTAGGIO PARTE INNIZIALE

// SELEZIONE DEI CAMPI
const fieldName = document.getElementById('name');
const fieldKm = document.getElementById('km');
const fieldEta = document.getElementById('eta');
const mioForm = document.getElementById('myForm');
const output = document.querySelector('.output');

// EVENTO AL SUBMIT DEL FORM
mioForm.addEventListener('submit', (e) => {
    e.preventDefault(); // evita il refresh della pagina

    // RACCOLTA DEI VALORI
    const nomeUser = fieldName.value;
    const kmUser = parseFloat(fieldKm.value);
    const etaUser = parseFloat(fieldEta.value);
    console.log(nomeUser, kmUser, etaUser);

    // OUTPUT
    output.innerText = `Nome: ${nomeUser}, Km: ${kmUser}, Età: ${etaUser}`;

    // PULIZIA DEI CAMPI
    fieldName.value = "";
    fieldKm.value = "";
    fieldEta.value = "";
});






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