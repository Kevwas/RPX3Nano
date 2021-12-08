import {
  IonButton,
  IonItem,
} from "@ionic/react";
import React from "react";

const TrainingSessionNavigation: React.FC<{
  addStepToStepsStack: () => void;
  removeStepFromStepsStack: () => void;
  nextCard: () => void;
  previousCard: () => void;
}> = ({
  addStepToStepsStack,
  removeStepFromStepsStack,
  nextCard,
  previousCard
}) => {
  return (
    <>
      <IonItem>
        <h6 style={{ color: "#a0a0a0" }}>Training session navigation</h6>
      </IonItem>
      <div style={{ padding: "0 30px 0 30px", marginTop: 10, marginBottom: 20}}>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
          onClick={addStepToStepsStack}
        >
          next step
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
          onClick={removeStepFromStepsStack}
        >
          previous step
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
          onClick={nextCard}
        >
          next card
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="default"
          onClick={previousCard}
        >
          previous card
        </IonButton>
      </div>
    </>
  );
};

export default TrainingSessionNavigation;
