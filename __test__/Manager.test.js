const Manager = require("../lib/Manager");
  
  test(" gets manager's number", () => {
    const e = new Manager("Dave", "100", "dave@dave.com", "12345678");
    expect(e.officeNumber).toBe("12345678");
  });
  
  test(" gets manager's role", () => {
    const e = new Manager("manager");
    expect(e.getRole()).toBe("manager");
  });