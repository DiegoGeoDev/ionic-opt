import { StoreApi } from "zustand";

import { TIsControlOpen, controls, controlsKeys } from "../isControlOpenStore";

export const createIsControlOpenSlice = (
  set: StoreApi<TIsControlOpen>["setState"],
  get: StoreApi<TIsControlOpen>["getState"]
): TIsControlOpen => ({
  controls: controls,
  openControl: (controlId, controlsIdToSkip = []) =>
    set((state) => {
      if (state.controls[controlId]) return state;

      const controlsId = [controlId, ...controlsIdToSkip];

      const controlsToClose = Object.keys(state.controls)
        .filter((controlId) => !controlsId.includes(controlId as controlsKeys))
        .reduce(
          (accumulator, controlId) => ({ ...accumulator, [controlId]: false }),
          {}
        );

      return {
        controls: { ...state.controls, ...controlsToClose, [controlId]: true },
      };
    }),
  closeControl: (controlId) =>
    set((state) => ({ controls: { ...state.controls, [controlId]: false } })),
});
