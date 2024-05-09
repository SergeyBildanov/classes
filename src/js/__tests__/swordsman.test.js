import Swordsman from "../Swordsman";

  
  test("Swordsman object", () => {
    const result = new Swordsman("Andrew");
    const test = {
      name: "Andrew",
      type: "Swordsman",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    }
    expect(result).toEqual(test);
  })