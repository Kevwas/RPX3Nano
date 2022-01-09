import React from 'react';

// export interface User {
//     id: string;
//     name: string;
// }

export type Stage = "starting" | "comon" | "ending";
export type Difficulty = "easy" | "good" | "hard" | "forgotten";

export interface Step {
    id: string;
    text: string;
}

export interface Card {
    id: string;
    title: string;
    userInterval: number;
    stage: 'starting' | 'comon' | 'ending';
    steps: Step[];
}

interface CardContext {
    isEditing: boolean;
    cards: Card[];
    selectedCard: Card;
    immersionModeOn: boolean;
    triggerImmersionMode: (bool: boolean) => void;
    toggleIsEditing: (bool: boolean) => void;
    setSelectedCard: (card: Card) => void;
    addCard: (title: string, stage: Stage) => void;
    duplicateCard: (duplicatedCard: Card) => void;
    deleteCard: (cardId: string) => void;
    updateTitle: (cardId: string, newTitle: string) => void;
    updateStage: (cardId: string, newStage: Stage) => void;
    updateUserInterval: (cardId: string, difficulty: Difficulty) => void;
    addStep: (cardId: string, stepText: string) => void;
    deleteStep: (cardId: string, steplId: string) => void;
    updateStep: (cardId: string, steplId: string, newText: string) => void;
}

const CardsContext = React.createContext<CardContext>(
    {
        isEditing: false,
        cards: [],
        selectedCard: {
            id: '',
            title: '',
            stage: 'starting',
            steps: [],
            userInterval: 0.25
        },
        immersionModeOn: false,
        triggerImmersionMode: () => { },
        toggleIsEditing: () => { },
        setSelectedCard: () => { },
        addCard: () => { },
        duplicateCard: () => { },
        deleteCard: () => { },
        updateTitle: () => { },
        updateStage: () => { },
        updateUserInterval: () => { },
        addStep: () => { },
        deleteStep: () => { },
        updateStep: () => { },
    }
);

export default CardsContext;