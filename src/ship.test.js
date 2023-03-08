import ship  from './ship.js';

test('make long ship in bounds right', () => {
  expect(ship(5, ["a", 5], "r")).toMatchObject({
    length: 5,
    coords: [["a",5], ["a",6], ["a",7], ["a",8], ["a", 9]],
    hitLog: [0, 0, 0, 0, 0],
  });
});

test('make long ship in bounds up', () => {
    expect(ship(5, ["h", 5], "u")).toMatchObject({
      length: 5,
      coords: [["h",5], ["g",5], ["f",5], ["e",5], ["d",5]],
      hitLog: [0, 0, 0, 0, 0],
    });
  });

test('make long ship in bounds down', () => {
    expect(ship(5, ["f", 5], "d")).toMatchObject({
      length: 5,
      coords: [["f",5], ["g",5], ["h",5], ["i",5], ["j",5]],
      hitLog: [0, 0, 0, 0, 0],
    });
  });

test('make long ship in bounds left', () => {
    expect(ship(5, ["f", 5], "l")).toMatchObject({
      length: 5,
      coords: [["f",5], ["f",4], ["f",3], ["f",2], ["f",1]],
      hitLog: [0, 0, 0, 0, 0],
    });
  });

test('make long ship out of bounds up', () => {
    expect(ship(5, ["a",0], "u")).toBe('Ship goes out of bounds. Try again');
  });

test('make long ship out of bounds left', () => {
    expect(ship(5, ["a",0], "l")).toBe('Ship goes out of bounds. Try again');
  });
test('make long ship out of bounds right', () => {
    expect(ship(5, ["a", 7], "r")).toBe('Ship goes out of bounds. Try again');
  });
test('make long ship out of bounds down', () => {
    expect(ship(5, ["g",9], "d")).toBe('Ship goes out of bounds. Try again');
  });