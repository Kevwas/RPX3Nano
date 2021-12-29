import React, { useContext, useEffect } from "react";
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
  IonCardSubtitle,
} from "@ionic/react";
import CardsContext, { Step } from "../../data/cards-context";

const TrainerVisualPanel: React.FC<{
  stepsStack: Step[];
  speakingWord: string;
  spokenWords: string[];
  speaking: boolean;
}> = ({ stepsStack, speakingWord, spokenWords, speaking }) => {
  const cardsCtx = useContext(CardsContext);
  const isLast = (step) => stepsStack.indexOf(step) + 1 === stepsStack.length;
  // useEffect(() => {spokenWords.shift()}, [spokenWords]);

  return (
    <>
      <IonCardHeader>
        <IonCardTitle>Trainer Visual Panel</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardTitle>{cardsCtx.selectedCard.title}</IonCardTitle>
        <IonCardSubtitle>Speaking word: {speakingWord}</IonCardSubtitle>
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
            {isLast(step) ? (
              <IonCardContent>
                {spokenWords.length > 0 ? (
                  <span style={{ backgroundColor: "yellow", color: "blue" }}>
                    {spokenWords.join(" ")}
                  </span>
                ) : (
                  step.text
                )}
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
