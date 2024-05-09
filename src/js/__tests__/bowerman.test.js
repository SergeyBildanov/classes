import Bowerman from "../Bowerman";

  
  test("Bowerman object", () => {
    const result = new Bowerman("Andrew");
    const test = {
      name: "Andrew",
      type: "Bowerman",
      health: 100,
      level: 1,
      attack: 25,
      defence: 25,
    }
    expect(result).toEqual(test);
  })