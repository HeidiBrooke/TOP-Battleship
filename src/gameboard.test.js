/* eslint-disable no-undef */
import ship from './ship'
import gameboard from "./gameboard"

const VL = ship(5, ["a", 0], "r");
const GB = gameboard(10);
GB.getShips().push(VL);
const S1 = ship(2, ["a", 0], "r");
const L = ship(4, ['a', 2], 'd');
const GB2 = gameboard(10);
const S2 = ship(2, ["i", 0], "r")
const S3 = ship(2, ["j", 0], "r")
GB2.getShips().push(S2);
GB2.getShips().push(S3);
const isMatch = GB.match(VL.getCoords()[0], S1.getCoords()[0]);
const isIn = GB.overlaps(VL, S1);
const isIn2 = GB.overlaps(VL, L);

const GB4 = gameboard(10);
GB4.placeShip(5, ["a", 0], "r");
GB4.placeShip(4, ['b', 1], 'd');

const GB5 = gameboard(10);
const gb5Ships = GB5.getShips();
GB5.placeShip(5, ["a", 0], "r");
gb5Ships[0].sink();
GB5.placeShip(4, ['b', 1], 'r');
gb5Ships[1].sink();
GB5.placeShip(3, ['c', 1], 'r');
(GB5.getShips()[2]).sink();
GB5.placeShip(3, ['d', 1], 'r');
(GB5.getShips())[3].sink();
GB5.placeShip(2, ['e', 1], 'r');
(GB5.getShips()[4]).sink();
GB5.placeShip(2, ['f', 1], 'r');
gb5Ships[5].sink();


test("make gameboard of 10 rows", () => {
    expect(gameboard(10)).toMatchObject({
        rows:
      [['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ['E', 'E','E','E','E','E','E','E','E','E'],
      ]
    });
  });


test("coords match", () => {
  expect(isMatch).toBe(
    true
  );
});


test("ships overlap", () => {
  expect(isIn).toBe(
    true
  );
});

test("ships overlap different directions", () => {
  expect(isIn2).toBe(
    true
  );
});

test("placeship when ships overlap different directions", () => {
  expect(GB.placeShip(4, ['a', 1], 'd')).toBe(
    false
  );
});

test("placeship ships don't overlap ", () => {
  expect(GB.placeShip(4, ['b', 1], 'd')).toBe(
    true
  );
});

test("placeship actually places/creates a ship ", () => {
  expect(GB.getShips()[1]).toMatchObject({
    length: 4,
    coords: [['b',1], ['c',1], ['d',1], ['e',1]],
    hitLog:[0,0,0,0] 
    });
});

test("Does not create more than 2 short ships ", () => {
  expect(GB2.placeShip(2, [['a', 0], 'r'])).toBe(
    false
    );
});

test("Does not create more than 1 very long ship ", () => {
  expect(GB.placeShip(5, [['j', 0], 'r'])).toBe(
    false
    );
});

test("Did not push the 2nd very long ship", () => {
  expect(GB.getShips().length).toEqual(
    2
  );
});

test("placeship changes gameboard rows", () => {
  expect(GB4.rows).toEqual(
    [[0, 0, 0, 0, 0,'E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ]
  );
});


test("board updates after received attach hits", () => {
  GB4.receiveAttack(['a', 0])
  expect(GB4.rows).toEqual(
    [['H', 0, 0, 0, 0,'E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ]
  );
});

test("ship hitLog updates", () => {
  expect(GB4.getShips()[0].getHitlog()).toEqual(
    [1,0,0,0,0]
  );
});

test("notify of re-guesses", () => {
  expect(GB4.receiveAttack(['a', 0])).toEqual(
    'already fired here. Try again.'
  );
});

test("board logs a missed attack as M", () => {
  GB4.receiveAttack(['j', 9])
  expect(GB4.rows).toEqual(
    [['H', 0, 0, 0, 0,'E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 1,'E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','E'],
    ['E', 'E','E','E','E','E','E','E','E','M'],
    ]
  );
});

test("All ships sunk registers as sunk", () => {
  expect(GB5.allSunk()).toBe(
    true
  );
});



