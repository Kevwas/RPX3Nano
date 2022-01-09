import React, { useContext, useEffect, useState } from "react";
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
// import Swal from 'sweetalert2';
// import withReactContent from 'sweetalert2-react-content';


import CardsContext, { Card } from "../data/cards-context";
import db from "../data/db.json";

// const MySwal = withReactContent(Swal);

const Home: React.FC = () => {
  const user = JSON.parse(JSON.stringify(db)).user;
  const { cards, immersionModeOn } = useContext(CardsContext);
  const [confetti, setConfetti] = useState<boolean>(false);
  // const []

  const showConfetti = () => {
    if (!confetti) {
      setConfetti(true);
      setTimeout(() => {
        setConfetti(false);
      }, 5000);
    }
  };

  const getStartingCards = ((): Card[] => {
    const cardsCopy = [...cards!];
    return [cardsCopy[0]];
  })();
  const [startingCards, setStartingCards] = useState<Card[]>(getStartingCards);

  const getEndingCards = ((): Card[] => {
    const cardsCopy = [...cards!];
    return [cardsCopy.pop()!];
  })();
  const [endingCards, setEndingCards] = useState<Card[]>(getEndingCards);

  const getComonCards = (() => {
    const cardsCopy = [...cards!];
    cardsCopy.pop();
    cardsCopy.shift();

    return cardsCopy;
  })();
  const [comonCards, setComonCards] = useState<Card[]>(getComonCards);

  useEffect(() => {
    setStartingCards(getStartingCards);
    setEndingCards(getEndingCards);
    setComonCards(getComonCards);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [cards]);

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
            {!immersionModeOn &&
              <>
                <IonCol size="12" size-md="6" size-lg="6" size-xl="3">
                  <BrowserPanel
                    user={user}
                    startingCards={startingCards}
                    endingCards={endingCards}
                    comonCards={comonCards}
                  />
                </IonCol>
                <IonCol size="12" size-md="6" size-lg="6" size-xl="3">
                  <EditorPanel />
                </IonCol>
              </>
            }
            {/* <IonCol size-md="3">
              <TrainerPanel
                selectedCard={cardsCtx.selectedCard}
                showConfetti={showConfetti}
              />
            </IonCol> */}
            <TrainerPanel
              showConfetti={showConfetti}
            />
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Home;
