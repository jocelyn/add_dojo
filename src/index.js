import { numericToRoman, romanToNumeric } from './numericToRoman.js';

document.addEventListener('DOMContentLoaded', () => {
    const form = document.createElement('form');
    console.log ("loaded")
    form.innerHTML = `
        <h2>Roman Numeral Converter</h2>
        <div>
            <label for="numericInput">Numeric Input:</label>
            <input type="number" id="numericInput" name="numericInput" min="1">
            <button type="button" id="toRoman">Convert to Roman</button>
        </div>
        <div>
            <label for="romanInput">Roman Input:</label>
            <input type="text" id="romanInput" name="romanInput">
            <button type="button" id="toNumeric">Convert to Numeric</button>
        </div>
        <div id="result"></div>
    `;

    document.body.appendChild(form);

    const numericInput = document.getElementById('numericInput');
    const romanInput = document.getElementById('romanInput');
    const toRomanButton = document.getElementById('toRoman');
    const toNumericButton = document.getElementById('toNumeric');
    const resultDiv = document.getElementById('result');

    toRomanButton.addEventListener('click', () => {
        const numeric = parseInt(numericInput.value);
        if (numeric && numeric > 0) {
            const roman = numericToRoman(numeric);
            resultDiv.textContent = `Roman numeral: ${roman}`;
        } else {
            resultDiv.textContent = 'Please enter a valid positive number.';
        }
    });

    toNumericButton.addEventListener('click', () => {
        const roman = romanInput.value.toUpperCase();
        if (roman) {
            const numeric = romanToNumeric(roman);
            resultDiv.textContent = `Numeric value: ${numeric}`;
        } else {
            resultDiv.textContent = 'Please enter a valid Roman numeral.';
        }
    });
});
