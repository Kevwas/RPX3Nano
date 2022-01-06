import React, { useContext, useRef, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
  IonIcon,
  IonModal,
  IonButton,
  IonInput,
  IonLabel,
  useIonToast,
} from "@ionic/react";
import CardsContext, { Card } from "../../data/cards-context";
import CardsSection from "./CardsSection";
import { add } from "ionicons/icons";

const BrowserPanel: React.FC<{
  user: string;
  startingCards: Card[];
  endingCards: Card[];
  comonCards: Card[];
}> = ({ user, startingCards, endingCards, comonCards }) => {
  const { addCard, toggleIsEditing } = useContext(CardsContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const titleRef = useRef<HTMLIonInputElement>(null);
  const [present] = useIonToast();

  const addNewCardHandler = () => {
    const enteredTitle = titleRef.current?.value;
    if (
      !enteredTitle ||
      enteredTitle.toString().trim().length === 0
    ) {
      return;
    }
    addCard(enteredTitle.toString(), "comon");
    toggleIsEditing(false);
    setShowModal(false);
    present(`Card ${enteredTitle.toString()} added.`, 2000);
  };

  return (
    <IonCard className="ion-card-section">
      <IonCardHeader>
        <IonCardTitle>Browser</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardContent>USER: {user}</IonCardContent>
        <CardsSection sectionName="Starting Card" cards={startingCards} />
        <CardsSection sectionName="Ending Card" cards={endingCards} />
        <CardsSection sectionName="Comon Card" cards={comonCards} />
        <button
          style={{ marginLeft: "10%", backgroundColor: "transparent" }}
          onClick={() => {
            toggleIsEditing(true);
            setShowModal(true);
          }}
        >
          <IonIcon icon={add} size="small" />
        </button>
        <IonModal
          isOpen={showModal}
          cssClass="add-card-modal"
          swipeToClose={true}
          // presentingElement={router || undefined}
          onDidDismiss={() => { 
            toggleIsEditing(false);
            setShowModal(false);
          }}
        >
          <IonCardContent style={{ height: "100%", display: "flex", flexDirection: "column" }}>
            <IonLabel>Card Title:</IonLabel>
            <IonInput
              type="text"
              ref={titleRef}
              placeholder="Write here..."
              minlength={1}
              maxlength={100}
              spellcheck
            ></IonInput>
            <IonButton
              className="ion-button"
              color="primary"
              // expand="block"
              size="small"
              onClick={addNewCardHandler}
            >
              Add card
            </IonButton>
          </IonCardContent>
        </IonModal>
      </IonCardContent>
    </IonCard>
  );
};

export default BrowserPanel;
