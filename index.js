// guardar o número a ser convertido em uma variável. ele vai servir para:
    // ser o conteúdo interno do elemento html
    // usado na mensagem personalizada em cada seção
    // usado em cada cálculo de conversão

// guardar o elemento html que representa o número a ser convertido numa variável
    // extra: fazer com que o usuário possa escrever o número no elemento HTML e com que esse número seja o valor a ser
    // aplicado na variável que representa o número que quero converter

// construir as funções que vão realizar os cálculos usando o número a ser convertido
    // conversão de tamanho
    // '' de volume
    // '' de massa

// guardar o elemento HTML que vai receber a mensagem personalizada em uma variável. a variável será declarada no escopo
// da sua respectiva função

// após os cálculos, fazer a mensagem personalizada no elemento HTML usando o número que quero converter e o resultado de cada cálculo

let numberToConvert = prompt('Digit a number: ');
let numberToConvertEl = document.querySelector('#number-to-convert-el');
numberToConvertEl.innerHTML = numberToConvert;

function lengthConverter() {
    // meter to feet conversion
    let meterToFeet = numberToConvert * 3.2808;
    let fixedMeterToFeet = meterToFeet.toFixed(3);

    // feet to meter
    let feetToMeter = numberToConvert / 3.2808;
    let fixedFeetToMeter = feetToMeter.toFixed(3);

    const lengthEl = document.querySelector('.length-message')
    lengthEl.innerHTML = numberToConvert + ' meters = ' + fixedMeterToFeet + ' feet | ' + numberToConvert + ' feet = '+
        fixedFeetToMeter + ' meters';
}

function volumeConverter() {
    // liters to gallons
    let litersToGallons = numberToConvert * 0.26417;
    let fixedLitersToGallons = litersToGallons.toFixed(3);

    // gallons to liters
    let gallonsToLiters = numberToConvert / 0.26417;
    let fixedGallonsToLiters = gallonsToLiters.toFixed(3);

    const volumeEl = document.querySelector('.volume-message');
    volumeEl.innerHTML = numberToConvert + ' liters = ' + fixedLitersToGallons + ' gallons | ' + numberToConvert + ' gallons = '+
        fixedGallonsToLiters + ' liters';
}

function massConverter() {
    let kilosToPounds = numberToConvert * 2.2046;
    let fixedKilosToPounds = kilosToPounds.toFixed(3);

    let poundsToKilos = numberToConvert / 2.2046;
    let fixedPoundsToKilos = poundsToKilos.toFixed(3);

    const massEl = document.querySelector('.mass-message');
    massEl.innerHTML = numberToConvert + ' kilos = ' + fixedKilosToPounds + ' pounds | ' + numberToConvert + ' pounds = '+
        fixedPoundsToKilos + ' kilos';
}
lengthConverter();
volumeConverter();
massConverter();