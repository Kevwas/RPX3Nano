import React, { useRef, useEffect } from "react";

const useAudio = (url: string) => {
  const audio = useRef<HTMLAudioElement>(new Audio());
  audio.current.src = url;
  const playing = useRef<boolean>(false);

  const toggle = () => {
    playing.current = !playing;
  };

  useEffect(() => {
    playing ? audio.current.play() : audio.current.pause();
  }, [playing, audio]);

  useEffect(() => {
    audio.current.addEventListener("ended", () => playing.current = false);
    return () => {
      audio.current.removeEventListener("ended", () => playing.current = false);
    };
  }, [audio]);

  return [playing, toggle] as const;
};

// Usage example
// const Player = ({ url }) => {
//   const [playing, toggle] = useAudio(url);

//   return (
//     <button onClick={toggle}>{playing ? "Pause" : "Play"}</button>
//   );
// };

export default useAudio;
