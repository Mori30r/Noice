export const RECORD_INSTANCE = "RECORD_INSTANCE";
export const SET_IS_RECORDED = "SET_IS_RECORDED";
export const SET_AUDIO_URI = "SET_AUDIO_URI";
export const SET_SOUND_TO_PLAY = "SET_SOUND_TO_PLAY";
export const VOICE_PLAYING_POSITION = "VOICE_PLAYING_POSITION";
export const VOICE_PLAYING_FINISHED = "VOICE_PLAYING_FINISHED";
export const SET_TIME_OF_VOICE = "SET_TIME_OF_VOICE";
export const VOICE_OPTION_INIT = "VOICE_OPTION_INIT";

export const recordInstanceAdd = (recordInstance) => {
  return { type: RECORD_INSTANCE, payload: recordInstance };
};

export const setIsRecorded = (isRecorded) => {
  return { type: SET_IS_RECORDED, payload: isRecorded };
};

export const setAudioUri = (audioUri) => {
  return { type: SET_AUDIO_URI, payload: audioUri };
};

export const setSoundToPlay = (soundToPlay) => {
  return { type: SET_SOUND_TO_PLAY, payload: soundToPlay };
};

export const setVoicePosition = (voicePosition) => {
  return { type: VOICE_PLAYING_POSITION, payload: voicePosition };
};

export const setVoicePlayingFinish = (voicePlayingDidJustFinish) => {
  return { type: SET_SOUND_TO_PLAY, payload: voicePlayingDidJustFinish };
};

export const setTimeOfVoice = (timeOfVoice) => {
  return { type: SET_TIME_OF_VOICE, payload: timeOfVoice };
};

export const voiceOptionInit = () => {
  return { type: VOICE_OPTION_INIT };
};
