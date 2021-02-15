import React from "react";
import * as voiceActions from "../../store/actions/voiceOptionActions";

export const stopAudioRecord = async (dispatch, recordInstance) => {
  dispatch(voiceActions.recordInstanceAdd(undefined));
  await recordInstance.stopAndUnloadAsync();
  const newAudioUri = recordInstance.getURI();
  dispatch(voiceActions.setAudioUri(newAudioUri));
  dispatch(voiceActions.setIsRecorded(true));
};
