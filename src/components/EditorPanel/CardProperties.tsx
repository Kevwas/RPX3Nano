import React, { useContext, useEffect, useState } from "react";
import {
  IonCardContent,
  IonItem,
  IonLabel,
  IonList,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import CardsContext, { Stage } from "../../data/cards-context";

const CardProperties: React.FC = () => {
  const { updateStage, selectedCard } = useContext(CardsContext);

  return (
    <IonList>
      <IonItem>
        <IonLabel>Card Properties</IonLabel>
      </IonItem>
      <IonCardContent>
        <IonItem>
          <IonLabel>Selected Card title: <span style={{color: '#999'}}>{selectedCard.title}</span></IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>
            Next practice interval : <span style={{color: '#999'}}>{selectedCard.userInterval}</span>
          </IonLabel>
        </IonItem>
        <IonItem className="dropdown-selector">
          <IonLabel>Stage:</IonLabel>
          <IonSelect
            value={selectedCard.stage}
            onIonChange={(e) => updateStage(selectedCard.id, e.detail.value)}
          >
            <IonSelectOption value="starting">Starting</IonSelectOption>
            <IonSelectOption value="ending">Ending</IonSelectOption>
            <IonSelectOption value="comon">Comon</IonSelectOption>
          </IonSelect>
          <div style={{ height: "20px" }}></div>
        </IonItem>
      </IonCardContent>
    </IonList>
  );
};

export default CardProperties;
