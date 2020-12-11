import { Audio } from "expo-av";

interface Time {
  position: number;
  timeLeft: number;
  durationTime: string;
  positionTime: string;
  remainTime: string;
}

interface Audio {
  isPlaying: boolean;
  playbackInstance: null;
  currentIndex: number;
  volume: number;
  isBuffering: boolean;
}

async function handlePlayPause(
  audio: Audio,
  soundObject: Audio.Sound,
  setAudio: React.Dispatch<React.SetStateAction<Audio>>
) {
  const { isPlaying } = audio;

  isPlaying ? await soundObject.pauseAsync() : await soundObject.playAsync();

  setAudio({
    isPlaying: !isPlaying,
    currentIndex: audio.currentIndex,
    playbackInstance: audio.playbackInstance,
    volume: audio.volume,
    isBuffering: audio.isBuffering,
  });
}

async function getStatus(
  soundObject: Audio.Sound,
  setTime: React.Dispatch<React.SetStateAction<Time>>
) {
  const status: any = await soundObject.getStatusAsync();
  const percentage =
    (status["positionMillis"] / status["durationMillis"]) * 1000;
  const remainingTime = status["durationMillis"] - status["positionMillis"];
  const remainminute = remainingTime / 1000 / 60;
  const remainsecond = (remainingTime / 1000) % 60;
  const positionminute = status["positionMillis"] / 1000 / 60;
  const positionsecond = (status["positionMillis"] / 1000) % 60;
  const durationminute = status["durationMillis"] / 1000 / 60;
  const durationsecond = (status["durationMillis"] / 1000) % 60;

  const remain =
    remainminute.toString().split(".")[0] +
    ":" +
    remainsecond.toString().split(".")[0];
  const position =
    positionminute.toString().split(".")[0] +
    ":" +
    positionsecond.toString().split(".")[0];
  const duration =
    durationminute.toString().split(".")[0] +
    ":" +
    durationsecond.toString().split(".")[0];

  setTime({
    position: percentage,
    timeLeft: remainingTime,
    remainTime: remain,
    positionTime: position,
    durationTime: duration,
  });
}

async function loadAudio(
  soundObject: Audio.Sound,
  setAudio: React.Dispatch<React.SetStateAction<Audio>>,
  audio: Audio,
  uri: any
) {
  await soundObject.loadAsync(uri);
  setAudio({
    isPlaying: true,
    currentIndex: audio.currentIndex,
    playbackInstance: audio.playbackInstance,
    volume: audio.volume,
    isBuffering: audio.isBuffering,
  });
  await soundObject.playAsync();
}

async function onValueChange(
  value: number,
  soundObject: Audio.Sound,
  setTime: React.Dispatch<React.SetStateAction<Time>>,
  time: Time
) {
  const status: any = await soundObject.getStatusAsync();
  const p = (value / 1000) * status["durationMillis"];
  soundObject.setStatusAsync({ positionMillis: p });
  const percentage = (p / status["durationMillis"]) * 1000;
  setTime({
    position: percentage,
    timeLeft: time.timeLeft,
    remainTime: time.remainTime,
    positionTime: time.positionTime,
    durationTime: time.durationTime,
  });
}

export { handlePlayPause, getStatus, loadAudio, onValueChange };
