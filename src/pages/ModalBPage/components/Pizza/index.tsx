import { IonButton, IonContent, IonIcon, IonModal } from "@ionic/react";
import { closeCircleOutline, pizzaOutline } from "ionicons/icons";

import { useIsControlOpenStore } from "../../store/isControlOpenStore";

import "./style.css";

const Pizza: React.FC = () => {
  const [controls, closeControl] = useIsControlOpenStore((state) => [
    state.controls,
    state.closeControl,
  ]);

  return (
    <IonModal
      isOpen={controls.pizza}
      initialBreakpoint={0.75}
      breakpoints={[0.75, 1]}
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
          <IonButton onClick={() => closeControl("pizza")}>
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
          <IonIcon icon={pizzaOutline}></IonIcon>
          <p>Pizza</p>
        </div>
      </IonContent>
    </IonModal>
  );
};

export default Pizza;
