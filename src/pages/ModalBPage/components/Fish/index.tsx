import { IonButton, IonContent, IonIcon, IonModal } from "@ionic/react";
import { closeCircleOutline, fishOutline } from "ionicons/icons";

import { useIsControlOpenStore } from "../../store/isControlOpenStore";

import "./style.css";

const Fish: React.FC = () => {
  const [controls, closeControl] = useIsControlOpenStore((state) => [
    state.controls,
    state.closeControl,
  ]);

  return (
    <IonModal
      isOpen={controls.fish}
      initialBreakpoint={0.5}
      breakpoints={[0.25, 0.5, 0.75, 1]}
      backdropBreakpoint={1}
    >
      <IonContent className="ion-padding">
        <div
          style={{
            width: "100%",
            display: "flex",
            justifyContent: "flex-end",
            alignItems: "center",
          }}
        >
          <IonButton onClick={() => closeControl("fish")}>
            <IonIcon icon={closeCircleOutline}>Fechar</IonIcon>
          </IonButton>
        </div>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 16,
            justifyContent: "center",
            height: 100,
          }}
        >
          <IonIcon icon={fishOutline}></IonIcon>
          <p>Fish</p>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default Fish;
