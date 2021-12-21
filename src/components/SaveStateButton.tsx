import React, { useContext } from "react";
import CardsContext from "../data/cards-context";
import { saveAs } from "file-saver";
import { IonButton } from "@ionic/react";

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
    <>
      <IonButton
        color="secondary"
        expand="block"
        size="small"
        onClick={saveStateToJSON}
      >
        .json
      </IonButton>
      <IonButton
        color="secondary"
        expand="block"
        size="small"
        onClick={saveStateToCSV}
      >
        .csv
      </IonButton>
    </>
  );
};

export default SaveStateButton;
