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

  useEffect(() => {
    const textToSpeech = () => {
      const stepsStackCopy = [...stepsStack];
      const text = stepsStackCopy.pop()!.text;
      speak({ text });
    };

    textToSpeech();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [stepsStack]);

  const addStepToStepsStack = () => {
    // If there is no more cards on the stepsQueu array
    // Then, update the selectedCard to be the next card on the cards array
    // And, add the first step of the new card to the stepsStack
    // And, add the rest of the steps of the cards to the stepsQueu
    if (stepsQueu.length === 0) {
      const indexOfCurrentCard = cardsCtx.cards.findIndex(
        (card) => card.id === selectedCard.id
      );
      // console.log('Index of Current card: ', indexOfCurrentCard);
      if (!!cardsCtx.cards[indexOfCurrentCard + 1]) {
        const newCard = cardsCtx.cards[indexOfCurrentCard + 1];
        cardsCtx.updateSelectedCard(newCard);
        setStepsStack([newCard.steps[0]]);
        setStepsQueu(newCard.steps.slice(1));
      } else {
        // Training done logic ?
        // If the are no more cards
        // Then, set the selected card to be the first card of the cards array
        cardsCtx.updateSelectedCard(cardsCtx.cards[0]);
        setStepsStack([cardsCtx.cards[0].steps[0]]);
        setStepsQueu(cardsCtx.cards[0].steps.slice(1));
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
    if (stepsStack.length === 1) {
      const indexOfCurrentCard = cardsCtx.cards.findIndex(
        (card) => card.id === selectedCard.id
      );
      if (!!cardsCtx.cards[indexOfCurrentCard - 1]) {
        const newCard = cardsCtx.cards[indexOfCurrentCard - 1];
        cardsCtx.updateSelectedCard(newCard);
        setStepsStack([newCard.steps[0]]);
        setStepsQueu(newCard.steps.slice(1));
      }
    } else {
      const stepsStackCopy = [...stepsStack];
      const stepsQueuCopy = [...stepsQueu];

      stepsQueuCopy.unshift(stepsStackCopy.pop()!);

      setStepsStack(stepsStackCopy);
      setStepsQueu(stepsQueuCopy);
    }
  };

  const reStartTraining = () => {
    setStepsStack([selectedCard.steps[0]]);
    setStepsQueu(selectedCard.steps.slice(1));
  };

  const nextCard = () => {
    const indexOfCurrentCard = cardsCtx.cards.findIndex(
      (card) => card.id === selectedCard.id
    );
    const next_card = cardsCtx.cards[indexOfCurrentCard + 1]
    if (!!next_card) {
      cardsCtx.updateSelectedCard(next_card);
      setStepsStack([next_card.steps[0]]);
      setStepsQueu(next_card.steps.slice(1));
    } else {
      cardsCtx.updateSelectedCard(cardsCtx.cards[0]);
      setStepsStack([cardsCtx.cards[0].steps[0]]);
    setStepsQueu(cardsCtx.cards[0].steps.slice(1));
    }
  };

  const previousCard = () => {
    const indexOfCurrentCard = cardsCtx.cards.findIndex(
      (card) => card.id === selectedCard.id
    );
    const previous_card = cardsCtx.cards[indexOfCurrentCard - 1]
    if (!!previous_card) {
      cardsCtx.updateSelectedCard(previous_card);
      setStepsStack([previous_card.steps[0]]);
      setStepsQueu(previous_card.steps.slice(1));
    }
  };

  // useEffect(() => {
  //   console.log('cards: ', cardsCtx.cards);
  //   console.log('Steps Stack: ', stepsStack);
  //   console.log('Steps Queu: ', stepsQueu);
  //   console.log('SelectedCard: ', selectedCard);
  //   console.log('__________________________');
  // }, [selectedCard, stepsStack])

  return (
    <IonCard className="ion-card-section">
      <TrainerVisualPanel
        stepsStack={stepsStack}
      />
      <TrainerControlPanel
        selectedCard={selectedCard}
        addStepToStepsStack={addStepToStepsStack}
        removeStepFromStepsStack={removeStepFromStepsStack}
        nextCard={nextCard}
        previousCard={previousCard}
        reStartTraining={reStartTraining}
      />
    </IonCard>
  );
};

export default TrainerPanel;
