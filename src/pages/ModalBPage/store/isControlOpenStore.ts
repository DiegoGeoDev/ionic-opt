import { create } from "zustand";
import { devtools } from "zustand/middleware";

import { createIsControlOpenSlice } from "./slices/createIsControlOpenSlice";

export const controls = {
  fish: false,
  gift: false,
  pizza: false,
};

export type controlsKeys = keyof typeof controls;

export type TIsControlOpen = {
  controls: typeof controls;
  openControl: (
    controlId: controlsKeys,
    controlsIdToSkip?: Array<controlsKeys> | []
  ) => void;
  closeControl: (controlId: controlsKeys) => void;
};

export const useIsControlOpenStore = create<TIsControlOpen>()(
  devtools((set, get) => ({
    ...createIsControlOpenSlice(set, get),
  }))
);
