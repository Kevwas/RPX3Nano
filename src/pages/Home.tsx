import React, { useContext, useState } from "react";
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
import Confetti from "../components/Confetti";
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';


import CardsContext, { Card } from "../data/cards-context";
import db from "../data/db.json";

const MySwal = withReactContent(Swal);

const Home: React.FC = () => {
  const user = JSON.parse(JSON.stringify(db)).user;
  const cardsCtx = useContext(CardsContext);
  const [confetti, setConfetti] = useState<boolean>(false);

  const showConfetti = () => {
    if (!confetti) {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 5000);
    }
  };

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

  // const ShowCongratsAlert = () => (
  //   MySwal.fire({
  //     icon: 'success',
  //     title: 'Good job!',
  //     text: `You finished your training for the card: ${cardsCtx.selectedCard.title}!`,
  //   })
  // );

  return (
    <IonPage className="ion-page">
      {confetti && <Confetti />}
      <IonHeader>
        <IonToolbar color="primary">
          <IonTitle>RPX3Nano Page</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent color="medium" fullscreen>
        <IonGrid style={{ paddingBottom: 30 }}>
          <IonRow class="ion-justify-content-center">
            <IonCol size="12" size-md="6" size-lg="3" size-xl="2">
              <BrowserPanel
                user={user}
                startingCards={startingCards}
                endingCards={endingCards}
                comonCards={comonCards}
              />
            </IonCol>
            <IonCol size="12" size-md="6" size-lg="3" size-xl="2">
              <EditorPanel selectedCard={cardsCtx.selectedCard} />
            </IonCol>
            {/* <IonCol size-md="3">
              <TrainerPanel
                selectedCard={cardsCtx.selectedCard}
                showConfetti={showConfetti}
              />
            </IonCol> */}
            <TrainerPanel
              selectedCard={cardsCtx.selectedCard}
              showConfetti={showConfetti}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
