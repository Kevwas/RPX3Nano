import React, { useContext } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonIcon,
  IonCardContent,
  IonItem,
} from "@ionic/react";
import { menu, close } from "ionicons/icons";
import CardsContext from "../../data/cards-context";

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

const CardSteps: React.FC = () => {
  const { selectedCard } = useContext(CardsContext);

  return (
    <div>
      <IonItem>Card Steps</IonItem>
      <IonCardContent
        style={{ maxHeight: 400, minHeight: 200, marginTop: 10, paddingRight: 20 }}
        className="scroll"
      >
        {selectedCard.steps.map((step, idx) => (
          <CardComponent id={idx + Math.random().toString() + step.id} stepText={step.text} stepNumber={idx + 1} />
        ))}
      </IonCardContent>
    </div>
  )
};

export default CardSteps;
