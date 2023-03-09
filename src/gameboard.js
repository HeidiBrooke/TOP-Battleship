import ship from "./ship";

function genRow(l) {
  const array = [];
  let i = 0;
  while (i < l) {
    array.push("E");
    i += 1;
  }
  return array;
}

function generateRows(l) {
  const rows = [];
  let i = 0;
  while (i < l) {
    rows.push(genRow(l));
    i += 1;
  }
  return rows;
}

const gameboard = (l) => {
  const alphas = "abcdefghij";
  const alpha = alphas.split("");
  const rows = generateRows(l);
  const ships = [];
  const getShips = () => ships;

  const validLength = (len) => {
    let shipType = 0;
    getShips().forEach((aShip) => {
      if (aShip.length === len) {
        shipType += 1;
      }
    });

    if (len === 2) {
      if (shipType > 1) {
        return false;
      }
    }
    if (len === 3) {
      if (shipType > 2) {
        return false;
      }
    }
    if (len === 5) {
      if (shipType > 0) {
        return false;
      }
    }
    if (len === 6) {
      if (shipType > 0) {
        return false;
      }
    }

    return true;
  };

  const match = (coord1, coord2) => {
    if (coord1[0] === coord2[0] && coord1[1] === coord2[1]) {
      return true;
    }
    return false;
  };

  const overlaps = (aShip, newShip) => {
    let overlap = false;
    aShip.getCoords().forEach((coord) =>
      newShip.getCoords().forEach((coordp) => {
        if (match(coordp, coord)) {
          overlap = true;
        }
      })
    );
    return overlap;
  };

  const updateMatrix = (aShip) => {
    aShip.getCoords().forEach((coord) => {
      const index = alpha.indexOf(coord[0]);
      rows[index][coord[1]] = getShips().indexOf(aShip);
    });
  };

  const placeShip = (len, coord, dir) => {
    let valid = false;
    if (validLength(len)) {
      valid = true;
      const newShip = ship(len, coord, dir);
      ships.forEach((aShip) => {
        if (overlaps(aShip, newShip)) {
          valid = false;
        }
      });
      if (valid) {
        ships.push(newShip);
      }
      updateMatrix(newShip);
      return valid;
    }
    return valid;
  };

  const receiveAttack = (coord) => {
    const index = alpha.indexOf(coord[0]);
    const currentVal = rows[index][coord[1]];
    if (typeof currentVal === "number") {
      rows[index][coord[1]] = "H";
      ships[currentVal].hit(coord);
      return "I worked";
    }
    if (currentVal === "E") {
      rows[index][coord[1]] = "M";
    } else {
      return "already fired here. Try again.";
    }
  };

  const allSunk = () => {
    ships.forEach((aShip) => {
      if (!aShip.isSunk()) {
        return false;
      }
    });
    return true;
  };

  return { rows, placeShip, getShips, overlaps, match, receiveAttack, allSunk };
};

export default gameboard;
