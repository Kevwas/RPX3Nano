import React, { useEffect, useRef, useState } from "react";
import CardsContext, { Card, Step, Stage, Difficulty } from "./cards-context";
import jsonDB from "./db.json";
import { Storage } from "@capacitor/storage";

const CardsContextProvider: React.FC = (props) => {
  const [cards, setCards] = useState<Card[]>([{
    id: '',
    title: 'Select a card in the Browser Panel',
    stage: 'starting',
    steps: [],
    userInterval: 0
}]);
  const [selectedCard, set_SelectedCard] = useState<Card>(cards[0]);

  const [immersionModeOn, setImmersionModeOn] = useState<boolean>(false);
  const triggerImmersionMode = (bool: boolean) => setImmersionModeOn(bool);

  const [isEditing, setIsEditing] = useState<boolean>(false);
  const toggleIsEditing = (bool: boolean) => setIsEditing(bool);

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

  const setSelectedCard = (card: Card) => set_SelectedCard(card);

  const addCard = (title: string, stage: Stage) => {
    const newCard: Card = {
      id: Math.random().toString(),
      title,
      stage,
      steps: [],
      userInterval: 0.25,
    };
    
    setSelectedCard(newCard);
    setCards((prevCards) => {
      return prevCards.concat(newCard);
    });
  };

  const duplicateCard = (duplicatedCard: Card) => {
    const newCard: Card = {
      id: Math.random().toString(),
      title: duplicatedCard.title,
      stage: duplicatedCard.stage,
      steps: duplicatedCard.steps,
      userInterval: duplicatedCard.userInterval,
    };

    setSelectedCard(newCard);
    setCards((prevCards) => {
      return prevCards.concat(newCard);
    });
  }

  const deleteCard = (cardId: string) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const deletedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );

      updatedCards.splice(deletedCardIndex, 1);

      if (deletedCardIndex === cards.indexOf(selectedCard)) {
        if (!!cards[deletedCardIndex - 1]) {
          set_SelectedCard(cards[deletedCardIndex - 1]);
        } else {
          set_SelectedCard(cards[deletedCardIndex + 1]);
        }
      }

      return updatedCards;
    });
  };

  const findAndUpdateCard = (cardId: string, callback: (updatedCard: Card) => void) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );

      const updatedCard = { ...updatedCards[updatedCardIndex] };

      callback(updatedCard);

      updatedCards[updatedCardIndex] = updatedCard;
      setSelectedCard(updatedCard);
      return updatedCards;
    });
  }

  const updateTitle = (cardId: string, newTitle: string) => {
    findAndUpdateCard(cardId, card => card.title = newTitle);
  };

  const updateStage = (cardId: string, newStage: Stage) => {
    findAndUpdateCard(cardId, card => card.stage = newStage);
  };

  const updateUserInterval = (cardId: string, difficulty: Difficulty) => {
    findAndUpdateCard(cardId, card => {
      switch (difficulty) {
        case "easy":
          card.userInterval *= 4;
          break;
        case "good":
          card.userInterval += 1;
          break;
        case "hard":
          card.userInterval /= 1.75;
          break;
        case "forgotten":
          card.userInterval = 0.25;
          break;
      }
      card.userInterval = Number(card.userInterval.toFixed(2));
    });
  };

  const addStep = (cardId: string, text: string) => {
    const newStep: Step = { id: Math.random().toString(), text };

    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );
      const updatedCard = { ...updatedCards[updatedCardIndex] };

      const updatedCardSteps =
        updatedCards[updatedCardIndex].steps.concat(newStep);

      updatedCard.steps = updatedCardSteps;
      updatedCards[updatedCardIndex] = updatedCard;
      setSelectedCard(updatedCard);
      return updatedCards;
    });
  };

  const deleteStep = (cardId: string, stepId: string) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );
      const updatedCard = { ...updatedCards[updatedCardIndex] };

      const updatedCardSteps = updatedCards[updatedCardIndex].steps.filter(
        (step) => step.id !== stepId
      );

      updatedCard.steps = updatedCardSteps;
      updatedCards[updatedCardIndex] = updatedCard;
      setSelectedCard(updatedCard);
      return updatedCards;
    });
  };

  const updateStep = (cardId: string, stepId: string, newText: string) => {
    setCards((prevCards) => {
      const updatedCards = [...prevCards];
      const updatedCardIndex = updatedCards.findIndex(
        (card) => card.id === cardId
      );
      const updatedCard = { ...updatedCards[updatedCardIndex] };

      // const updatedCardSteps = updatedCards[updatedCardIndex].steps.slice();
      const updatedCardSteps = updatedCard.steps;
      const updatedCardStepIndex = updatedCardSteps.findIndex(
        (step) => step.id === stepId
      );
      const updatedStep = {
        ...updatedCardSteps[updatedCardStepIndex],
        text: newText,
      };
      updatedCardSteps[updatedCardStepIndex] = updatedStep;

      updatedCard.steps = updatedCardSteps;
      updatedCards[updatedCardIndex] = updatedCard;
      setSelectedCard(updatedCard);
      return updatedCards;
    });
  };

  return (
    <CardsContext.Provider
      value={{
        isEditing,
        toggleIsEditing,
        cards,
        selectedCard,
        setSelectedCard,
        addCard,
        duplicateCard,
        deleteCard,
        updateTitle,
        updateStage,
        addStep,
        deleteStep,
        updateStep,
        updateUserInterval,
        immersionModeOn,
        triggerImmersionMode
      }}
    >
      {props.children}
    </CardsContext.Provider>
  );
};

export default CardsContextProvider;
