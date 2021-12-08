import React, { useContext } from "react";
import {
  IonContent,
  IonPage,
  IonHeader,
  IonToolbar,
  IonTitle,
  IonGrid,
  IonCol,
  IonRow,
} from "@ionic/react";
import "./Home.css";
import BrowserPanel from "../components/BrowserPanel";
import EditorPanel from "../components/EditorPanel";
import TrainerPanel from "../components/TrainerPanel";

import CardsContext, { Card } from "../data/cards-context";
import db from "../data/db.json";

const Home: React.FC = () => {
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
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid style={{backgroundColor: "#d3d3d3", paddingBottom: 30}}>
          <IonRow class="ion-justify-content-center">
            <IonCol size-md="3">
              <BrowserPanel
                user={user}
                startingCards={startingCards}
                endingCards={endingCards}
                comonCards={comonCards}
              />
            </IonCol>
            <IonCol size-md="3">
              <EditorPanel selectedCard={cardsCtx.selectedCard} />
            </IonCol>
            <IonCol size-md="3">
              <TrainerPanel selectedCard={cardsCtx.selectedCard} />
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
