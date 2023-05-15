/* Variables Declaring & Initializing */
let kilometersNumber;
let passengerAge;
const button = document.querySelector('button.button');
let ticketPrice;
let ticketDiscount = 0;
let ticketFinalPrice;
let discountPercent = "0%";

/* Button Click Event - Processes the information entered in the two fields and performs the calculations at each new button click. */
button.addEventListener('click',
    function() {
        kilometersNumber = parseInt(document.getElementById('kilometersNumber').value);
        passengerAge = parseInt(document.getElementById('passengerAge').value);

        if ((kilometersNumber == 0) || (passengerAge == 0) || isNaN(kilometersNumber) || isNaN(passengerAge)) {
            alert("I dati inseriti non sono validi. Siete pregati di riprovare.")
        } else {

            /* Discounts Calculation */
            ticketPrice = (kilometersNumber * 0.233);
            if (passengerAge < 18) {
                discountPercent = "19,4%";
                ticketDiscount = ((19.4 / 100) * ticketPrice);
                ticketFinalPrice = (ticketPrice - ticketDiscount);
            } else if (passengerAge > 65) {
                discountPercent = "37,7%";
                ticketDiscount = ((37.7 / 100) * ticketPrice);
                ticketFinalPrice = (ticketPrice - ticketDiscount);
            } else {
                ticketFinalPrice = ticketPrice;
            }

            /* Output Values Transformation */
            ticketPrice = ticketPrice.toFixed(2);
            ticketDiscount = ticketDiscount.toFixed(2);
            ticketFinalPrice = ticketFinalPrice.toFixed(2);

            console.log(kilometersNumber, passengerAge, ticketPrice, ticketDiscount, discountPercent, ticketFinalPrice);
        }
    })