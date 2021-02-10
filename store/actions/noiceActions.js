export const ADD_NOTES = "ADD_NOTES";

export const addNoiceAction = (newNoice) => {
  return { type: ADD_NOTES, addedNoice: newNoice };
};
