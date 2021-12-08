import React, { useContext } from "react";
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import CardsContext, { Card, Stage } from "../../data/cards-context";

const CardProperties: React.FC<{
  selectedCard: Card;
}> = ({ selectedCard }) => {
  const cardsCtx = useContext(CardsContext);

  const updateCardStage = (newStage: Stage) => {
    cardsCtx.updateStage(selectedCard.id, newStage);
  };

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Card Properties</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel>Selected Card title: {selectedCard.title}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>Next practice interval : ...</IonLabel>
      </IonItem>
      <IonItem className="dropdown-selector">
        <IonLabel>Stage:</IonLabel>
        <IonSelect
          value={selectedCard.stage}
          onIonChange={(e) => updateCardStage(e.detail.value)}
        >
          <IonSelectOption value="starting">Starting</IonSelectOption>
          <IonSelectOption value="ending">Ending</IonSelectOption>
          <IonSelectOption value="comon">Comon</IonSelectOption>
        </IonSelect>
        <div style={{ height: "20px" }}></div>
      </IonItem>
    </IonList>
  );
};

export default CardProperties;
