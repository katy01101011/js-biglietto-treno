// Qual'è il prezzo del biglietto del treno?
let ticketPrice = '';
const humanTicketPrice = ticketPrice;
console.log(humanTicketPrice);

// Chiedere all'utente quanti chilometri vuole percorrere
const passengerDistance = parseInt(prompt('Quanti chilometri vuoi percorrere?'))
console.log(passengerDistance, typeof(passengerDistance));

// Prezzo biglietto al chilometro
const regularTicket = passengerDistance * 0.21;
console.log(regularTicket, typeof(regularTicket));

// Chiedere l'età del passeggero
const passengerAge = parseInt(prompt('Quanti anni ha il passeggero?'));
console.log(passengerAge, typeof(passengerAge));

// Il passeggero è un maggiorenne con meno di 65 anni?
    // SI - Il prezzo del biglietto è il prezzo base

    // NO 
        // Il passeggero ha meno di 18 anni?
            // SI - Il prezzo del biglietto base viene scontato del 20%
            // NO - Il prezzo del biglietto base viene scontato del 40%
if (passengerAge >= 18 && passengerAge <= 65) {
    ticketPrice = regularTicket;
    console.log(ticketPrice);
} else if (passengerAge < 18) {
    ticketPrice = ((regularTicket * 80) / 100);
    console.log(ticketPrice);
} else {
    ticketPrice = (regularTicket * 60) / 100;
    console.log(ticketPrice);
}

document.getElementById("ticket-price").innerHTML = ticketPrice.toFixed(2);