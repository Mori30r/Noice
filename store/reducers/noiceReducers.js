import { ADD_NOICES, GET_NOICES } from "../actions/noiceActions";
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
    default:
      return state;
  }
};
