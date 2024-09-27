// import { numericToRoman } from "./numericToRoman.js"
const numericToRoman = require('./numericToRoman'); // Import the sum function

test("call function", () => {
    expect(numericToRoman(1)).toBe("I");
    expect(numericToRoman(5)).toBe("V");

    expect(numericToRoman(32)).toBe("XXXII");

    expect(numericToRoman(50)).toBe("L");

    expect(numericToRoman(1064)).toBe("MLXIV");


});