import React, { useContext, useEffect, useRef, useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardContent,
  IonItem,
  IonLabel,
  useIonToast,
  IonModal,
  IonInput,
  IonButton,
  useIonAlert,
} from "@ionic/react";
import { menu, close, add, create } from "ionicons/icons";
import CardsContext, { Step } from "../../data/cards-context";

const CardComponent: React.FC<{
  stepId: string;
  stepText: string;
  stepNumber: number;
}> = ({ stepId, stepText, stepNumber }) => {
  const { deleteStep, updateStep, selectedCard, toggleIsEditing } =
    useContext(CardsContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const titleRef = useRef<HTMLIonInputElement>(null);
  const [present] = useIonToast();
  const [ionAlert] = useIonAlert();

  const updateStepHandler = () => {
    const enteredTitle = titleRef.current?.value;
    if (
      !enteredTitle ||
      enteredTitle.toString().trim().length === 0 ||
      enteredTitle === stepText
    ) {
      return;
    }
    updateStep(selectedCard.id, stepId, enteredTitle.toString());
    toggleIsEditing(false);
    setShowModal(false);
    present(`Card ${enteredTitle.toString()} updated.`, 2000);
  };

  return (
    <IonCard id={stepId} style={{ width: "100%" }}>
      <IonCardHeader>
        <IonCardTitle
          style={{
            display: "flex",
            maxHeight: "30px",
            alignItems: "center",
          }}
        >
          <IonIcon icon={menu} style={{ marginRight: "15px" }} />
          <p>Step {stepNumber}</p>
          <button
            style={{ backgroundColor: "transparent", marginLeft: "auto" }}
            onClick={() => {
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
                header: "Delete step?",
                // message: 'Delete card?',
                buttons: [
                  "no",
                  {
                    text: "yes",
                    handler: () => {
                      deleteStep(selectedCard.id, stepId);
                      present(`Step ${stepText} deleted.`, 2000);
                    },
                  },
                ],
                // onDidDismiss: (e) => console.log('did dismiss'),
              });
            }}
          >
            <IonIcon icon={close} />
          </button>
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{stepText}</IonCardContent>
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
          <IonLabel>Step Text:</IonLabel>
          <IonInput
            type="text"
            ref={titleRef}
            value={stepText}
            placeholder="Write here..."
            minlength={1}
            maxlength={500}
            spellcheck
          />
          <IonButton
            className="ion-button"
            color="primary"
            size="small"
            onClick={updateStepHandler}
          >
            update
          </IonButton>
        </IonCardContent>
      </IonModal>
    </IonCard>
  );
};

const CardSteps: React.FC = () => {
  const { selectedCard, toggleIsEditing, addStep, cards } = useContext(CardsContext);
  const [showModal, setShowModal] = useState<boolean>(false);
  const titleRef = useRef<HTMLIonInputElement>(null);
  const [present] = useIonToast();

  const addNewStepHandler = () => {
    const enteredTitle = titleRef.current?.value;
    if (!enteredTitle || enteredTitle.toString().trim().length === 0) {
      return;
    }
    addStep(selectedCard.id, enteredTitle.toString());
    toggleIsEditing(false);
    setShowModal(false);
    present(`Step ${enteredTitle.toString()} added.`, 2000);
  };

  return (
    <div>
      <IonItem>Card Steps</IonItem>
      <IonCardContent
        style={{
          maxHeight: 400,
          minHeight: 200,
          marginTop: 10,
          paddingRight: 20,
        }}
        className="scroll"
      >
        {selectedCard.steps.map((step, idx) => (
          <CardComponent
            stepId={step.id}
            stepText={step.text}
            stepNumber={idx + 1}
          />
        ))}
      </IonCardContent>
      <button
        style={{
          marginLeft: "5%",
          marginTop: 10,
          backgroundColor: "transparent",
          display: "flex",
          alignItems: "center",
        }}
        onClick={() => {
          toggleIsEditing(true);
          setShowModal(true);
        }}
      >
        <IonIcon icon={add} size="small" />
        <IonLabel style={{color: '#999'}}>Add Step</IonLabel>
      </button>
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
          <IonLabel>Step Text:</IonLabel>
          <IonInput
            type="text"
            ref={titleRef}
            placeholder="Write here..."
            minlength={1}
            maxlength={500}
            spellcheck
          />
          <IonButton
            className="ion-button"
            color="primary"
            size="small"
            onClick={addNewStepHandler}
          >
            add
          </IonButton>
        </IonCardContent>
      </IonModal>
    </div>
  );
};

export default CardSteps;
