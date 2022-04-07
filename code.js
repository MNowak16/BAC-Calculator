$("form").on("submit", processForm);

//Global Variables
let weight = 0;
let beers = 0;
let wine = 0;
let liquor = 0;
let hours = 0;

function processForm(event) {
    event.preventDefault();

    //get weight, beers, wine, liquor, and hours from input box
    weight = $("input#weight").val();
    beers = $("input#beers").val();
    wine = $("input#wine").val();
    liquor = $("input#liquor").val();
    hours = $("input#hours").val();

    //round BAC to 3 decimal places
    let totalLiquidOunces = (0.54 * beers) + (0.6 * wine) + (0.6 * liquor);
    let absorbRate = 7.5 * totalLiquidOunces;
    let BAC = ((absorbRate / weight) - (0.015 * hours)).toFixed(3);
    Number(BAC);

    //move the slider to match the number
    $("input#slider").val(BAC);

    $("p#BAC").text(`BAC: ${BAC}%`);
}

