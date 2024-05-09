import Charachter from "../Charachter";


test('small name', () => {
  const expected = new Error("Имя персонажа слишком короткое!");
  expect(() => new Charachter("B", "Daemon")).toThrow(expected);
});

test('long name', () => {
  const expected = new Error("Имя персонажа слишком длинное!");
  expect(() => new Charachter("Bdadadadadadadaaadadada", "Daemon")).toThrow(expected);
});

test("Invalid type", () => {
  const expected = new Error("Недопустимый тип персонажа!");
  expect(() => new Charachter("Andrew")).toThrow(expected);
})