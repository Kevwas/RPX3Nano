import React, { useContext } from "react";
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
} from "@ionic/react";
import CardsContext, { Step } from "../../data/cards-context";

const TrainerVisualPanel: React.FC<{
  stepsStack: Step[];
}> = ({ stepsStack }) => {
  const cardsCtx = useContext(CardsContext);
  return (
    <>
      <IonCardHeader>
        <IonCardTitle>Trainer Visual Panel</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardTitle>{cardsCtx.selectedCard.title}</IonCardTitle>
      </IonCardContent>
      <div
        style={{
          height: '100%',
          width: "100%",
          marginTop: 10,
        }}
        className="scroll"
      >
        {stepsStack.map((step) => (
          <IonCard id={Math.random().toString() + step.id}>
            <IonCardContent>{step.text}</IonCardContent>
          </IonCard>
        ))}
      </div>
    </>
  );
};

export default TrainerVisualPanel;
