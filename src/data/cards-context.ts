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
    cards: Card[];
    selectedCard: Card;
    updateSelectedCard: (card: Card) => void;
    addCard: (title: string, stage: Stage) => void;
    addStep: (cardId: string, stepText: string) => void;
    deleteStep: (cardId: string, steplId: string) => void;
    updateStep: (cardId: string, steplId: string, newText: string) => void;
    updateStage: (cardId: string, newStage: Stage) => void;
    updateUserInterval: (cardId: string, difficulty: Difficulty) => void;
}

const CardsContext = React.createContext<CardContext>(
    {
        cards: [],
        selectedCard: {
            id: '',
            title: '',
            stage: 'starting',
            steps: [],
            userInterval: 0.25
        },
        updateSelectedCard: () => { },
        addCard: () => { },
        addStep: () => { },
        deleteStep: () => { },
        updateStep: () => { },
        updateStage: () => { },
        updateUserInterval: () => { },
    }
);

export default CardsContext;