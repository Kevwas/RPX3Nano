import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import { Card } from "../../data/cards-context";
import CardProperties from "./CardProperties";
import CardSteps from "./CardSteps";
import CardActionController from "./CardActionController";

const EditorPanel: React.FC<{
  selectedCard: Card;
}> = ({ selectedCard }) => (
  <IonCard className="ion-card-section">
    <IonCardHeader>
      <IonCardTitle>Editor</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <CardProperties selectedCard={selectedCard} />
      <CardSteps steps={selectedCard.steps} />
      <CardActionController />
    </IonCardContent>
  </IonCard>
);

export default EditorPanel;
