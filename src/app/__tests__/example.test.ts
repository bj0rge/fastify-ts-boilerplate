import { describe, it } from "node:test";
import { equal } from "node:assert";

describe("test service", () => {
  describe("given test service runs", () => {
    it("returns true", () => {
      equal(true, true);
    });
  });
});
