import { IonItem, IonLabel, IonList, IonListHeader, IonRow } from '@ionic/react';
import React from 'react';
import { Card } from "../../data/cards-context";

const CardsSection: React.FC<{
  sectionName: string;
  cards: Card[];
}> = ({ sectionName, cards }) => {
  return (
    <IonRow>
      <IonList>
        <IonListHeader>
          <h5>{sectionName}</h5>
        </IonListHeader>
        {cards.map((card) => (
          <IonItem key={card.id}>
            <IonLabel>{card.title}</IonLabel>
          </IonItem>
        ))}
      </IonList>
    </IonRow>
  )
}

export default CardsSection;
