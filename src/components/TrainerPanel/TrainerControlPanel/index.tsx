import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonList,
} from "@ionic/react";
import React, { MutableRefObject } from "react";
import TrainingSessionSetup from "./TrainingSessionSetup";
import TrainingSessionNavigation from "./TrainingSessionNavigation";
import MasteryFeedback from "./MasteryFeedback";

const TrainerControlPanel: React.FC<{
  unlockMasteryFeedback: MutableRefObject<boolean>;
  addStepToStepsStack: () => void;
  removeStepFromStepsStack: () => void;
  nextCard: () => void;
  previousCard: () => void;
  reStartTraining: () => void;
  ttsON: boolean;
  voices: SpeechSynthesisVoice[];
  voiceIndex: number | null;
  volume: number;
  rate: number;
  pitch: number;
  toggleTts: () => void;
  updateVoiceIndex: (value: number) => void;
  updateVolume: (value: number) => void;
  updateRate: (value: number) => void;
  updatePitch: (value: number) => void;
}> = ({
  unlockMasteryFeedback,
  addStepToStepsStack,
  removeStepFromStepsStack,
  nextCard,
  previousCard,
  reStartTraining,
  ttsON,
  voices,
  voiceIndex,
  volume,
  rate,
  pitch,
  toggleTts,
  updateVoiceIndex,
  updateVolume,
  updateRate,
  updatePitch,
}) => (
  <>
    <IonCardHeader>
      <IonCardTitle>Trainer Control Panel</IonCardTitle>
    </IonCardHeader>
    <IonCardContent>
      <IonList>
        <TrainingSessionNavigation
          addStepToStepsStack={addStepToStepsStack}
          removeStepFromStepsStack={removeStepFromStepsStack}
          nextCard={nextCard}
          previousCard={previousCard}
          reStartTraining={reStartTraining}
        />
        <MasteryFeedback unlockMasteryFeedback={unlockMasteryFeedback} />
        <TrainingSessionSetup 
          ttsON={ttsON}
          voices={voices}
          voiceIndex={voiceIndex}
          volume={volume}
          rate={rate}
          pitch={pitch}
          toggleTts={toggleTts}
          updateVolume={updateVolume}
          updateRate={updateRate}
          updatePitch={updatePitch}
          updateVoiceIndex={updateVoiceIndex}
        />
      </IonList>
    </IonCardContent>
  </>
);

export default TrainerControlPanel;
