import React from 'react';

// export interface User {
//     id: string;
//     name: string;
// }

export type Stage = "starting" | "comon" | "ending";

export interface Step {
    id: string;
    text: string;
}

export interface Card {
    id: string;
    title: string;
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
}

const CardsContext = React.createContext<CardContext>(
    {
        cards: [],
        selectedCard: {
            id: '',
            title: '',
            stage: 'starting',
            steps: [],
        },
        updateSelectedCard: () => { },
        addCard: () => { },
        addStep: () => { },
        deleteStep: () => { },
        updateStep: () => { },
        updateStage: () => { },
    }
);

export default CardsContext;