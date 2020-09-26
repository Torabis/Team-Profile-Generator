const { TestResult } = require("@jest/types");
const Engineer = require("../lib/Engineer");

test("creates engineer's object", () => {
    const e = new Engineer();
    expect(typeof e).toBe("object");
  });
  
  test(" gets engineer's github", () => {
    const e = new Engineer("Dave", "100", "dave@dave.com", "daveGit");
    expect(e.gitHub).toBe("daveGit");
  });
  
  test(" gets engineer's role", () => {
    const e = new Engineer("Engineer");
    expect(e.getRole()).toBe("Engineer");
  });