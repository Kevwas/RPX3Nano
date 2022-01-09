import { useEffect, useMemo, useState } from "react";
import { Storage } from "@capacitor/storage";

const useTTS = () => {
  const [ttsON, setTtsON] = useState<boolean>(true);
  const toggleTts = () => setTtsON(!ttsON);
  const [volume, setVolume] = useState<number>(1);
  const updateVolume = (value: number) => {
    setVolume(value);
  };
  const [rate, setRate] = useState<number>(0.7);
  const updateRate = (value: number) => setRate(value);
  const [pitch, setPitch] = useState<number>(1.5);
  const updatePitch = (value: number) => setPitch(value);

  const [voiceIndex, setVoiceIndex] = useState<number>(0);
  const updateVoiceIndex = (value: number) => {
    setVoiceIndex(value);
  };
  const voices = speechSynthesis.getVoices();
  const voice: SpeechSynthesisVoice = voices[voiceIndex];
  
  const cancel = () => speechSynthesis.cancel();
  const utterance = useMemo(() => new SpeechSynthesisUtterance(), []);

  useEffect(() => {
    // Retrieving data from localStorage once the app inits:
    (async () => {
      const utteranceData = await Storage.get({ key: "RPX3NanoTtsUtterance" });
      if (utteranceData.value) {
        const loadedUtterance = JSON.parse(utteranceData.value);
        setTtsON(loadedUtterance.ttsON);
        setVoiceIndex(loadedUtterance.voiceIndex);
        setVolume(loadedUtterance.volume);
        setRate(loadedUtterance.rate);
        setPitch(loadedUtterance.pitch);
      }
    })();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    // Saving data on localStorage every time the utterance config changes:
    Storage.set({ key: "RPX3NanoTtsUtterance", value: JSON.stringify({
      ttsON,
      voiceIndex: voiceIndex,
      volume,
      rate,
      pitch
    })});
  }, [ttsON, pitch, rate, voiceIndex, volume]);

  const onBoundary = (callback: (event: SpeechSynthesisEvent) => void) => {
    utterance.onboundary = (event) => {
      callback(event);
    };
  };

  const onEnd = (callback: () => void) => {
    utterance.onend = () => {
      callback();
    };
  };

  const speak = (text: string) => {
      utterance.text = text;
      utterance.voice = voice;
      utterance.volume = volume;
      utterance.rate = rate;
      utterance.pitch = pitch;
      speechSynthesis.speak(utterance);
  };

  return {
    ttsON,
    toggleTts,
    volume,
    updateVolume,
    rate,
    updateRate,
    pitch,
    updatePitch,
    voices,
    voice,
    voiceIndex,
    updateVoiceIndex,
    speak,
    cancel,
    onBoundary,
    onEnd,
  }
};

export default useTTS;
