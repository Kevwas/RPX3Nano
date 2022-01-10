import React from "react";
import { IonButton } from "@ionic/react";

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
        onClick={() => {
          if (hotKeysActivated) {
            this.playSound();
            callback();
          }
        }}
        id={`button-${keystroke}`}
      >
        {text}
        {hotKeysActivated && (
          <audio ref={this.audio} src={audio} className="clip" id={keystroke} />
        )}
      </IonButton>
    );
  }
}

export default AudioButtonWithHotKeys;
