import React, { useContext, useRef, useState } from "react";
import {
  IonButton,
  IonCardContent,
  IonIcon,
  IonInput,
  IonItem,
  IonLabel,
  IonModal,
  useIonAlert,
  useIonToast,
} from "@ionic/react";
import CardsContext, { Card } from "../../data/cards-context";
import { close, create } from "ionicons/icons";

const CardsSection: React.FC<{
  sectionName: string;
  cards: Card[];
}> = ({ sectionName, cards }) => {
  const {
    deleteCard,
    setSelectedCard,
    selectedCard,
    toggleIsEditing,
    updateTitle,
  } = useContext(CardsContext);
  const [ionAlert] = useIonAlert();
  const [showModal, setShowModal] = useState<boolean>(false);
  const titleRef = useRef<HTMLIonInputElement>(null);
  const [editingCard, setEditingCard] = useState<Card>({
    id: "",
    title: "",
    steps: [],
    stage: "comon",
    userInterval: 0.25,
  });
  const [present] = useIonToast();

  const updateCardHandler = () => {
    const enteredTitle = titleRef.current?.value;
    if (!enteredTitle || enteredTitle.toString().trim().length === 0 || enteredTitle === editingCard.title) {
      return;
    }
    updateTitle(editingCard!.id, enteredTitle.toString());
    toggleIsEditing(false);
    setShowModal(false);
    present(`Card ${enteredTitle.toString()} updated.`, 2000);
  };

  return (
    <IonCardContent>
      <IonLabel>{sectionName}</IonLabel>
      <IonCardContent
        style={
          sectionName === "Comon Card"
            ? {
                maxHeight: 400,
              }
            : undefined
        }
        className={sectionName === "Comon Card" ? "scroll" : undefined}
      >
        {cards.map((card) => (
          <IonItem
            color={card.id === selectedCard.id ? "primary" : undefined}
            onClick={(e) => {
              e.stopPropagation();
              setSelectedCard(card);
            }}
            key={card.id}
          >
            <IonLabel>{card.title}</IonLabel>
            <button
              style={{ backgroundColor: "transparent" }}
              onClick={() => {
                setEditingCard(card);
                toggleIsEditing(true);
                setShowModal(true);
              }}
            >
              <IonIcon icon={create} />
            </button>
            <button
              style={{ backgroundColor: "transparent" }}
              onClick={(e) => {
                ionAlert({
                  cssClass: "my-css",
                  header: "Delete card?",
                  // message: 'Delete card?',
                  buttons: [
                    "no",
                    {
                      text: "yes",
                      handler: () => {
                        deleteCard(card.id);
                        present(`Card ${card.title} deleted.`, 2000);
                      },
                    },
                  ],
                  // onDidDismiss: (e) => console.log('did dismiss'),
                });
              }}
            >
              <IonIcon icon={close} style={{ marginLeft: "auto" }} />
            </button>
          </IonItem>
        ))}
      </IonCardContent>
      <IonModal
        isOpen={showModal}
        cssClass="add-card-modal"
        swipeToClose={true}
        onDidDismiss={() => {
          toggleIsEditing(false);
          setShowModal(false);
        }}
      >
        <IonCardContent
          style={{ height: "100%", display: "flex", flexDirection: "column" }}
        >
          <IonLabel>Card Title:</IonLabel>
          <IonInput
            type="text"
            ref={titleRef}
            value={editingCard!.title}
            placeholder="Write here..."
            minlength={1}
            maxlength={100}
            spellcheck
          />
          <IonButton
            className="ion-button"
            color="primary"
            size="small"
            onClick={updateCardHandler}
          >
            update
          </IonButton>
        </IonCardContent>
      </IonModal>
    </IonCardContent>
  );
};

export default CardsSection;
