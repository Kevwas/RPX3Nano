import React, { useState } from "react";
import {
  IonItem,
  IonLabel,
  IonListHeader,
  IonRange,
  IonSelect,
  IonSelectOption,
  IonToggle,
} from "@ionic/react";


const songs = [
  {
    id: "song01",
    name: "51 Instrumental Hymns Relaxing Piano Music Long Playlist",
    url: "https://ia801007.us.archive.org/16/items/51instrumentalhymnsrelaxingpianomusiclongplaylist/51%20Instrumental%20Hymns%20Relaxing%20Piano%20Music%20Long%20Playlist.mp3",
  },
  {
    id: "song02",
    name: "Tropical Meditation Aquarium",
    url: "https://ia802309.us.archive.org/5/items/tropical-meditation-aquarium-1-hour-relaxing-music-ambiance-youtube-tv/Tropical%20Meditation%20Aquarium%201%20hour%20relaxing%20music%20ambiance%20Youtube%20TV.mp4",
  },
  {
    id: "song03",
    name: "1 Hour relaxing music",
    url: "https://ia802305.us.archive.org/25/items/1-hours-relaxing-music/1%20HOURS%20RELAXING%20MUSIC.mp3",
  },
  {
    id: "song04",
    name: "Relaxing Baby Lullaby",
    url: "https://ia902806.us.archive.org/34/items/relaxingbabylullabysleepmusic/Relaxing%20Baby%20Lullaby%20Sleep%20Music.mp3",
  },
];

const TrainingSessionSetup: React.FC<{
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
}) => {
  const [selectedSong, setSelectedSong] = useState(songs[0]);

  return (
    <>
      <IonListHeader>
        <h6 style={{ color: "#a0a0a0" }}>Training session setup</h6>
      </IonListHeader>

      <IonItem className="dropdown-selector">
        Voice:
        <IonSelect
          name="voice"
          value={voiceIndex || 0}
          interface={"action-sheet"}
          onIonChange={(e) => updateVoiceIndex(e.detail.value)}
        >
          {voices.map((option, index) => (
            <IonSelectOption key={option.voiceURI} value={index}>
              {`${option.lang} - ${option.name}`}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <IonItem className="dropdown-selector">
        <IonLabel>Voice Volume:</IonLabel>
        <IonRange
          value={volume}
          min={0}
          max={1}
          step={0.1}
          onIonChange={(e) => updateVolume(e.detail.value as number)}
        />
      </IonItem>
      <IonItem className="dropdown-selector">
        <IonLabel>Voice Rate:</IonLabel>
        <IonRange
          value={rate}
          min={0}
          max={1}
          step={0.1}
          onIonChange={(e) => updateRate(e.detail.value as number)}
        />
      </IonItem>
      <IonItem className="dropdown-selector">
        <IonLabel>Voice Pitch:</IonLabel>
        <IonRange
          value={pitch}
          min={0}
          max={2}
          step={0.1}
          onIonChange={(e) => updatePitch(e.detail.value as number)}
        />
      </IonItem>
      <IonItem>
        <IonLabel>Card count to practice : .. 4</IonLabel>
      </IonItem>
      <IonItem>
        <IonLabel>
          Text to speech audio: <span style={{ color: "#aaa" }}>ON / OFF</span>
        </IonLabel>
        <IonToggle
          slot="end"
          name="audio"
          color="success"
          checked={ttsON}
          onIonChange={(e) => toggleTts()}
        />
      </IonItem>
      <IonItem className="dropdown-selector">
        Music song:
        <IonSelect
          interface={"action-sheet"}
          value={songs.indexOf(selectedSong).toString()}
          name="music"
          onIonChange={(e) => setSelectedSong(songs[e.detail.value])}
        >
          {songs.map((song, idx) => (
            <IonSelectOption id={song.id} value={idx.toString()}>
              {song.name}
            </IonSelectOption>
          ))}
        </IonSelect>
      </IonItem>
      <div
        style={{
          marginTop: 5,
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <audio controls src={selectedSong.url}>
          Your browser does not support the
          <code>audio</code> element.
        </audio>
      </div>
    </>
  );
};

export default TrainingSessionSetup;
