import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import CardProperties from "./CardProperties";
import CardSteps from "./CardSteps";
import CardActionController from "./CardActionController";

const EditorPanel: React.FC = () => (
  <IonCard className="ion-card-section">
    <IonCardHeader>
      <IonCardTitle>Editor</IonCardTitle>
    </IonCardHeader>

    <IonCardContent>
      <CardProperties />
      <CardSteps />
      <CardActionController />
    </IonCardContent>
  </IonCard>
);

export default EditorPanel;
