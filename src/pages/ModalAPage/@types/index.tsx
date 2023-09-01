export enum Breakpoint {
  b25 = 0.25,
  b50 = 0.5,
  b75 = 0.75,
  b100 = 1,
}

export type ModalOptions = {
  initialBreakpoint: Breakpoint;
  currentBreakpoint: Breakpoint;
};
