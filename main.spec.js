const counter = require('./main');

test("Returns 1 when run once", () => {
    expect(counter()).toBe(1);
});

test("Returns 2 when run twice", () => {
    expect(counter()).toBe(2);
});

test("Returns 3 when run thrice", () => {
    expect(counter()).toBe(3);
});

test("Resets behaviour after 3 runs", () => {
    expect(counter()).toBe(1);
    expect(counter()).toBe(2);
    expect(counter()).toBe(3);
    expect(counter()).toBe(1);
});