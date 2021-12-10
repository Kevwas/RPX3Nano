import {
  IonCardContent,
  IonItem,
  IonLabel,
} from "@ionic/react";
import React from "react";
import { Card } from "../../data/cards-context";

const CardsSection: React.FC<{
  sectionName: string;
  cards: Card[];
}> = ({ sectionName, cards }) => {
  return (
    <IonCardContent>
      <IonLabel>{sectionName}</IonLabel>
      <IonCardContent>
        {cards.map((card) => (
          <IonItem key={card.id}>
            <IonLabel>{card.title}</IonLabel>
          </IonItem>
        ))}
      </IonCardContent>
    </IonCardContent>
  );
};

export default CardsSection;
