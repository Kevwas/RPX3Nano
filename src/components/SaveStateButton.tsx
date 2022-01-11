import React, { useContext } from "react";
import CardsContext from "../data/cards-context";
import { saveAs } from "file-saver";
import { IonButton, IonCardContent } from "@ionic/react";

const SaveStateButton: React.FC = () => {
  const cardsCTX = useContext(CardsContext);
  const jsonContext = JSON.stringify(cardsCTX);
  const blobJSON = new Blob([jsonContext], {
    type: "application/json;charset=utf-8",
  });
  const blobCSV = new Blob([jsonContext], {
    type: "data:text/csv;charset=utf-8",
  });

  const saveStateToJSON = () => {
    saveAs(blobJSON, "RPX3Nano-State.json");
  };
  const saveStateToCSV = () => {
    saveAs(blobCSV, "RPX3Nano-State.csv");
  };
  return (
    <IonCardContent style={{ display: "flex", padding: "0 30px 0 30px", marginTop: 10, marginBottom: 20 }}>
      <IonButton
        color="secondary"
        expand="block"
        size="small"
        onClick={saveStateToJSON}
        style={{flex: 1}}
      >
        .json
      </IonButton>
      <IonButton
        color="secondary"
        expand="block"
        size="small"
        onClick={saveStateToCSV}
        style={{flex: 1}}
      >
        .csv
      </IonButton>
    </IonCardContent>
  );
};

export default SaveStateButton;
