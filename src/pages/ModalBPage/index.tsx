import {
  IonBackButton,
  IonButtons,
  IonContent,
  IonFab,
  IonFabButton,
  IonFabList,
  IonHeader,
  IonIcon,
  IonPage,
  IonTitle,
  IonToolbar,
} from "@ionic/react";
import {
  arrowUpCircleOutline,
  fishOutline,
  giftOutline,
  pizzaOutline,
} from "ionicons/icons";

import Fish from "./components/Fish";
import Gift from "./components/Gift";
import Pizza from "./components/Pizza";

import { useIsControlOpenStore } from "./store/isControlOpenStore";

import "./style.css";

const ModalBPage: React.FC = () => {
  const openControl = useIsControlOpenStore((state) => state.openControl);

  return (
    <>
      <IonPage id="modalb-content">
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/" />
            </IonButtons>
            <IonTitle>{"Modal B"}</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonContent fullscreen>
          <IonHeader collapse="condense">
            <IonToolbar>
              <IonTitle size="large">Modal B</IonTitle>
            </IonToolbar>
          </IonHeader>
          <div id="container">
            <strong>Modal B</strong>
          </div>
          <IonFab slot="fixed" vertical="bottom" horizontal="start">
            <IonFabButton size="small">
              <IonIcon icon={arrowUpCircleOutline}></IonIcon>
            </IonFabButton>
            <IonFabList side="top">
              <IonFabButton onClick={() => openControl("fish")}>
                <IonIcon icon={fishOutline}></IonIcon>
              </IonFabButton>
              <IonFabButton onClick={() => openControl("gift", ["pizza"])}>
                <IonIcon icon={giftOutline}></IonIcon>
              </IonFabButton>
            </IonFabList>
          </IonFab>
          <IonFab slot="fixed" vertical="top" horizontal="start">
            <IonFabButton size="small" onClick={() => openControl("pizza")}>
              <IonIcon icon={pizzaOutline}></IonIcon>
            </IonFabButton>
          </IonFab>
        </IonContent>
      </IonPage>
      <Fish />
      <Gift />
      <Pizza />
    </>
  );
};

export default ModalBPage;
