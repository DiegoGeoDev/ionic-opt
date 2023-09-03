import { IonButton, IonContent, IonIcon, IonModal } from "@ionic/react";
import { closeCircleOutline, giftOutline } from "ionicons/icons";

import { useIsControlOpenStore } from "../../store/isControlOpenStore";

import "./style.css";

const Gift: React.FC = () => {
  const [controls, closeControl] = useIsControlOpenStore((state) => [
    state.controls,
    state.closeControl,
  ]);

  return (
    <IonModal
      isOpen={controls.gift}
      initialBreakpoint={0.25}
      breakpoints={[0.25, 1]}
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
          <IonButton onClick={() => closeControl("gift")}>
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
          <IonIcon icon={giftOutline}></IonIcon>
          <p>Gift</p>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default Gift;
