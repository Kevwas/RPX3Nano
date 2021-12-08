import React, { useState, useEffect, useContext } from "react";
import { IonCard } from "@ionic/react";
import TrainerVisualPanel from "./TrainerVisualPanel";
import TrainerControlPanel from "./TrainerControlPanel";
import CardsContext, { Card, Step } from "../../data/cards-context";
import { useSpeechSynthesis } from "react-speech-kit";

const TrainerPanel: React.FC<{ selectedCard: Card }> = ({ selectedCard }) => {
  const cardsCtx = useContext(CardsContext);
  const [stepsStack, setStepsStack] = useState<Step[]>([selectedCard.steps[0]]);
  const [stepsQueu, setStepsQueu] = useState<Step[] | []>(
    selectedCard.steps.slice(1)
  );
  const { speak } = useSpeechSynthesis();

  const textToSpeech = () => {
    const stepsStackCopy = [...stepsStack];
    const text = stepsStackCopy.pop()!.text;
    speak({ text });
  };

  const addStepToStepsStack = () => {
    // If there is no more cards on the stepsQueu array
    // Then, update the selectedCard to be the next card on the cards array
    // And, add the first step of the new card to the stepsStack
    // And, add the rest of the steps of the cards to the stepsQueu
    if (stepsQueu.length === 0) {
      const indexOfCurrentCard = cardsCtx.cards.findIndex(
        (card) => card.id === selectedCard.id
      );
      if (cardsCtx.cards[indexOfCurrentCard + 1]) {
        const newCard = cardsCtx.cards[indexOfCurrentCard + 1];
        cardsCtx.updateSelectedCard(newCard);
        setStepsStack([selectedCard.steps[0]]);
        setStepsQueu(selectedCard.steps.slice(1));
      } else {
        // Training done logic
      }
      // If there are steps remaining in the stepsQueu array
      // then shift the first step of the stepsQueu array
      // and add this shifted step to the the stepsStack
    } else {
      const stepsStackCopy = [...stepsStack];
      const stepsQueuCopy = [...stepsQueu];

      stepsStackCopy.push(stepsQueuCopy.shift()!);

      setStepsStack(stepsStackCopy);
      setStepsQueu(stepsQueuCopy);
    }
  };

  const removeStepFromStepsStack = () => {
    if (stepsStack.length === 0) {
      const indexOfCurrentCard = cardsCtx.cards.findIndex(
        (card) => card.id === selectedCard.id
      );
      if (cardsCtx.cards[indexOfCurrentCard - 1]) {
        const newCard = cardsCtx.cards[indexOfCurrentCard - 1];
        cardsCtx.updateSelectedCard(newCard);
        setStepsStack([selectedCard.steps[0]]);
        setStepsQueu(selectedCard.steps.slice(1));
      }
    } else {
      const stepsStackCopy = [...stepsStack];
      const stepsQueuCopy = [...stepsQueu];

      stepsQueuCopy.unshift(stepsStackCopy.pop()!);

      stepsStackCopy.push(stepsQueuCopy.shift()!);

      setStepsStack(stepsStackCopy);
      setStepsQueu(stepsQueuCopy);
    }
  };

  const reStartTraining = () => {
    setStepsStack([selectedCard.steps[0]]);
    setStepsQueu(selectedCard.steps.slice(1));
  };

  // Update stepsStack and stepsQueu if selectedCard changes
  useEffect(() => {
    setStepsStack([selectedCard.steps[0]]);
    setStepsQueu(selectedCard.steps.slice(1));
  }, [selectedCard]);

  return (
    <IonCard className="ion-card-section">
      <TrainerVisualPanel
        selectedCardTitle={selectedCard.title}
        stepsStack={stepsStack}
      />
      <TrainerControlPanel selectedCard={selectedCard} />
    </IonCard>
  );
};

export default TrainerPanel;
