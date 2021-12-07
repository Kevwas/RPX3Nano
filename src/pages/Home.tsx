import React, { useContext, useState, useEffect } from "react";
import {
  IonGrid,
  IonRow,
  IonCol,
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
} from "@ionic/react";
import "./Home.css";
import BrowserPanel from "../components/BrowserPanel";
import EditorPanel from "../components/EditorPanel";
import TrainerPanel from "../components/TrainerPanel";

import CardsContext, { Card } from "../data/cards-context";
import db from "../data/db.json";

const GridExample: React.FC = () => {
  const user = JSON.parse(JSON.stringify(db)).user;
  const cardsCtx = useContext(CardsContext);

  const startingCards = ((): Card[] => {
    const cards = [...cardsCtx.cards!];
    return [cards[0]];
  })();

  const endingCards = ((): Card[] => {
    const cards = [...cardsCtx.cards!];
    return [cards.pop()!];
  })();

  const comonCards = (() => {
    const cards = [...cardsCtx.cards!];
    cards.pop();
    cards.shift();

    return cards;
  })();

  return (
    <IonPage className="ion-page">
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>RPXNano Page</IonTitle>
          {/* {isPlatform('ios') && <ToolbarAction link="/new-memory" icon={add} />} */}
        </IonToolbar>
      </IonHeader>
      <IonContent color="medium" fullscreen>
        <IonGrid>
          <IonRow className="ion-align-self-center">
            <IonCol style={{ marginBottom: "30px" }}>
              <BrowserPanel
                user={user}
                startingCards={startingCards}
                endingCards={endingCards}
                comonCards={comonCards}
              />
            </IonCol>
            <IonCol style={{ marginBottom: "30px", justifyContent: "center" }}>
              <EditorPanel selectedCard={cardsCtx.selectedCard} />
            </IonCol>
            <IonCol style={{ marginBottom: "30px" }}>
              <TrainerPanel />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default GridExample;
