import React, { useContext } from "react";
import {
  IonButton,
  IonCardContent,
  IonItem,
  useIonAlert,
} from "@ionic/react";
import CardsContext from "../../data/cards-context";

const CardActionController: React.FC = () => {
  const { deleteCard, duplicateCard, selectedCard } = useContext(CardsContext);
  const [ionAlert] = useIonAlert();

  const actionCardHandler = (action: "duplicate" | "delete" ) => {
    const deleteSelectedCard = () => {
      deleteCard(selectedCard.id);
    };
    switch(action) {
      case "delete":
        ionAlert({
          header: "Delete card?",
          // message: 'Delete card?',
          buttons: [
            "no",
            { text: "yes", handler: () => deleteSelectedCard() },
          ],
          // onDidDismiss: (e) => console.log('did dismiss'),
        });
        break;
      case "duplicate":
        duplicateCard(selectedCard);
        break;
      default:
        return;
    }
  };

  return (
    <div style={{paddingRight: 20, marginTop: 20}}>
      <IonItem>
        Card Action
      </IonItem>
      <IonCardContent style={{display: 'flex'}}>
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          onClick={() => actionCardHandler("delete")}
        >
          delete card
        </IonButton>

        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          onClick={() => actionCardHandler("duplicate")}
        >
          duplicate card
        </IonButton>
      </IonCardContent>
    </div>
  );
}

export default CardActionController;
