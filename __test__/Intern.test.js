const Intern = require("../lib/Intern");

test("creates intern's object", () => {
    const e = new Intern();
    expect(typeof e).toBe("object");
  });
  
  test(" gets intern's school", () => {
    const e = new Intern("Dave", "100", "dave@dave.com", "school");
    expect(e.school).toBe("school");
  });
  
  test(" gets intern's role", () => {
    const e = new Intern("Intern");
    expect(e.getRole()).toBe("Intern");
  });

