import Daemon from "../Daemon";

  
  test("Daemon object", () => {
    const result = new Daemon("Andrew");
    const test = {
      name: "Andrew",
      type: "Daemon",
      health: 100,
      level: 1,
      attack: 10,
      defence: 40,
    }
    expect(result).toEqual(test);
  })