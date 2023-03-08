/* eslint-disable no-undef */
import ship from "./ship";

const VL = ship(5, ["a", 0], "r");
VL.hit(["a", 0]);
VL.hit(["a", 9]);

const VL2 = ship(5, ["a", 0], "r");
VL2.hit(["a", 0]);
VL2.hit(["a", 3]);

const VL3 = ship(5, ["a", 0], "r");
VL3.hitLog = [1, 1, 1, 1, 1];
VL3.hit(["a", 0]);
VL3.hit(["a", 1]);
VL3.hit(["a", 2]);
VL3.hit(["a", 3]);
VL3.hit(["a", 4]);

const VL3hits = VL3.hitLog;

const testArray = [1, 0, 0, 0, 0];

test("make long ship in bounds right", () => {
  expect(ship(5, ["a", 5], "r")).toMatchObject({
    length: 5,
    coords: [
      ["a", 5],
      ["a", 6],
      ["a", 7],
      ["a", 8],
      ["a", 9],
    ],
    hitLog: [0, 0, 0, 0, 0],
  });
});

test("make long ship in bounds up", () => {
  expect(ship(5, ["h", 5], "u")).toMatchObject({
    length: 5,
    coords: [
      ["h", 5],
      ["g", 5],
      ["f", 5],
      ["e", 5],
      ["d", 5],
    ],
    hitLog: [0, 0, 0, 0, 0],
  });
});

test("make long ship in bounds down", () => {
  expect(ship(5, ["f", 5], "d")).toMatchObject({
    length: 5,
    coords: [
      ["f", 5],
      ["g", 5],
      ["h", 5],
      ["i", 5],
      ["j", 5],
    ],
    hitLog: [0, 0, 0, 0, 0],
  });
});

test("make long ship in bounds left", () => {
  expect(ship(5, ["f", 5], "l")).toMatchObject({
    length: 5,
    coords: [
      ["f", 5],
      ["f", 4],
      ["f", 3],
      ["f", 2],
      ["f", 1],
    ],
    hitLog: [0, 0, 0, 0, 0],
  });
});

test("make long ship out of bounds up", () => {
  expect(ship(5, ["a", 0], "u")).toBe("Ship goes out of bounds. Try again");
});

test("make long ship out of bounds left", () => {
  expect(ship(5, ["a", 0], "l")).toBe("Ship goes out of bounds. Try again");
});
test("make long ship out of bounds right", () => {
  expect(ship(5, ["a", 7], "r")).toBe("Ship goes out of bounds. Try again");
});
test("make long ship out of bounds down", () => {
  expect(ship(5, ["g", 9], "d")).toBe("Ship goes out of bounds. Try again");
});

test("VL takes hit in [a, 1]", () => {
  expect(VL.hitLog).toMatchObject(testArray);
});

test("VL takes miss in [a, 9]", () => {
  expect(VL.hitLog).toMatchObject([1, 0, 0, 0, 0]);
});

test("VL2 takes hit in [a, 3]", () => {
  expect(VL2.hitLog).toMatchObject([1, 0, 0, 1, 0]);
});

test("VL2 is sunk", () => {
  expect(VL2.isSunk()).toBe(false);
});

test("VL3 is sunk", () => {
  expect(VL3.isSunk()).toBe(true);
});

test("VL3 hit log", () => {
  expect(VL3hits).toMatchObject([1, 1, 1, 1, 1]);
});

test("make medium ship in bounds left", () => {
  expect(ship(3, ["f", 5], "l")).toMatchObject({
    length: 3,
    coords: [
      ["f", 5],
      ["f", 4],
      ["f", 3],
    ],
    hitLog: [0, 0, 0],
  });
});

test("make short ship in bounds left", () => {
  expect(ship(2, ["f", 5], "l")).toMatchObject({
    length: 2,
    coords: [
      ["f", 5],
      ["f", 4],
    ],
    hitLog: [0, 0],
  });
});
