import { IonContent, IonIcon } from "@ionic/react";
import { flashOutline } from "ionicons/icons";

import "./style.css";

const Flash: React.FC = () => {
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
        <IonIcon icon={flashOutline}></IonIcon>
        <p>Flash</p>
      </div>
    </IonContent>
  );
};

export default Flash;
