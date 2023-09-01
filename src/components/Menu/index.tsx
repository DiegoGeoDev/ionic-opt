import { useRef } from "react";
import {
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonList,
  IonMenu,
  IonTitle,
  IonToolbar,
} from "@ionic/react";

import "./style.css";

const Menu: React.FC = () => {
  const modal = useRef<HTMLIonMenuElement>(null);

  function closeMenu() {
    if (modal.current) {
      modal.current.close();
    }
  }

  return (
    <IonMenu ref={modal} contentId="home-content">
      <IonHeader>
        <IonToolbar>
          <IonTitle>Menu Content</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonList>
          <IonItem routerLink="/modal-a" onClick={closeMenu}>
            <IonLabel>Modal A</IonLabel>
          </IonItem>
          <IonItem routerLink="/modal-b" onClick={closeMenu}>
            <IonLabel>Modal B</IonLabel>
          </IonItem>
        </IonList>
      </IonContent>
    </IonMenu>
  );
};

export default Menu;
