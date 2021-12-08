import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
} from "@ionic/react";
import React from "react";
import { Step } from "../../data/cards-context";

const TrainerVisualPanel: React.FC<{
  selectedCardTitle: string;
  stepsStack: Step[];
}> = ({ selectedCardTitle, stepsStack }) => (
  <>
    <IonCardHeader>
      <IonCardTitle>Trainer Visual Panel</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{selectedCardTitle}</IonCardTitle>
          {/* <IonCardSubtitle></IonCardSubtitle> */}
        </IonCardHeader>
        <IonCardContent>
          {
            stepsStack.map(step => 
              <IonCard id={Math.random().toString() + step.id}>
                <IonCardContent>{step.text}</IonCardContent>
              </IonCard>
            )
          }
        </IonCardContent>
      </IonCard>
    </IonCardContent>
  </>
);

export default TrainerVisualPanel;
