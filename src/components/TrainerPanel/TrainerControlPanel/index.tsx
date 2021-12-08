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

const TrainerControlPanel: React.FC<{
  selectedCard: Card;
  addStepToStepsStack: () => void;
  removeStepFromStepsStack: () => void;
  nextCard: () => void;
  previousCard: () => void;
  reStartTraining: () => void;
}> = ({
  selectedCard,
  addStepToStepsStack,
  removeStepFromStepsStack,
  nextCard,
  previousCard,
  reStartTraining,
}) => {
  return (
    <>
      <IonCardHeader>
        <IonCardTitle>Trainer Control Panel</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonList>
          <TrainingSessionSetup
            selectedCard={selectedCard}
            reStartTraining={reStartTraining}
          />
          <TrainingSessionNavigation
            addStepToStepsStack={addStepToStepsStack}
            removeStepFromStepsStack={removeStepFromStepsStack}
            nextCard={nextCard}
            previousCard={previousCard}
          />
          <MasteryFeedback />
        </IonList>
      </IonCardContent>
    </>
  );
};

export default TrainerControlPanel;
