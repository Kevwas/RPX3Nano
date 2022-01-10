import React from "react";
import { IonButton, IonGrid, IonCol } from "@ionic/react";

class AudioButtonWithHotKeys extends React.Component {
  constructor(props) {
    super(props);

    this.audio = React.createRef();
  }

  componentDidMount() {
    this.audio.current.addEventListener("ended", (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove("active");
    });

    document.addEventListener("keydown", (e) => {
      const id = e.key.toUpperCase();
      const audio = document.getElementById(id);

      if (audio) {
        audio.currentTime = 0;
        const parent = audio.parentNode;
        parent.classList.add("active");

        audio.play();
        audio.click();
      }
    });
  }

  playSound = () => {
    this.audio.current.play();

    const parent = this.audio.current.parentNode;
    parent.classList.add("active");
  };

  render() {
    const { text, audio, callback, keystroke, hotKeysActivated } = this.props;

    return (
      <IonButton
        className="ion-button"
        color="primary"
        expand="block"
        size="small"
        onClick={(e) => {
          if (hotKeysActivated) {
            this.playSound();
            // setTimeout(() => callback(), 10);
            callback();
          }
        }}
        id={`button-${keystroke}`}
      >
        <IonGrid style={{display: 'flex'}}>
          <IonCol size="4" style={{flex: 1}}>
          </IonCol>
          <IonCol size="4" style={{flex: 1}}>
            {text}
          </IonCol>
          <IonCol size="4" style={{display: 'flex', flex: 1, justifyContent: 'flex-end', alignItems: 'flex-end' }}>
            <span style={{ fontSize: 9, marginBottom: -2, marginRight: -15 }}>{keystroke}</span>
          </IonCol>
        </IonGrid>
        {hotKeysActivated && (
          <audio ref={this.audio} src={audio} className="clip" id={keystroke} />
        )}
      </IonButton>
    );
  }
}

export default AudioButtonWithHotKeys;
