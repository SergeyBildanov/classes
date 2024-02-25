import Charachter from "../Charachter";


test('small name', () => {
  const result = new Charachter("B");
  const expected = new Error("Имя персонажа слишком короткое!")
  expect(result).toEqual(expected);
});

test('long name', () => {
  const result = new Charachter("Bdadadadadadadaaadadada");
  const expected = new Error("Имя персонажа слишком длинное!")
  expect(result).toEqual(expected);
});

test("Character object", () => {
  const result = new Charachter("Andrew");
  expect(result.health).toBe(100);
  expect(result.level).toBe(1);
})