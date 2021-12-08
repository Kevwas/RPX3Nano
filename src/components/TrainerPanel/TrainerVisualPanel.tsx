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
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>{cardsCtx.selectedCard.title}</IonCardTitle>
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
};

export default TrainerVisualPanel;
