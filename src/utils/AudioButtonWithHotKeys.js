import React from 'react';
import {
  IonButton,
} from "@ionic/react";

function setHotKeys(e) {
  const id = e.key.toUpperCase();
  const audio = document.getElementById(id);
  
  if(audio) {
    audio.currentTime = 0;
    const parent = audio.parentNode;
    parent.classList.add('active');
    
    // const display = parent.parentNode;
    // display.querySelector('h1').innerText = `${id} is playing`;
    audio.play();
    audio.click();
  }
}

class AudioButtonWithHotKeys extends React.Component {
  constructor(props) {
    super(props);
    
    this.audio = React.createRef();
  }
  
  componentDidMount() {
    this.audio.current.addEventListener('ended', (e) => {
      const parent = e.target.parentNode;
      parent.classList.remove('active');
    });
    
    document.addEventListener('keydown', (e)=> {
      const id = e.key.toUpperCase();
      const audio = document.getElementById(id);
      
      if(audio) {
        audio.currentTime = 0;
        const parent = audio.parentNode;
        parent.classList.add('active');
        
        // const display = parent.parentNode;
        // display.querySelector('h1').innerText = `${id} is playing`;
        audio.play();
        audio.click();
      }
    });
  }
  
  playSound = () => {
    this.audio.current.play();
    
    // const id = this.audio.current.id;
    
    const parent = this.audio.current.parentNode;
    parent.classList.add('active');
    
    // const display = parent.parentNode;
    // display.querySelector('h1').innerText = `${id} is playing`;
  }
  
  render() {
    const { text, audio, callback, keystroke, hotKeysActivated } = this.props;
    
    return (
      <IonButton
          className="ion-button"
          color="primary"
          expand="block"
          size="small"
          onClick={() => {
            if(hotKeysActivated) {
              this.playSound();
              setTimeout(() => callback(), 100);
            }
          }}
          id={`button-${keystroke}`}
        >
          {text}
          {hotKeysActivated && <audio ref={this.audio} src={audio} className="clip" id={keystroke} />}
        </IonButton>
    )
  }
}
    
// document.addEventListener('keydown', (e) => {
//   const id = e.key.toUpperCase();
//   const audio = document.getElementById(id);
  
//   if(audio) {
//     audio.currentTime = 0;
//     const parent = audio.parentNode;
//     parent.classList.add('active');
    
//     // const display = parent.parentNode;
//     // display.querySelector('h1').innerText = `${id} is playing`;
//     audio.play();
//     audio.click();
//   }
// });

export default AudioButtonWithHotKeys;