import React, { useContext, useEffect, useRef, useState } from "react";
import {
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonCard,
  IonCardSubtitle,
  IonIcon,
  useIonToast,
} from "@ionic/react";
import CardsContext, { Step } from "../../data/cards-context";
import { SplittedText } from "../../data/types";
import { expand, contract } from "ionicons/icons";

// const getResponsiveFontSize = () => {
//   if(window.innerHeight > 1200) {
//       return 30
//   }
//   return 15;
// }

const TrainerVisualPanel: React.FC<{
  stepsStack: Step[];
  splittedText: SplittedText | null;
}> = ({ stepsStack, splittedText }) => {
  const { selectedCard, immersionModeOn, triggerImmersionMode } =
    useContext(CardsContext);
  const stepsContainerRef = useRef<HTMLDivElement>(null);
  const [responsiveFontSize, setResponsiveFontSize] = useState<number>(30);
  const [present] = useIonToast();

  const isLast = (step: Step) =>
    stepsStack.indexOf(step) + 1 === stepsStack.length;

  useEffect(() => {
    if (!!stepsContainerRef.current) {
      stepsContainerRef.current.scrollTo(
        0,
        stepsContainerRef.current.scrollHeight
      );
      // stepsContainerRef.current.scrollTop = stepsContainerRef.current.scrollHeight;
    }
  }, [stepsStack]);

  useEffect(() => {
    const handleResponsiveFontSize = () => {
      if (window.innerHeight >= 900) {
        setResponsiveFontSize(30);
      } else if (window.innerHeight < 900 && window.innerHeight >= 500) {
        setResponsiveFontSize(20);
      } else {
        setResponsiveFontSize(15);
      }
    };
    window.addEventListener("resize", handleResponsiveFontSize);
    return () => {
      window.removeEventListener("resize", handleResponsiveFontSize);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      style={{
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <IonCardHeader>
        <IonCardTitle>Trainer Visual Panel</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonCardTitle>{selectedCard.title}</IonCardTitle>
        <IonCardSubtitle>
          Speaking word: {splittedText && splittedText.speakingWord}
        </IonCardSubtitle>
      </IonCardContent>
      <div
        style={{
          minHeight: 300,
          width: "100%",
          marginTop: 10,
        }}
        className="scroll"
      >
        {!immersionModeOn ? (
          stepsStack.map((step) => (
            <IonCard id={Math.random().toString() + step.id}>
              {isLast(step) && splittedText ? (
                <IonCardContent>
                  {splittedText.left}
                  <span
                    style={{ backgroundColor: "#FFC95F", color: "#5982FA" }}
                  >
                    {splittedText.speakingWord}
                  </span>
                  {splittedText.right}
                </IonCardContent>
              ) : (
                <IonCardContent>{step.text}</IonCardContent>
              )}
            </IonCard>
          ))
        ) : (
          <div
            style={{
              height: 300,
              width: "100%",
              marginTop: "10%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "flex-end",
            }}
            className="scroll"
            ref={stepsContainerRef}
          >
            {stepsStack.map((step) =>
              isLast(step) ? (
                <div
                  id={Math.random().toString() + step.id}
                  style={{
                    width: "50%",
                    minWidth: 250,
                    paddingLeft: responsiveFontSize * 2,
                    paddingRight: responsiveFontSize * 2,
                    borderRadius: 5,
                    border: "3px solid rgba(89, 130, 250, 0.5)",
                  }}
                >
                  {splittedText ? (
                    <p
                      style={{
                        fontSize: responsiveFontSize,
                        alignSelf: "start",
                        textAlign: "justify",
                      }}
                    >
                      {splittedText.left}
                      <span
                        style={{ backgroundColor: "#FFC95F", color: "#5982FA" }}
                      >
                        {splittedText.speakingWord}
                      </span>
                      {splittedText.right}
                    </p>
                  ) : (
                    <p
                      style={{
                        fontSize: responsiveFontSize,
                        color: "#aaa",
                        alignSelf: "start",
                        textAlign: "justify",
                      }}
                    >
                      {step.text}
                    </p>
                  )}
                </div>
              ) : (
                <div
                  id={Math.random().toString() + step.id}
                  style={{
                    width: "50%",
                    minWidth: 250,
                    paddingLeft: responsiveFontSize * 2,
                    paddingRight: responsiveFontSize * 2,
                  }}
                >
                  <p
                    style={{
                      fontSize: responsiveFontSize,
                      color: "#aaa",
                      alignSelf: "start",
                      textAlign: "justify",
                    }}
                  >
                    {step.text}
                  </p>
                </div>
              )
            )}
          </div>
        )}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
          alignItems: "flex-end",
          marginTop: "auto",
          flex: 1,
        }}
      >
        <button style={{ backgroundColor: "transparent" }}>
          <IonIcon
            style={{ margin: 15 }}
            icon={immersionModeOn ? contract : expand}
            size="large"
            onClick={() => {
              present(
                `Immersion mode ${!immersionModeOn ? "ON" : "OFF"}.`,
                1000
              );
              triggerImmersionMode(!immersionModeOn);
            }}
          />
        </button>
      </div>
    </div>
  );
};

export default TrainerVisualPanel;
