function numericToRoman(a) {
    // Définir un tableau d'objets représentant les symboles des chiffres romains et leurs valeurs correspondantes
    // Le tableau est trié par ordre décroissant de valeur pour faciliter le processus de conversion
    const romanNumerals = [
        { value: 1000, symbol: 'M' },  // 1000 = M
        { value: 900, symbol: 'CM' },  // 900 = CM (100 avant 1000)
        { value: 500, symbol: 'D' },   // 500 = D
        { value: 400, symbol: 'CD' },  // 400 = CD (100 avant 500)
        { value: 100, symbol: 'C' },   // 100 = C
        { value: 90, symbol: 'XC' },   // 90 = XC (10 avant 100)
        { value: 50, symbol: 'L' },    // 50 = L
        { value: 40, symbol: 'XL' },   // 40 = XL (10 avant 50)
        { value: 10, symbol: 'X' },    // 10 = X
        { value: 9, symbol: 'IX' },    // 9 = IX (1 avant 10)
        { value: 5, symbol: 'V' },     // 5 = V
        { value: 4, symbol: 'IV' },    // 4 = IV (1 avant 5)
        { value: 1, symbol: 'I' }      // 1 = I
    ];

    let result = '';
    let num = a;

    // Itérer à travers chaque symbole de chiffre romain dans le tableau
    for (let i = 0; i < romanNumerals.length; i++) {
        // Tant que le nombre restant est supérieur ou égal à la valeur du chiffre romain actuel
        while (num >= romanNumerals[i].value) {
            // Ajouter le symbole du chiffre romain correspondant à la chaîne de résultat
            result += romanNumerals[i].symbol;
            // Soustraire la valeur du chiffre romain actuel du nombre restant
            num -= romanNumerals[i].value;
        }
    }

    return result;
}

function romanToNumeric(roman) {
    const romanValues = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let result = 0;
    let prevValue = 0;

    // Parcourir la chaîne de droite à gauche
    for (let i = roman.length - 1; i >= 0; i--) {
        const currentValue = romanValues[roman[i]];

        // Si la valeur actuelle est inférieure à la précédente, on soustrait
        if (currentValue < prevValue) {
            result -= currentValue;
        } else {
            result += currentValue;
        }

        prevValue = currentValue;
    }

    return result;
}

module.exports = [ numericToRoman, romanToNumeric];