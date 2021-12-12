import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardContent,
  IonLabel,
} from "@ionic/react";
import { menu, close } from "ionicons/icons";
import React from "react";
import { Step } from "../../data/cards-context";

const CardComponent: React.FC<{ id: string; stepText: string; stepNumber: number }> =
  ({ id, stepText, stepNumber }) => (
    <IonCard id={id} style={{ width: "100%" }}>
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
          <IonIcon icon={close} style={{ marginLeft: "auto" }} />
        </IonCardTitle>
      </IonCardHeader>
      <IonCardContent>{stepText}</IonCardContent>
    </IonCard>
  );

const CardSteps: React.FC<{ steps: Step[] }> = ({ steps }) => (
  <div>
    <IonLabel>Card Steps</IonLabel>
    <div
      style={{ maxHeight: 400, marginTop: 10, paddingRight: 20 }}
      className="scroll"
    >
      {steps.map((step, idx) => (
        <CardComponent id={idx + Math.random().toString() + step.id} stepText={step.text} stepNumber={idx + 1} />
      ))}
    </div>
  </div>
);

export default CardSteps;
