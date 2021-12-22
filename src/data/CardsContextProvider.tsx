import React, { useEffect, useState } from "react";
import CardsContext, { Card, Step, Stage, Difficulty } from "./cards-context";
import jsonDB from "./db.json";
import { Storage } from "@capacitor/storage";

const CardsContextProvider: React.FC = (props) => {
  const [cards, setCards] = useState<Card[]>([{
    id: '',
    title: '',
    stage: 'starting',
    steps: [],
    userInterval: 0.25
}]);
  const [selectedCard, setSelectedCard] = useState<Card>(cards[0]);

  useEffect(() => {
    // Retrieving data from localStorage once the app inits:
    (async () => {
      const cardsData = await Storage.get({ key: "RPX3NanoCards" });
      if (cardsData.value) {
        const loadedCards = JSON.parse(cardsData.value);
        setCards(loadedCards);
        setSelectedCard(loadedCards[0]);
      } else {
        setCards(JSON.parse(JSON.stringify(jsonDB)).cards);
      }
    })()
  }, []);

  useEffect(() => {
    // Saving data on localStorage every time the cards change:
    Storage.set({ key: "RPX3NanoCards", value: JSON.stringify(cards) });
  }, [cards]);

  const updateSelectedCard = (card: Card) => setSelectedCard(card);

  const addCard = (title: string, stage: Stage) => {
    const newCard: Card = {
      id: Math.random().toString(),
      title,
      stage,
      steps: [],
      userInterval: 0.25,
    };

    setCards((prevCards) => {
      return prevCards.concat(newCard);
    });
  };

  const addStep = (cardId: string, text: string) => {
    const newStep: Step = { id: Math.random().toString(), text };

    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );
      const updatedCardSteps =
        updatedCards[updatedCardIndex].steps.concat(newStep);
      const updatedCard = { ...updatedCards[updatedCardIndex] };
      updatedCard.steps = updatedCardSteps;
      updatedCards[updatedCardIndex] = updatedCard;
      return updatedCards;
    });
  };

  const deleteStep = (cardId: string, stepId: string) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );
      const updatedCardSteps = updatedCards[updatedCardIndex].steps.filter(
        (step) => step.id !== stepId
      );
      const updatedCard = { ...updatedCards[updatedCardIndex] };
      updatedCard.steps = updatedCardSteps;
      updatedCards[updatedCardIndex] = updatedCard;
      return updatedCards;
    });
  };

  const updateStep = (cardId: string, stepId: string, newText: string) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );
      const updatedCardSteps = updatedCards[updatedCardIndex].steps.slice();
      const updatedCardStepIndex = updatedCardSteps.findIndex(
        (step) => step.id === stepId
      );
      const updatedStep = {
        ...updatedCardSteps[updatedCardStepIndex],
        text: newText,
      };
      updatedCardSteps[updatedCardIndex] = updatedStep;
      const updatedCard = { ...updatedCards[updatedCardIndex] };
      updatedCard.steps = updatedCardSteps;
      updatedCards[updatedCardIndex] = updatedCard;
      return updatedCards;
    });
  };

  const updateStage = (cardId: string, newStage: Stage) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );

      const updatedCard = { ...updatedCards[updatedCardIndex] };
      updatedCard.stage = newStage;
      updatedCards[updatedCardIndex] = updatedCard;
      setSelectedCard(updatedCard);
      return updatedCards;
    });
  };

  const updateUserInterval = (cardId: string, difficulty: Difficulty) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );

      const updatedCard = { ...updatedCards[updatedCardIndex] };
      switch (difficulty) {
        case "easy":
          updatedCard.userInterval *= 4;
          break;
        case "good":
          updatedCard.userInterval += 1;
          break;
        case "hard":
          updatedCard.userInterval /= 1.75;
          break;
        case "forgotten":
          updatedCard.userInterval = 0.25;
          break;
      }
      updatedCard.userInterval = Number(updatedCard.userInterval.toFixed(2));
      updatedCards[updatedCardIndex] = updatedCard;
      setSelectedCard(updatedCard);
      return updatedCards;
    });
  };

  return (
    <CardsContext.Provider
      value={{
        cards,
        selectedCard,
        updateSelectedCard,
        addCard,
        addStep,
        deleteStep,
        updateStep,
        updateStage,
        updateUserInterval,
      }}
    >
      {props.children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
