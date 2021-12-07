import React from "react";
import {
  IonRow,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardTitle,
  IonButton,
  IonToggle,
  IonSelectOption,
  IonSelect,
} from "@ionic/react";

const TrainerPanel: React.FC = () => (
  <IonCard className="ion-card-section">
    <IonRow>
      <IonList>
        <IonListHeader>
          <h5>Trainer Visual Panel</h5>
        </IonListHeader>
      </IonList>
    </IonRow>
    <IonRow>
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Last dropped card</IonCardTitle>
          {/* <IonCardSubtitle></IonCardSubtitle> */}
        </IonCardHeader>
        <IonCardContent>
          <IonCard>
            <IonCardContent>Step 1 text...</IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent>Step 2 text...</IonCardContent>
          </IonCard>
          <IonCard>
            <IonCardContent>Step 3 text...</IonCardContent>
          </IonCard>
        </IonCardContent>
      </IonCard>
    </IonRow>
    <IonRow>
      <IonList>
        <IonListHeader>
          <h5>Trainer Control Panel</h5>
        </IonListHeader>
        <IonItem>
          <h6 style={{ color: "#a0a0a0" }}>Training session setup</h6>
        </IonItem>
        <IonItem>
          <IonLabel>Card count to practice : .. 4</IonLabel>
        </IonItem>
        <IonItem>
          <IonLabel>Text to speech audio</IonLabel>
          <IonToggle slot="end" name="audio" color="success" checked />
        </IonItem>
        <IonItem>
          <IonLabel>Music audio</IonLabel>
          <IonToggle slot="end" name="audio" color="success" checked />
        </IonItem>
        <IonItem className="dropdown-selector">
          <IonLabel>Music song:</IonLabel>
          <IonSelect value="03">
            <IonSelectOption value="01">Alice in Chains</IonSelectOption>
            <IonSelectOption value="02">Green Day</IonSelectOption>
            <IonSelectOption value="03">Nirvana</IonSelectOption>
            <IonSelectOption value="04">Pearl Jam</IonSelectOption>
            <IonSelectOption value="05">Smashing Pumpkins</IonSelectOption>
            <IonSelectOption value="06">Soundgarden</IonSelectOption>
            <IonSelectOption value="07">Stone Temple Pilots</IonSelectOption>
          </IonSelect>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            re-start training
          </IonButton>
        </IonItem>
        <div style={{ height: "20px" }}></div>
        <IonItem>
          <h6 style={{ color: "#a0a0a0" }}>Training session navigation</h6>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            next step
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            previous step
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            next card
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            previous card
          </IonButton>
        </IonItem>

        <div style={{ height: "20px" }}></div>
        <IonItem>
          <h6 style={{ color: "#a0a0a0" }}>Mastery feedback</h6>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            easy
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            good
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            hard
          </IonButton>
        </IonItem>
        <IonItem>
          <IonButton
            className="ion-button"
            color="primary"
            expand="block"
            size="default"
          >
            forgotten
          </IonButton>
        </IonItem>
      </IonList>
    </IonRow>
  </IonCard>
);

export default TrainerPanel;
