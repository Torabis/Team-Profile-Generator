const Intern = require("../lib/Intern");

test("creates intern's object", () => {
    const e = new Intern();
    expect(typeof e).toBe("object");
  });
  
//   test(" gets employee's name", () => {
//     const e = new Employee("Dave");
//     expect(e.name).toBe("Dave");
//   });
  
//   test(" gets employee's id", () => {
//     const e = new Employee("Dave", "100");
//     expect(e.id).toBe("100");
//   });
  
  test(" gets intern's school", () => {
    const e = new Intern("Dave", "100", "dave@dave.com", "school");
    expect(e.school).toBe("school");
  });
  
  test(" gets intern's role", () => {
    const e = new Intern("Intern");
    expect(e.getRole()).toBe("Intern");
  });

