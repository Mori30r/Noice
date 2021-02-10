import { NOICES } from "../../data/dummy-noice.js";
import { ADD_NOTES } from "../actions/noiceActions";
import { Noice } from "../../models/Noice";
import { v4 as uuid } from "uuid";

const initialState = {
  noices: NOICES,
};
export const noiceReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOTES:
      const newNoice = new Noice(
        undefined,
        action.addedNoice.title,
        action.addedNoice.note,
        action.addedNoice.isDone,
        action.addedNoice.isFavorite,
        uuid()
      );
      return {
        noices: state.noices.concat(newNoice),
      };
    default:
      return state;
  }
};
