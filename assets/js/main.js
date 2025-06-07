/* Scrivere un programma che chieda all’utente:
Il numero di chilometri da percorrere
Età del passeggero 
Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni
va applicato uno sconto del 40% per gli over 65.

MILESTONE 1:
Iniziamo implementando il programma senza alcuna estetica: usando esclusivamente due input e un bottone (non stilizzati), realizziamo le specifiche scritte sopra. La risposta finale (o output) sarà anch’essa da scrivere in console. */

/* MILESTONE 2:
Solo una volta che il milestone 1 sarà completo e funzionante allora realizzeremo un form in pagina in cui l’utente potrà inserire i dati e visualizzare il calcolo finale con il prezzo. Il recap dei dati e l'output del prezzo finale, andranno quindi stampati in pagina (il prezzo dovrà essere formattato con massimo due decimali, per indicare i centesimi sul prezzo). Questo richiederà un minimo di ricerca. */

/* MILESTONE 3:
Ora che la logica è funzionante in pagina, possiamo andare a dedicarci allo stile, raffinando la parte di HTML e CSS in modo da renderla esteticamente gradevole.b */

//ELEMENTI INPUT DEL FORM
const nameInput = document.getElementById('fullname')
const distanceInput = document.getElementById('distance');
const ageInput = document.getElementById('age');
const form = document.querySelector('.inputs');

//ELEMENTI DEL BIGLIETTO DA VISUALIZZARE


form.addEventListener('submit', function (e) {
    const priceForKm = 0.21;
    let price = (distanceInput.value * priceForKm);

    e.preventDefault();
    console.log('Age input value: ' + ageInput.value);
    console.log('Km input value: ' + distanceInput.value);
    if (ageInput.value === 'under18') {
        const discountPercent = 0.8;
        price = (price * discountPercent);
    } else if (ageInput.value === 'over65') {
        const discountPercent = 0.6;
        price = (price * discountPercent);
    }
    console.log(price.toFixed(2))
}
)