import Magician from "../Magician";

  test("Magician object", () => {
    const result = new Magician("Andrew");
    const test = {
      name: "Andrew",
      type: "Magician",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    }
    
    expect(result).toEqual(test);
  })