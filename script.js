////////////// SETTAGGIO PARTE INNIZIALE///////////////

// SELEZIONE DEI CAMPI //
const fieldName = document.getElementById('name'); // input per il nome
const fieldKm = document.getElementById('km'); // input per i km
const fieldEta = document.getElementById('eta'); // input per l'età
const mioForm = document.getElementById('myForm'); // il form completo
const output = document.querySelector('.output'); // paragrafo dove stampare i dati

// EVENTO AL SUBMIT DEL FORM //
mioForm.addEventListener('submit', (e) => {
    e.preventDefault(); // evita il refresh della pagina all' invio del form

    // RACCOLTA DEI VALORI //
    const nomeUser = fieldName.value; // legge il valore del campo nome (stringa)
    const kmUser = parseFloat(fieldKm.value); // legge il valore dei km e lo converte in numero
    const etaUser = parseFloat(fieldEta.value); // legge il valore dell'età e lo converte in numero
    const prezzoKm = 0.21; // prezzo al km del biglietto
    console.log(nomeUser, kmUser, etaUser); // stampa i dati in console per debug

    // CALCOLO DEL PREZZO AL KM //
    let price = kmUser * prezzoKm; // moltiplico i km percorsi per il prezzo al km e ottengo il prezzo totale

    // CALCOLO DEL PREZZO SCONTATO IN BASE ALL'ETÀ //
    if (etaUser < 18) { // se l'utente è minorenne
        console.log("l'utente è minorenne");
        price -= price * 0.2; // applica uno sconto del 20%

    } else if (etaUser >= 65) { // se l'utente è senior
        console.log("l'utente è senior");
        price -= price * 0.4; // applica uno sconto del 40%

    } else { // il prezzo non cambia
        console.log("l'utebte è maggiorenne ma non senior");
    }

    console.log(`price: ${price}€`); // stampa il prezzo nella console

    // OUTPUT //
    output.innerText = `Nome: ${nomeUser}, Km: ${kmUser}, Età: ${etaUser}, Prezzo finale: ${price.toFixed(2)}€`; // aggiorna il contenuto del paragrafo con i valori inseriti dall'utente
    // price.toFixed(2) mostra sempre 2 decimali

    // PULIZIA DEI CAMPI //
    fieldName.value = ""; // svuota il campo nome
    fieldKm.value = ""; // svuota il campo km
    fieldEta.value = ""; // svuota il campo età
});



