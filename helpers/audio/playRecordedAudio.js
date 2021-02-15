import { Audio } from "expo-av";
import {
  setVoicePlayingFinish,
  setVoicePosition,
} from "../../store/actions/voiceOptionActions";

export const playRecordedAudio = async (audioUri, dispatch) => {
  if (audioUri) {
    try {
      const newSound = new Audio.Sound();
      await newSound.loadAsync({ uri: audioUri });
      await newSound.playAsync();
      await newSound.setOnPlaybackStatusUpdate((playingStatus) => {
        dispatch(setVoicePosition(playingStatus.positionMillis));
        dispatch(setVoicePlayingFinish(playingStatus.didJustFinish));
        playingStatus.didJustFinish && newSound.unloadAsync();
      });
    } catch (e) {
      console.log(e);
    }
  }
};
