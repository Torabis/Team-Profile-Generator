const Employee = require("../lib/Employee");

test("creates employee's object", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test(" gets employee's name", () => {
  const e = new Employee("Dave");
  expect(e.name).toBe("Dave");
});

test(" gets employee's id", () => {
  const e = new Employee("Dave", "100");
  expect(e.id).toBe("100");
});

test(" gets employee's email", () => {
  const e = new Employee("Dave", "100", "dave@dave.com");
  expect(e.email).toBe("dave@dave.com");
});

test(" gets employee's role", () => {
  const e = new Employee("Employee");
  expect(e.getRole()).toBe("Employee");
});
