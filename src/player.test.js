/* eslint-disable no-undef */
import player from "./player";

test("make a player", () => {
  expect(player("player1")).toMatchObject({
    type: "person",
    name: "player1",
    board: {
      rows: [
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
      ],
    },
  });
});

test("make a computer player", () => {
  expect(player("player2", "comp")).toMatchObject({
    type: "comp",
    name: "player2",
    board: {
      rows: [
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
        ["E", "E", "E", "E", "E", "E", "E", "E", "E", "E"],
      ],
    },
  });
});
