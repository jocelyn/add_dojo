function numericToRoman(a) {
    // Define an array of objects representing Roman numeral symbols and their corresponding values
    // The array is sorted in descending order of value to facilitate the conversion process
    const romanNumerals = [
        { value: 1000, symbol: 'M' },  // 1000 = M
        { value: 900, symbol: 'CM' },  // 900 = CM (100 before 1000)
        { value: 500, symbol: 'D' },   // 500 = D
        { value: 400, symbol: 'CD' },  // 400 = CD (100 before 500)
        { value: 100, symbol: 'C' },   // 100 = C
        { value: 90, symbol: 'XC' },   // 90 = XC (10 before 100)
        { value: 50, symbol: 'L' },    // 50 = L
        { value: 40, symbol: 'XL' },   // 40 = XL (10 before 50)
        { value: 10, symbol: 'X' },    // 10 = X
        { value: 9, symbol: 'IX' },    // 9 = IX (1 before 10)
        { value: 5, symbol: 'V' },     // 5 = V
        { value: 4, symbol: 'IV' },    // 4 = IV (1 before 5)
        { value: 1, symbol: 'I' }      // 1 = I
    ];

    let result = '';
    let num = a;

    for (let i = 0; i < romanNumerals.length; i++) {
        while (num >= romanNumerals[i].value) {
            result += romanNumerals[i].symbol;
            num -= romanNumerals[i].value;
        }
    }

    return result;
}

module.exports = numericToRoman;