import { IonButton, IonItem } from "@ionic/react";
import React, { useContext } from "react";
import AudioButtonWithHotKeys from "../../../utils/AudioButtonWithHotKeys";
import ContextProvider, { Card } from "../../../data/cards-context";

const TrainingSessionNavigation: React.FC<{
  addStepToStepsStack: () => void;
  removeStepFromStepsStack: () => void;
  nextCard: () => void;
  previousCard: () => void;
  reStartTraining: () => void;
}> = ({
  addStepToStepsStack,
  removeStepFromStepsStack,
  nextCard,
  previousCard,
  reStartTraining,
}) => {
  const { isEditing } = useContext(ContextProvider);

  return (
    <>
      <IonItem>
        <h6 style={{ color: "#a0a0a0" }}>Training session navigation</h6>
      </IonItem>
      <div style={{ padding: "0 30px 0 30px", marginTop: 10, marginBottom: 20 }}>
        <AudioButtonWithHotKeys
          hotKeysActivated={!isEditing}
          callback={addStepToStepsStack}
          keystroke={"W"}
          text={"next step"}
          key={0}
          audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound77.wav"}
        />
        <AudioButtonWithHotKeys
          hotKeysActivated={!isEditing}
          callback={removeStepFromStepsStack}
          keystroke={"Q"}
          text={"previous step"}
          key={1}
          audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound77.wav"}
        />
  
        <div style={{height: 15}}></div>
  
        <AudioButtonWithHotKeys
          hotKeysActivated={!isEditing}
          callback={nextCard}
          keystroke={"S"}
          text={"next card"}
          key={2}
          audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound93.wav"}
        />
        <AudioButtonWithHotKeys
          hotKeysActivated={!isEditing}
          callback={previousCard}
          keystroke={"A"}
          text={"previous card"}
          key={3}
          audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound93.wav"}
        />
  
        <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          onClick={reStartTraining}
          style={{ marginTop: 20 }}
        >
          re-start training
        </IonButton>
      </div>
    </>
  );
}

export default TrainingSessionNavigation;
