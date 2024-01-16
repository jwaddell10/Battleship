import Ship from "./ship.js";

describe("the ship", () => {
  test("ship was created", () => {
    const newShip = new Ship();
    expect(Ship).toHaveBeenCalled();
  });
  test("has 0 hits", () => {
    if (Ship.numberOfHits === 0) expect(Ship.numberOfHits).toBe(0);
  });
  test("ship was sunk", () => {
    if (Ship.length === Ship.numberOfHits) {
      expect(Ship.shipWasSunk).toBe(true);
    }
  });
});
