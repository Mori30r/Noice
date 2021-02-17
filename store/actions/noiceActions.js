import * as FileSystem from "expo-file-system";
import { fetchNoices, insertNoice } from "../../helpers/database/noiceDatabase";

export const ADD_NOICES = "ADD_NOICES";
export const GET_NOICES = "GET_NOICES";

export const addNoiceAction = (id, title, note, audioUri, voiceDuration) => {
  return async (dispatch) => {
    const fileName = audioUri.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: audioUri,
        to: newPath,
      });
      await insertNoice(
        id,
        title,
        note,
        newPath,
        0, //isDone
        0, //isFavorite
        voiceDuration
      );
      dispatch({
        type: ADD_NOICES,
        payload: { id, title, note, audioUri: newPath, voiceDuration },
      });
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
};

export const getNoiceAction = () => {
  return async (dispatch) => {
    try {
      const dbResult = await fetchNoices();
      dispatch({ type: GET_NOICES, payload: dbResult.rows._array });
    } catch (e) {
      console.log(e);
      throw e;
    }
  };
};
