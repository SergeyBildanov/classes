import Zombie from "../Zombie";

  
  test("Zombie object", () => {
    const result = new Zombie("Andrew");
    const test = {
      name: "Andrew",
      type: "Zombie",
      health: 100,
      level: 1,
      attack: 40,
      defence: 10,
    }
    expect(result).toEqual(test);
  })