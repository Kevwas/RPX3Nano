import { IonItem } from "@ionic/react";
import React from "react";
import AudioButton from "../../../utils/AudioButton";

const TrainingSessionNavigation: React.FC<{
  addStepToStepsStack: () => void;
  removeStepFromStepsStack: () => void;
  nextCard: () => void;
  previousCard: () => void;
}> = ({
  addStepToStepsStack,
  removeStepFromStepsStack,
  nextCard,
  previousCard,
}) => (
  <>
    <IonItem>
      <h6 style={{ color: "#a0a0a0" }}>Training session navigation</h6>
    </IonItem>
    <div style={{ padding: "0 30px 0 30px", marginTop: 10, marginBottom: 20 }}>
      <AudioButton
        callback={addStepToStepsStack}
        keystroke={"W"}
        text={"next step"}
        key={0}
        audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound77.wav"}
      />
      <AudioButton
        callback={removeStepFromStepsStack}
        keystroke={"Q"}
        text={"prev step"}
        key={1}
        audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound77.wav"}
      />
      <AudioButton
        callback={nextCard}
        keystroke={"S"}
        text={"next card"}
        key={2}
        audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound93.wav"}
      />
      <AudioButton
        callback={previousCard}
        keystroke={"A"}
        text={"prev card"}
        key={3}
        audio={"https://www.pacdv.com/sounds/interface_sound_effects/sound93.wav"}
      />
    </div>
  </>
);

export default TrainingSessionNavigation;
