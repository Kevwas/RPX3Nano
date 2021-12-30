import React, { useContext } from "react";
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
  IonCardSubtitle,
} from "@ionic/react";
import CardsContext, { Step } from "../../data/cards-context";
import { SplittedText } from "../../data/types";

const TrainerVisualPanel: React.FC<{
  stepsStack: Step[];
  splittedText: SplittedText | null;
}> = ({ stepsStack, splittedText }) => {
  const cardsCtx = useContext(CardsContext);
  const isLast = (step: Step) => stepsStack.indexOf(step) + 1 === stepsStack.length;

  return (
    <>
      <IonCardHeader>
        <IonCardTitle>Trainer Visual Panel</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardTitle>{cardsCtx.selectedCard.title}</IonCardTitle>
        <IonCardSubtitle>Speaking word: {splittedText && splittedText.speakingWord}</IonCardSubtitle>
      </IonCardContent>
      <div
        style={{
          height: "100%",
          width: "100%",
          marginTop: 10,
        }}
        className="scroll"
      >
        {stepsStack.map((step) => (
          <IonCard id={Math.random().toString() + step.id}>
            {isLast(step) && splittedText ? (
              <IonCardContent>
                {splittedText.left}
                <span style={{ backgroundColor: "yellow", color: "blue" }}>
                  {splittedText.speakingWord}
                </span>
                {splittedText.right}
              </IonCardContent>
            ) : (
              <IonCardContent>{step.text}</IonCardContent>
            )}
          </IonCard>
        ))}
      </div>
    </>
  );
};

export default TrainerVisualPanel;
