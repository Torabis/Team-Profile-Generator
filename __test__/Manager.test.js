const Manager = require("../lib/Manager");

// test("creates manager's object", () => {
//     const e = new Employee();
//     expect(typeof e).toBe("object");
//   });
  
//   test(" gets employee's name", () => {
//     const e = new Employee("Dave");
//     expect(e.name).toBe("Dave");
//   });
  
//   test(" gets employee's id", () => {
//     const e = new Employee("Dave", "100");
//     expect(e.id).toBe("100");
//   });
  
  test(" gets manager's number", () => {
    const e = new Manager("Dave", "100", "dave@dave.com", "12345678");
    expect(e.officeNumber).toBe("12345678");
  });
  
  test(" gets manager's role", () => {
    const e = new Manager("manager");
    expect(e.getRole()).toBe("manager");
  });