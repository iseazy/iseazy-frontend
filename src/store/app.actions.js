export const START_APP = "START APP";
export const END_APP = "END APP";
export const FLIP = "FLIP ITEM";

export const startApplication = () => {
  return { type: START_APP };
};

export const endApplication = () => {
  return { type: END_APP };
};

export const flipItem = (item) => {
  return { type: FLIP, payload: item };
};
