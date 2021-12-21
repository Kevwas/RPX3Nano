import React, { MutableRefObject, useContext } from "react";
import { IonButton, IonItem } from "@ionic/react";
import CardsContext, { Difficulty } from "../../../data/cards-context";
import SaveStateButton from "../../SaveStateButton";

const MasteryFeedback: React.FC<{ unlockMasteryFeedback: MutableRefObject<boolean> }> = ({
  unlockMasteryFeedback,
}) => {
  const { updateUserInterval, selectedCard } = useContext(CardsContext);

  const updateUserIntervalAndMasteryFeedback = (difficulty: Difficulty) => {
    updateUserInterval(selectedCard.id, difficulty);
    unlockMasteryFeedback.current = !unlockMasteryFeedback.current;
  };

  return (
    <>
      <IonItem>
        <h6 style={{ color: "#a0a0a0" }}>Mastery feedback</h6>
      </IonItem>
      <div style={{ padding: "0 30px 0 30px", marginTop: 10 }}>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          disabled={!unlockMasteryFeedback.current}
          onClick={() => updateUserIntervalAndMasteryFeedback("easy")}
        >
          easy
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          disabled={!unlockMasteryFeedback.current}
          onClick={() => updateUserIntervalAndMasteryFeedback("good")}
        >
          good
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          disabled={!unlockMasteryFeedback.current}
          onClick={() => updateUserIntervalAndMasteryFeedback("hard")}
        >
          hard
        </IonButton>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          disabled={!unlockMasteryFeedback.current}
          onClick={() => updateUserIntervalAndMasteryFeedback("forgotten")}
        >
          forgotten
        </IonButton>
      </div>
      <IonItem style={{marginTop: 20}}>
        <h6 style={{ color: "#a0a0a0" }}>Download State</h6>
      </IonItem>
      <SaveStateButton />
    </>
  )
};

export default MasteryFeedback;
