import {
  IonButton,
  IonItem,
  IonLabel,
  IonListHeader,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/react";
import React from "react";

const TrainingSessionSetup: React.FC = () => {
  return (
    <>
      <IonListHeader>
        <h6 style={{ color: "#a0a0a0" }}>Training session setup</h6>
      </IonListHeader>
      <IonItem>
        <IonLabel>Card count to practice : .. 4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Text to speech audio</IonLabel>
        <IonToggle slot="end" name="audio" color="success" checked />
      </IonItem>
      <IonItem>
        <IonLabel>Music audio</IonLabel>
        <IonToggle slot="end" name="audio" color="success" checked />
      </IonItem>
      <IonItem className="dropdown-selector">
        <IonLabel>Music song:</IonLabel>
        <IonSelect value="03">
          <IonSelectOption value="01">Alice in Chains</IonSelectOption>
          <IonSelectOption value="02">Green Day</IonSelectOption>
          <IonSelectOption value="03">Nirvana</IonSelectOption>
          <IonSelectOption value="04">Pearl Jam</IonSelectOption>
          <IonSelectOption value="05">Smashing Pumpkins</IonSelectOption>
          <IonSelectOption value="06">Soundgarden</IonSelectOption>
          <IonSelectOption value="07">Stone Temple Pilots</IonSelectOption>
        </IonSelect>
      </IonItem>
      <div style={{ padding: 10 }}>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
        >
          re-start training
        </IonButton>
      </div>
    </>
  );
};

export default TrainingSessionSetup;
