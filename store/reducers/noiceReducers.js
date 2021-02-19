import {
  ADD_NOICES,
  GET_NOICES,
  TOGGLE_FAVORITE,
} from "../actions/noiceActions";
import { Noice } from "../../models/Noice";
import "react-native-get-random-values";

const initialState = {
  noices: [],
};
export const noiceReducers = (state = initialState, action) => {
  switch (action.type) {
    case ADD_NOICES:
      const newNoice = new Noice(
        action.payload.audioUri,
        action.payload.title,
        action.payload.note,
        false,
        false,
        action.payload.id,
        action.payload.voiceDuration
      );
      return {
        noices: state.noices.concat(newNoice),
      };
    case GET_NOICES:
      return {
        noices: action.payload,
      };
    case TOGGLE_FAVORITE:
      const thisNoice = state.noices.find(
        (item) => action.payload.id === item.id
      );
      return {
        noices: state.noices.map((item) =>
          item.id === action.payload.id
            ? { ...thisNoice, isFavorite: action.payload.isFavorite }
            : item
        ),
      };
    default:
      return state;
  }
};
