const sum = require('./sum'); // Importer la fonction sum
// Vérifier que la fonction sum est correctement importée
if (typeof sum !== 'function') {
  throw new Error('sum n\'est pas une fonction');
}
// Test pour vérifier que l'addition de 0 et 0 donne 0
test("additionne 0 + 0 pour obtenir 0", () => {
    expect(sum(0, 0)).toBe(0);
});

// Test pour vérifier l'addition de nombres négatifs
test("additionne des nombres négatifs : -1 + (-2) pour obtenir -3", () => {
    expect(sum(-1, -2)).toBe(-3);
});

// Test pour vérifier l'addition d'un nombre positif et d'un nombre négatif
test("additionne un nombre positif et un nombre négatif : 5 + (-3) pour obtenir 2", () => {
    expect(sum(5, -3)).toBe(2);
});

// Test pour vérifier l'addition de grands nombres
test("additionne de grands nombres : 1000000 + 2000000 pour obtenir 3000000", () => {
    expect(sum(1000000, 2000000)).toBe(3000000);
});

// Test pour vérifier l'addition de nombres à virgule flottante
test("additionne des nombres à virgule flottante : 0.1 + 0.2 pour être proche de 0.3", () => {
    expect(sum(0.1, 0.2)).toBeCloseTo(0.3);
});

// Test pour vérifier que l'addition de 1 et 2 donne 3
test("additionne 1 + 2 pour obtenir 3", () => {
    // Appelle la fonction sum avec les arguments 1 et 2
    // S'attend à ce que le résultat soit égal à 3
    expect(sum(1, 2)).toBe(3);
});

