// Importer la fonction numericToRoman
const [numericToRoman, romanToNumeric] = require('./numericToRoman');

// S'assurer que la fonction est importée correctement
if (typeof numericToRoman !== 'function') {
  throw new Error('numericToRoman n\'est pas une fonction');
}

test("appeler la fonction", () => {
    // Cas de test pour convertir 1 en chiffre romain
    expect(numericToRoman(1)).toBe("I");
    // Cas de test pour convertir 5 en chiffre romain
    expect(numericToRoman(5)).toBe("V");
    // Cas de test pour convertir 10 en chiffre romain
    expect(numericToRoman(10)).toBe("X");

    // Cas de test pour convertir 15 en chiffre romain
    expect(numericToRoman(15)).toBe("XV");

    // Cas de test pour convertir 20 en chiffre romain
    expect(numericToRoman(20)).toBe("XX");
    // Cas de test pour convertir 25 en chiffre romain
    expect(numericToRoman(25)).toBe("XXV");

    // Cas de test pour convertir 30 en chiffre romain
    expect(numericToRoman(30)).toBe("XXX");

    // Cas de test pour convertir 32 en chiffre romain
    expect(numericToRoman(32)).toBe("XXXII");

    // Cas de test pour convertir 50 en chiffre romain
    expect(numericToRoman(50)).toBe("L");

    // Cas de test pour convertir 1064 en chiffre romain
    expect(numericToRoman(1064)).toBe("MLXIV");
    // Cas de test pour convertir 4 en chiffre romain
    expect(numericToRoman(4)).toBe("IV");

    // Cas de test pour convertir 9 en chiffre romain
    expect(numericToRoman(9)).toBe("IX");

    // Cas de test pour convertir 40 en chiffre romain
    expect(numericToRoman(40)).toBe("XL");

    // Cas de test pour convertir 90 en chiffre romain
    expect(numericToRoman(90)).toBe("XC");

    // Cas de test pour convertir 400 en chiffre romain
    expect(numericToRoman(400)).toBe("CD");

    // Cas de test pour convertir 900 en chiffre romain
    expect(numericToRoman(900)).toBe("CM");
});

// Vérifier que la fonction romanToNumeric est correctement importée
if (typeof romanToNumeric !== 'function') {
  throw new Error('romanToNumeric n\'est pas une fonction');
}

test("convertir des chiffres romains en nombres", () => {
    // Cas de test pour convertir I en nombre
    expect(romanToNumeric("I")).toBe(1);
    
    // Cas de test pour convertir V en nombre
    expect(romanToNumeric("V")).toBe(5);
    
    // Cas de test pour convertir X en nombre
    expect(romanToNumeric("X")).toBe(10);
    
    // Cas de test pour convertir L en nombre
    expect(romanToNumeric("L")).toBe(50);
    
    // Cas de test pour convertir C en nombre
    expect(romanToNumeric("C")).toBe(100);
    
    // Cas de test pour convertir D en nombre
    expect(romanToNumeric("D")).toBe(500);
    
    // Cas de test pour convertir M en nombre
    expect(romanToNumeric("M")).toBe(1000);
    
    // Cas de test pour convertir IV en nombre
    expect(romanToNumeric("IV")).toBe(4);
    
    // Cas de test pour convertir IX en nombre
    expect(romanToNumeric("IX")).toBe(9);
    
    // Cas de test pour convertir XL en nombre
    expect(romanToNumeric("XL")).toBe(40);
    
    // Cas de test pour convertir XC en nombre
    expect(romanToNumeric("XC")).toBe(90);
    
    // Cas de test pour convertir CD en nombre
    expect(romanToNumeric("CD")).toBe(400);
    
    // Cas de test pour convertir CM en nombre
    expect(romanToNumeric("CM")).toBe(900);
    
    // Cas de test pour convertir MCMLIV en nombre
    expect(romanToNumeric("MCMLIV")).toBe(1954);
    
    // Cas de test pour convertir MMXXI en nombre
    expect(romanToNumeric("MMXXI")).toBe(2021);
});
