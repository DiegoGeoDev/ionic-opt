import { IonContent, IonIcon } from "@ionic/react";
import { flameOutline } from "ionicons/icons";

import "./style.css";

const Flame: React.FC = () => {
  return (
    <IonContent className="ion-padding">
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          justifyContent: "center",
          height: 100,
        }}
      >
        <IonIcon icon={flameOutline}></IonIcon>
        <p>Flame</p>
      </div>
    </IonContent>
  );
};

export default Flame;
