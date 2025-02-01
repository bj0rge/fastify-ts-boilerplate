import { describe, it } from "node:test";
import { equal } from "node:assert";
import { type ElevatorState, getNextFloor } from "../build";

describe("getNextFloor", () => {
  describe("given no floor has been called", () => {
    it("returns undefined", () => {
      const elevatorState: ElevatorState = {
        currentFloor: 1,
        successiveFloorsCalled: [],
      };
      const result = getNextFloor(elevatorState);
      equal(result, undefined);
    });
  });

  describe("given only one floor has been called", () => {
    it("returns that floor", () => {
      const elevatorState: ElevatorState = {
        currentFloor: 1,
        successiveFloorsCalled: [0],
      };
      const result = getNextFloor(elevatorState);
      equal(result, 0);
    });
  });

  describe("given the elevator has been called multiple times", () => {
    describe("and current floor is inside the range", () => {
      it("returns the closest floor from current one", () => {
        const elevatorState: ElevatorState = {
          currentFloor: 2,
          successiveFloorsCalled: [1, 5, 4],
        };
        const result = getNextFloor(elevatorState);
        equal(result, 1);
      });
    });
  });

  describe("given the elevator has been called multiple times 2", () => {
    describe("and current floor is inside the range", () => {
      it("returns the closest floor from current one", () => {
        const elevatorState: ElevatorState = {
          currentFloor: 2,
          successiveFloorsCalled: [5, 4],
        };
        const result = getNextFloor(elevatorState);
        equal(result, 4);
      });
    });
  });
});
