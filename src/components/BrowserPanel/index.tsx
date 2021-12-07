import React from "react";
import {
  IonRow,
  IonCol,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonCard,
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
    {/* Column Name */}
    <IonRow>
      <IonList>
        <IonListHeader>
          <h5>Browser</h5>
        </IonListHeader>
      </IonList>
    </IonRow>

    {/* Current User */}
    <IonRow>
      <IonCol>
        <IonItem style={{ width: "40%" }} className="dropdown-selector">
          <IonLabel>User: {user}</IonLabel>
        </IonItem>
      </IonCol>
    </IonRow>

    {/* Cards Sections */}
    <CardsSection sectionName="Starting Card" cards={startingCards} />
    <CardsSection sectionName="Ending Card" cards={endingCards} />
    <CardsSection sectionName="Comon Card" cards={comonCards} />
  </IonCard>
);

export default BrowserPanel;
