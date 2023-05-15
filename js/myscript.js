/* Variables Declaring & Initializing */
const kilometersNumber = parseInt(prompt("Inserisci il numero di km da percorrere:"));
const passengerAge = parseInt(prompt("Inserisci l'età del passeggero:"));
let ticketDiscount = 0;
let ticketFinalPrice;
let discountPercent = "0%";

/* Discounts Calculation */
let ticketPrice = (kilometersNumber * 0.21);
if (passengerAge < 18) {
    discountPercent = "20%";
    ticketDiscount = ((20 / 100) * ticketPrice);
    ticketFinalPrice = (ticketPrice - ticketDiscount);
} else if (passengerAge > 65) {
    discountPercent = "40%";
    ticketDiscount = ((40 / 100) * ticketPrice);
    ticketFinalPrice = (ticketPrice - ticketDiscount);
} else {
    ticketFinalPrice = ticketPrice;
}

/* Output Values Transformation */
    ticketPrice = ticketPrice.toFixed(2);
    ticketDiscount = ticketDiscount.toFixed(2);
    ticketFinalPrice = ticketFinalPrice.toFixed(2);

/* Output - Only if the inserted infos are not NaN or 0 */
if ((kilometersNumber == 0) || (passengerAge == 0) || isNaN(kilometersNumber) || isNaN(passengerAge)) {
    document.getElementById("kilometersOutput").innerHTML = " "+ "Valori inseriti non validi!"
    document.getElementById("passengerAgeOutput").innerHTML = " " + "Valori inseriti non validi!"
    document.getElementById("priceOutput").innerHTML = " " + "Valori inseriti non validi!"
    document.getElementById("discountPercentOutput").innerHTML = " " + "Valori inseriti non validi!"
    document.getElementById("discountPriceOutput").innerHTML = " " + "Valori inseriti non validi!"
    document.getElementById("finalPriceOutput").innerHTML = " " + "Valori inseriti non validi!"
} else {
    document.getElementById("kilometersOutput").innerHTML = " " + kilometersNumber;
    document.getElementById("passengerAgeOutput").innerHTML = " " + passengerAge;
    document.getElementById("priceOutput").innerHTML = " " + ticketPrice + " €";
    document.getElementById("discountPercentOutput").innerHTML = " " + discountPercent;
    document.getElementById("discountPriceOutput").innerHTML = " " + ticketDiscount + " €";
    document.getElementById("finalPriceOutput").innerHTML = " " + ticketFinalPrice + " €";
}