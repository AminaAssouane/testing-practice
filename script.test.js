import * as script from "./script";

test("capitalize the first letter", () => {
  expect(script.capitalize("thestring")).toBe("Thestring");
});

test("reverse string", () => {
  expect(script.reverseString("Here's my string")).toBe("gnirts ym s'ereH");
});

test("reverse empty string", () => {
  expect(script.reverseString("")).toBe("");
});

test("calculator add function", () => {
  expect(script.calculator.add(5, 3)).toBe(8);
});

test("calculator substract function", () => {
  expect(script.calculator.substract(5, 3)).toBe(2);
});

test("calculator divide function", () => {
  expect(script.calculator.divide(6, 3)).toBe(2);
});

test("calculator multiply function", () => {
  expect(script.calculator.multiply(5, 3)).toBe(15);
});

test("caesar cipher simple string", () => {
  expect(script.caesarCipher("amina", 3)).toBe("dplqd");
});

test("caesar cipher test wrapping", () => {
  expect(script.caesarCipher("xyz", 3)).toBe("abc");
});

test("caesar cipher case preservation", () => {
  expect(script.caesarCipher("AmINA", 3)).toBe("DpLQD");
});

test("caesar cipher case preservation with wrapping", () => {
  expect(script.caesarCipher("XyZ", 3)).toBe("AbC");
});

test("caesar cipher with punctuation", () => {
  expect(script.caesarCipher("Hello, World!", 3)).toBe("Khoor, Zruog!");
});

test("analyze array", () => {
  expect(script.analyzeArray([1, 8, 3, 4, 2, 6])).toEqual({
    average: 4,
    min: 1,
    max: 8,
    length: 6,
  });
});
