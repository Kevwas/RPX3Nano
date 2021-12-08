import {
  IonButton,
  IonItem,
} from "@ionic/react";
import React from "react";

const MasteryFeedback: React.FC = () => {
  return (
    <>
      <IonItem>
        <h6 style={{ color: "#a0a0a0" }}>Mastery feedback</h6>
      </IonItem>
      <div style={{ padding: "0 30px 0 30px", marginTop: 10 }}>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
        >
          easy
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
        >
          good
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
        >
          hard
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
        >
          forgotten
        </IonButton>
      </div>
    </>
  ); 
};

export default MasteryFeedback;
