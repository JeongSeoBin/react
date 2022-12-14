import counter, * as actions from "./counter";

describe("counter module", () => {
  describe("action creators", () => {
    it("should create INCREASE action", () => {
      expect(actions.increase()).toEqual({ type: "counter/INCREASE" });
    });

    it("should create DECREASE action", () => {
      expect(actions.decrease()).toEqual({ type: "counter/DECREASE" });
    });
  });

  describe("reducer", () => {
    const initState = { number: 0 };

    it("should have initState", () => {
      const state = counter(undefined, {});
      expect(state).toEqual(initState);
    });

    it("should handle INCREASE action", () => {
      const state = counter(initState, actions.increase());
      expect(state.number).toBe(1);
    });

    it("should handle DECREASE action", () => {
      const state = counter(initState, actions.decrease());
      expect(state.number).toBe(-1);
    });
  });
});
