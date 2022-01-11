import React from "react";
import { IonButton, IonGrid, IonCol } from "@ionic/react";

const AudioButtonWithHotKeys: React.FC<{
  text: string;
  audioURL: string;
  audioRef: React.RefObject<HTMLAudioElement>;
  keystroke: string;
  hotKeysActivated: boolean;
  callback: () => void;
}> = ({ text, audioURL, audioRef, keystroke, hotKeysActivated, callback }) => {

  const playSound = () => {
    if (audioRef.current) {
      audioRef.current.play();
      callback();
    }
  };

  return (
    <>
      <IonButton
        className="ion-button"
        color="primary"
        expand="block"
        size="small"
        onClick={(e) => {
          if (hotKeysActivated) {
            playSound();
          }
        }}
      >
        <IonGrid style={{ display: "flex" }}>
          <IonCol size="4" style={{ flex: 1 }}></IonCol>
          <IonCol size="4" style={{ flex: 1 }}>
            {text}
          </IonCol>
          <IonCol
            size="4"
            style={{
              display: "flex",
              flex: 1,
              justifyContent: "flex-end",
              alignItems: "flex-end",
            }}
          >
            <span style={{ fontSize: 9, marginBottom: -2, marginRight: -15 }}>
              {keystroke}
            </span>
          </IonCol>
        </IonGrid>
        {hotKeysActivated && (
          <audio ref={audioRef} src={audioURL} id={`audio-${keystroke.toUpperCase()}`} />
        )}
      </IonButton>
      {keystroke === "Q" && <div style={{height: 15}}></div>}
    </>
  );
};

export default AudioButtonWithHotKeys;
