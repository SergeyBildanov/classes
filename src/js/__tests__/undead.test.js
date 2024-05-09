import Undead from "../Undead";

  
  test("Undead object", () => {
    const result = new Undead("Andrew");
    const test = {
      name: "Andrew",
      type: "Undead",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    }
    expect(result).toEqual(test);
  })