// Importer la fonction numericToRoman
const numericToRoman = require('./numericToRoman');

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

