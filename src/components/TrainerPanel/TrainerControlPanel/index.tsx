import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
} from "@ionic/react";
import React from "react";
import TrainingSessionSetup from "./TrainingSessionSetup";
import TrainingSessionNavigation from "./TrainingSessionNavigation";
import MasteryFeedback from "./MasteryFeedback";
import { Card } from "../../../data/cards-context";

const TrainerControlPanel: React.FC<{ selectedCard: Card }> = ({ selectedCard }) => {
  return (
    <>
      <IonCardHeader>
        <IonCardTitle>Trainer Control Panel</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <TrainingSessionSetup />
          <TrainingSessionNavigation />
          <MasteryFeedback />
        </IonList>
      </IonCardContent>
    </>
  );
};

export default TrainerControlPanel;
