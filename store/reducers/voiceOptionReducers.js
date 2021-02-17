import {
  RECORD_INSTANCE,
  SET_AUDIO_URI,
  SET_IS_RECORDED,
  SET_SOUND_TO_PLAY,
  SET_TIME_OF_VOICE,
  SET_VOICE_ID,
  VOICE_OPTION_INIT,
  VOICE_PLAYING_FINISHED,
  VOICE_PLAYING_POSITION,
} from "../actions/voiceOptionActions";

const initialState = {
  voiceOption: {
    id: null,
    recordInstance: null,
    isRecorded: false,
    audioUri: null,
    sound: null,
    voicePosition: 0,
    voiceDidJustFinished: false,
    timeOfVoice: null,
  },
};
export const voiceOptionReducers = (state = initialState, action) => {
  switch (action.type) {
    case RECORD_INSTANCE:
      return {
        ...state,
        voiceOption: {
          ...state.voiceOption,
          recordInstance: action.payload,
        },
      };
    case SET_IS_RECORDED:
      return {
        ...state,
        voiceOption: {
          ...state.voiceOption,
          isRecorded: action.payload,
        },
      };
    case SET_AUDIO_URI:
      return {
        voiceOption: {
          ...state.voiceOption,
          audioUri: action.payload,
        },
      };
    case SET_SOUND_TO_PLAY:
      return {
        voiceOption: {
          ...state.voiceOption,
          sound: action.payload,
        },
      };
    case VOICE_PLAYING_POSITION:
      return {
        voiceOption: {
          ...state.voiceOption,
          voicePosition: action.payload,
        },
      };
    case VOICE_PLAYING_FINISHED:
      return {
        voiceOption: {
          ...state.voiceOption,
          voiceDidJustFinished: action.payload,
        },
      };
    case SET_TIME_OF_VOICE:
      return {
        voiceOption: {
          ...state.voiceOption,
          timeOfVoice: action.payload,
        },
      };
    case VOICE_OPTION_INIT:
      return {
        voiceOption: {
          recordInstance: null,
          isRecorded: false,
          audioUri: null,
          sound: null,
          voicePosition: 0,
          voiceDidJustFinished: false,
          timeOfVoice: null,
        },
      };
    case SET_VOICE_ID:
      return {
        voiceOption: {
          ...state.voiceOption,
          id: action.payload,
        },
      };
    default:
      return state;
  }
};
