import React, { useContext } from "react";
import {
  IonRow,
  IonList,
  IonItem,
  IonLabel,
  IonListHeader,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonSelect,
  IonSelectOption,
} from "@ionic/react";
import { menu, close } from "ionicons/icons";
import { Card } from "../../data/cards-context";
import CardProperties from "./CardProperties";

const EditorPanel: React.FC<{
  selectedCard: Card;
}> = ({ selectedCard }) => {

  return (
    <IonCard className="ion-card-section">
      <IonRow>
        <IonList>
          <IonListHeader>
            <h5>Editor</h5>
          </IonListHeader>
        </IonList>
      </IonRow>

      <CardProperties selectedCard={selectedCard} />

      {/* Card Steps */}
      <IonRow>
        <IonList>
          <IonListHeader>
            <h5>Card Steps</h5>
          </IonListHeader>
          <IonItem>
            <IonCard style={{ width: "100%" }}>
              <IonCardHeader>
                <IonCardTitle
                  style={{
                    display: "flex",
                    maxHeight: "30px",
                    alignItems: "center",
                  }}
                >
                  <IonIcon icon={menu} style={{ marginRight: "15px" }} />
                  <p>Step 1</p>
                  <IonIcon icon={close} style={{ marginLeft: "auto" }} />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                At your office desk, when you hear the mail chime.
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard style={{ width: "100%" }}>
              <IonCardHeader>
                <IonCardTitle
                  style={{
                    display: "flex",
                    maxHeight: "30px",
                    alignItems: "center",
                  }}
                >
                  <IonIcon icon={menu} style={{ marginRight: "15px" }} />
                  <p>Step 2</p>
                  <IonIcon icon={close} style={{ marginLeft: "auto" }} />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Take a sip of water from your water bottle.
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard style={{ width: "100%" }}>
              <IonCardHeader>
                <IonCardTitle
                  style={{
                    display: "flex",
                    maxHeight: "30px",
                    alignItems: "center",
                  }}
                >
                  <IonIcon icon={menu} style={{ marginRight: "15px" }} />
                  <p>Step 3</p>
                  <IonIcon icon={close} style={{ marginLeft: "auto" }} />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>Open your new mail.</IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard style={{ width: "100%" }}>
              <IonCardHeader>
                <IonCardTitle
                  style={{
                    display: "flex",
                    maxHeight: "30px",
                    alignItems: "center",
                  }}
                >
                  <IonIcon icon={menu} style={{ marginRight: "15px" }} />
                  <p>Step 4</p>
                  <IonIcon icon={close} style={{ marginLeft: "auto" }} />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Label your mail within its right category. Urgent, Next, Delegate
                or Avoid.
              </IonCardContent>
            </IonCard>
          </IonItem>
          <IonItem>
            <IonCard style={{ width: "100%" }}>
              <IonCardHeader>
                <IonCardTitle
                  style={{
                    display: "flex",
                    maxHeight: "30px",
                    alignItems: "center",
                  }}
                >
                  <IonIcon icon={menu} style={{ marginRight: "15px" }} />
                  <p>Step 5</p>
                  <IonIcon icon={close} style={{ marginLeft: "auto" }} />
                </IonCardTitle>
              </IonCardHeader>
              <IonCardContent>
                Comeback to the task you were doing.
              </IonCardContent>
            </IonCard>
          </IonItem>
        </IonList>
      </IonRow>

      {/* Card Action Controller */}
      <IonRow>
        <IonList>
          <IonListHeader>
            <h5>Card Action</h5>
          </IonListHeader>
          <IonItem>
            <IonButton
              className="ion-button"
              color="primary"
              expand="block"
              size="default"
            >
              delete card
            </IonButton>
          </IonItem>
          <IonItem>
            <IonButton
              className="ion-button"
              color="primary"
              expand="block"
              size="default"
            >
              duplicate card
            </IonButton>
          </IonItem>
        </IonList>
      </IonRow>
    </IonCard>
  );
};

export default EditorPanel;
