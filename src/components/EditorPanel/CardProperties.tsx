import React, { useContext } from "react";
import {
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import CardsContext from "../../data/cards-context";

const CardProperties: React.FC = () => {
  const { updateStage, selectedCard } = useContext(CardsContext);

  return (
    <IonList>
      <IonListHeader>
        <IonLabel>Card Properties</IonLabel>
      </IonListHeader>
      <IonItem>
        <IonLabel>Selected Card title: {selectedCard.title}</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          Next practice interval : {selectedCard.userInterval}
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
    </IonList>
  );
};

export default CardProperties;
