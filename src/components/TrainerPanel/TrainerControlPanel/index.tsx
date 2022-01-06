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
import { Card } from "../../../data/cards-context";

const TrainerControlPanel: React.FC<{
  selectedCard: Card;
  unlockMasteryFeedback: MutableRefObject<boolean>;
  ttsON: boolean;
  voices: SpeechSynthesisVoice[];
  voiceIndex: number | null;
  volume: number;
  rate: number;
  pitch: number;
  addStepToStepsStack: () => void;
  removeStepFromStepsStack: () => void;
  nextCard: () => void;
  previousCard: () => void;
  reStartTraining: () => void;
  toggleTts: () => void;
  updateVoiceIndex: (value: number) => void;
  updateVolume: (value: number) => void;
  updateRate: (value: number) => void;
  updatePitch: (value: number) => void;
}> = ({
  selectedCard,
  unlockMasteryFeedback,
  ttsON,
  voices,
  voiceIndex,
  volume,
  rate,
  pitch,
  addStepToStepsStack,
  removeStepFromStepsStack,
  nextCard,
  previousCard,
  reStartTraining,
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
          selectedCard={selectedCard}
          voices={voices}
          voiceIndex={voiceIndex}
          updateVoiceIndex={updateVoiceIndex}
          ttsON={ttsON}
          volume={volume}
          rate={rate}
          pitch={pitch}
          toggleTts={toggleTts}
          updateVolume={updateVolume}
          updateRate={updateRate}
          updatePitch={updatePitch}
        />
      </IonList>
    </IonCardContent>
  </>
);

export default TrainerControlPanel;
