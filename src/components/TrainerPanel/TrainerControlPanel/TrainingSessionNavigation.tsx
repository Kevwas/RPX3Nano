import React, { useContext, useEffect, useRef } from "react";
import { IonButton, IonCol, IonGrid, IonItem } from "@ionic/react";
import ContextProvider from "../../../data/cards-context";

const TrainingSessionNavigation: React.FC<{
  addStepToStepsStack: () => void;
  removeStepFromStepsStack: () => void;
  nextCard: () => void;
  previousCard: () => void;
  reStartTraining: () => void;
}> = ({
  addStepToStepsStack,
  removeStepFromStepsStack,
  nextCard,
  previousCard,
  reStartTraining,
}) => {
  const { isEditing } = useContext(ContextProvider);
  const audio_W = useRef<HTMLAudioElement>(null);
  const audio_Q = useRef<HTMLAudioElement>(null);
  const audio_S = useRef<HTMLAudioElement>(null);
  const audio_A = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    const keydown = (e: KeyboardEvent) => {
      if (e.key === "q" || e.key === "w" || e.key === "a" || e.key === "s") {
        if (e.repeat) {
          e.preventDefault();
          return;
        }
        const id = e.key.toUpperCase();
        const audio = document.getElementById(`audio-${id.toUpperCase()}`);

        if (audio) {
          audio.click();
        } 
      }
    };
    document.addEventListener("keydown", keydown);
    return () => {
      document.removeEventListener("keydown", keydown);
    };
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const audioSounds = {
    moveStep: "https://www.pacdv.com/sounds/interface_sound_effects/sound77.wav",
    moveCard: "https://www.pacdv.com/sounds/interface_sound_effects/sound93.wav"
  };

  const AudioButtonsWithHotKeys = [
    {keystroke: "W", callback: addStepToStepsStack, text: "next step", audioRef: audio_W, audioURL: audioSounds.moveStep },
    {keystroke: "Q", callback: removeStepFromStepsStack, text: "previous step", audioRef: audio_Q, audioURL: audioSounds.moveStep },
    {keystroke: "S", callback: nextCard, text: "previous card", audioRef: audio_S, audioURL: audioSounds.moveCard },
    {keystroke: "A", callback: previousCard, text: "previous card", audioRef: audio_A, audioURL: audioSounds.moveCard }
  ];

  const playSound = (audioRef: React.RefObject<HTMLAudioElement>, callback: () => void) => {
    if (audioRef.current) {
      audioRef.current.play();
      callback();
    }
  };

  return (
    <>
      <IonItem>
        <h6 style={{ color: "#a0a0a0" }}>Training session navigation</h6>
      </IonItem>
      <div style={{ padding: "0 30px 0 30px", marginTop: 10, marginBottom: 20 }}>
        {
          AudioButtonsWithHotKeys.map(audioButton => (
            <>
              <IonButton
                className="ion-button"
                color="primary"
                expand="block"
                size="small"
                onClick={() => {
                  if (!isEditing) {
                    playSound(audioButton.audioRef, audioButton.callback);
                  }
                }}
              >
                {audioButton.text}
                <span style={{ position: "fixed", right: 22, bottom: 7, fontSize: 9, marginBottom: -2, marginRight: -15 }}>
                  {audioButton.keystroke}
                </span>
                {!isEditing && (
                  <audio ref={audioButton.audioRef} src={audioButton.audioURL} id={`audio-${audioButton.keystroke.toUpperCase()}`} />
                )}
              </IonButton>
              {audioButton.keystroke === "Q" && <div style={{height: 15}}></div>}
            </>
          ))
        }
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          onClick={reStartTraining}
          style={{ marginTop: 20 }}
        >
          re-start training
        </IonButton>
      </div>
    </>
  );
}

export default TrainingSessionNavigation;
