import React from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonCardTitle,
} from "@ionic/react";
import { Card } from "../../data/cards-context";
import CardsSection from "./CardsSection";

const BrowserPanel: React.FC<{
  user: string;
  startingCards: Card[];
  endingCards: Card[];
  comonCards: Card[];
}> = ({ user, startingCards, endingCards, comonCards }) => (
  <IonCard className="ion-card-section">
    <IonCardHeader>
      <IonCardTitle>Browser</IonCardTitle>
      <IonCardSubtitle>User: {user}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent>
      <CardsSection sectionName="Starting Card" cards={startingCards} />
      <CardsSection sectionName="Ending Card" cards={endingCards} />
      <CardsSection sectionName="Comon Card" cards={comonCards} />
    </IonCardContent>
  </IonCard>
);

export default BrowserPanel;
