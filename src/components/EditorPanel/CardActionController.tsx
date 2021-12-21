import {
  IonButton,
  IonLabel,
} from "@ionic/react";
import React from "react";

const CardActionController: React.FC = () => (
  <div style={{paddingRight: 20, marginTop: 20}}>
    <IonLabel>
      Card Action
    </IonLabel>
    <IonButton
      className="ion-button"
      color="primary"
      expand="block"
      size="default"
    >
      delete card
    </IonButton>
    <IonButton
      className="ion-button"
      color="primary"
      expand="block"
      size="default"
    >
      duplicate card
    </IonButton>
</div>
);

export default CardActionController;
